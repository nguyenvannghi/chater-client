/* eslint-disable class-methods-use-this */
import axios from 'axios';

class API {
    constructor(baseUrl, headersConfig, restParams) {
        const timeout = restParams.timeout ? restParams.timeout : 5000;

        this.http = axios.create({ baseURL: baseUrl.API_SERVER, timeout });

        this.baseUrl = baseUrl;
        this.headersConfig = headersConfig || null;

        this.http.interceptors.response.use(
            response => {
                return response;
            },
            err => {
                const { response } = err;
                if (response) {
                    switch (response.status) {
                        case 401: // Unauthorized (khong co quyen truy cap)
                            this.logOutCall();
                            return;
                        case 403: // Forbidden (cam)
                            // history.push(routerHasLogin.error403);
                            return;
                        default:
                            Promise.reject(err);
                    }
                }
                Promise.reject(err);
            },
        );
    }

    async checkToken() {
        return true;
    }

    // for login when the first time do not use headers
    fetch(url, params, method) {
        return axios({
            baseURL: this.baseUrl.API_SERVER,
            method: method || 'GET',
            url,
            data: params,
        });
    }

    async get(url, params) {
        await this.checkToken();
        const paramsConfig = {
            params,
            headers: this.headers,
        };
        return this.http.get(url, paramsConfig);
    }

    async put(path, payload) {
        await this.checkToken();
        return this.http({
            data: payload,
            method: 'PUT',
            url: path,
            headers: this.headers,
        });
    }

    async post(url, payload) {
        await this.checkToken();
        return this.http({
            data: payload,
            method: 'POST',
            url,
            headers: this.headers,
        });
    }

    async patch(path, payload) {
        await this.checkToken();
        return this.http({
            data: payload,
            method: 'PATCH',
            url: path,
            headers: this.headers,
        });
    }

    async delete(url, payload) {
        await this.checkToken();
        return this.http({
            data: payload,
            method: 'DELETE',
            url,
            headers: this.headers,
        });
    }

    async downloadFile(url, payload, method) {
        await this.checkToken();
        return this.http({
            url,
            method: method || 'GET',
            headers: this.headers,
            data: payload,
            responseType: 'blob',
        });
    }
}

export default API;
