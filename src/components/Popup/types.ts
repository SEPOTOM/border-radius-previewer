import { HTMLAttributes, ReactNode } from 'react';

export interface PopupProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'className' | 'role'> {
  children: ReactNode;
  isError?: boolean;
}
