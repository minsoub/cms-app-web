import { atom } from 'recoil';
import {  TPagination } from 'lib/type';

export const boardDataState = atom<TPagination>({
    key: 'boardDataState',
    default: {
        totalElements: 0, // 총 게시글
        pageNumber: 1, // 현재 페이지
        totalPages: 0, // 총 페이지
        size: 15, // 한 페이지당 게시글 제한 수 limit
        categoryId: undefined // 카테고리 ID
    }
});

export const categoryState = atom<Map<string, string>>({
    key: 'categoryState',
    default: new Map<string, string>()
});
