/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import Interface from './interfaces';
import settings from 'settings';

const { host } = settings;

const CustomLink: FC<LinkProps & Interface> = ({
 isExternal = false, disabled = false, to, externalHost, children, ...rest
}: LinkProps & Interface) => {
    if (disabled) {
        return (
            <>{ children }</>
        );
    }
    if (isExternal) {
        return (
            <a
              href={`${externalHost || host}${to}`}
              target='_blank'
              rel='noopener noreferrer'
              {...rest}
            >
                {children}
            </a>
        );
    }
    return (
        <Link to={to} {...rest}>
            {children}
        </Link>
    );
};

export default CustomLink;
