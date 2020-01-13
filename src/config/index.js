const env = process.env.REACT_APP_ENV;

export const envNameConfig = {
    dev: 'dev',
    production: 'production',
};

const listConfigs = {
    [envNameConfig.dev]: {
        API_SERVER: 'http://localhost:5002/',
        API_SOCKET: 'ws://localhost:5002/subscriptions',
    },
    [envNameConfig.production]: {
        API_SERVER: 'https://chater-server.now.sh/',
        API_SOCKET: 'wss://chater-server.now.sh/subscriptions',
    },
};

export const Config = listConfigs[env];
export default env;
