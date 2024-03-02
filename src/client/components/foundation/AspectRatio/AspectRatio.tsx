import type { FC, ReactNode } from 'react';

type Props = {
  ratioWidth: number;
  ratioHeight: number;
  children: ReactNode;
};

export const AspectRatio: FC<Props> = ({
  children,
  ratioHeight,
  ratioWidth,
}) => {
  const aspectRatioPercentage = (ratioHeight / ratioWidth) * 100;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: `${aspectRatioPercentage}%`,
      }}
    >
      <div
        style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
      >
        {children}
      </div>
    </div>
  );
};
