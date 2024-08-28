import { Link, LinkProps } from 'react-router-dom';
import * as cls from './AppLink.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { FC, ReactNode } from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string;
    children: ReactNode;
    theme?: AppLinkTheme;
}
export const AppLink: FC<AppLinkProps> = ({ className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps }) => {
  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
        {children}
    </Link>
  )
}