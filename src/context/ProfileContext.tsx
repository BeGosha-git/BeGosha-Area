import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

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
  quantity?: number; 
}

export interface User {
  id: string;
  username: string;
  email: string;
  cart: Array<Product & { quantity: number }>;
  history: Array<{
    products: Array<Product & { quantity: number }>;
    date: string;
  }>;
  favorites: Product[];
}

interface ProfileContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const cachedUser = localStorage.getItem('userdata_current');
    if (cachedUser) {
      setUser(JSON.parse(cachedUser));
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post('/api/login', { username, password });
      if (response.data.user) {
        const parsedUser = response.data.user;
        setUser(parsedUser);
        localStorage.setItem('userdata_current', JSON.stringify(parsedUser));
      } else {
        throw new Error('Неверные учетные данные');
      }
    } catch (error: any) {
      throw new Error('Ошибка при входе: ' + error.response?.data?.message || error.message);
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      const response = await axios.post('/api/register', { username, email, password });
      if (response.data.user) {
        const newUser = response.data.user;
        setUser(newUser);
        localStorage.setItem('userdata_current', JSON.stringify(newUser));
      }
    } catch (error: any) {
      throw new Error('Ошибка при регистрации: ' + error.response?.data?.message || error.message);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userdata_current');
  };

  return (
    <ProfileContext.Provider value={{ user, login, register, logout }}>
      {children}
    </ProfileContext.Provider>
  );
};

const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile должен использоваться внутри ProfileProvider');
  }
  return context;
};

export { ProfileProvider, useProfile };