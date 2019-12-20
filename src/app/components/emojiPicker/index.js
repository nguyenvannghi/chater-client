import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Picker } from 'emoji-mart';
import emojiImage from 'app/consts/64.png';

const EmojiPicker = ({ isOpen, onSelect }) => {
    return (
        isOpen && (
            <Picker
                backgroundImageFn={() => emojiImage}
                style={{ position: 'absolute', bottom: '20px', right: '20px' }}
                onSelect={event => onSelect(event)}
            />
        )
    );
};

EmojiPicker.propTypes = {
    addEmoji: PropTypes.func,
    isOpen: PropTypes.bool,
};

export default memo(EmojiPicker);
