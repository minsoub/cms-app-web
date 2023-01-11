import { useNavigate } from "react-router-dom";
import './Header.scss';

const Header = () => {
    const navigate = useNavigate();

    // 뒤로가기
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <header className="header-contents header-contents--fixed">
            <div className="header-contents-inner">
                <div className="header-contnts__left">
                    <button className="header-contents__image-button button-back" type="button" onClick={handleBack}>
                        <span className="blind">뒤로가기</span>
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.25 8.23156H2.55942L9.52965 1.26133C9.80502 0.965814 9.7969 0.505299 9.51128 0.219678C9.22565 -0.0659437 8.76514 -0.0740689 8.46962 0.201299L0.219347 8.45157C-0.0731158 8.7444 -0.0731158 9.21878 0.219347 9.51161L8.46962 17.7619C8.6566 17.9625 8.93819 18.0451 9.20393 17.9773C9.46968 17.9094 9.67718 17.7019 9.74505 17.4362C9.81291 17.1704 9.73031 16.8888 9.52965 16.7018L2.55942 9.73161H19.25C19.6642 9.73161 20 9.39582 20 8.98159C20 8.56736 19.6642 8.23156 19.25 8.23156Z" fill="#1C2028"/>
                        </svg>
                    </button>
                </div>
                <div className="header-contents__center">
                    <h1 className="header-contents__title">빗썸 공지사항</h1>
                </div>
                <div className="header-contents__right">
                    <span />
                </div>
            </div>
        </header>
    )
}

export default Header;