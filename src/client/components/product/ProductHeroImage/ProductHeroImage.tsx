import classNames from 'classnames';
import type { FC } from 'react';
import { memo, useState } from 'react';

import type { ProductFragmentResponse } from '../../../graphql/fragments';
import { Anchor } from '../../foundation/Anchor';
import { AspectRatio } from '../../foundation/AspectRatio';

import * as styles from './ProductHeroImage.styles';

type Props = {
  product: ProductFragmentResponse;
  title: string;
};

export const ProductHeroImage: FC<Props> = memo(({ product, title }) => {
  const imageDataUrl = product.thumbnail;
  const [onLoad, setOnLoad] = useState(false);

  return (
    <Anchor href={`/product/${product.id}`}>
      <div className={styles.container()}>
        <AspectRatio ratioHeight={9} ratioWidth={16}>
          {!onLoad && <div className={styles.skeleton()} />}
          <img
            alt={product.name}
            className={onLoad ? styles.image() : styles.hiddenImage()}
            onLoad={() => setOnLoad(true)}
            src={imageDataUrl}
          />
        </AspectRatio>

        <div className={styles.overlay()}>
          <p className={classNames(styles.title())}>{title}</p>
          <p className={classNames(styles.description())}>{product.name}</p>
        </div>
      </div>
    </Anchor>
  );
});

ProductHeroImage.displayName = 'ProductHeroImage';
