import React, { createContext, useContext, useState } from 'react';

// Определите типы пользователя
interface User {
  username: string;
  email: string;
}

// Определите типы контекста
interface AuthContextType {
  user: User | null;
  users: User[]; // Массив зарегистрированных пользователей
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Создайте контекст
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Создайте компонент провайдер
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]); // Инициализация массива пользователей

  // Логика входа
  const login = async (username: string, password: string) => {
    const foundUser = users.find((u) => u.username === username);
    if (foundUser) {
      setUser(foundUser);
    } else {
      throw new Error('Неверные учетные данные');
    }
  };

  // Логика регистрации
  const register = async (username: string, email: string, password: string) => {
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      throw new Error('Пользователь с таким именем уже зарегистрирован');
    }

    const newUser = { username, email };
    setUsers((prevUsers) => [...prevUsers, newUser]); // Добавляем нового пользователя в массив
    setUser(newUser); // Устанавливаем нового пользователя как текущего
  };

  // Логика выхода
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, users, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Пользовательский хук для использования контекста
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };