import { useMemo } from 'react';
import { range } from '../utils/helpers';

type Prop = {
    pageNumber: number;
    totalElements: number;
    pageSize: number;
};

const usePagination = ({ pageNumber, totalElements, pageSize }: Prop) => {
    const range = (start: number, end: number) => {
        const length = end - start + 1;
        return Array.from({ length }, (_, index) => index + start);
    };

    const totalPageCount = useMemo(() => {
        return Math.ceil(totalElements / pageSize);
    }, [totalElements, pageSize]);

    // pagenationRange 표시개수
    const pageCount = useMemo(() => {
        if (pageSize < 5) {
            return 5;
        } else if (pageSize > totalPageCount - 2) {
            return 3;
        } else {
            return 0;
        }
    }, [pageSize, totalPageCount]);

    // 첫번째 페이징네이션 영역
    const prePageNationRange = useMemo(() => {
        if (pageCount !== 5) {
            return [1];
        }
        return [];
    }, [pageCount]);

    const pagenationRange = useMemo(() => {
        const currentPageGroup = Math.ceil(pageSize / pageCount);
        let lastPageInGroup = currentPageGroup * pageCount;

        if (lastPageInGroup > totalPageCount) {
            lastPageInGroup = totalPageCount;
        }
        const firstPageInGroup = lastPageInGroup - (pageCount - 1);

        return range(firstPageInGroup, lastPageInGroup);
    }, [pageSize, totalPageCount, pageCount]);

    const lastPagenationRange = useMemo(() => {
        if (pageCount !== 5) {
            return [totalPageCount];
        }
        return [];
    }, [pageCount, totalPageCount]);

    return {
        pagenationRange,
        prePageNationRange,
        lastPagenationRange,
        totalPageCount,
    };
};

export default usePagination;
