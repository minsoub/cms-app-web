import { atom } from 'recoil';
import {IBoardState} from "lib/type";

export const boardDataState = atom<IBoardState>({
    key: 'board',
    default: {
        // 총 게시글
        totalCount:0,
        // 현재 페이지
        currentPage:1,
        // 한 페이지당 게시글 제한 수
        limit:10,
    }
});
