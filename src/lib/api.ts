import axios from 'axios';
import { METHOD } from './type';

// config 값 type
type TPramsProps = {
    pageNo: number;
    pageSize: number;
    categoryId?: string;
};

const apis = axios.create({
    baseURL: `${process.env.REACT_APP_CMS_URL}` // 기본 서버 주소 입력
});

/**
 * api CRUD 메서드
 * @param method {METHOD} CRUD
 * @param url {string} api url
 * @param params {TPramsProps} config
 */
const fetcher = async (method: METHOD, url: string, params?: TPramsProps) => {
    try {
        const res = await apis[method](url, { params });
        return res.data;
    } catch (error: any) {
        return error;
    }
};

export default fetcher;
