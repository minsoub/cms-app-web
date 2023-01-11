import React from 'react';
import cx from 'classnames';
import FirstArrow from './Arrows/FirstArrow';
import LastArrow from './Arrows/LastArrow';
import LeftArrow from './Arrows/LeftArrow';
import RightArrow from './Arrows/RightArrow';
import './Pagenation.scss';

type TPaginationProp = {
    onPageChange: (v: number) => void;
    postsPerPage: number;
    totalPosts: number;
    totalPage: number;
    currentPage: number;
    paginationRange: number[];
    totalCount: number;
};

const Pagination = ({ onPageChange, currentPage, paginationRange, totalPosts }: TPaginationProp) => {

    // 현재 보여지는 페이지들
    const pageNumbers: number[] = [];
    // 현재 보여질 페이지들의 갯수
    let pageCount = 3;
    // 첫/마지막 페이지그룹은 5개, 나머지는 3개
    if(currentPage < 5 || currentPage > totalPosts - 5) {
        pageCount =5;
    }

    let currentPageGroup = Math.ceil(currentPage / pageCount);
    let totalPageGroup = Math.ceil(totalPosts / pageCount);
    // 현재 보여질 페이지들중 마지막 페이지
    let lastPageInGroup = currentPageGroup * pageCount;
    if(lastPageInGroup > totalPosts) {
        lastPageInGroup = totalPosts;
    }
    // 현재 보여질 페이지들중 첫번째 페이지
    let firstPageInGroup = lastPageInGroup - (pageCount - 1);

    for (let i: number = firstPageInGroup; i <= lastPageInGroup; i++) {
        pageNumbers.push(i);
    }

    // 제일 첫 페이지
    const onFirst = () => {
        onPageChange(1);
    }
    // 제일 끝 페이지
    const onLast = () => {
        onPageChange(totalPosts);
    }
    // 다음 페이지
    const onNext = () => {
        onPageChange(lastPageInGroup + 1);
    };
    // 이전 페이지
    const onPrev = () => {
        onPageChange(firstPageInGroup - 1);
    };

    return (
        <div className={cx('pagination-wrapper')}>
            <ul className={cx('pagination')}>
                {/* 첫 페이지로 */}
                <li className={cx('pagination-item', {'pagination--nondisplay-nav-item': currentPage > totalPosts - 5})}>
                    {currentPageGroup > 1 && currentPageGroup < totalPageGroup && (
                        <button type="button" onClick={onFirst}>
                            <FirstArrow />
                        </button>
                    )}
                </li>
                {/* 이전 페이지 */}
                {currentPageGroup > 1 && (
                    <li className={cx('pagination-item')}>
                        <button type="button" onClick={onLast}>
                            <LeftArrow />
                        </button>
                    </li>
                )}
                {pageNumbers.map((number: number, index: number) => {
                    return (
                        <li key={index} className={cx('pagination-item', {'pagination-item__current-page': currentPage === number })}>
                            <button type="button" onClick={() => onPageChange(number)}>
                                <span className={cx('pagination-item__text')}>{number}</span>
                            </button>
                        </li>
                    )
                })}
                {/* 다음 페이지 */}
                {currentPageGroup < totalPageGroup && (
                    <li className={cx('pagination-item')}>
                        <button type="button" onClick={onNext}>
                            <RightArrow />
                        </button>
                    </li>
                )}
                {/* 마지막 페이지 */}
                <li className={cx('pagination-item', {'pagination--active-nav-item': currentPage < totalPosts - 5})}>
                    {currentPageGroup > 1 && currentPageGroup < totalPageGroup && (
                        <button type="button" onClick={onLast}>
                            <LastArrow />
                        </button>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
