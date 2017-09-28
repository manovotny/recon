import React from 'react';
import NextLink from 'next/link';

const Link = ({href, children}) =>
    <NextLink
        href={href}
        prefetch
    >
        <a
            href={href}
            title={children}
        >
            {children}
        </a>
    </NextLink>;

export default Link;
