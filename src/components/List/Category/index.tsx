import { ICategoryProps, METHOD, TCategory } from 'lib/type';
import fetcher from 'lib/api';
import { useEffect, useState } from 'react';
import './Category.scss';
import { useRecoilValue } from 'recoil';
import { boardDataState } from 'recoil/board/atom';

/**
 * 카테고리 영역
 * @param value {string}
 * @param handleSelect {(value:string) => void}
 * @constructor
 */
const Category = ({ handleSelect }: ICategoryProps) => {
    // 카테고리 리스트 api
    const [categoryList, setCategoryList] = useState<TCategory[]>([]);
    // 카테고리 info
    const categoryInfo = useRecoilValue(boardDataState);

    /**
     * 카테고리 API 불러오기
     */
    const getCategory = async () => {
        const res = await fetcher(METHOD.GET, `/api/v1/cms/categories`);
        const data = res.data;
        setCategoryList(data);
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <ul className="board-list-category">
            <li className={`board-list-category__item ${!categoryInfo.categoryId ? 'board-list-category__item--active' : ''}`}>
                <button type="button" onClick={() => handleSelect(undefined)}>
                    <span className="board-list-category__text">전체</span>
                </button>
            </li>
            
            {categoryList.map((item: TCategory) => {
                return (
                    <li
                        className={`board-list-category__item ${
                            item.id === categoryInfo.categoryId ? 'board-list-category__item--active' : ''
                        }`}
                        key={item.id}
                    >
                        <button type="button" onClick={() => handleSelect(item.id)}>
                            <span className="board-list-category__text">{item.name}</span>
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Category;
