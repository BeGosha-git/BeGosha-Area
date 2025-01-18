import React, { createContext, useContext, useState } from 'react';

export interface Product {
  id: string;
  name: string;
  product_images: string[];
  description: string;
  feedback: Array<{
      user: string;
      comment: string;
      rating: number;
  }>;
  price: number;
  quantity?: number; // Добавлено
}

// Определите типы пользователя
export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  cart: Array<Product & { quantity: number }>;
  history: Array<{
      products: Array<Product & { quantity: number }>;
      date: string;
  }>;
  favorites: Product[];
}

// Определите типы контекста
interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Создайте контекст
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Создайте компонент провайдер
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Логика входа
  const login = async (username: string, password: string) => {
    const exist_check = localStorage.getItem(`userdata_${username}`);
    if (!(exist_check == null)) {
      setUser(exist_check ? JSON.parse(exist_check) : []);
    } else {
      throw new Error('Неверные учетные данные');
    }
  };
  
  // Логика регистрации
  const register = async (username: string, email: string, password: string) => {
    const exist_check = localStorage.getItem(`userdata_${username}`);
    if (exist_check == null) {
      const randid = randomInt(1000000000, 9999999999)
      const newUser = ({
              id: randid.toString(),
              username: username,
              email: email,
              password: password,
              cart: [],
              history: [],
              favorites: [],
          });
      localStorage.setItem(`userdata_${username}`, JSON.stringify(newUser));
      setUser(newUser);
    }
    else{
      throw new Error('Пользователь с таким именем уже зарегистрирован');
    }
  };

  // Логика выхода
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
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