import { FC } from 'react';

import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    type="button"
    className="mx-auto rounded-md border-4 border-main p-2 text-xl font-black uppercase text-main transition-colors hover:bg-main hover:text-secondary active:border-main-dark active:bg-main-dark active:text-secondary active:transition-none"
  >
    {children}
  </button>
);

export default Button;
