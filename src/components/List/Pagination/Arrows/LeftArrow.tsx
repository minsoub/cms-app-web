import React from 'react';
import { SVGProps } from 'react';

const LeftArrow = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <title>이전 페이지</title>
            <path d="M15 19L8 12L15 5" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default LeftArrow;
