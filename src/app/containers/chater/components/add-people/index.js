import React, { memo, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withApollo } from 'react-apollo';
import { compose, bindActionCreators } from 'redux';
import { Box, Button, Text, TextInput } from 'grommet';
import { debounce } from 'lodash';
import { createStructuredSelector } from 'reselect';
import ToastLayer from 'app/components/toast-layer';
import { MONGO_OPS } from 'app/consts';
import { userCall } from '../../saga/user/action';
const AddPeoplePopup = ({ client, isOpen, userCall }) => {
    const { query } = client;
    const debouncedSave = useRef(
        debounce(async value => {
            const params = {
                where: {
                    username: {
                        op: MONGO_OPS.LIKE,
                        value: value,
                    },
                },
            };
            await userCall(query, params);
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
                            placeholder="Yian, @steve, name@example.com"
                            onChange={({ target: { value } }) => debouncedSave.current(value)}
                        />
                        {/* <Box background="white" pad={{ top: 'xsmall', bottom: 'xsmall', left: 'small', right: 'small' }}>
                            <Text margin={{ bottom: 'small' }}>Demo 1</Text>
                            <Text margin={{ bottom: 'small' }}>Demo 1</Text>
                            <Text margin={{ bottom: 'small' }}>Demo 1</Text>
                            <Text margin={{ bottom: 'small' }}>Demo 1</Text>
                        </Box> */}
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

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => bindActionCreators({ userCall }, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withApollo(compose(withConnect, memo)(AddPeoplePopup));
