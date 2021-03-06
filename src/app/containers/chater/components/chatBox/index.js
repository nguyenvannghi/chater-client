/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Text, Button, Menu } from 'grommet';
import { AddCircle, Camera, Apps, User } from 'grommet-icons';
import { useSubscription } from '@apollo/react-hooks';
import { withApollo } from 'react-apollo';
import * as lodash from 'lodash';
import * as moment from 'moment';
import { MOMENT, MONGO_OPS } from 'app/consts';
import { EmojiServerToClientParser } from 'app/consts/helper';
import { MESSAGE_ADD_SUB } from 'app/containers/chater/graphql';
import AddPeoplePopup from '../add-people';
import { makeSelectRoom } from '../../saga/room/selector';
import { makeSelectUserRooms } from '../../saga/user-room/selector';
import { makeSelectMessages, makeSelectLoadingMessages } from '../../saga/message/selector';
import { messageCall } from '../../saga/message/action';
import MessageInput from '../message-input';
import BgChat from 'app/assets/authentication-bg.jpg';

const ChatBox = ({ client, currentUser }) => {
    const { query } = client;
    const messageListRef = useRef();
    const [isOpenAddPeople, setOpenAddPeople] = useState(false);
    const [messages, setMessages] = useState();
    const dispatch = useDispatch();
    const userRooms = useSelector(makeSelectUserRooms());
    const messageQueries = useSelector(makeSelectMessages());
    const roomSelected = useSelector(makeSelectRoom());
    const isLoading = useSelector(makeSelectLoadingMessages());

    useSubscription(MESSAGE_ADD_SUB, {
        onSubscriptionData: ({ _client, subscriptionData }) => {
            if (!lodash.isEmpty(subscriptionData) && !lodash.isEmpty(subscriptionData.data)) {
                const {
                    data: { messageAdded },
                } = subscriptionData;
                if (!lodash.isEmpty(messageAdded)) {
                    const {
                        room: { _id },
                    } = messageAdded;
                    if (roomSelected && roomSelected._id === _id) {
                        setMessages(prevMessage => (prevMessage ? [...prevMessage, messageAdded] : [messageAdded]));
                    }
                }
                scrollToBottom();
            }
        },
    });

    useEffect(() => {
        if (roomSelected) {
            setMessages(null);
            const params = {
                room: {
                    op: MONGO_OPS.EQUA,
                    value: roomSelected._id,
                },
            };
            dispatch(messageCall(query, params));
        }
    }, [roomSelected, messageCall]);

    useEffect(() => {
        setMessages(messageQueries);
    }, [messageQueries]);

    const scrollToBottom = () => {
        const scrollHeight = messageListRef.current.scrollHeight;
        const height = messageListRef.current.clientHeight;
        const maxScrollTop = scrollHeight - height;
        messageListRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    };

    const isMyMessage = (username, _id) => {
        return (currentUser && lodash.isEqual(username, currentUser.username)) || lodash.isEqual(_id, currentUser._id);
    };

    const renderTimeMessage = (createdAt, updatedAt) =>
        updatedAt ? moment(createdAt).format(MOMENT.HOUR_MINUTES) : moment(updatedAt).format(MOMENT.HOUR_MINUTES);
    const renderMessage = () => {
        if (isLoading) return <>🐶 Fetching...</>;
        return (
            messages &&
            messages.map(item => {
                const { username, _id } = item.sender;
                const isMyMess = isMyMessage(username, _id);
                const time = renderTimeMessage(item.createdAt, item.updatedAt);
                return (
                    <Box
                        key={item._id}
                        align="center"
                        justify={!isMyMess ? 'end' : 'start'}
                        margin={{ bottom: 'large' }}
                        fill="horizontal"
                        flex="shrink"
                        direction="row-responsive"
                        pad={{ [!isMyMess ? 'right' : 'left']: 'medium' }}>
                        {/* <Box align="center" justify="center" margin={{ right: 'small' }}>
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
                                    color: 'white',
                                    position: 'center',
                                    size: 'contain',
                                }}></Box>
                            <Text size="small" weight="normal" truncate={true}>
                                {item.sender && item.sender.username}
                            </Text>
                        </Box> */}
                        <Box align="center">
                            <Box alignSelf="stretch" align={!isMyMess ? 'end' : 'start'}>
                                <Text size="small" weight="normal" truncate={true}>
                                    {item.sender && item.sender.username}
                                </Text>
                            </Box>
                            <Box
                                align="center"
                                justify="center"
                                background={{ color: isMyMess ? 'brand' : 'dark-4', dark: true, opacity: 'medium' }}
                                pad={{ left: 'medium', right: 'xsmall', top: 'xsmall', bottom: 'xsmall' }}
                                round="small">
                                {/* round={{ corner: isMyMess ? 'right' : 'left' }}> */}
                                <Text
                                    size="small"
                                    dangerouslySetInnerHTML={{ __html: EmojiServerToClientParser(item.message_body) }}></Text>
                            </Box>
                            <Box align="center" justify="end" direction="row-responsive" alignSelf="stretch">
                                <Text size="xsmall">{time}</Text>
                            </Box>
                        </Box>
                    </Box>
                );
            })
        );
    };
    return (
        <>
            <Box
                align="center"
                justify="start"
                fill="vertical"
                alignSelf="stretch"
                background={{ dark: true, color: 'dark-1' }}
                overflow="hidden"
                flex="shrink">
                <Box
                    align="center"
                    justify="between"
                    direction="row-responsive"
                    alignSelf="stretch"
                    border={{ color: 'dark-2', side: 'bottom' }}
                    fill="horizontal"
                    flex="grow">
                    <Box align="center" justify="center" flex="shrink">
                        <Box
                            align="center"
                            justify="start"
                            direction="row-responsive"
                            alignSelf="stretch"
                            pad={{ top: 'small', bottom: 'small', left: 'small', right: 'small' }}
                            fill="horizontal"
                            flex="shrink"
                            background={{ opacity: 'medium' }}>
                            {roomSelected && (
                                <>
                                    <Box
                                        align="center"
                                        justify="center"
                                        height="xxsmall"
                                        width="xxsmall"
                                        overflow="hidden"
                                        flex="grow"
                                        background={{
                                            image: `url('${roomSelected.image_url}')`,
                                            position: 'center',
                                            size: 'contain',
                                        }}
                                        round="full"></Box>
                                    <Box
                                        align="stretch"
                                        justify="start"
                                        fill="horizontal"
                                        alignSelf="stretch"
                                        pad={{ left: 'small', right: 'small' }}
                                        direction="column">
                                        {/* <Text weight="bold" size="small">
                                        {roomSelected.name}
                                    </Text> */}

                                        <Menu
                                            className="no-padding child-no-padding"
                                            open={false}
                                            items={[
                                                {
                                                    label: 'Add people to channel',
                                                    onClick: () => {
                                                        setOpenAddPeople(true);
                                                    },
                                                },
                                                { label: `Leave #${roomSelected.name}`, onClick: () => {} },
                                                { label: `Drop #${roomSelected.name}`, onClick: () => {} },
                                            ]}
                                            label={<Text>{roomSelected.name}</Text>}
                                        />
                                        <Box align="center" justify="start" direction="row-responsive">
                                            <Text size="small" weight="normal" truncate={true}>
                                                <User size="small" />
                                                {userRooms && userRooms.length}
                                            </Text>
                                            <Text size="xsmall" margin={{ left: 'small' }}>
                                                |
                                            </Text>
                                            <Text size="xsmall" margin={{ left: 'small' }}>
                                                {roomSelected.description}
                                            </Text>
                                        </Box>
                                    </Box>
                                </>
                            )}
                        </Box>
                    </Box>
                    <Box align="center" justify="center">
                        <Box
                            align="center"
                            justify="between"
                            direction="row-responsive"
                            alignSelf="stretch"
                            pad={{ left: 'small', right: 'small', vertical: 'small', top: 'small' }}>
                            <Button icon={<AddCircle />} onClick={() => setOpenAddPeople(true)} />
                            <Button icon={<Camera />} />
                            <Button icon={<Apps />} />
                        </Box>
                    </Box>
                </Box>
                <Box
                    align="center"
                    justify="start"
                    fill="vertical"
                    alignSelf="stretch"
                    background={{
                        image: `url('${BgChat}')`,
                        repeat: 'repeat-x',
                    }}
                    direction="row-responsive"
                    className="relative"
                    overflow="hidden">
                    <Box
                        align="stretch"
                        justify="start"
                        direction="row-responsive"
                        pad="small"
                        fill="horizontal"
                        overflow="auto"
                        alignSelf="start"
                        wrap={true}
                        className="absolute full-size overflow-auto"
                        ref={messageListRef}>
                        {renderMessage()}
                    </Box>
                </Box>
                <MessageInput />
            </Box>
            <AddPeoplePopup isOpen={isOpenAddPeople} onClose={() => setOpenAddPeople(false)} />
        </>
    );
};

ChatBox.propTypes = {
    client: PropTypes.any,
    currentUser: PropTypes.object,
};

export default withApollo(memo(ChatBox));
