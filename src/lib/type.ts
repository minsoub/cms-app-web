

// API 통신 메서드
export enum METHOD {
    GET = 'get',
}

export interface IItemProps {
    title: string;
    date: string;
    id: string;
}

export interface ICategoryProps {
    value?: string;
    handleSelect: (value: string) => void;
}

// 게시글 파라미터
export interface IPath {
    boardID: any;
}

export type TPagination = {
    totalPages: number;
    totalElements: number;
    size: number;
    pageNumber: number;
};

// 게시물 pagination
export interface IBoardState {
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
    categoryNames: string[];
};

// 공지사항 Detail
export type TNoticeDetail = {
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
export type TCategory = {
    id: string; // 카테고리 ID
    name: string; // 카테고리명
};
