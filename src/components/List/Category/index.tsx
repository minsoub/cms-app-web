import { useState } from 'react';
import { ICategoryProps } from 'lib/type';
import './Category.scss';

const Category = ({categoryName}:ICategoryProps) => {
    const [indexActive, setIndexActive] = useState<number>(0);
    
    const buttonActive = (active: any) => {
        setIndexActive(active);
    };

    return (
        <ul className="board-category">
            {categoryName.map((item, index) => {
                return (
                    <li key={index} className={`category-item ${index === indexActive ? "active" : ""}`} onClick={() => buttonActive(index)}>
                        <button type="button" className="category-item__text">{item}</button>
                    </li>
                )
            })}

        </ul>
    )
}

export default Category;