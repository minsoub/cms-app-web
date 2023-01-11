import React from 'react';
import { SVGProps } from 'react';

const FirstArrow = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <title>첫 페이지</title>
            <path d="M11 19L4 12L11 5" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"  />
            <path d="M18 19L11 12L18 5" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"  />
        </svg>
    );
};

export default FirstArrow;
