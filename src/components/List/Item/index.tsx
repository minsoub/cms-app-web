import { IItemProps } from 'lib/type';
import {Link} from "react-router-dom";

const Item = ({title, date, id}:IItemProps) => {
    return (
        <li key={id}>
            <Link to={'notice/:postID'}>
                <h4>{title}</h4>
                <p>{date}</p>
            </Link>
        </li>
    )
}

export default Item;