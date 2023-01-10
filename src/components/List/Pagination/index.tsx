import React, { useEffect } from 'react';
import cx from 'classnames';
import FirstArrow from './Arrows/FirstArrow';
import LastArrow from './Arrows/LastArrow';
import LeftArrow from './Arrows/LeftArrow';
import RightArrow from './Arrows/RightArrow';
import './Pagination.scss';

type TPaginationProp = {
    onPageChange: (v: number) => void;
    currentPage: number;
    paginationRange: number[];
    totalCount: number;
    totalElements: number;
};

const Pagination = ({ onPageChange, currentPage, paginationRange, totalCount, totalElements }: TPaginationProp) => {

    // 현재 보여질 페이지들의 갯수
    let pageCount = 3;
    // 첫/마지막 페이지그룹은 5개, 나머지는 3개
    if(currentPage < 5 || currentPage > totalElements - 5) {
        pageCount = 5;
    }

    let currentPageGroup = Math.ceil(currentPage / pageCount);
    let totalPageGroup = Math.ceil(totalElements / pageCount);

    // 제일 첫 페이지
    const onFirst = () => {
        onPageChange(1);
    }
    // 제일 끝 페이지
    const onLast = () => {
        onPageChange(totalElements);
    }
    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrev = () => {
        onPageChange(currentPage - 1);
    };

    useEffect(() => {
        console.log('onPageChange--->', onPageChange, '|', currentPage, '|', paginationRange);
    }, []);

    const firstPage = paginationRange[0]; // 첫 페이지 시 LeftArrow disabled 효과 추가해야함

    const lastPage = paginationRange[-1]; // 마지막페이지 시 RightArrow disabled 효과 추가해야함

    if (currentPage === 0 || paginationRange.length < 2) return null;

    return (
        <nav className={cx('pagination-wrap')}>
            <ul className={cx('pagination')}>
                {/* 첫 페이지로 */}
                <li className={cx('pagination-item', {'pagination--nondisplay-nav-item': currentPage > totalElements - 5})}>
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
                {paginationRange.map((v, i) => (
                    <li key={i} className={cx('pagination-item', {'pagination-item__current-page': currentPage === v })}>
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
                <li className={cx('pagination-item', {'pagination--active-nav-item': currentPage < totalElements - 5})}>
                    {currentPageGroup > 1 && currentPageGroup < totalPageGroup && (
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
