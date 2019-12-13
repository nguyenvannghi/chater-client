import React, { memo, useState, useEffect } from 'react';
import { Box, Grid } from 'grommet';
import * as lodash from 'lodash';
import { useQuery } from '@apollo/react-hooks';
import { GET_ROOMS } from 'app/containers/chater/graphql';
import { getCurrentUser } from 'app/consts/helper';
import { ChatBox, Sidebar } from './components';

const Chater = () => {
    const [isLoading, setLoading] = useState(true);
    const [rooms, setRooms] = useState(null);

    const currentUser = getCurrentUser();
    const roomRespone = useQuery(GET_ROOMS, {
        variables: {
            users: [currentUser._id],
        },
    });

    useEffect(() => {
        if (!lodash.isEmpty(roomRespone) && !lodash.isEmpty(roomRespone.data)) {
            const { loading, data } = roomRespone;
            setLoading(loading);
            setRooms(data.rooms);
        }
    }, [roomRespone]);

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
                <Sidebar currentUser={currentUser} rooms={rooms} isLoading={isLoading} />
            </Box>
            <Box gridArea="main" background="black" fill="vertical" alignSelf="stretch" direction="column">
                <ChatBox currentUser={currentUser} />
            </Box>
        </Grid>
    );
};

export default memo(Chater);
