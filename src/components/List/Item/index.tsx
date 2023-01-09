import { Link } from 'react-router-dom';

interface INoticeListProps {
    id: string; // 게시글 id
    title: string; // 제목
    createDate: string; // 작성일
}

/**
 * @param title {string}
 * @param createDate {string}
 * @param id {string}
 * @constructor
 */
const Item = ({ title, createDate, id }: INoticeListProps) => {
    return (
        <li key={id}>
            <Link to={`/notice/${id}`}>
                <h4>{title}</h4>
                <p>{createDate}</p>
            </Link>
        </li>
    );
};

export default Item;
