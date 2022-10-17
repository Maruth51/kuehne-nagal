import AppStore from '../AppStore';
import productsMockData from 'core/productData.json';
import { IProduct } from 'core/types/Product.types';
import { PRODUCT_CATEGORIES } from 'core/const/Constants';

const SEARCH_PRODUCT_CASE = ['', 'Autodesk', 'pdf', ' pdf', 'pdf ', 'PDF', 'AuToDEsk']

describe('App store', () => {
  let store: AppStore;
  beforeEach(() => {
    store = new AppStore()
    store.products = productsMockData as IProduct[]
  })
  test('App store is created', () => {
    expect(store).toBeInstanceOf(AppStore)
  })

  test('Search products', () => {
    store.searchString = 'adobe'
    expect(store.searchString).toEqual('adobe')
  })

  test('Add product category to filter', () => {
    store.toggleSelectedCategory('Daily Business')
    expect(store.selectedCategories.length).toBe(1)

    store.toggleSelectedCategory('Graphic Editors')
    expect(store.selectedCategories.length).toBe(2)
  })

  test('Remove product category from filter', () => {
    // Add to filter
    store.toggleSelectedCategory('Daily Business')
    store.toggleSelectedCategory('Graphic Editors')

    // Add the already existing category
    store.toggleSelectedCategory('Daily Business')

    expect(store.selectedCategories).not.toContain('Daily Business')
  })

  test.each(SEARCH_PRODUCT_CASE)('Filter products by search - "%s"', (searchInput) => {
    let filteredProducts = productsMockData.filter(product => {
      return product.productName.toLowerCase().includes(searchInput.trim().toLowerCase())
    })
    if (searchInput === ''){
      filteredProducts = []
    }
    store.searchString = searchInput
    expect(store.filteredProducts).toMatchObject(filteredProducts)
  });

  test.each(PRODUCT_CATEGORIES)('Filter product in "%s" category by search', (category) => {
    const searchInput = 'software'

    const filteredProducts = productsMockData.filter(product => {
      return (
        product.category === category &&
        product.productName.toLowerCase().includes(searchInput.trim().toLowerCase()))
    })

    store.toggleSelectedCategory(category)
    store.searchString = searchInput
    expect(store.filteredProducts).toMatchObject(filteredProducts)
  })
})

