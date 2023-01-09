import { atom } from 'recoil';
import { TPagination, TNoticeList } from 'lib/type';

export const boardDataState = atom<TPagination>({
    key: 'boardDataState',
    default: {
        totalElements: 0, // 총 게시글
        pageNumber: 1, // 현재 페이지
        totalPages: 0, // 총 페이지
        size: 10, // 한 페이지당 게시글 제한 수 limit
    },
});