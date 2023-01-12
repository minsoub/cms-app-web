import { atom } from 'recoil';
import { TPagination } from 'lib/type';

export const boardDataState = atom<TPagination>({
    key: 'boardDataState',
    default: {
        numberOfElements: 0, // 총 게시글
        pageNumber: 0, // 현재 페이지
        totalPages: 0, // 총 페이지
        size: 15, // 한 페이지당 게시글 제한 수 limit
        categoryId: 'ec73b5641d7b4c4ab8e56ec533c59e09' // 카테고리 ID
    }
});
