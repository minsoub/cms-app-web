// API 통신 메서드
export enum METHOD {
    GET = 'get',
}

export interface IItemProps {
    type?: string,
    title:string,
    date:string,
    id: string
}

export interface ICategoryProps {
    value?: string,
    handleSelect: (value:string) => void;
}

export interface IPath {
    boardID: any
}

export interface IBoardState {
    totalCount: number,
    currentPage: number,
    limit: number,
    data: null,
    title: string,
    categoryItem: string,
}