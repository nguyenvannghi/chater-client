import React, { memo, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withApollo } from 'react-apollo';
import { compose, bindActionCreators } from 'redux';
import { Box, Button, Text, TextInput } from 'grommet';
import { Actions } from 'grommet-icons';
import { debounce } from 'lodash';
import { createStructuredSelector } from 'reselect';
import ToastLayer from 'app/components/toast-layer';
import { MONGO_OPS } from 'app/consts';
import { userCall } from '../../saga/user/action';
import { makeSelectUsers } from '../../saga/user/selector';
const AddPeoplePopup = ({ client, isOpen, userCall, users }) => {
    const { query } = client;
    const debouncedSave = useRef(
        debounce(value => {
            if (value.length > 0) {
                const params = {
                    where: {
                        username: {
                            op: MONGO_OPS.LIKE,
                            value: value,
                        },
                    },
                };
                userCall(query, params);
            }
        }),
        100,
    );

    return (
        isOpen && (
            <ToastLayer position="center" modal>
                <Box align="center" background={{ color: 'white' }} round={{ size: 'xsmall' }}>
                    <Box align="center" justify="stretch" pad="small">
                        <Text size="medium">Add people</Text>
                    </Box>
                    <Box align="center" justify="stretch" pad="small">
                        <TextInput
                            spellCheck="false"
                            placeholder="Yian, @steve, name@example.com"
                            onChange={({ target: { value } }) => debouncedSave.current(value)}
                        />
                        <Box background="white" pad={{ top: 'xsmall', bottom: 'xsmall', left: 'small', right: 'small' }}>
                            {users &&
                                users.map((item, index) => (
                                    <Box
                                        key={item._id}
                                        direction="row-responsive"
                                        align="center"
                                        justify="stretch"
                                        margin={{ bottom: index !== users.length ? 'small' : '' }}>
                                        <Text margin={{ right: 'xsmall' }}>{item.username}</Text>
                                        <Actions size="small" />
                                        <Text margin={{ left: 'xsmall' }} weight="normal">
                                            {item.email}
                                        </Text>
                                    </Box>
                                ))}
                        </Box>
                    </Box>
                    <Box width="small" margin="none" direction="row-responsive" pad={{ bottom: 'small' }}>
                        <Box pad={{ left: 'xsmall', right: 'xsmall' }}>
                            <Button color="brand" onClick={() => {}} primary label="Add" />
                        </Box>
                        <Box pad={{ left: 'xsmall', right: 'xsmall' }}>
                            <Button color="dark-1" onClick={() => {}} label="Cancel" />
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
    userCall: PropTypes.func,
    onResetAction: PropTypes.func,
    isOpen: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
    users: makeSelectUsers(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ userCall }, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withApollo(compose(withConnect, memo)(AddPeoplePopup));
