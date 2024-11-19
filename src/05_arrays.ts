(() => {
  let prices = [100, 200, 300]; // declaración inferida (acepta sólo números)

  let arr = [100, 200, 'Hello', true]; // declaración inferida (acepta sólo números, strings y booleans)

  let newArray: (number | string | boolean | Object)[] = []; // declaración explícita (acepta sólo números, strings, booleans, objectos y arrays)
  newArray.push(12, true);
  newArray.push([], {});

  console.log(newArray);
})();
