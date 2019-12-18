import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Box, Grid } from 'grommet';
import { withApollo } from 'react-apollo';
import { getCurrentUser } from 'app/consts/helper';
import { MONGO_OPS } from 'app/consts';
import { injectRoomSaga, injectMessageSaga, injectUserSaga } from './injectReducerSaga';
import { roomCall } from './saga/room/action';
import { ChatBox, Sidebar } from './components';

const Chater = ({ client, roomCall }) => {
    injectRoomSaga();
    injectMessageSaga();
    injectUserSaga();

    const { query } = client;
    const currentUser = getCurrentUser();
    const params = {
        users: {
            op: MONGO_OPS.EQUA,
            value: currentUser._id,
        },
    };

    useEffect(() => {
        roomCall(query, params);
    }, [roomCall, query, params]);

    return (
        <Grid
            fill
            areas={[
                { name: 'nav', start: [0, 0], end: [0, 0] },
                { name: 'main', start: [1, 0], end: [1, 0] },
            ]}
            columns={['medium', 'flex']}
            rows={['flex']}>
            <Box gridArea="nav" background="black" fill="vertical" alignSelf="stretch" direction="column">
                <Sidebar currentUser={currentUser} />
            </Box>
            <Box gridArea="main" background="black" fill="vertical" alignSelf="stretch" direction="column">
                <ChatBox currentUser={currentUser} />
            </Box>
        </Grid>
    );
};

Chater.propTypes = {
    roomCall: PropTypes.func,
    client: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => bindActionCreators({ roomCall }, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withApollo(compose(withConnect, memo)(Chater));
