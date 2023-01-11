import React, { useEffect, useMemo, useState } from 'react';
import cx from 'classnames';
import FirstArrow from './Arrows/FirstArrow';
import LastArrow from './Arrows/LastArrow';
import LeftArrow from './Arrows/LeftArrow';
import RightArrow from './Arrows/RightArrow';
import './Pagenation.scss';

type TPaginationProp = {
    // 페이지 변경
    onPageChange: (v: number) => void;
    // 현재 페이지
    currentPage: number;
    paginationRange: number[];
    // 총 페이지
    totalCount: number;
    // 총 게시물
    totalElements: number;
    // focus된 페이지
    activePage: number;
};

const Pagination = ({ activePage, onPageChange, currentPage, paginationRange, totalElements }: TPaginationProp) => {
    // 현재 보여질 페이지들의 갯수
    const [pageCount, setPageCount] = useState<number>(3);
    // 현재 페이지 그룹
    const currentPageGroup = useMemo(() => Math.ceil(currentPage / pageCount), [currentPage, pageCount]);
    // 전체 페이징 네이션
    const totalPageGroup = useMemo(() => Math.ceil(totalElements / pageCount), [totalElements, pageCount]);

    useEffect(() => {
        console.log('current--->', currentPageGroup, 'totalPageGroup--->', totalPageGroup, 'pageCount', pageCount);
    }, [currentPageGroup, totalPageGroup]);
    /**
     * 제일 첫 페이지
     */
    const onFirst = () => {
        onPageChange(1);
    };

    /**
     * 제일 끝 페이지
     */
    const onLast = () => {
        onPageChange(totalElements);
    };

    /**
     * 다음 페이지
     */
    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    /**
     * 이전 페이지
     */
    const onPrev = () => {
        onPageChange(currentPage - 1);
    };

    useEffect(() => {
        /**
         * 첫/마지막 페이지그룹은 5개, 나머지는 3개
         */
        if (currentPage < 5 || currentPage > totalElements - 5) {
            setPageCount(5);
        } else {
            setPageCount(3);
        }
    }, [currentPage, totalElements]);

    if (currentPage === 0 || paginationRange.length < 2) return null;

    return (
        <nav className={cx('pagination-wrap')}>
            <ul className={cx('pagination')}>
                {/* 첫 페이지로 */}
                <li className={cx('pagination-item', { 'pagination--nondisplay-nav-item': currentPage > totalElements - 5 })}>
                    {currentPageGroup > 1 && currentPageGroup < totalPageGroup && (
                        <button className={cx('button', 'button-arrow')} type="button" onClick={onFirst}>
                            <FirstArrow />
                        </button>
                    )}
                </li>
                {/* 이전 페이지 */}
                {currentPageGroup > 1 && (
                    <li className={cx('pagination-item')}>
                        <button className={cx('button', 'button-arrow')} type="button" onClick={onPrev}>
                            <LeftArrow />
                        </button>
                    </li>
                )}
                {paginationRange.map((v) => (
                    <li key={v} className={cx('pagination-item', { 'pagination-item__current-page': currentPage === v })}>
                        <button className={cx('button')} onClick={() => onPageChange(v)}>
                            <span className={cx('pagination-item__text')}>{v}</span>
                        </button>
                    </li>
                ))}
                {/* 다음 페이지 */}
                {currentPageGroup < totalPageGroup && (
                    <li className={cx('pagination-item')}>
                        <button className={cx('button', 'button-arrow')} type="button" onClick={onNext}>
                            <RightArrow />
                        </button>
                    </li>
                )}
                {/* 마지막 페이지 */}
                <li className={cx('pagination-item', { 'pagination--active-nav-item': currentPage < totalElements - 5 })}>
                    {currentPageGroup > 1 && currentPageGroup < 4 && (
                        <button className={cx('button', 'button-arrow')} type="button" onClick={onLast}>
                            <LastArrow />
                        </button>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
