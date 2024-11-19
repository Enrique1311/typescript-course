(() => {
  let dinamicVar: any; //* Recibe cualquier tipo de valor (no se aconseja usarlo)

  dinamicVar = 1;

  dinamicVar = null;

  dinamicVar = [];

  dinamicVar = {};

  dinamicVar = 'STRING';
  const newVar = (dinamicVar as string).toLocaleLowerCase(); // transformar a string
  console.log(newVar);

  dinamicVar = 12;
  const otherVar = (<number>dinamicVar).toFixed(); // otra manera de transformar a otro tipo de variable
  console.log(otherVar);
})();
