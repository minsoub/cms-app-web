import dayjs from "dayjs";

// page 범위 구하기
export const range = (start: number, end: number): number[] => {
    const length = end - start + 1;
    return Array.from({ length }, (_, index) => index + start);
};
// 날짜 포멧 처리 utc + 9
export const getDateFormat = (paramDate: string) => {
    if (paramDate) {
        const dateFormat = 'YYYY-MM-DD HH:mm';
        const newDate = dayjs(paramDate).add(9, 'h').format(dateFormat);
        return newDate;
    }
    return '';
};
export const getDateFormatSecond = (paramDate: string) => {
    if (paramDate) {
        const dateFormat = 'YYYY-MM-DD HH:mm:ss';
        const newDate = dayjs(paramDate).add(9, 'h').format(dateFormat);
        return newDate;
    }
    return '';
};