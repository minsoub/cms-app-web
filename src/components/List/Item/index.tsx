import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { boardDataState } from 'recoil/board/atom';
import { getDateFormat } from 'utils/helpers';

interface INoticeListProps {
    id: string; // 게시글 id
    title: string; // 제목
    createDate: string; // 작성일
    type: string; // 게시글 type (fixed, normal)
}

/**
 * @param id {string}
 * @param title {string}
 * @param createDate {string}
 * @param type {string}
 * @constructor
 */
const Item = ({ id, title, createDate, type }: INoticeListProps) => {
    // 카테고리 목록
    const categoryTypeName = useRecoilValue(boardDataState);

    return (
        <li className={`board-list__item ${type}`} key={id}>
            <Link className="board-list__link" to={`/${id}`}>
                <h4 className="board-list__title">
                    {/*
                        카테고리명 [ ] 대괄호로 구분
                        카테고리 종류가 2개면 [안내/서비스] 이런식으로 구분
                    */}
                    {categoryTypeName.categoryId?.length === 1 ? (
                        <span>&#91;{categoryTypeName.categoryId}&#93;</span>
                    ) : (
                        <span>
                            &#91;{categoryTypeName.categoryId}/{categoryTypeName.categoryId}&#93;
                        </span>
                    )}

                    {/* 게시글 제목 */}
                    {title}
                </h4>
                <p className="board-list__date">{getDateFormat(createDate)}</p> {/* 게시글 작성일 */}
            </Link>
        </li>
    );
};

export default Item;
