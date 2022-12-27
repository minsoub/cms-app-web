import cx from 'classnames'

interface PageProps {
    // 총 게시물
    totalPosts: number,
    // 해당 페이지 클릭
    handleClick: (number: number) => void,
    // 현재 클릭한 페이지
    activePage: number,
    // 한 페이지당 제한 수 (=limit 10개)
    postsPerPage: number,
    totalPage: number
}

// 페이징네이션
const Pagination = ({ totalPosts,handleClick,activePage }:PageProps) => {
    const pageNumbers: number[] = [];
    let pageCount = 3;
    if(activePage < 5 || activePage > totalPosts - 5) {
        pageCount = 5;
    }
    let currentPageGroup = Math.ceil(activePage/pageCount);
    let totalPageGroup = Math.ceil(totalPosts/pageCount);
    let lastPageInGroup = currentPageGroup * pageCount;
    if(lastPageInGroup > totalPosts) {
        lastPageInGroup = totalPosts;
    }

    let firstPageInGroup = lastPageInGroup - (pageCount - 1);
    const next = lastPageInGroup + 1;
    const prev = firstPageInGroup - 1;

    for(let i: number = firstPageInGroup; i<=lastPageInGroup; i++) {
        pageNumbers.push(i);
    }

    const handleFirst = () => {
        handleClick(1);
    }
    const handleLast = () => {
        handleClick(totalPosts);
    }
    const nextPage = () => {
        handleClick(next);
    }
    const prePage = () => {
        handleClick(prev);
    }

    return (
        <ul>
            {/* 첫 페이지 */}
            <li>
                <button type="button" onClick={handleFirst}>&#171;</button>
            </li>

            {/* 이전 페이지 */}
            {currentPageGroup > 1 && (
                <li>
                    <button type="button" onClick={prePage}>&#60;</button>
                </li>
            )}

            {/* 현재 페이지 */}
            {pageNumbers.map((number:number, index:number) => {
                return (
                    <li key={index} className={cx({'pagination-item__current-page' : activePage === number})}>
                        <button type="button" onClick={()=> handleClick(number)}>{number}</button>
                    </li>
                )
            })}

            {/* 다음 페이지 */}
            {currentPageGroup < totalPageGroup && (
                <li>
                    <button type="button" onClick={nextPage}>&#62;</button>
                </li>
            )}

            {/* 마지막 페이지 */}
            <li>
                <button type="button" onClick={handleLast}>&#187;</button>
            </li>
        </ul>
    )
}

export default Pagination;