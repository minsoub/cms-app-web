import { Link } from 'react-router-dom';

interface INoticeListProps {
    id: string; // 게시글 id
    title: string; // 제목
    createDate: string; // 작성일
    type: string;
}

/**
 * @param title {string}
 * @param createDate {string}
 * @param id {string}
 * @constructor
 */
const Item = ({ type, title, createDate, id }: INoticeListProps) => {
    return (
        <li className={type} key={id}>
            <Link to={`/notice/:${id}`}>
                <h4 className="board-list__title">{title}</h4>
                <p className="board-list__date">{createDate}</p>
            </Link>
        </li>
    );
};

export default Item;