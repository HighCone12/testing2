const a = parseInt(prompt("Введіть число a:"));
const b = parseInt(prompt("Введіть число b:"));

if (a % b === 0) {
  console.log(`Ділиться, результат: ${a / b}`);
} else {
  console.log(`Ділиться з залишком, залишок: ${a % b}`);
}