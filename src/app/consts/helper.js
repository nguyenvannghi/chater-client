import * as JWT from 'jwt-decode';
import * as Yup from 'yup';
import { emojiIndex } from 'emoji-mart';

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
    return JWT(getCookie(listCookieStorageName.access_token));
};

const EmojiParser = text => {
    const regExpression = /:([^:]*):/g;
    let result;
    while ((result = regExpression.exec(text)) !== null) {
        let emoji = emojiIndex.search(result[1]) && emojiIndex.search(result[1]).map(o => o.native);
        text = text.replace(result[0], emoji && emoji[0]);
    }
    return text;
};

export { setFormControlValue, getCurrentUser, EmojiParser };
