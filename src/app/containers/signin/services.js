import { isEmpty } from 'lodash';
import { listCookieStorageName, setCookie } from 'app/_utils/cookieStorage';

const loginAction = async (data, mutation) => {
    try {
        let action = new Promise(resolve => resolve);
        action = mutation({ variables: data });
        await action.then(resp => {
            if (!isEmpty(resp) && !isEmpty(resp.data)) {
                const {
                    login: { token },
                } = resp.data;
                setCookie(listCookieStorageName.access_token, token, 2);
            }
        });
    } catch (error) {
        console.log(error);
    }
};

export { loginAction };
