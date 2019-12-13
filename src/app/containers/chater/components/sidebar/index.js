import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button, Image, TextInput } from 'grommet';
import { Clear, Search, Chat, Archive, User, SettingsOption } from 'grommet-icons';

const Sidebar = ({ rooms, isLoading }) => {
    const renderRooms = () => {
        if (isLoading) return <>🐶 Fetching...</>;
        return (
            rooms &&
            rooms.map((item, index) => {
                return (
                    <Box
                        key={item._id}
                        align="center"
                        justify="start"
                        direction="row-responsive"
                        alignSelf="stretch"
                        pad={{ top: 'xsmall', bottom: 'xsmall', left: 'small', right: 'small' }}
                        margin={{ bottom: 'xsmall' }}
                        fill="horizontal"
                        flex="shrink"
                        background={{ color: index === 0 ? 'dark-3' : '', opacity: 'medium' }}
                        hoverIndicator={true}>
                        <Box
                            align="center"
                            justify="center"
                            height="xxsmall"
                            width="xxsmall"
                            overflow="hidden"
                            flex="grow"
                            round="full"
                            background={{
                                image: `url('${item.image_url}')`,
                                position: 'center',
                                size: 'contain',
                            }}></Box>
                        <Box
                            align="start"
                            justify="center"
                            fill="horizontal"
                            alignSelf="stretch"
                            pad={{ left: 'small', right: 'small' }}
                            direction="column">
                            <Text weight="bold" size="small">
                                {item.name}
                            </Text>
                            <Text size="small" truncate={true} color="dark-5">
                                {item.topic}
                            </Text>
                        </Box>
                        <Box align="center" justify="center">
                            <Text size="xsmall" truncate={true}>
                                {item.users && item.users.length} members
                            </Text>
                        </Box>
                    </Box>
                );
            })
        );
    };

    return (
        <Box
            align="stretch"
            justify="between"
            fill="vertical"
            alignSelf="stretch"
            direction="column"
            background={{ color: 'dark-1', dark: true }}
            overflow="hidden"
            flex="shrink">
            <Box
                align="center"
                justify="center"
                background={{ color: 'dark-1' }}
                alignSelf="stretch"
                flex="grow"
                border={{ color: 'dark-2', side: 'right' }}>
                <Box
                    align="center"
                    justify="start"
                    direction="row-responsive"
                    alignSelf="stretch"
                    pad={{ top: 'small', bottom: 'small', left: 'small', right: 'small' }}
                    border={{ color: 'dark-2', side: 'bottom' }}>
                    <Box align="center" justify="start" alignSelf="stretch" direction="row-responsive" flex="grow">
                        <Box
                            align="center"
                            justify="center"
                            height="xxsmall"
                            width="xxsmall"
                            overflow="hidden"
                            round="xsmall"
                            background={{
                                position: 'center',
                                size: 'contain',
                                image:
                                    'url("https://storage.googleapis.com/staging.kaiju-9f6ba.appspot.com/1576229280846-211-2113738_computer-icons-avatar-online-chat-download-png-all.png")',
                            }}></Box>
                        <Text size="xlarge" margin={{ left: 'small', right: 'small' }} weight="bold">
                            Chater
                        </Text>
                    </Box>
                    <Button icon={<Clear />} />
                </Box>
                <Box
                    align="center"
                    justify="center"
                    pad={{ top: 'small', bottom: 'small', left: 'small', right: 'small' }}
                    alignSelf="stretch"
                    border={{ color: 'dark-2', side: 'bottom' }}>
                    <Box
                        align="center"
                        justify="center"
                        alignSelf="stretch"
                        direction="row-responsive"
                        round="small"
                        border={{ color: 'dark-5' }}
                        background={{ color: 'dark-2', dark: true }}
                        height="xxsmall"
                        pad={{ left: 'xsmall', right: 'small' }}>
                        <TextInput placeholder="Search" plain={true} size="small" type="text" />
                        <Button icon={<Search />} plain={true} />
                    </Box>
                </Box>
            </Box>
            <Box align="center" justify="between" alignSelf="stretch" overflow="hidden" direction="row-responsive" fill="vertical">
                <Box
                    align="stretch"
                    justify="start"
                    alignSelf="stretch"
                    direction="row-responsive"
                    overflow="auto"
                    pad={{ vertical: 'small' }}
                    border={{ color: 'dark-2', side: 'right' }}
                    wrap={true}>
                    <Box align="stretch" justify="start" alignSelf="start" direction="row-responsive" overflow="auto" wrap={true}>
                        {renderRooms()}
                    </Box>
                </Box>
            </Box>
            <Box align="center" justify="center" border={{ color: 'dark-2', side: 'top' }}>
                <Box
                    align="center"
                    justify="between"
                    direction="row-responsive"
                    alignSelf="stretch"
                    pad={{ left: 'small', right: 'small', vertical: 'small', top: 'small' }}>
                    <Button icon={<Chat />} />
                    <Button icon={<Archive />} />
                    <Button icon={<User />} />
                    <Button icon={<SettingsOption />} />
                </Box>
            </Box>
        </Box>
    );
};

Sidebar.propTypes = {
    rooms: PropTypes.object,
    currentUser: PropTypes.object,
    isLoading: PropTypes.bool,
};

export default memo(Sidebar);
