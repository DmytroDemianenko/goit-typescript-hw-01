// Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: numder) {
  return num1 + num2;
}

function customError(): string {
  throw new Error("Error");
}
