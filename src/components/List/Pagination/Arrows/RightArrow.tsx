import * as React from 'react';
import { SVGProps } from 'react';

const RightArrow = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={24} height={24} viewBox="0 0 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <title>다음 페이지</title>
            <path d="M9 19L16 12L9 5" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default RightArrow;
