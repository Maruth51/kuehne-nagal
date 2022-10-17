import { useStore } from "core/providers/StoreProvider";
import React from "react";
import styles from "styles/Tabs.module.scss"
const TABS = [
  {
    label: '1 Product',
    value: 'product',
    isDisabled: false
  },
  {
    label: ' 2 Addresses',
    value: 'addresses',
    isDisabled: true
  },
  {
    label: '3 Overview',
    value: 'overview',
    isDisabled: true

  },
]
const Tabs = () => {
  const store = useStore()

  const handleTabSelect = (tab: string) => () => {
    store.activeTab = tab
  }
  return <nav className={styles.nav}>
    {TABS.map((tab, idx) => {
      return <button 
      key={idx}
      className={`${styles.tab} ${store.activeTab === tab.value && styles.active}`}
      onClick ={handleTabSelect(tab.value)}
      disabled={tab.isDisabled}
      > 
      {tab.label}
    </button>
    })}
  </nav>
}

export default Tabs;