const env = process.env.REACT_APP_ENV;

export const envNameConfig = {
    dev: 'dev',
    qc: 'qc',
    uat: 'uat',
    production: 'production',
};

const listConfigs = {
    [envNameConfig.dev]: {
        API_SERVER: 'http://localhost:5002/',
    },
    [envNameConfig.production]: {
        API_SERVER: 'https://chater-server.now.sh/',
    },
};

export const Config = listConfigs[env];
export default env;
