import React, { useEffect, useMemo, useState } from 'react';
import cx from 'classnames';
import FirstArrow from './Arrows/FirstArrow';
import LastArrow from './Arrows/LastArrow';
import LeftArrow from './Arrows/LeftArrow';
import RightArrow from './Arrows/RightArrow';
import './Pagination.scss';

type TPaginationProp = {
    onPageChange: (v: number) => void; // 페이지 변경
    currentPage: number; // 현재 페이지
    paginationRange: number[]; // 페이징네이션 숫자
    totalCount: number; // 총 페이지
    totalElements: number; // 총 게시물
    activePage: number; // focus 된 페이지
    totalPages: number; // 페이지 끝
};

const Pagination = ({ activePage, onPageChange, currentPage, paginationRange, totalElements, totalPages }: TPaginationProp) => {
    // 현재 보여질 페이지 넘버 갯수
    const [pageCount, setPageCount] = useState<number>(3);
    // 현재 페이지 그룹
    const currentPageGroup = useMemo(() => Math.ceil(currentPage / pageCount), [currentPage, pageCount]);
    // 전체 페이징 네이션
    const totalPageGroup = useMemo(() => Math.ceil(totalElements / pageCount), [totalElements, pageCount]);

    useEffect(() => {
        console.log('current--->', currentPageGroup, 'totalPageGroup--->', totalPageGroup, 'pageCount', pageCount);
        console.log('activePage--->', activePage);
        console.log('activePage--->', activePage);
        console.log('totalPages--->', totalPages);
    }, [currentPageGroup, totalPageGroup, activePage, totalPages]);

    /**
     * 제일 첫 페이지
     */
    const handleFirst = () => {
        onPageChange(1);
    };

    /**
     * 제일 끝 페이지
     */
    const handleLast = () => {
        onPageChange(totalPages);
    };

    /**
     * 다음 페이지
     */
    const handleNext = () => {
        onPageChange(currentPage + 1);
    };

    /**
     * 이전 페이지
     */
    const handlePrev = () => {
        onPageChange(currentPage - 1);
    };

    /**
     * 첫 페이지 & 마지막 페이지 목록은 5개, 나머지는 3개
     */
    useEffect(() => {
        if (currentPage < 5 || currentPage > totalElements - 5) {
            setPageCount(5);
        } else {
            setPageCount(3);
        }
    }, [currentPage, totalElements]);

    return (
        <nav className={cx('pagination-wrap')}>
            <ul className={cx('pagination')}>
                {/* 첫 페이지로 */}
                <li className={cx('pagination-item', { 'pagination--nondisplay-nav-item': activePage > totalElements - 5 })}>
                    {currentPageGroup > 1 && currentPageGroup < totalPageGroup && (
                        <button className={cx('button', 'button-arrow')} type="button" onClick={handleFirst}>
                            <FirstArrow />
                        </button>
                    )}
                </li>
                {/* 이전 페이지 */}
                {currentPageGroup > 1 && (
                    <li className={cx('pagination-item')}>
                        <button className={cx('button', 'button-arrow')} type="button" onClick={handlePrev}>
                            <LeftArrow />
                        </button>
                    </li>
                )}

                {/* 페이지 넘버 */}
                {paginationRange.map((currentNumber) => (
                    <li key={currentNumber} className={cx('pagination-item', { 'pagination-item__current-page': activePage === currentNumber })}>
                        <button className={cx('button')} onClick={() => onPageChange(currentNumber)}>
                            <span className={cx('pagination-item__text')}>{currentNumber}</span>
                        </button>
                    </li>
                ))}

                {/* 다음 페이지 */}
                {currentPageGroup < totalPageGroup && (
                    <li className={cx('pagination-item', { 'pagination--nondisplay-nav-item': currentPage > totalPages - 1 })}>
                        <button className={cx('button', 'button-arrow')} type="button" onClick={handleNext}>
                            <RightArrow />
                        </button>
                    </li>
                )}

                {/* 마지막 페이지 */}
                {currentPageGroup > 0 && (
                    <li className={cx('pagination-item', { 'pagination--nondisplay-nav-item': currentPage === totalPages })}>
                        <button className={cx('button', 'button-arrow')} type="button" onClick={handleLast}>
                            <LastArrow />
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
