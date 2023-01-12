import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { boardDataState } from '../../../recoil/board/atom';
import { useEffect } from 'react';

interface INoticeListProps {
    id: string; // 게시글 id
    title: string; // 제목
    createDate: string; // 작성일
    type: string; // 게시글 type (fixed, normal)
}

/**
 * @param title {string}
 * @param createDate {string}
 * @param id {string}
 * @param type {string}
 * @constructor
 */
const Item = ({ title, createDate, id, type }: INoticeListProps) => {
    // 게시판 info
    const boardInfo = useRecoilValue(boardDataState);

    return (
        <li className={`board-list__item ${type}`} key={id}>
            <Link className="board-list__link" to={`/${id}`}>
                <h4 className="board-list__title">
                    <span>&#91;{boardInfo.categoryId}&#93;</span>
                    {title}
                </h4>
                <p className="board-list__date">{createDate}</p>
            </Link>
        </li>
    );
};

export default Item;
