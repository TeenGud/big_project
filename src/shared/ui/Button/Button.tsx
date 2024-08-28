import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import * as cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    children: ReactNode
    theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = ({ className, children, theme, ...props }: ButtonProps) => {
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...props}>
        {children}
    </button>
  )
}