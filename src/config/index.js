const env = process.env.REACT_APP_ENV;

export const envNameConfig = {
    dev: 'dev',
    qc: 'qc',
    uat: 'uat',
    production: 'production',
};

const listConfigs = {
    [envNameConfig.dev]: {
        API_SERVER: 'https://fakerestapi.azurewebsites.net/api',
    },
    [envNameConfig.qc]: {
        API_SERVER: 'any',
    },
    [envNameConfig.uat]: {
        API_SERVER: 'any',
    },
    [envNameConfig.production]: {
        API_SERVER: 'any',
    },
};

export const Config = listConfigs[env];
export default env;
