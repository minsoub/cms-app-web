import { useMemo } from 'react';

type PaginationProp = {
    pageNumber: number; // 현재 페이지
    numberOfElements: number; // 전체 게시글 수
    pageSize: number; // 한 페이지당 게시글 제한수
};

/**
 * @param pageNumber {number}
 * @param totalElements {number}
 * @param pageSize {number}
 */
const usePagination = ({ pageNumber, numberOfElements, pageSize }: PaginationProp) => {
    const range = (start: number, end: number) => {
        const length = end - start + 1;
        return Array.from({ length }, (_, index) => index + start);
    };

    const totalPageCount = useMemo(() => {
        return Math.ceil(numberOfElements / pageSize);
    }, [numberOfElements, pageSize]);

    // paginationRange 표시개수
    const pageCount = useMemo(() => {
        if (pageNumber < 5) {
            return 5;
        } else if (pageNumber === totalPageCount) {
            return 5;
        } else {
            return 3;
        }
    }, [pageNumber, totalPageCount]);

    const paginationRange = useMemo(() => {
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
        paginationRange,
        totalPageCount
    };
};

export default usePagination;
