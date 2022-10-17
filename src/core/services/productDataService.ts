import productsMockData from 'core/productData.json';
import { IProduct } from 'core/types/Product.types';

export function fetchProducts(): Promise<IProduct[]> {
  return new Promise((resolve, reject) => {
    resolve(productsMockData as IProduct[])
  })
}