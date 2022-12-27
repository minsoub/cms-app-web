import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    // 뒤로가기
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <header>
            <button type="button" onClick={handleBack}>뒤로가기</button>
            <h1>빗썸 공지사항</h1>
        </header>
    )
}

export default Header;