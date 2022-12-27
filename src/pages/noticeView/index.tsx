import Header from "components/View/Header";
import {useEffect, useState} from "react";
import fetcher from "lib/api";
import { METHOD, IPath } from "lib/type";
import { useParams } from "react-router-dom";


// 공지사항 Detail 페이지
const NoticeView = () => {
    let { boardPath } = useParams();
    const [title, setTitle] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [htmlCode, setHtmlCode] = useState<string>('');
    const [modify, setModify] = useState<boolean>(false);

    console.log('boardPath 입니다--->boardPath', boardPath)
    const getView = async () => {
        const res = await fetcher(METHOD.GET, `/v1/api/cms/notice/detail/:${boardPath}`);
        setTitle(res.data.title)
        setDate(res.data.create_date)
        setHtmlCode(res.data.content)
        setModify(res.data.isUpdate)
    }

    useEffect(() => {
        getView()
    }, [])

    return (
        <main>
            <Header />

            <div>
                <h2>{title}</h2>
                <p>{date}</p>
                {modify === true && <p>수정됨</p>}

            </div>

            <article dangerouslySetInnerHTML={{ __html: htmlCode}}/>
        </main>
    )
}

export default NoticeView;