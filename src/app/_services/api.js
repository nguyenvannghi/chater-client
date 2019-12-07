import API from './index';
import { Config } from '../../config/index';

const singleton = Symbol('key for first');
const singletonEnforcer = Symbol('key for assign');

const ApiSetting = (restParams = {}) => {
    class ApiConfig extends API {
        constructor(enforcer) {
            if (enforcer !== singletonEnforcer) {
                throw new Error('Cannot construct singleton');
            }
            // const headers = {
            //     'X-merchant-site': 'merchant-site',
            // };
            super(Config, null, restParams);
        }

        static get getInstance() {
            if (!this[singleton]) {
                this[singleton] = new ApiConfig(singletonEnforcer);
            }

            return this[singleton];
        }
    }

    return ApiConfig.getInstance;
};

export default ApiSetting;
