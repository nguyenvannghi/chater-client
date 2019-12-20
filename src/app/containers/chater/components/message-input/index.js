import React, { memo, useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withApollo } from 'react-apollo';
import { compose, bindActionCreators } from 'redux';
import { Box, Button, TextArea } from 'grommet';
import { Add, Braille } from 'grommet-icons';
import { useMutation } from '@apollo/react-hooks';
import { createStructuredSelector } from 'reselect';
import { CREATE_MESSAGE } from 'app/containers/chater/graphql';
import { getCurrentUser } from 'app/consts/helper';
import EmojiPicker from 'app/components/emojiPicker';
import { createMessageAction } from '../../service';
import { makeSelectRoom } from '../../saga/room/selector';
const MessageInput = ({ client, roomSelected }) => {
    const textInput = useRef();
    const [messageSend, setMessageSend] = useState(null);
    const [openEmoji, setOpenEmoji] = useState(false);
    const [muationCreateMessage] = useMutation(CREATE_MESSAGE);

    const addEmoji = useCallback(
        event => {
            if (!event) return;
            console.log(event);
            let emoji = event.id;
            setMessageSend(prevMessage => (prevMessage ? prevMessage + `:${emoji}:` : `:${emoji}:`));
            setOpenEmoji(false);
        },
        [setMessageSend],
    );

    const onSubmit = useCallback(() => {
        const currentUser = getCurrentUser();
        if (!roomSelected || !messageSend) {
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
            setMessageSend(null);
        });
    }, [roomSelected, messageSend, muationCreateMessage]);

    return (
        <>
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
            <EmojiPicker isOpen={openEmoji} onSelect={event => addEmoji(event)} />
        </>
    );
};

MessageInput.defaultProps = {};

MessageInput.propTypes = { roomSelected: PropTypes.object };

const mapStateToProps = createStructuredSelector({
    roomSelected: makeSelectRoom(),
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withApollo(compose(withConnect, memo)(MessageInput));
