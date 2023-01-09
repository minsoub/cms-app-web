import Header from 'components/View/Header';
import { useEffect, useState } from 'react';
import fetcher from 'lib/api';
import { METHOD, IPath } from 'lib/type';
import { useParams } from 'react-router-dom';

// 공지사항 Detail 페이지
const NoticeView = () => {
    let { boardID } = useParams();
    // 제목
    const [title, setTitle] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [htmlCode, setHtmlCode] = useState<string>('');
    const [modify, setModify] = useState<boolean>(false);

    const getView = async () => {
        const res = await fetcher(METHOD.GET, `/api/v1/cms/notice/detail/${boardID}`);
        console.log('getView--->', res);
        setTitle(res.data.title);
        setDate(res.data.createDate);
        setHtmlCode(res.data.content);
        setModify(res.data.isUpdate);
    };

    useEffect(() => {
        getView();
    }, []);

    return (
        <main>
            <Header />

            {/* 제목 및 날짜 수정여부 */}
            <div>
                <h2>{title}</h2>
                <p>{date}</p>
                {modify && <p>수정됨</p>}
            </div>

            {/* 콘텐츠 영역*/}
            <article dangerouslySetInnerHTML={{ __html: htmlCode }} />
        </main>
    );
};

export default NoticeView;
