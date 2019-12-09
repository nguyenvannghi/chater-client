import React from 'react';
import { Box, Grid } from 'grommet';
import { ChatBox, Sidebar } from './components';

const Chater = () => {
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
                <Sidebar />
            </Box>
            <Box gridArea="main" background="black" fill="vertical" alignSelf="stretch" direction="column">
                <ChatBox />
            </Box>
        </Grid>
    );
};

export default Chater;
