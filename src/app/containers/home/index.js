import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { DataTable, Box, Text, Button } from 'grommet';
import { Checkmark, Close } from 'grommet-icons';
import { openToast } from 'app/components/toast/action';
import { STATUS_MESSAGE } from 'app/consts';
import injectReducerSaga from './injectReducerSaga';
import { employeeCall } from './action';
import { makeSelectEmployee } from './selector';

const columns = [
    {
        property: 'ID',
        header: <Text>ID</Text>,
        primary: true,
    },
    {
        property: 'Title',
        header: 'Title',
    },
    {
        property: 'DueDate',
        header: 'DueDate',
    },
    {
        property: 'Completed',
        header: 'Completed',
        render: datum => (
            <Box pad={{ vertical: 'xsmall' }} align="center">
                {datum.Completed ? <Checkmark color="brand" /> : <Close color="brand" />}
            </Box>
        ),
    },
];

const Home = ({ employeeCall, data, openToast }) => {
    injectReducerSaga();

    useEffect(() => {
        employeeCall();
    }, [employeeCall]);
    return (
        <>
            <Button primary onClick={() => openToast(STATUS_MESSAGE.SUCCESS, 'Success')} label="GDPR notice" />
            {data && <DataTable resizeable sortable border columns={columns} data={data} />}
        </>
    );
};

Home.propTypes = {
    openToast: PropTypes.func,
    employeeCall: PropTypes.func,
    data: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
    data: makeSelectEmployee(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ employeeCall, openToast }, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Home);
