import { render, screen } from "@testing-library/react";
import ProductDetail from "components/ProductDetail";
import { StoreProvider } from "core/providers/StoreProvider";
import AppStore from "core/state/AppStore";
import { IProduct } from "core/types/Product.types";

const productTestData: IProduct = {
  "productName": "Foxit software PhantomPDF Standard",	
  "tags":[ "PDF", "Change", "Create", "Maintenance", "Business, FoxIT" ],
  "category": "Daily Business",
  "manufacturerUrl": "https://www.foxitsoftware.com/de/pdf-editor",
  "description": 
  [
    "PhantomPDF provides powerful PDF Editor capabilities to allow authors to update their documents themselves.",
    "Standard - Simple interface and limited functionality."
  ],
  "option1": "1 Year Maintenance",
  "option2": "Without Maintenance"
}

describe('Product detail component', () => {
  let store: AppStore;
  beforeEach(() => {
    store = new AppStore()
  })
  test('Not rendered on initial', () => {
    render(<StoreProvider store={store}>
            <ProductDetail />
          </StoreProvider>)
    const productDetailTitlElem = screen.queryByText(/Product Detail/i)
    expect(productDetailTitlElem).toBeFalsy()
  })

  test('Rendered upon selecting product', () => {
    store.selectedProduct = productTestData
    render(<StoreProvider store={store}>
      <ProductDetail />
    </StoreProvider>)
    const productDetailElem= screen.queryByText(/Product Detail/i)
    expect(productDetailElem).toBeInTheDocument()
  })

  test('Product name displayed', () => {
    store.selectedProduct = productTestData
    render(<StoreProvider store={store}>
      <ProductDetail />
    </StoreProvider>)
    const productDetailElem= screen.getByTestId('product-detail')
    expect(productDetailElem).toMatchSnapshot('ProductDetailComponent')
  })
})