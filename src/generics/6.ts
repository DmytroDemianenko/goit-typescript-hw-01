type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізація Params за допомогою Omit
type Params = Omit<Form, "errors">;

// Приклад використання:
const params: Params = {
  email: "test@example.com",
  firstName: "Іван",
  lastName: "Петров",
  phone: "+380123456789",
};

console.log(params);
