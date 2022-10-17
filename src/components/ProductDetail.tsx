import React from "react";
import { useStore } from "core/providers/StoreProvider";
import { observer } from "mobx-react-lite";
import styles from "styles/ProductDetail.module.scss"

const ProductDetail = () => {
  const { selectedProduct } = useStore()
  return <div data-testid='product-detail' className={styles.container}>
    {selectedProduct && <>
      <div className={styles.head}>Product Details</div>
      <div className={styles.productDetail}>
        <span>{selectedProduct.productName} </span>
        <div className={styles.tags}>
          {selectedProduct.tags.map((tag, idx) => <span key={idx} className={styles.tag}>{tag}</span>)}
        </div>
        <a type="button" href={selectedProduct.manufacturerUrl} target="_blank" rel='noreferrer' className={styles.actionBtn}>Go to Manufacturer</a>
        <p className={styles.description}>
          {selectedProduct.description[0]}
        </p>
        {selectedProduct.option1 && <div className="option">
          <input type="radio" name="maintanance-option" id='option1'></input>
          <label htmlFor="option1"> {selectedProduct.option1}</label>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>}
        {selectedProduct.option2 && <div className="option">
          <p>
            <input type="radio" name="maintanance-option" id='option2'></input>
            <label htmlFor="option2"> {selectedProduct.option2}</label>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>}
      </div>
    </>
    }
  </div>
}

export default observer(ProductDetail);