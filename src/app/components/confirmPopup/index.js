import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { Box, Button, Text } from 'grommet';
import { createStructuredSelector } from 'reselect';
import ToastLayer from '../toast-layer';

import { makeSelectConfirmAction, makeSelectConfirmMessage, makeSelectConfirmActions } from './selector';
import { onCancelAction, onOkAction } from './action';

const ConfirmPopup = ({ message, actions, isClose, onCancelAction, onOkAction }) => {
    const onClose = useCallback(() => {
        onCancelAction();
    }, [onCancelAction]);
    const onOK = useCallback(() => {
        onOkAction();
    }, [onOkAction]);
    return (
        !isClose && (
            <ToastLayer position="center" modal>
                <Box align="center" background={{ color: 'white' }} round={{ size: 'xsmall' }}>
                    <Box align="center" justify="stretch" pad="small">
                        <Text size="medium">{message}</Text>
                    </Box>
                    <Box width="small" margin="none" direction="row-responsive" pad={{ bottom: 'small' }}>
                        <Box pad={{ left: 'xsmall', right: 'xsmall' }}>
                            <Button color="brand" onClick={onOK} primary label={actions.ok} />
                        </Box>
                        <Box pad={{ left: 'xsmall', right: 'xsmall' }}>
                            <Button color="dark-1" onClick={onClose} label={actions.cancel} />
                        </Box>
                    </Box>
                </Box>
            </ToastLayer>
        )
    );
};

ConfirmPopup.defaultProps = {
    actions: {
        ok: 'Ok',
        cancel: 'Cancel',
    },
};

ConfirmPopup.propTypes = {
    message: PropTypes.string,
    actions: PropTypes.exact({
        ok: PropTypes.string,
        cancel: PropTypes.string,
    }),
    loadingClose: PropTypes.func,
    onCancelAction: PropTypes.func,
    onOkAction: PropTypes.func,
    isClose: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
    isClose: makeSelectConfirmAction(),
    message: makeSelectConfirmMessage(),
    actions: makeSelectConfirmActions(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ onCancelAction, onOkAction }, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ConfirmPopup);
