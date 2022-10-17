import { fetchProducts } from "core/services/productDataService";
import { IProduct, TProductCategories } from "core/types/Product.types";
import { makeAutoObservable } from "mobx";


class AppStore {
  activeTab = 'product'
  selectedCategories: TProductCategories[] = []
  searchString = '';
  selectedProduct: IProduct | null = null;
  products: IProduct[] = []
  constructor() {
    makeAutoObservable(this)
  }

  search(s: string) {
    this.searchString = s
  }

  selectProduct(product: IProduct) {
    this.selectedProduct = product
  }

  get filteredProducts(): IProduct[] {
    if(this.searchString === '') {
      return []
    }
    return this.products.filter((product : IProduct) => {
      // if not category selected, by default all category included
      let isProductCategorySelected = true;
      if(!!this.selectedCategories.length) {
        isProductCategorySelected = this.selectedCategories.includes(product.category)
      }
      return isProductCategorySelected && product.productName.toLowerCase().includes(this.searchString.trim().toLowerCase())
    })
  }

  toggleSelectedCategory(category: TProductCategories) {
    const categoryIdx = this.selectedCategories.indexOf(category)
    if (categoryIdx === -1) {
      this.selectedCategories.push(category)
    } else {
      this.selectedCategories.splice(categoryIdx, 1)
    }
  }

  async fetchProducts() {
    this.products = await fetchProducts()
  }
}

export default AppStore;