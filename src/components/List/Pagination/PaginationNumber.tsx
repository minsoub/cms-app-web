interface IPaginationNumberProp  {
    num: number; // 페이지 넘버
    isCurrent: boolean; // 현재위치
    onClick: () => void; // 클릭한 페이지
};

const PaginationNumber = ({ num, isCurrent, onClick }: IPaginationNumberProp) => {
    return (
        <span className={isCurrent ? 'active' : ''} onClick={onClick}>
            {num}
        </span>
    );
};

export default PaginationNumber;
