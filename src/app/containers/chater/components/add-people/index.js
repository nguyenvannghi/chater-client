import React, { memo, useCallback, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withApollo } from 'react-apollo';
import { compose, bindActionCreators } from 'redux';
import { Box, Button, Text, TextInput } from 'grommet';
import { Actions, Close } from 'grommet-icons';
import { debounce, isEmpty } from 'lodash';
import { createStructuredSelector } from 'reselect';
import ToastLayer from 'app/components/toast-layer';
import { MONGO_OPS, MONGO_LOGIS } from 'app/consts';
import { userCall } from '../../saga/user/action';
import { userRoomAddCall } from '../../saga/user-room/action';
import { makeSelectUsers } from '../../saga/user/selector';
import { makeSelectRoom } from '../../saga/room/selector';
import { makeSelectRooms } from '../../saga/user-room/selector';

const AddPeoplePopup = ({ client, isOpen, onClose, userCall, userRoomAddCall, users, roomSelected, userRooms }) => {
    const { query, mutate } = client;
    const textInput = useRef();
    const [peoples, setPeoples] = useState(null);
    const [isSuggest, setIsSuggest] = useState(false);

    useEffect(() => {
        if (users && users.length > 0) {
            setIsSuggest(true);
        }
    }, [users]);

    const onSearch = debounce(
        useCallback(
            value => {
                if (value.length < 1) {
                    return;
                }
                const params = {
                    where: {
                        [MONGO_LOGIS.AND]: [
                            {
                                username: {
                                    op: MONGO_OPS.LIKE,
                                    value: value,
                                },
                            },
                        ],
                    },
                };
                let users = [];
                if (userRooms && userRooms.length > 0) {
                    users = userRooms.map(item => item._id);
                }
                if (peoples && peoples.length > 0) {
                    users.concat(peoples);
                }
                if (users.length > 0) {
                    params.where[MONGO_LOGIS.AND].push({
                        _id: {
                            op: MONGO_OPS.NOT_IN,
                            value: users.map(item => ({ _id: item._id })),
                        },
                    });
                }
                userCall(query, params);
            },
            [userCall, query, peoples, userRooms],
        ),
        400,
    );

    const selectPeople = useCallback(
        item => {
            setPeoples(prev => (prev ? [...prev, item] : [item]));
            setIsSuggest(false);
            textInput.current.value = '';
        },
        [setPeoples],
    );

    const removePeople = useCallback(
        item => {
            setPeoples(peoples.filter(t => t._id !== item._id));
        },
        [setPeoples, peoples],
    );

    const onAddPeopleInRoom = useCallback(async () => {
        if (roomSelected && !isEmpty(peoples)) {
            peoples.forEach(item => {
                const params = {
                    user: {
                        _id: item._id,
                    },
                    room: {
                        _id: roomSelected._id,
                    },
                    type: 'MEMBER',
                    status: true,
                };
                userRoomAddCall(mutate, params);
            });

            setPeoples(null);
            onClose();
        }
    }, [peoples, mutate, userRoomAddCall, roomSelected, onClose]);

    return (
        isOpen && (
            <ToastLayer position="center" modal>
                <Box align="center" background={{ color: 'white' }} round={{ size: 'xsmall' }}>
                    <Box align="center" justify="stretch" pad="small">
                        <Text size="medium">Add people</Text>
                    </Box>
                    <Box align="center" justify="stretch" pad="small">
                        <Box background="white" className="suggesstion">
                            <TextInput
                                spellCheck="false"
                                placeholder="Yian, @steve, name@example.com"
                                ref={textInput}
                                onChange={({ target: { value } }) => onSearch(value)}
                            />
                            <ul className="suggest-selected">
                                {peoples &&
                                    peoples.map((item, index) => (
                                        <li key={index} onClick={() => removePeople(item)}>
                                            <Text margin={{ right: 'xsmall' }} weight="normal">
                                                {item.username}
                                            </Text>
                                            <Close className="remove" color="white" />
                                        </li>
                                    ))}
                            </ul>
                        </Box>
                        {isSuggest && (
                            <Box background="white" pad={{ top: 'xsmall', bottom: 'xsmall', left: 'small', right: 'small' }}>
                                {users &&
                                    users.map((item, index) => (
                                        <Box
                                            key={item._id}
                                            direction="row-responsive"
                                            align="center"
                                            justify="stretch"
                                            margin={{ bottom: index !== users.length ? 'small' : '' }}
                                            onClick={() => selectPeople(item)}>
                                            <Text margin={{ right: 'xsmall' }}>{item.username}</Text>
                                            <Actions size="small" />
                                            <Text margin={{ left: 'xsmall' }} weight="normal">
                                                {item.email}
                                            </Text>
                                        </Box>
                                    ))}
                            </Box>
                        )}
                    </Box>
                    <Box width="small" margin="none" direction="row-responsive" pad={{ bottom: 'small' }}>
                        <Box pad={{ left: 'xsmall', right: 'xsmall' }}>
                            <Button color="brand" onClick={() => onAddPeopleInRoom()} primary label="Add" />
                        </Box>
                        <Box pad={{ left: 'xsmall', right: 'xsmall' }}>
                            <Button
                                color="dark-1"
                                onClick={() => {
                                    setPeoples(null);
                                    onClose();
                                }}
                                label="Cancel"
                            />
                        </Box>
                    </Box>
                </Box>
            </ToastLayer>
        )
    );
};

AddPeoplePopup.defaultProps = {
    isOpen: false,
};

AddPeoplePopup.propTypes = {
    userRooms: PropTypes.array,
    userRoomAddCall: PropTypes.func,
    userCall: PropTypes.func,
    onClose: PropTypes.func,
    onResetAction: PropTypes.func,
    isOpen: PropTypes.bool,
    roomSelected: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
    users: makeSelectUsers(),
    userRooms: makeSelectRooms(),
    roomSelected: makeSelectRoom(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ userCall, userRoomAddCall }, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withApollo(compose(withConnect, memo)(AddPeoplePopup));
