const num1 = parseFloat(prompt("Введіть перше число:"));
const num2 = parseFloat(prompt("Введіть друге число:"));
const num3 = parseFloat(prompt("Введіть третє число:"));

const sum = num1 + num2 + num3;
console.log(`Сума трьох чисел: ${sum}`);

const productSum = (num1 + num2) * num3;
console.log(`Сума перших двох чисел, помножена на третє число: ${productSum}`);

const moduloResult = (num1 % num2) / num3;
console.log(`Залишок від поділу першого числа на друге, розділений на третє число: ${moduloResult}`);

const roundedResult = Math.round(num3 / num2);
console.log(`Округлений результат розподілу третього числа на друге: ${roundedResult}`);

console.log("Моя перша програма!");
