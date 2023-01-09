import React, { useEffect } from 'react';
import cx from 'classnames';
import LeftArrow from './Arrows/LeftArrow';
import RightArrow from './Arrows/RightArrow';
import PaginationNumber from './PaginationNumber';
import './Pagination.css';

type TPaginationProp = {
    onPageChange: (v: number) => void;
    currentPage: number;
    paginationRange: number[];
    totalCount: number;
};

const Pagination = ({ onPageChange, currentPage, paginationRange }: TPaginationProp) => {
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
        <ul className={cx('pagination-wrap')}>
            <div className={cx(`arrow-wrap`)} onClick={onPrev}>
                <LeftArrow />
            </div>
            {paginationRange.map((v, i) => (
                <li key={i} className={cx('pagination-number-wrap')}>
                    <PaginationNumber onClick={() => onPageChange(v)} num={v} isCurrent={v === currentPage} />
                </li>
            ))}
            <div className={cx(`arrow-wrap`)} onClick={onNext}>
                <RightArrow />
            </div>
        </ul>
    );
};

export default Pagination;
