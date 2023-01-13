import axios, { AxiosRequestConfig } from 'axios';
import { METHOD } from './type';

const apis = axios.create({
    baseURL: `${process.env.REACT_APP_CMS_URL}` // 기본 서버 주소 입력
});

/**
 * api CRUD 메서드
 * @param method {METHOD} CRUD
 * @param url {string} api url
 * @param config {AxiosRequestConfig} config
 */
const fetcher = async (method: METHOD, url: string, config?: AxiosRequestConfig) => {
    try {
        const res = await apis[method](url, config);
        return res.data;
    } catch (error: any) {
        return error;
    }
};

export default fetcher;
