import React, { useCallback, useEffect, useState } from 'react';
import { Box, Text, Button, Image, TextArea } from 'grommet';
import { AddCircle, Camera, Apps, Attachment, Add } from 'grommet-icons';
import { useSubscription, useMutation, useQuery } from '@apollo/react-hooks';
import * as lodash from 'lodash';
import * as moment from 'moment';
import { MESSAGE_ADD_SUB, CREATE_MESSAGE, GET_MESSAGES } from 'app/containers/chater/graphql';
import { getCurrentUser } from 'app/consts/helper';
import { MOMENT } from 'app/consts';
import { createMessageAction } from '../../service';

const ChatBox = () => {
    const [messages, setMessages] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [muationCreateMessage] = useMutation(CREATE_MESSAGE);
    const messageRespone = useQuery(GET_MESSAGES);

    useSubscription(MESSAGE_ADD_SUB, {
        onSubscriptionData: ({ _client, subscriptionData }) => {
            if (!lodash.isEmpty(subscriptionData) && !lodash.isEmpty(subscriptionData.data)) {
                const {
                    data: { messageAdded },
                } = subscriptionData;
                setMessages(prevMessage => [...prevMessage, messageAdded]);
            }
        },
    });

    useEffect(() => {
        if (!lodash.isEmpty(messageRespone) && !lodash.isEmpty(messageRespone.data)) {
            const { loading, data } = messageRespone;
            setLoading(loading);
            setMessages(data.messages);
        }
    }, [messageRespone, setMessages]);

    const onSubmit = useCallback(() => {
        const data = {
            user_id: {
                _id: '5de8c412ea0603488de5eb0f',
            },
            room_id: {
                _id: '5deb471c64d66e7f78856798',
            },
            message_body: 'Hello guys',
            message_status: true,
            created_by: {
                _id: '5de8c412ea0603488de5eb0f',
            },
        };
        return createMessageAction(data, muationCreateMessage);
    }, [muationCreateMessage]);

    const isMyMessage = (username, _id) => {
        const currentUser = getCurrentUser();
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
                        justify={isMyMess ? 'end' : 'start'}
                        margin={{ bottom: 'large' }}
                        fill="horizontal"
                        flex="shrink"
                        direction="row-responsive"
                        pad={{ [isMyMess ? 'right' : 'left']: 'medium' }}>
                        <Box align="center" justify="center">
                            <Box
                                align="center"
                                justify="center"
                                background={{ color: isMyMess ? 'brand' : 'dark-4', dark: true, opacity: 'medium' }}
                                pad={{ left: 'medium', right: 'xsmall', top: 'xsmall', bottom: 'xsmall' }}
                                round={{ corner: isMyMess ? 'right' : 'left' }}>
                                <Text size="small">{item.message_body}</Text>
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
        <Box
            align="center"
            justify="start"
            fill="horizontal"
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
                        background={{ opacity: 'medium' }}
                        hoverIndicator={true}>
                        <Box align="center" justify="center" height="xxsmall" width="xxsmall" overflow="hidden" flex="grow" round="full">
                            <Image src="https://photos.smugmug.com/Pinnacles-May-2019/n-8KLNDR/i-bxkrqwL/0/1c7fa7f2/M/i-bxkrqwL-M.jpg" />
                        </Box>
                        <Box
                            align="stretch"
                            justify="start"
                            fill="horizontal"
                            alignSelf="stretch"
                            pad={{ left: 'small', right: 'small' }}
                            direction="column">
                            <Text weight="bold" size="small">
                                Emily Cook
                            </Text>
                            <Text size="xsmall">Online</Text>
                        </Box>
                    </Box>
                </Box>
                <Box align="center" justify="center">
                    <Box
                        align="center"
                        justify="between"
                        direction="row-responsive"
                        alignSelf="stretch"
                        pad={{ left: 'small', right: 'small', vertical: 'small', top: 'small' }}>
                        <Button icon={<AddCircle />} />
                        <Button icon={<Camera />} />
                        <Button icon={<Apps />} />
                    </Box>
                </Box>
            </Box>
            <Box
                align="center"
                justify="center"
                fill="vertical"
                alignSelf="stretch"
                background={{
                    image: "url('http://xpanthersolutions.com/admin-templates/gappa/html/dark/assets/images/authentication-bg.jpg')",
                }}
                direction="row-responsive"
                overflow="hidden">
                <Box align="stretch" justify="start" direction="row-responsive" pad="small" overflow="auto" alignSelf="stretch" wrap={true}>
                    {renderMessage()}
                </Box>
            </Box>
            <Box align="center" justify="start" alignSelf="stretch" border={{ color: 'dark-2', side: 'top' }}>
                <Box
                    align="center"
                    justify="center"
                    direction="row-responsive"
                    fill="horizontal"
                    flex="grow"
                    alignSelf="stretch"
                    border={{ color: 'dark-2', side: 'left' }}>
                    <TextArea plain={true} size="small" placeholder="Type a message..." />
                    <Button icon={<Attachment />} />
                    <Button icon={<Add />} onClick={onSubmit} />
                </Box>
            </Box>
        </Box>
    );
};

export default ChatBox;
