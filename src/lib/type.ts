// API 통신 메서드
export enum EMehod {
    GET = 'get'
}

// 페이징네이션
export type TPagination = {
    totalPages: number; // 총 페이지 수
    totalElements: number; // 총 게시글
    size: number;
    pageNumber: number;
    categoryId?: string; // 카테고리 아이디
};

// 공지사항 List API response
export interface IBoardResponse {
    pageable: {
        sort: {
            empty: boolean;
            sorted: boolean;
            unsorted: boolean;
        };
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    };
    first: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    empty: boolean;
}

// 공지사항 리스트
export type TNoticeList = {
    id: string; // 게시글 id
    title: string; // 제목
    createDate: string; // 카테고리명
    categoryNames?: string[];
    categoryIds?: string[];
};

//
// 공지사항 Detail
export interface INoticeDetail {
    id: string;
    title: string; // 제목
    categoryNames: string[]; // 카테고리명
    categoryIds: string[];
    content: string; // 내용물
    readCount: number; // 조회수
    createDate: string; // 작성일
    shareTitle: string;
    shareDescription: string; // 공유 내용
    shareFileId: null;
    shareButtonName: string; // sns 버튼
    fileId: null;
    fileName: null; // 파일명
    fileSize: null; // 파일 사이즈
};

// 공지사항 카테고리
export interface ICategory  {
    id: string; // 카테고리 ID
    name: string; // 카테고리명
};
