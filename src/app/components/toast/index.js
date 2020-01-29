import React, { memo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Box, Text } from 'grommet';
import { StatusGood, StatusWarning, StatusInfo, StatusCritical } from 'grommet-icons';
import { STATUS_MESSAGE } from 'app/consts';
import { initToast } from './action';
import makeSelectToastConfig from './selector';
import ToastLayer from '../toast-layer';

const Toast = ({ toastConfig, initToast }) => {
    const { isOpen, hideDuration, typeToast, message } = toastConfig;
    const timeoutReset = hideDuration || 4000;

    useEffect(() => {
        if (isOpen) setTimeout(() => initToast(), timeoutReset);
    }, [isOpen, timeoutReset, initToast]);

    const onClose = useCallback(() => {
        initToast();
    }, [initToast]);

    const statusIcon = () => {
        switch (typeToast) {
            case STATUS_MESSAGE.ERROR:
                return <StatusCritical color="white" />;
            case STATUS_MESSAGE.WARNING:
                return <StatusWarning color="white" />;
            case STATUS_MESSAGE.INFO:
                return <StatusInfo color="white" />;
            case STATUS_MESSAGE.SUCCESS:
            default:
                return <StatusGood color="white" />;
        }
    };
    return (
        isOpen && (
            <ToastLayer position="top" full="horizontal" modal={isOpen} responsive={false}>
                <Box
                    onClick={onClose}
                    direction="row"
                    align="center"
                    justify="between"
                    elevation="small"
                    pad={{ vertical: 'small', horizontal: 'large' }}
                    background={typeToast}
                    gap="medium">
                    <Text size="medium" color="white">
                        {message}
                    </Text>
                    {statusIcon()}
                </Box>
            </ToastLayer>
        )
    );
};

Toast.propTypes = {
    toastConfig: PropTypes.object,
    initToast: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    toastConfig: makeSelectToastConfig(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ initToast }, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Toast);
