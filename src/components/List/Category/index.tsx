import { ICategoryProps, METHOD, TCategory } from 'lib/type';
import fetcher from 'lib/api';
import { useEffect, useState } from 'react';
import './Category.scss';

/**
 * 카테고리 영역
 * @param value {string}
 * @param handleSelect {(value:string) => void}
 * @constructor
 */
const Category = ({ value, handleSelect }: ICategoryProps) => {
    // 카테고리 리스트 api
    const [categoryList, setCategoryList] = useState<TCategory[]>([]);
    // 카테고리 active 활성화
    const [indexActive, setIndexActive] = useState<number>(0);

    /**
     * 카테고리 API 불러오기
     */
    const getCategory = async () => {
        const res = await fetcher(METHOD.GET, `/api/v1/cms/categories`);
        const data = res.data;
        console.log(data);
        setCategoryList(data);
    };

    /**
     * 버튼 클릭시 active 효과
     * @param active {any}
     */
    const handleButtonActive = (active: any) => {
        setIndexActive(active);
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <ul className="board-list-category">
            {categoryList.map((item: TCategory, index: number) => {
                return (
                    <li className={`board-list-category__item ${index === indexActive?'board-list-category__item--active':''}`} onClick={() => handleButtonActive(index)} key={item.id}>
                        <button type="button" onClick={() => handleSelect(item.id)} value={item.name}>
                            <span className="board-list-category__text">{item.name}</span>
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Category;
