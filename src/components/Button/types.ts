import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'className'> {
  children: ReactNode;
}
