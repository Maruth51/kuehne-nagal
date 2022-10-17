import { fireEvent, render, screen } from "@testing-library/react"
import Product from "components/Product"
import { IProduct } from "core/types/Product.types"

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
describe('Product component' ,() => {
  const mockProductClickHandler = jest.fn(() => {})

  test('renders product', () => {
    render(<Product product={productTestData} onSelect={mockProductClickHandler}/>)
    const productElement = screen.getByText(productTestData.productName)
    expect(productElement).toBeInTheDocument()
  })

  test('select the product', () => {
    render(<Product product={productTestData} onSelect={mockProductClickHandler}/>)
    const productElement = screen.getByText(productTestData.productName)
    fireEvent.click(productElement)
    expect(mockProductClickHandler.mock.calls.length).toBe(1)
  })
})