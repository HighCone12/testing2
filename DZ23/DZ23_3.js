const yearsWorked = parseInt(prompt("Скільки років ви працюєте у компанії?"));
let salary = parseFloat(prompt("Введіть вашу поточну зарплату:"));

if (yearsWorked >= 1 && yearsWorked <= 3) {
  salary *= 1.1; // Збільшуємо зарплату на 10%
} else if (yearsWorked > 3) {
  salary *= 1.2; // Збільшуємо зарплату на 20%
}

if (salary < 4000) {
  salary += 1000; // Додаємо бонус у розмірі 1000
} else if (salary >= 4000) {
  salary += 500; // Додаємо бонус у розмірі 500
}

console.log(`Ваша нова зарплата: ${salary}`);