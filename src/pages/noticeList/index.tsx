import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Category from 'components/List/Category';
import Item from 'components/List/Item';
import Pagination from 'components/List/Pagination';
import fetcher from 'lib/api';
import { METHOD, IItemProps } from 'lib/type';
import './NoticeList.scss';
import { boardDataState } from 'recoil/board/atom';
import usePagenation from 'hooks/usePagenation'

// 공지사항 리스트
const NoticeList = () => {
    // 공지사항 일반글
    const [notice, setNotice] = useState<IItemProps[]>();
    // 공지사항 고정글
    const [fixNotice, setFixNotice] = useState<IItemProps[]>();

    const [boardInfo, setBoardInfo] = useRecoilState(boardDataState);

    const { pagenationRange } = usePagenation({
        totalCount: boardInfo.totalCount,
        pageSize: boardInfo.limit,
    });


    /**
     * 게시글 리스트 API 불러오기
     */
    const getList = async () => {
        const res = await fetcher(METHOD.GET, `/v1/api/cms/notice/list`);
        console.log('res--->', res);

        if (res.status === 200) {
            setBoardInfo((prev) => ({ ...prev, totalCount: res.total }));
            setNotice(res.data.list);
            setFixNotice(res.data.fix);
        }
    };

    const handleCategorySelect = (value: string) => {};

    const handlePageChange = (pageNumber: number) => {
        setBoardInfo((prev) => ({ ...prev, currentPage: pageNumber }));
    };

    useEffect(() => {
        getList();
    }, [boardInfo.currentPage, boardInfo.limit]);

    useEffect(() => {
        console.log({ boardInfo });
    }, [boardInfo]);

    return (
        <main className="wrap">
            <div className="header">
                <h1 className="page-title">
                    <span className="page-title__text">빗썸 공지사항</span>
                </h1>
                {/* 카테고리 */}
                <Category handleSelect={handleCategorySelect}/>
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
            <Pagination onPageChange={handlePageChange} currentPage={boardInfo.currentPage} pagenationRange={pagenationRange} />
        </main>
    );
};

export default NoticeList;
