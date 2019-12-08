import React from 'react';
import { Box, Grid } from 'grommet';
import { SidebarLeft, SidebarRight } from './components';

const Chater = () => {
    return (
        <Grid
            fill
            rows={['xxsmall', 'flex', 'xxsmall']}
            columns={['auto', 'flex']}
            areas={[
                { name: 'header', start: [0, 0], end: [4, 0] },
                { name: 'nav', start: [0, 1], end: [0, 1] },
                { name: 'main', start: [1, 1], end: [2, 1] },
                { name: 'sidebar', start: [2, 1], end: [4, 1] },
                { name: 'footer', start: [0, 2], end: [4, 2] },
            ]}>
            <Box gridArea="header" background="#f89325">
                Header
            </Box>
            <Box gridArea="nav" background="black">
                <SidebarLeft />
            </Box>
            <Box gridArea="main" background="#25f864">
                Contents
            </Box>
            <Box gridArea="sidebar" background="black">
                <SidebarRight />
            </Box>
            <Box gridArea="footer" background="#3b64d4">
                footer
            </Box>
        </Grid>
    );
};

export default Chater;
