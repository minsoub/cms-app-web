import React, {useEffect, useState} from 'react';
import Category from "components/List/Category";
import Item from "components/List/Item";
import Pagination from "components/List/Pagination";
import fetcher from 'lib/api';
import { METHOD, IItemProps } from 'lib/type';

const NoticeList = () => {
    const [notice, setNotice] = useState<IItemProps[]>()
    const [fixNotice, setFixNotice] = useState<IItemProps[]>()
    const [categoryList, setCategoryList] = useState<string[]>([])

    /**
     * 게시글 리스트 API
     */
    const getList = async () => {
        const res = await fetcher(METHOD.GET, `/v1/api/cms/notice/list`);
        setNotice(res.data.list)
        setFixNotice(res.data.fix)
        console.log('res--->', res.data)
    }

    /**
     * 카테고리 API
     */
    const getCategory = async () => {
        const res = await fetcher(METHOD.GET, `/v1/api/cms/notice/category`);
        const data = res.data.category_list;
        setCategoryList(data)
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
            <Pagination />
        </main>
    )
}

export default NoticeList;