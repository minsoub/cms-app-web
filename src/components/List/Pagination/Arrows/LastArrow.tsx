import React from 'react';
import { SVGProps } from 'react';

const LastArrow = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <title>마지막 페이지</title>
            <path d="M13 5L20 12L13 19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 5L13 12L6 19" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export default LastArrow;
