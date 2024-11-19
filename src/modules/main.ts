import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Prod1',
  createdAt: new Date(2005, 2, 2),
  stock: 10,
  size: 'L',
});

addProduct({
  title: 'Prod2',
  createdAt: new Date(2008, 2, 2),
  stock: 12,
  size: 'S',
});

addProduct({
  title: 'Prod3',
  createdAt: new Date(2009, 2, 2),
  stock: 14,
  size: 'M',
});

const totalStock = calcStock();

console.log(products);
console.log('Stock total: ' + totalStock);
