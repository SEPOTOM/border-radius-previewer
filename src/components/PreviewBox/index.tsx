import { FC } from 'react';

import { PreviewBoxProps } from './types';

const PreviewBox: FC<PreviewBoxProps> = ({ borderRadius }) => (
  <div
    role="presentation"
    aria-label="Preview box"
    className="mx-auto h-72 w-72 bg-main transition-all"
    style={{ borderRadius }}
  />
);

export default PreviewBox;
