import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Category from 'components/List/Category';
import Item from 'components/List/Item';
import Pagination from 'components/List/Pagination';
import fetcher from 'lib/api';
import { METHOD, TNoticeList } from 'lib/type';
import { boardDataState } from 'recoil/board/atom';
import './NoticeList.scss';

// 공지사항 리스트
const NoticeList = () => {
    // 공지사항 일반글
    const [notice, setNotice] = useState<TNoticeList[]>([]);
    // 공지사항 고정글
    const [fixNotice, setFixNotice] = useState<TNoticeList[]>([]);
    // 게시판 info
    const [boardInfo, setBoardInfo] = useRecoilState(boardDataState);

    /**
     * 게시글 리스트 API 불러오기
     */
    const getList = async () => {
        const res = await fetcher(METHOD.GET, `/api/v1/cms/notices`, {
            pageNo: boardInfo.pageNumber,
            pageSize: boardInfo.size,
            categoryId: boardInfo.categoryId
        });

        if (res.result === 'SUCCESS') {
            setBoardInfo((prev) => ({ ...prev, totalElements: res.data.list.totalElements, totalPages: res.data.list.totalPages }));
            setNotice(res.data.list.content);
            setFixNotice(res.data.fix);
        }
    };

    /**
     * 카테고리 선택
     * @param categoryId {string}
     */
    const handleCategorySelect = (categoryId?: string) => {
        setBoardInfo((prev) => ({ ...prev, categoryId: categoryId, pageNumber: 1 }));
    };

    /**
     * 페이지 변경
     * @param pageNumber {number}
     */
    const handlePageChange = (pageNumber: number) => {
        setBoardInfo((prev) => ({ ...prev, pageNumber: pageNumber }));
    };

    useEffect(() => {
        getList();
    }, [boardInfo.pageNumber, boardInfo.size, boardInfo.categoryId]);

    return (
        <main className="board-list-wrap">
            <div className="board-list-header">
                <h1 className="board-list-header__title">
                    <span className="board-list-header__text">빗썸 공지사항</span>
                </h1>
                {/* 카테고리 */}
                <Category handleSelect={handleCategorySelect} />
            </div>
            <section className="board-list-content">
                {/* 게시글 리스트 */}
                <ul className="board-list">
                    {/* 고정글 */}
                    {fixNotice.map((item: TNoticeList) => {
                        return (
                            <Item
                                type="board-list__item--fixed"
                                title={item.title}
                                createDate={item.createDate}
                                id={item.id}
                                categoryNames={item.categoryNames}
                                key={item.id}
                            />
                        );
                    })}
                    {/* 일반글 */}
                    {notice.map((item: TNoticeList) => {
                        return (
                            <Item
                                type="board-list__item--normal"
                                title={item.title}
                                createDate={item.createDate}
                                id={item.id}
                                categoryIds={item.categoryIds}
                                key={item.id}
                            />
                        );
                    })}
                </ul>
            </section>

            {/* 페이징네이션 게시글 15개 이상이어야 pagination 노출 */}
            {boardInfo.totalElements > 15 && (
                <Pagination
                    onPageChange={handlePageChange}
                    totalElements={boardInfo.totalElements}
                    currentPage={boardInfo.pageNumber}
                    totalPages={boardInfo.totalPages}
                    pageSize={boardInfo.size}
                />
            )}
        </main>
    );
};

export default NoticeList;
