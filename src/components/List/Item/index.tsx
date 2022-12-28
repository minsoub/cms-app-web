import { IItemProps } from 'lib/type';
import {Link} from "react-router-dom";

const Item = ({type, title, create_date, id}:IItemProps) => {
    return (
        <li className={type} key={id}>
            <Link to={`/notice/:${id}`}>
                <h4 className="board-list__title">{title}</h4>
                <p className="board-list__date">{create_date}</p>
            </Link>
        </li>
    )
}

export default Item;