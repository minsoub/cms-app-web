import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getDateFormat } from 'utils/helpers';
import { useRecoilValue } from 'recoil';
import { categoryState } from '../../../recoil/board/atom';

interface IItemProps {
    id: string; // 게시글 id
    title: string; // 제목
    createDate: string; // 작성일
    type: string; // 게시글 type (fixed, normal)
    categoryNames?: string[]; // 카테고리 (fixed)
    categoryIds?: string[]; // 카테고리 (normal)
}

/**
 * @param id {string}
 * @param title {string}
 * @param createDate {string}
 * @param type {string}
 * @param categoryNames {string[] | undefined}
 * @param categoryIds {string[] | undefined}
 * @constructor
 */
const Item = ({ title, createDate, id, type, categoryNames, categoryIds }: IItemProps) => {
    const categoryTypeObjs = useRecoilValue(categoryState);

    const submit = useMemo(() => {
        if (categoryNames && categoryNames.length) {
            return <span className={'board-list__title'}>&#91;{categoryNames.join(' /')}&#93;&nbsp;</span>;
        } else if (categoryIds && categoryIds.length) {
            return <span>&#91;{categoryIds.map((id) => categoryTypeObjs.get(id)).join(' /')}&#93;&nbsp;</span>;
        } else {
            return false;
        }
    }, [categoryNames, categoryIds]);

    return (
        <li className={`board-list__item ${type}`} key={id}>
            <Link className="board-list__link" to={`/${id}`}>
                <h4 className="board-list__title">
                    {/*
                        카테고리명 [ ] 대괄호로 구분
                        카테고리 종류가 2개면 [ 안내 / 서비스 ] 이런식으로 구분
                    */}
                    {submit && submit}
                    {/* 게시글 제목 */}
                    {title}
                </h4>
                <p className="board-list__date">{getDateFormat(createDate)}</p> {/* 게시글 작성일 */}
            </Link>
        </li>
    );
};

export default Item;
