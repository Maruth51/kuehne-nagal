import ProductDetail from "components/ProductDetail";
import SearchPanel from "components/SearchPanel";
import Tabs from "components/Tabs";
import { useStore } from "core/providers/StoreProvider";
import React from "react";
import styles from 'styles/Home.module.scss';

const Home: React.FC = () => {

  const store = useStore()

  React.useEffect(() => {
    store.fetchProducts()
  }, [])

  return <main>
    <div className={styles.container}>
      <header>
        <p className={styles.title}>Create Demand</p>
        <p className={styles.titleInfo}>Search the product you need here. Use tags to find any alternative</p>
      </header>
      <div className={styles.nav}>
        <Tabs/>
      </div>
        <div className={styles.left}>
            <SearchPanel />
        </div>
        <div className={styles.right}>
          <ProductDetail />
        </div>
      </div>
  </main>
}

export default Home;