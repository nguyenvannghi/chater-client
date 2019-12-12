import * as JWT from 'jwt-decode';
import * as Yup from 'yup';

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

export { setFormControlValue, getCurrentUser };
