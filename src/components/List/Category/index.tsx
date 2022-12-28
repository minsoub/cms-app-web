import {ICategoryProps, METHOD} from 'lib/type';
import fetcher from "lib/api";
import {useEffect, useState} from "react";
import './Category.scss';

/**
 * 카테고리 영역
 * @param value {string}
 * @param handleSelect {(value:string) => void}
 * @constructor
 */
const Category = ({ value, handleSelect }:ICategoryProps) => {

    // 카테고리 리스트 api
    const [categoryList, setCategoryList] = useState<string[]>([]);
    // 카테고리 active 활성화
    const [indexActive, setIndexActive] = useState<number>(0);

    /**
     * 카테고리 API 불러오기
     */
    const getCategory = async () => {
        const res = await fetcher(METHOD.GET, `/v1/api/cms/notice/category`);
        const data = res.data.category_list;
        setCategoryList(data)
    }

    /**
     * 버튼 클릭시 active 효과
     * @param active {any}
     */
    const handleButtonActive = (active: any) => {
        setIndexActive(active)
    }

    useEffect(() => {
        getCategory()
    }, [])

    return (
        <ul className='board-category'>
            {categoryList.map((item, index: number) => {
                return (
                    <li className={`category-item ${index === indexActive ? "active" : ""}`} onClick={() => handleButtonActive(index)}>
                        <button type="button" onClick={() => handleSelect(item)} value={item} key={index}>
                            <span className="category-item__text">{item}</span>
                        </button>
                    </li>
                )
            })}

        </ul>
    )
}

export default Category;