import Header from "components/View/Header";
import {useEffect, useState} from "react";
import fetcher from "lib/api";
import { METHOD, IPath } from "lib/type";
import { useParams } from "react-router-dom";
import './NoticeView.scss';


// 공지사항 Detail 페이지
const NoticeView = () => {
    let { boardPath } = useParams();
    const [title, setTitle] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [htmlCode, setHtmlCode] = useState<string>('');
    const [modify, setModify] = useState<boolean>(false);

    console.log('boardPath 입니다--->boardPath', boardPath);
    const getView = async () => {
        const res = await fetcher(METHOD.GET, `/v1/api/cms/notice/detail/:${boardPath}`);
        setTitle(res.data.title);
        setDate(res.data.create_date);
        setHtmlCode(res.data.content);
        setModify(res.data.isUpdate);
    };

    useEffect(() => {
        getView();
    }, []);

    return (
        <main className="board-view-wrap">
            <Header />
            <section className="sub-contents">
                <div className="board-view-title">
                    <h2 className="board-view-title__text">{title}</h2>
                    <p className="board-view-title__extra-info">
                        <span className="extra-info__date">{date}</span>
                        {modify === true && <span className="extra-info__edit">수정됨</span>}
                    </p>
                    
                </div>
                <article className="content" dangerouslySetInnerHTML={{ __html: htmlCode}}/>
            </section>
        </main>
    );
};

export default NoticeView;
