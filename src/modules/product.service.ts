import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
};

export const calcStock = (): number => {
  let totalStock = 0;
  products.forEach((item) => {
    totalStock += item.stock;
  });

  return totalStock;
};
