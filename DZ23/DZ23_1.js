const age = parseInt(prompt("Введіть ваш вік:"));

if (age < 0) {
  console.log("Невірний вік");
} else if (age >= 0 && age <= 18) {
  console.log("Ви ще не повнолітній");
} else {
  console.log("Ви стали дорослим");
}
