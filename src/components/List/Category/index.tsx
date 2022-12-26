import { ICategoryProps } from 'lib/type';

const Category = ({categoryName}:ICategoryProps) => {
    return (
        <ul>
            {categoryName.map(item => {
                return (
                    <li><button type="button">{item}</button></li>
                )
            })}

        </ul>
    )
}

export default Category;