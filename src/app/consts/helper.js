import * as JWT from 'jwt-decode';
import * as Yup from 'yup';
import { Emoji } from 'emoji-mart';
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
    return JWT(getCookie(listCookieStorageName.access_token));
};

const getElements = (html, selector) => {
    var parser = new DOMParser(); // the parser that will parse the html
    var dom = parser.parseFromString(html, 'text/html'); // parse the text in 'html' as html
    var elems = dom.querySelectorAll(selector); // select the elements that match the CSS selector 'selector'
    // return their outerHTML (elems is an array like object so map is not defined thus we have to call it in this way)
    return Array.prototype.map.call(elems, function(e) {
        return e.outerHTML;
    });
};

const EmojiHtmlParser = html => {
    const regExpression = /(<span([^>]+)>)+(<\/span>)/gi;
    // const regExpressionAriaLabel = /(aria-label=\/"([^\/"]+)\/")/gi;
    let result;
    let temp = `rewqreqwrweqrewqr<span style="width: 24px; height: 24px; display: inline-block; background-image: url(&quot;/static/media/64.c9e876a8.png&quot;); background-size: 5200% 5200%; background-position: 58.8235% 56.8627%;" aria-label="😅, sweat_smile" class="emoji-mart-emoji"></span><span style="width: 24px; height: 24px; display: inline-block; background-image: url(&quot;/static/media/64.c9e876a8.png&quot;); background-size: 5200% 5200%; background-position: 58.8235% 96.0784%;" aria-label="😙, kissing_smiling_eyes" class="emoji-mart-emoji"></span>`;
    while ((result = regExpression.exec(temp)) !== null) {
        console.log(result);
    }
    // let arrGetElements = getElements(temp, '.emoji-mart-emoji');
    // if (arrGetElements && arrGetElements.length > 0) {

    // }
    // console.log(getElements(temp, '.emoji-mart-emoji'));
    return temp;
};

const EmojiStringParser = text => {
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

export { setFormControlValue, getCurrentUser, EmojiHtmlParser, EmojiStringParser, EmojiParser, getElements };
