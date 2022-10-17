import { PRODUCT_CATEGORIES } from "core/const/Constants";
import { useStore } from "core/providers/StoreProvider";
import { IProduct, TProductCategories } from "core/types/Product.types";
import { observer } from "mobx-react-lite";
import React from "react";
import styles from 'styles/SearchPanel.module.scss';
import Product from "./Product";


const SearchPanel = () => {
  const store = useStore()

  const handleCategoryClick = (category: TProductCategories) => () => {
    store.toggleSelectedCategory(category)
  }

  const handleSearch = (e : React.ChangeEvent<HTMLInputElement>) => {
    store.search(e.target.value)
  }

  const handleProductSelect = (product: IProduct) => () => {
    store.selectProduct(product)
  }

  return <>
  <div  data-testid="search-panel" className={styles.panel}>
    <p className={styles.title}> I’m looking for... </p>
    <div className={styles.filter}>

      <ul className={styles.categoryContainer}>
        {PRODUCT_CATEGORIES.map((category, idx) => {
          return <li
            key={idx}
            className={styles.category}
          >
            <input
              name={category}
              type='checkbox'
              onChange={handleCategoryClick(category)}
              checked={store.selectedCategories.includes(category)}
              id={'category-' + idx}
            />
            <label htmlFor={'category-' + idx} className="label">
              {category}
            </label>
          </li>
        })}
      </ul>
      <div className={styles.inputContainer}>

        <div className={styles.searchBox}>
          <img src="/search_icon.svg" alt="search icon" />
          <input type="text" name="search-input" onChange={handleSearch} placeholder='Type here...'/>
        </div>
      </div>
    </div>
  </div>
  {
    store.filteredProducts.map((product) => {
      return <Product product={product} onSelect={handleProductSelect(product)}/>
    })
  }
  </>
}

export default observer(SearchPanel);