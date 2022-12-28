import React from 'react';
import { SVGProps } from 'react';

const LeftArrow = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width={8} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M5.707 11.414 0 5.707 5.707 0l1.414 1.414-4.293 4.293L7.121 10l-1.414 1.414Z" fill="#282c34" />
        </svg>
    );
};

export default LeftArrow;
