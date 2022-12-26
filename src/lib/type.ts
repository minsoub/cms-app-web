// API 통신 메서드
export enum METHOD {
    GET = 'get',
}

export interface IItemProps {
    title:string,
    date:string,
    id: string
}

export interface ICategoryProps {
    categoryName: string[]
}