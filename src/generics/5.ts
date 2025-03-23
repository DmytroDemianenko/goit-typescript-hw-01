export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Використання Record
const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};

// Приклад використання
console.log(RoleDescription[UserRole.admin]); // Виведе: Admin User
