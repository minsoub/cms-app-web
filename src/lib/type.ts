// API 통신 메서드
export enum METHOD {
    GET = 'get',
}

export interface IItemProps {
    type?: string,
    title:string,
    create_date:string,
    id: string
}

export interface ICategoryProps {
    categoryName: string[]
}