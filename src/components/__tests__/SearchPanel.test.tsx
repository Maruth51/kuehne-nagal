import { fireEvent, render, screen } from "@testing-library/react"
import SearchPanel from "components/SearchPanel"
import { PRODUCT_CATEGORIES } from "core/const/Constants"
import { StoreProvider } from "core/providers/StoreProvider"
import AppStore from "core/state/AppStore"

describe('Search panel component', () => {
  let store: AppStore
  
  beforeEach(() => {
    store = new AppStore()
    store.fetchProducts()
  })

  const setup = () => {
   return render(<StoreProvider store={store}>
      <SearchPanel />
    </StoreProvider>)
  }
  

  test('renders on initial', () => {
    setup()
    const searchPanel = screen.getByTestId('search-panel')
    expect(searchPanel).toBeInTheDocument()
  })

  test('renders all child elements', () => {
    setup()
    const searchPanel = screen.getByTestId('search-panel')
    expect(searchPanel).toMatchSnapshot('SearchPanelComponent')
  })

  test('search for products', () => {
    setup()
    const searchFor  = 'test search'
    const searchInputBox = screen.getByPlaceholderText<HTMLInputElement>('Type here...')
    fireEvent.change(searchInputBox, {target: {value: searchFor}})
    expect(searchInputBox.value).toEqual(searchFor)
  })

  test.each(PRODUCT_CATEGORIES)('select product category - %s', (category) => {
    setup()
    const categoryCheckBox = screen.getByLabelText<HTMLInputElement>(category)
    fireEvent.click(categoryCheckBox)
    expect(store.selectedCategories).toContain(category)
  })

  test.each(PRODUCT_CATEGORIES)('remove product category selection - %s', (category) => {
    setup()
    const categoryCheckBox = screen.getByLabelText<HTMLInputElement>(category)
    // Checked on first click
    fireEvent.click(categoryCheckBox)

     // UnChecked on next click
     fireEvent.click(categoryCheckBox)
    expect(store.selectedCategories).not.toContain(category)
  })
})