import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Box, Grid } from 'grommet';
import { withApollo } from 'react-apollo';
import { getCurrentUser } from 'app/consts/helper';
import { MONGO_OPS } from 'app/consts';
import { injectRoomSaga, injectMessageSaga, injectUserSaga, injectUserRoomSaga } from './injectReducerSaga';
import { roomCall } from './saga/room/action';
import { makeSelectRoom } from './saga/room/selector';
import { userRoomsCall } from './saga/user-room/action';
import { ChatBox, Sidebar } from './components';

const Chater = ({ client, roomSelected, roomCall, userRoomsCall }) => {
    injectRoomSaga();
    injectMessageSaga();
    injectUserSaga();
    injectUserRoomSaga();

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

    useEffect(() => {
        if (roomSelected) {
            const params = {
                room: {
                    value: roomSelected._id,
                    op: MONGO_OPS.EQUA,
                },
            };
            userRoomsCall(query, params);
        }
    }, [userRoomsCall, query, roomSelected]);

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
    roomSelected: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
    roomSelected: makeSelectRoom(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ roomCall, userRoomsCall }, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withApollo(compose(withConnect, memo)(Chater));
