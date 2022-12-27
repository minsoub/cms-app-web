import React, {useEffect, useState} from 'react';
import Category from "components/List/Category";
import Item from "components/List/Item";
import Pagination from "components/List/Pagination";
import fetcher from 'lib/api';
import { METHOD, IItemProps } from 'lib/type';

// 공지사항 리스트
const NoticeList = () => {
    // 공지사항 일반글
    const [notice, setNotice] = useState<IItemProps[]>()
    // 공지사항 고정글
    const [fixNotice, setFixNotice] = useState<IItemProps[]>()
    // 공지사항 카테고리
    const [categoryList, setCategoryList] = useState<string[]>([])

    /**
     * 게시글 리스트 API 불러오기
     */
    const getList = async () => {
        const res = await fetcher(METHOD.GET, `/v1/api/cms/notice/list`);
        setNotice(res.data.list)
        setFixNotice(res.data.fix)
        console.log('res--->', res.data)
    }

    /**
     * 카테고리 API 불러오기
     */
    const getCategory = async () => {
        const res = await fetcher(METHOD.GET, `/v1/api/cms/notice/category`);
        const data = res.data.category_list;
        setCategoryList(data)
    }

    const handleClick = (pageNumber: number) => {

    }

    useEffect(() => {
        getList()
        getCategory()
    }, [])

    return (
        <main>
            <h1>빗썸 공지사항</h1>

            {/* 카테고리 */}
            <Category categoryName={categoryList}/>

            {/* 게시글 리스트 */}
            <ul>
                {/* 고정글 */}
                {fixNotice?.map((item) => {
                    return (
                        <Item title={item.title} date={item.date} id={item.id}/>
                    )
                })}
                {/* 일반글 */}
                {notice?.map((item) => {
                    return (
                        <Item title={item.title} date={item.date} id={item.id}/>
                    )
                })}
            </ul>

            {/* 페이징네이션 */}
            {/*<Pagination*/}
            {/*    handleClick={handleClick}*/}
            {/*/>*/}
        </main>
    )
}

export default NoticeList;