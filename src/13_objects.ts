(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes; // opcional
  };

  const products: Product[] = []; // sólo va a aceptar objetos que coincidan con el tipado Product

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'Product2',
    createdAt: new Date(2001, 3, 3),
    stock: 20,
  });

  products.push({
    title: 'Product3',
    createdAt: new Date(2005, 4, 3),
    stock: 45,
    size: 'M',
  });
  console.log(products);
})();
