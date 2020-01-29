const listCookieStorageName = {
    access_token: 'access_token',
    token_type: 'token_type',
};

const setCookie = (cName, cValue, days) => {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${cName}=${cValue};${expires};path=/`;
};

const getCookie = cName => {
    const name = `${cName}=`;
    const ca = document.cookie.split(';');
    const getLenthCa = ca.length;
    for (let i = 0; i < getLenthCa; i += 1) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
};

const checkCookie = cName => {
    const user = getCookie(cName);
    return !!user;
};

const deleteCookie = cName => {
    document.cookie = `${cName}=; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
};

const deleteCookieFunc = () => {
    Object.keys(listCookieStorageName).forEach(item => {
        deleteCookie(item);
    });
};

export { setCookie, getCookie, deleteCookie, checkCookie, listCookieStorageName, deleteCookieFunc };
