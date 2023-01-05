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

export interface IPath {
    boardID: any;
}

export interface IBoardState {
    totalCount: number;
    currentPage: number;
    limit: number;
}

// 공지사항 리스트
export type TNoticeList = {
    id: string;
    title: string; // 제목
    category_name: string[]; // 카테고리명
    category_ids: string[];
    screen_date: string; // 작성일
    thumbnail_url: string; // 썸네일 url
};

// 공지사항 view
export type TNoticeView = {
    id: string;
    title: string; // 제목
    category_name: string[]; // 카테고리명
    category_ids: string[];
    content: string; // 내용물
    read_count: number; // 조회수
    screen_date: string; // 작성일
    share_title: string;
    share_description: string; // 공유 내용
    share_file_id: string;
    share_button_name: string; // sns 버튼
    file_id: string;
    file_name: string; // 파일명
    file_size: number; // 파일 사이즈
};

// 공지사항 카테고리
export type TCategory = {
    id: string;
    name: string; // 카테고리명
};
