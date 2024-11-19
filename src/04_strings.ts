(() => {
  let string = 'string'; // declaración implícita
  console.log(string);

  let newString: string = 'other'; // declaración explícita
  console.log(newString);

  let product = 'Smartwatch';
  let price = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${product}
    price: ${price}
    isNew: ${isNew}
  `;

  console.log(summary);
})();
