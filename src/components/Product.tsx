import React from "react";
import { IProduct } from "core/types/Product.types";
import styles from 'styles/Product.module.scss';

const Product: React.FC<{
  product: IProduct,
  onSelect: () => void
}> = ({
  product,
  onSelect
}) => {
  return <div
      className={styles.product}
      onClick={onSelect}
      >
        <div className={styles.left}>
          {product.productName}
          <div className={styles.tags}>
            {product.tags.map((tag, idx) => <span key={idx} className={styles.tag}>{tag}</span>)}
          </div>
        </div>
        <div className={styles.right}>
          {product.category}
        </div>
      </div>
}

export default Product;