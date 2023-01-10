import { ICategoryProps, METHOD, TCategory } from 'lib/type';
import fetcher from 'lib/api';
import { useEffect, useState } from 'react';
import cx from 'classnames';

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
        <ul>
            {categoryList.map((item: TCategory) => {
                return (
                    <li className={cx({ active: item.id === value })} onClick={() => handleButtonActive(item)} key={item.id}>
                        <button type="button" onClick={() => handleSelect(item.id)} value={item.name}>
                            {item.name}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Category;
