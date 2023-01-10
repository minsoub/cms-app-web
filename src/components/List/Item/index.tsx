import { Link } from 'react-router-dom';

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
    return (
        <li className={`board-list__item ${type}`} key={id}>
            <Link className="board-list__link" to={`/notice/${id}`}>
                <h4 className="board-list__title">{title}</h4>
                <p className="board-list__date">{createDate}</p>
            </Link>
        </li>
    );
};

export default Item;
