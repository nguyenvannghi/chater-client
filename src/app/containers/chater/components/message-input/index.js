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
import { getCurrentUser, EmojiNativeToIDParser } from 'app/consts/helper';
import EmojiPicker from 'app/components/emojiPicker';

import { createMessageAction } from '../../service';
import { makeSelectRoom } from '../../saga/room/selector';

const MessageInput = ({ client, roomSelected }) => {
    const textInput = useRef();
    const [messageSendHtml, setMessageSendHtml] = useState('');
    const [openEmoji, setOpenEmoji] = useState(false);
    const [muationCreateMessage] = useMutation(CREATE_MESSAGE);

    const addEmoji = useCallback(
        event => {
            if (!event) return;
            let emoji = event.native;

            setMessageSendHtml(prevMht => (prevMht ? prevMht + `${emoji}` : `${emoji}`));

            setOpenEmoji(false);
        },
        [setMessageSendHtml],
    );

    const onSubmit = useCallback(() => {
        const currentUser = getCurrentUser();
        if (!roomSelected || !messageSendHtml) {
            return;
        }
        const data = {
            user_id: {
                _id: currentUser._id,
            },
            room_id: {
                _id: roomSelected._id,
            },
            message_body: EmojiNativeToIDParser(messageSendHtml),
            message_status: true,
            created_by: {
                _id: currentUser._id,
            },
        };
        return createMessageAction(data, muationCreateMessage).then(res => {
            textInput.current.value = '';
            setMessageSendHtml('');
        });
    }, [roomSelected, muationCreateMessage, setMessageSendHtml, messageSendHtml]);

    const handleChange = evt => {
        setMessageSendHtml(evt.target.value);
    };

    return (
        <>
            <Box
                align="center"
                justify="start"
                className="bottom-side min-height-auto"
                alignSelf="stretch"
                border={{ color: 'dark-2', side: 'top' }}>
                <Box
                    align="center"
                    justify="center"
                    direction="row-responsive"
                    fill="horizontal"
                    className="min-height-auto"
                    flex="grow"
                    alignSelf="stretch"
                    border={{ color: 'dark-2', side: 'left' }}>
                    <TextArea
                        plain={true}
                        size="small"
                        value={messageSendHtml}
                        placeholder="Type a message..."
                        ref={textInput}
                        onChange={handleChange}
                    />
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
