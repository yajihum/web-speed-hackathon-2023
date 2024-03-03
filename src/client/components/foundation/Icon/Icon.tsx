import classNames from 'classnames';
import type { FC } from 'react';

import * as styles from './Icon.styles';
import { svgs } from './svgs';

type Props = {
  type: keyof typeof svgs;
  width: number;
  height: number;
  color: string;
};

export const Icon: FC<Props> = ({ color, height, type, width }) => {
  const Icon = svgs[type];

  return (
    <span
      className={classNames(type, styles.container({ color, height, width }))}
    >
      <Icon />
    </span>
  );
};
