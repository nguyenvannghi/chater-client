const LocalStorageKey = {
    username: 'username',
    avatar_url: 'avatar_url',
    routerList: 'routerList',
};

const LocalStorageServices = {
    setItem(key, value) {
        localStorage.setItem(key, value);
    },

    getItem(key) {
        return localStorage.getItem(key);
    },

    getItemJson(key) {
        return JSON.parse(localStorage.getItem(key));
    },

    setItemJson(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    removeItem(key) {
        localStorage.removeItem(key);
    },
    removeAll() {
        Object.keys(LocalStorageKey).forEach(item => {
            window.localStorage.removeItem(item);
        });
    },
};

export { LocalStorageServices, LocalStorageKey };
