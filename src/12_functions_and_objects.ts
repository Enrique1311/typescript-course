(() => {
  // Parámetros: uno por uno
  const login = (email: string, password: string) => {
    console.log(email, password);
  };

  login('hello@example.com', '12345');

  // Parámetros: en un objeto
  const login2 = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login2({ email: 'hello@example.com', password: '12345' });

  // Otro ejemplo
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes; // Parámetro opcional (?)
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'Product1',
    createdAt: new Date(1998, 2, 2),
    stock: 10,
  });

  addProduct({
    title: 'Product2',
    createdAt: new Date(1998, 2, 2),
    stock: 10,
    size: 'XL',
  });
  console.log(products);
})();
