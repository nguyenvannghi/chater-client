import React, { memo, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withApollo } from 'react-apollo';
import { Box, Text, Button, TextInput } from 'grommet';
import { Clear, Search, Chat, Archive, User, SettingsOption } from 'grommet-icons';
import { onCallConfirmAction } from 'app/components/confirmPopup/action';
import { makeSelectStatusConfirmAction } from 'app/components/confirmPopup/selector';
import { logoutCall } from 'app/containers/signin/saga/action';
import { roomCallSelectedSuccess } from '../../saga/room/action';
import { makeSelectLoadingRooms, makeSelectRoom } from '../../saga/room/selector';
import { makeSelectRoomUsers } from '../../saga/user-room/selector';

const Sidebar = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(makeSelectLoadingRooms());
    const roomSelected = useSelector(makeSelectRoom());
    const confirmStatus = useSelector(makeSelectStatusConfirmAction());
    const rooms = useSelector(makeSelectRoomUsers());

    useEffect(() => {
        dispatch(logoutCall(confirmStatus.data, confirmStatus.key));
    }, [confirmStatus.data, confirmStatus.key, dispatch]);

    const selectRoom = useCallback(
        item => {
            dispatch(roomCallSelectedSuccess(item));
        },
        [dispatch],
    );

    const logout = useCallback(() => {
        dispatch(onCallConfirmAction('Are you sure you want to log out?', 'LOG_OUT'));
    }, [dispatch]);

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
                        background={{ color: roomSelected && roomSelected._id === item._id ? 'dark-3' : '', opacity: 'medium' }}
                        onClick={() => {
                            selectRoom(item);
                        }}>
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
                                {/* {item.users && item.users.length} members */}
                            </Text>
                        </Box>
                    </Box>
                );
            })
        );
    };

    return (
        <>
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
                        <Button icon={<Clear />} onClick={logout} />
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
                <Box align="center" justify="center" border={{ color: 'dark-2', side: 'top' }} className="min-height-auto">
                    <Box
                        align="center"
                        justify="between"
                        direction="row-responsive"
                        alignSelf="stretch"
                        className="bottom-side min-height-auto"
                        pad={{ left: 'small', right: 'small' }}>
                        <Button icon={<Chat />} />
                        <Button icon={<Archive />} />
                        <Button icon={<User />} />
                        <Button icon={<SettingsOption />} />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default withApollo(memo(Sidebar));
