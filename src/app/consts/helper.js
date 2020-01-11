import * as JWT from 'jwt-decode';
import * as Yup from 'yup';
import { Emoji, getEmojiDataFromNative } from 'emoji-mart';
import EmojiData from 'emoji-mart/data/all.json';
import emojiImage from './64.png';

import { getCookie, listCookieStorageName } from 'app/_utils/cookieStorage';

const setFormControlValue = (data, schema, setValue) => {
    if (!Yup.reach(schema) || !data) {
        return;
    }
    const { fields } = Yup.reach(schema);
    Object.keys(fields).forEach(item => {
        setValue(item, data[item] ? data[item] : null);
    });
};

const getCurrentUser = () => {
    return getCookie(listCookieStorageName.access_token) && JWT(getCookie(listCookieStorageName.access_token));
};

const EmojiNativeToIDParser = text => {
    const arrayStr = [...text];
    const newText = [];
    arrayStr.forEach(item => {
        const data = EmojiNaviveParser(item);
        if (data && typeof data === 'object') {
            newText.push(`:__${data.id}__:`);
        } else {
            newText.push(item);
        }
    });
    return newText.join('');
};

const EmojiServerToClientParser = text => {
    const regExpression = /:__([^:]*)__:/g;
    let result;
    while ((result = regExpression.exec(text)) !== null) {
        text = text.replace(result[0], EmojiParser(result[1]));
    }
    return text;
};

const EmojiParser = emoji =>
    Emoji({
        html: true,
        // set: emoji.toString(),
        emoji: emoji.toString(),
        size: 24,
        backgroundImageFn: () => emojiImage,
    });

const EmojiNaviveParser = emoji => getEmojiDataFromNative(emoji, '', EmojiData);

const removeItem = (array, item) => {
    const length = array.length;
    const index = array.findIndex(t => t._id === item._id);
    if (index === 0) {
        array = array.slice(1);
    } else if (index === length - 1) {
        array = array.slice(0, length - 1);
    } else {
        array = [...array.slice(0, index), ...array.slice(index + 1)];
    }
    return array;
};

export { setFormControlValue, getCurrentUser, EmojiServerToClientParser, EmojiNativeToIDParser, EmojiParser, removeItem };
