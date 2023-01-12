type TPaginationNumberProp = {
    num: number;
    isCurrent: boolean;
    onClick: () => void;
};

const PaginationNumber = ({ num, isCurrent, onClick }: TPaginationNumberProp) => (
    <span className={isCurrent ? 'active' : ''} onClick={onClick}>
        {num}
    </span>
);

export default PaginationNumber;
