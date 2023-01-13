import { ICategoryProps, METHOD, TCategory } from 'lib/type';
import fetcher from 'lib/api';
import { useEffect, useState } from 'react';
import './Category.scss';
import { useRecoilState, useRecoilValue } from 'recoil';
import { boardDataState, categoryState } from 'recoil/board/atom';

/**
 * 카테고리 영역
 * @param value {string}
 * @param handleSelect {(value:string) => void}
 * @constructor
 */
const Category = ({ handleSelect }: ICategoryProps) => {
    // 카테고리 리스트 api
    const [categoryMap, setCategoryMap] = useRecoilState(categoryState);

    // 카테고리 info
    const categoryInfo = useRecoilValue(boardDataState);

    /**
     * 카테고리 API 불러오기
     */
    const getCategory = async () => {
        const res = await fetcher(METHOD.GET, `/api/v1/cms/categories`);
        const data = res.data;

        for (const category of data) {
            // @ts-ignore
            setCategoryMap((prev) => new Map([...prev, [category.id, category.name]]));
        }
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
            {Array.from(categoryMap).map((categoryItem) => {
                const categoryId = categoryItem[0];
                const categoryName = categoryItem[1];
                return (
                    <li
                        className={`board-list-category__item ${
                            categoryId === categoryInfo.categoryId ? 'board-list-category__item--active' : ''
                        }`}
                        key={categoryId}
                    >
                        <button type="button" onClick={() => handleSelect(categoryId)}>
                            <span className="board-list-category__text">{categoryName}</span>
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Category;
