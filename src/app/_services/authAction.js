import { isEmpty } from 'lodash';
import { listCookieStorageName, setCookie, deleteCookie } from 'app/_utils/cookieStorage';
import history from 'app/routes/history';

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
                return history.push('/');
            }
        });
    } catch (error) {
        throw new Error(error);
    }
};

const logoutAction = () => {
    deleteCookie(listCookieStorageName.access_token);
    deleteCookie(listCookieStorageName.token_type);
    return history.push('/sign-in');
};

export { loginAction, logoutAction };
