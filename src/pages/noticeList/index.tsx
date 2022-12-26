import React, {useEffect, useState} from 'react';
import Category from "components/List/Category";
import Item from "components/List/Item";
import Pagination from "components/List/Pagination";
import fetcher from 'lib/api';
import { METHOD, IItemProps } from 'lib/type';
import './NoticeList.scss';

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
        <main className="wrap">
            <div className="header">
                <h1 className="page-title">
                    <span className="page-title__text">빗썸 공지사항</span>
                </h1>
            
                {/* 카테고리 */}
                <Category categoryName={categoryList}/>
            </div>


            <section className="sub-contents">
                {/* 게시글 리스트 */}
                <ul className="board-list">
                    {/* 고정글 */}
                    {fixNotice?.map((item) => {
                        return (
                            <Item type="fixed" title={item.title} create_date={item.create_date} id={item.id}/>
                        )
                    })}
                    {/* 일반글 */}
                    {notice?.map((item) => {
                        return (
                            <Item type="normal" title={item.title} create_date={item.create_date} id={item.id}/>
                        )
                    })}
                </ul>
            </section>

            {/* 페이징네이션 */}
            <Pagination />
        </main>
    )
}

export default NoticeList;