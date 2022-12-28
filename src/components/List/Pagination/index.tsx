import React, { useEffect } from 'react';
import cx from 'classnames';
import LeftArrow from './Arrows/LeftArrow';
import RightArrow from './Arrows/RightArrow';
import PagenationNumber from './PagenationNumber';
import './Pagenation.css';

type Prop = {
    onPageChange: (v: number) => void;
    currentPage: number;
    pagenationRange: number[];
};

const Pagenation = ({ onPageChange, currentPage, pagenationRange }: Prop) => {
    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrev = () => {
        onPageChange(currentPage - 1);
    };

    const firstPage = pagenationRange[0]; // 첫 페이지 시 LeftArrow disabled 효과 추가해야함

    const lastPage = pagenationRange[-1]; // 마지막페이지 시 RightArrow disabled 효과 추가해야함

    if (currentPage === 0 || pagenationRange.length < 2) return null;

    return (
        <ul className={cx('pagenation-wrap')}>
            <div className={cx(`arrow-wrap`)} onClick={onPrev}>
                <LeftArrow />
            </div>
            {pagenationRange.map((v, i) => (
                <li key={i} className={cx('pagenation-number-wrap')}>
                    <PagenationNumber onClick={() => onPageChange(v)} num={v} isCurrent={v === currentPage} />
                </li>
            ))}
            <div className={cx(`arrow-wrap`)} onClick={onNext}>
                <RightArrow />
            </div>
        </ul>
    );
};

export default Pagenation;
