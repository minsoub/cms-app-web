import Header from 'components/View/Header';
import { useEffect, useState } from 'react';
import fetcher from 'lib/api';
import { EMehod } from 'lib/type';
import { useParams } from 'react-router-dom';
import { getDateFormat } from 'utils/helpers';
import './NoticeView.scss';

// 공지사항 Detail 페이지
const NoticeView = () => {
    const { boardID } = useParams();
    // 제목
    const [title, setTitle] = useState<string>('');
    // 날짜
    const [date, setDate] = useState<string>('');
    // 콘텐츠
    const [htmlCode, setHtmlCode] = useState<string>('');

    /**
     * view API 불러오기
     */
    const getView = async () => {
        const res = await fetcher(EMehod.GET, `/api/v1/cms/notices/${boardID}`);
        setTitle(res.data.title);
        setDate(res.data.createDate);
        setHtmlCode(res.data.content);
    };

    // 페이지 진입시 스크롤 포지션 top: 0으로
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    useEffect(() => {
        getView();
        scrollToTop();
    }, []);

    return (
        <main className="board-view-wrap">
            {/* 헤더 */}
            <Header />

            {/* 제목 및 날짜 수정여부 */}
            <section className="board-view">
                <div className="board-view__title">
                    <h2 className="board-view__text">{title}</h2>
                    <p className="board-view__extra-info">
                        <span className="extra-info__date">{getDateFormat(date)}</span>
                    </p>
                </div>

                {/* 콘텐츠 영역*/}
                <article className="board-view__content" dangerouslySetInnerHTML={{ __html: htmlCode }} />
            </section>
        </main>
    );
};

export default NoticeView;
