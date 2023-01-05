import { useMemo } from 'react';
import { range } from '../utils/helpers';

type Prop = {
    totalCount: number;
    pageSize: number;
};

const usePagination = ({ totalCount, pageSize }: Prop) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);
        return range(1, totalPageCount);
    }, [pageSize, totalCount]);

    return { paginationRange };
};

export default usePagination;
