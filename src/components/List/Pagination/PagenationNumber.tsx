type Prop = {
    num: number;
    isCurrent: boolean;
    onClick: () => void;
};

const PagenationNumber = ({ num, isCurrent, onClick }: Prop) => (
    <span className={isCurrent ? 'active' : ''} onClick={onClick}>
        {num}
    </span>
);

export default PagenationNumber;
