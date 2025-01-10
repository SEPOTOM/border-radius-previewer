import { FC } from 'react';

import clsx from 'clsx';

import { PopupProps } from './types';

const Popup: FC<PopupProps> = ({ children, isError, ...props }) => (
  <p
    {...props}
    role={isError ? 'alert' : 'status'}
    className={clsx(
      'fixed left-1/2 top-1/2 w-full max-w-72 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 bg-secondary p-4 text-center text-2xl font-bold outline outline-2 outline-secondary sm:max-w-80 sm:text-3xl',
      isError ? 'border-error text-error' : 'border-main text-main',
    )}
  >
    {children}
  </p>
);

export default Popup;
