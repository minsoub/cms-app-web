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

    // paginationRange 표시개수
    const pageCount = useMemo(() => {
        if (pageNumber < 5) {
            return 5;
        } else if (pageNumber > totalPageCount - 2) {
            return 5;
        } else {
            return 3;
        }
    }, [pageNumber, totalPageCount]);

    const pagenationRange = useMemo(() => {
        const currentPageGroup = Math.ceil(pageNumber / pageCount);
        let lastPageInGroup = currentPageGroup * pageCount;
        console.log({ currentPageGroup });
        console.log({ lastPageInGroup });
        if (lastPageInGroup > totalPageCount) {
            lastPageInGroup = totalPageCount;
        }
        const firstPageInGroup = lastPageInGroup - (pageCount - 1);

        return range(firstPageInGroup, lastPageInGroup);
    }, [pageNumber, totalPageCount, pageCount]);

    return {
        pagenationRange,
        totalPageCount,
    };
};

export default usePagination;
