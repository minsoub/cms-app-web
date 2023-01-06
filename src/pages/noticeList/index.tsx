import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Category from 'components/List/Category';
import Item from 'components/List/Item';
import Pagination from 'components/List/Pagination';
import fetcher from 'lib/api';
import { METHOD, IItemProps, TNoticeView } from 'lib/type';
import { boardDataState } from 'recoil/board/atom';
import usePagination from 'hooks/usePagenation';
// 공지사항 리스트
const NoticeList = () => {
    // 공지사항 일반글
    const [notice, setNotice] = useState<TNoticeView[]>([]);
    // 공지사항 고정글
    const [fixNotice, setFixNotice] = useState<TNoticeView[]>([]);

    const [boardInfo, setBoardInfo] = useRecoilState(boardDataState);

    const { paginationRange } = usePagination({
        totalCount: boardInfo.totalCount,
        pageSize: boardInfo.limit,
    });

    // 페이지 숫자
    const pageNo = 0;
    // 페이지 위치
    const pageSize = 15;

    /**
     * 게시글 리스트 API 불러오기
     */
    const getList = async () => {
        const res = await fetcher(METHOD.GET, `/api/v1/cms/notice/list?pageNo=${pageNo}&pageSize=${pageSize}`);
        console.log('게시글 리스트 res--->', res);

        if (res.result === "SUCCESS") {
            console.log('13121313131');
            setBoardInfo((prev) => ({ ...prev, totalCount: res.total }));
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
        setBoardInfo((prev) => ({ ...prev, currentPage: pageNumber }));
    };

    useEffect(() => {
        getList();
    }, [boardInfo.currentPage, boardInfo.limit]);

    useEffect(() => {
        console.log({ fixNotice });
    }, [fixNotice]);

    return (
        <main>
            <h1>빗썸 공지사항</h1>

            {/* 카테고리 */}
            <Category handleSelect={handleCategorySelect} />

            {/* 게시글 리스트 */}
            <ul>
                {/* 고정글 */}
                {fixNotice?.map((item) => {
                    return <Item title={item.title} date={item.screen_date} id={item.id} />;
                })}
                {/* 일반글 */}
                {notice?.map((item) => {
                    return <Item title={item.title} date={item.screen_date} id={item.id} />;
                })}
            </ul>

            {/* 페이징네이션 */}
            <Pagination onPageChange={handlePageChange} currentPage={boardInfo.currentPage} paginationRange={paginationRange} />
        </main>
    );
};

export default NoticeList;
