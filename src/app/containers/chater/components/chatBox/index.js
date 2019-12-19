/* eslint-disable react-hooks/exhaustive-deps */

// const emojiMap = {
//     joy: '&#x1f602',
//     shades: '&#x1f60e',
//     happy: '&#x1f600',
// };
// const regExpression = /:([^:]*):/g;
// const text = 'I was like :joy: and she was like :happy: and we ware like:shades::key::santa:';

// const emojiIt = (re, text) => {
//     let result;
//     while ((result = re.exec(text))) {
//         console.log(result[1]);
//         text = text.replace(result[0], emojiMap[result[1]]);
//     }
//     return text;
// };

// $('#msg').html(emojiIt(regExpression, text));

import React, { useCallback, useEffect, useState, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Box, Text, Button, TextArea, Menu } from 'grommet';
import { AddCircle, Camera, Apps, Add, Braille } from 'grommet-icons';
import { useSubscription, useMutation } from '@apollo/react-hooks';
import { Picker, emojiIndex } from 'emoji-mart';
import { withApollo } from 'react-apollo';
import * as lodash from 'lodash';
import * as moment from 'moment';
import { MESSAGE_ADD_SUB, CREATE_MESSAGE } from 'app/containers/chater/graphql';
import { MOMENT, MONGO_OPS } from 'app/consts';
import { createMessageAction } from '../../service';
import AddPeoplePopup from '../add-people';
import { makeSelectRoom } from '../../saga/room/selector';
import { makeSelectMessages, makeSelectLoadingMessages } from '../../saga/message/selector';
import { messageCall } from '../../saga/message/action';
import emojiImage from './64.png';

const regExpression = /:([^:]*):/g;
const denmo2 = 'I was like :apple: and she was like :christmas: and we ware like:apple::santa:';
console.log(emojiIndex.search('apple').map(o => o.native));
const EmojiParser = (re, text) => {
    let result;
    while ((result = re.exec(text))) {
        console.log(result);
        let emoji = emojiIndex.search(result[1]) && emojiIndex.search(result[1]).map(o => o.native);
        text = text.replace(result[0], emoji && emoji[0]);
    }
    return text;
};

const ChatBox = ({ client, currentUser, roomSelected, messageCall, messageQueries, isLoading }) => {
    const { query } = client;
    const textInput = useRef();
    const messageListRef = useRef();
    const [messageSend, setMessageSend] = useState(null);
    const [isOpenAddPeople, setOpenAddPeople] = useState(false);
    const [openEmoji, setOpenEmoji] = useState(false);
    const [messages, setMessages] = useState();
    const [muationCreateMessage] = useMutation(CREATE_MESSAGE);

    useSubscription(MESSAGE_ADD_SUB, {
        onSubscriptionData: ({ _client, subscriptionData }) => {
            if (!lodash.isEmpty(subscriptionData) && !lodash.isEmpty(subscriptionData.data)) {
                const {
                    data: { messageAdded },
                } = subscriptionData;
                setMessages(prevMessage => (prevMessage ? [...prevMessage, messageAdded] : [messageAdded]));
                scrollToBottom();
            }
        },
    });
    useEffect(() => {
        if (roomSelected) {
            setMessages(null);
            async function fetchMessage() {
                const params = {
                    room: {
                        op: MONGO_OPS.EQUA,
                        value: roomSelected._id,
                    },
                    sender: {
                        op: MONGO_OPS.EQUA,
                        value: currentUser._id,
                    },
                };
                await messageCall(query, params);
                setMessages(messageQueries);
            }
            fetchMessage();
        }
    }, [roomSelected, messageCall, messageQueries]);

    const scrollToBottom = () => {
        const scrollHeight = messageListRef.current.scrollHeight;
        const height = messageListRef.current.clientHeight;
        const maxScrollTop = scrollHeight - height;
        messageListRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    };

    const addEmoji = useCallback(event => {
        if (!event) return;
        console.log(event);
        let emoji = event.native;
        setMessageSend(prevMessage => (prevMessage ? prevMessage + `::${emoji}::` : `::${emoji}::`));
        setOpenEmoji(false);
    }, []);

    const onSubmit = useCallback(() => {
        if (!roomSelected) {
            return;
        }
        const data = {
            user_id: {
                _id: currentUser._id,
            },
            room_id: {
                _id: roomSelected._id,
            },
            message_body: messageSend,
            message_status: true,
            created_by: {
                _id: currentUser._id,
            },
        };
        return createMessageAction(data, muationCreateMessage).then(res => {
            textInput.current.value = '';
        });
    }, [roomSelected]);

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
                                <Text size="small" dangerouslySetInnerHTML={{ __html: item.message_body }}></Text>
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
                                            open={false}
                                            items={[
                                                {
                                                    label: 'Add people to channel',
                                                    onClick: () => {
                                                        setOpenAddPeople(true);
                                                    },
                                                },
                                                { label: `Leave #${roomSelected.name}`, onClick: () => {} },
                                            ]}
                                            label={roomSelected.name}
                                        />
                                        <Text size="xsmall" margin={{ left: 'small' }}>
                                            {roomSelected.description}
                                        </Text>
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
                            <Button icon={<AddCircle />} />
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
                    background={
                        {
                            // image: "url('http://xpanthersolutions.com/admin-templates/gappa/html/dark/assets/images/authentication-bg.jpg')",
                        }
                    }
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
                        <div dangerouslySetInnerHTML={{ __html: EmojiParser(regExpression, denmo2) }}></div>
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
                        <TextArea
                            plain={true}
                            size="small"
                            placeholder="Type a message..."
                            ref={textInput}
                            onChange={() => setMessageSend(textInput.current.value)}
                        />
                        {/* <div contentEditable={true}>
                            Looks good to me
                            <span
                                contentEditable={false}
                                dangerouslySetInnerHTML={{
                                    __html: emojiIt(regExpression, text),
                                }}></span>
                        </div> */}
                        <Button icon={<Braille />} onClick={() => setOpenEmoji(true)} />
                        <Button icon={<Add />} onClick={onSubmit} />
                    </Box>
                </Box>
            </Box>
            <AddPeoplePopup isOpen={isOpenAddPeople} />
            {openEmoji && (
                <Picker
                    backgroundImageFn={() => emojiImage}
                    style={{ position: 'absolute', bottom: '20px', right: '20px' }}
                    onSelect={event => addEmoji(event)}
                />
            )}
        </>
    );
};

ChatBox.propTypes = {
    messageCall: PropTypes.func,
    client: PropTypes.any,
    data: PropTypes.array,
    messageQueries: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
    roomSelected: makeSelectRoom(),
    messageQueries: makeSelectMessages(),
    isLoading: makeSelectLoadingMessages(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ messageCall }, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withApollo(compose(withConnect, memo)(ChatBox));
