(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  //* Primera versión *********************
  function createProdToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    // Retorna un objeto
    return {
      title,
      createdAt,
      stock,
      size,
    };
  }

  const product1 = createProdToJson('Prod2', new Date(), 12, 'L');

  console.log(product1);
  console.log(product1.title);
  console.log(product1.createdAt);
  console.log(product1.stock);
  console.log(product1.size);

  //* Segunda versión con optional chaining ***********************
  const createProdToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes // con optional chaining tenemos la opción de no enviar este dato
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const product2 = createProdToJsonV2('Prod2', new Date(), 14);

  console.log(product2);
  console.log(product2.title);
  console.log(product2.createdAt);
  console.log(product2.stock);
  console.log(product2.size);
})();
