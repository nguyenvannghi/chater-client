const env = process.env.REACT_APP_ENV;

export const envNameConfig = {
    dev: 'dev',
    qc: 'qc',
    uat: 'uat',
    production: 'production',
};

const listConfigs = {
    [envNameConfig.dev]: {
        API_SERVER: 'https://chater-server.nghiweb.now.sh/',
    },
    [envNameConfig.qc]: {
        API_SERVER: 'https://chater-server.nghiweb.now.sh/',
    },
    [envNameConfig.uat]: {
        API_SERVER: 'https://chater-server.nghiweb.now.sh/',
    },
    [envNameConfig.production]: {
        API_SERVER: 'https://chater-server.nghiweb.now.sh/',
    },
};

export const Config = listConfigs[env];
export default env;
