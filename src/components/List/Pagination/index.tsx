import React, { useEffect, useMemo, useState } from 'react';
import cx from 'classnames';
import FirstArrow from './Arrows/FirstArrow';
import LastArrow from './Arrows/LastArrow';
import LeftArrow from './Arrows/LeftArrow';
import RightArrow from './Arrows/RightArrow';
import { range } from 'utils/helpers';
import './Pagination.scss';

type TPaginationProp = {
    onPageChange: (v: number) => void; // 페이지 변경
    currentPage: number; // 현재 페이지
    totalElements: number; // 총 게시물
    totalPages: number; // 페이지 끝
    pageSize: number; // 페이지 사이즈
};

const Pagination = ({ onPageChange, currentPage, totalElements, totalPages, pageSize }: TPaginationProp) => {
    // 현재 보여질 페이지 넘버 영역 갯수
    const pageCount = useMemo(() => {
        if (currentPage < 5) {
            if (totalPages < 6) {
                return Math.ceil(totalElements / pageSize);
            } else {
                return 5;
            }
        } else if (currentPage === totalPages) {
            return 5;
        } else {
            return 3;
        }
    }, [currentPage, totalPages]);

    // 현재 페이지 그룹
    const currentPageGroup = useMemo(() => Math.ceil(currentPage / pageCount), [currentPage, pageCount]);
    // 전체 페이징 네이션
    const totalPageGroup = useMemo(() => Math.ceil(totalElements / pageCount), [totalElements, pageCount]);

    const paginationRange = useMemo(() => {
        const currentPageGroup = Math.ceil(currentPage / pageCount);
        let lastPageInGroup = currentPageGroup * pageCount;

        if (lastPageInGroup > totalPages) {
            lastPageInGroup = totalPages;
        }
        const firstPageInGroup = lastPageInGroup - (pageCount - 1);

        return range(firstPageInGroup, lastPageInGroup);
    }, [currentPage, totalPages, pageCount]);
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

    return (
        <nav className={cx('pagination-wrap')}>
            <ul className={cx('pagination')}>
                {/* 첫 페이지로 */}
                <li className={cx('pagination-item', { 'pagination--nondisplay-nav-item': currentPage > totalElements - 5 })}>
                    {currentPageGroup > 1 && currentPageGroup < totalPages && (
                        <button className={cx('button', 'button-arrow')} type="button" onClick={handleFirst}>
                            <FirstArrow />
                        </button>
                    )}
                </li>
                {/* 이전 페이지 */}
                {currentPage > 1 && (
                    <li className={cx('pagination-item')}>
                        <button className={cx('button', 'button-arrow')} type="button" onClick={handlePrev}>
                            <LeftArrow />
                        </button>
                    </li>
                )}

                {/* 페이지 넘버 */}
                {paginationRange.map((pageNumber) => (
                    <li key={pageNumber} className={cx('pagination-item', { 'pagination-item__current-page': currentPage === pageNumber })}>
                        <button className={cx('button')} onClick={() => onPageChange(pageNumber)}>
                            <span className={cx('pagination-item__text')}>{pageNumber}</span>
                        </button>
                    </li>
                ))}

                {/* 다음 페이지 */}
                {currentPage < totalPages && (
                    <li className={cx('pagination-item', { 'pagination--nondisplay-nav-item': currentPage > totalPages - 1 })}>
                        <button className={cx('button', 'button-arrow')} type="button" onClick={handleNext}>
                            <RightArrow />
                        </button>
                    </li>
                )}

                {/* 마지막 페이지 */}
                {currentPage < totalPages && currentPageGroup > 0 && (
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
