import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Category from 'components/List/Category';
import Item from 'components/List/Item';
import Pagination from 'components/List/Pagination';
import fetcher from 'lib/api';
import { METHOD, TNoticeList } from 'lib/type';
import { boardDataState } from 'recoil/board/atom';
import usePagination from 'hooks/usePagination';

// 공지사항 리스트
const NoticeList = () => {
    // 공지사항 일반글
    const [notice, setNotice] = useState<TNoticeList[]>([]);
    // 공지사항 고정글
    const [fixNotice, setFixNotice] = useState<TNoticeList[]>([]);
    // 게시판 info
    const [boardInfo, setBoardInfo] = useRecoilState(boardDataState);

    const { pagenationRange, totalPageCount } = usePagination({
        pageNumber: boardInfo.pageNumber,
        totalElements: boardInfo.totalElements,
        pageSize: boardInfo.size,
    });

    /**
     * 게시글 리스트 API 불러오기
     */
    const getList = async () => {
        const res = await fetcher(METHOD.GET, `/api/v1/cms/notice/list?pageNo=${boardInfo.pageNumber}&pageSize=${boardInfo.size}`);
        console.log('게시글 리스트 res--->', res);

        if (res.result === 'SUCCESS') {
            setBoardInfo((prev) => ({ ...prev, totalElements: res.data.list.totalElements, totalPages: res.data.list.totalPages }));
            setNotice(res.data.list.content);
            setFixNotice(res.data.fix);
        }
    };

    /**
     * 카테고리 선택
     * @param value {string}
     */
    const handleCategorySelect = (value: string) => {};

    /**
     * 페이지 변경
     * @param pageNumber {number}
     */
    const handlePageChange = (pageNumber: number) => {
        setBoardInfo((prev) => ({ ...prev, pageNumber: pageNumber }));
    };

    useEffect(() => {
        getList();
    }, [boardInfo.pageNumber, boardInfo.size]);

    return (
        <main>
            <h1>빗썸 공지사항</h1>

            {/* 카테고리 */}
            <Category handleSelect={handleCategorySelect} />

            <hr />

            {/* 게시글 리스트 */}
            <ul>
                {/* 고정글 */}
                {fixNotice.map((item: TNoticeList) => {
                    return <Item title={item.title} createDate={item.createDate} id={item.id} />;
                })}
                {/* 일반글 */}
                {notice.map((item: TNoticeList) => {
                    return <Item title={item.title} createDate={item.createDate} id={item.id} />;
                })}
            </ul>

            <hr />

            {/* 페이징네이션 */}
            <Pagination onPageChange={handlePageChange} currentPage={boardInfo.pageNumber} pagenationRange={pagenationRange}  totalCount={totalPageCount} />
        </main>
    );
};

export default NoticeList;
