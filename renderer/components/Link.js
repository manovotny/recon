import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

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

Link.propTypes = {
    children: PropTypes.string,
    href: PropTypes.string
};

export default Link;
