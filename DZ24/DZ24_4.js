function CalcSalaries(yearsWorked, currentSalary) {
    let increasePercentage = 0;
    let bonus = 0;
  
    if (yearsWorked >= 1 && yearsWorked <= 3) {
      increasePercentage = 0.1; 
    } else if (yearsWorked >= 3) {
      increasePercentage = 0.2; 
    }
  
    let newSalary = currentSalary * (1 + increasePercentage);
  
    if (newSalary < 4000) {
      bonus = 1000;
    } else if (newSalary >= 4000) {
      bonus = 500;
    }
  
    return newSalary + bonus;
  }
  