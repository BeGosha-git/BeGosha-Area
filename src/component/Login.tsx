import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';

const Login: React.FC = () => {
  const { login } = useProfile();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Сбросьте ошибки перед входом
    try {
      await login(username, password);
      //window.location.href = '/profile'; // Перенаправление на страницу профиля
    } catch (err) {
      // Уточните, что `err` может быть `Error`
      if (err instanceof Error) {
        setError(err.message); // Обработайте ошибку
        console.error('Ошибка входа:', err); // Логирование ошибки
      } else {
        setError('Неизвестная ошибка'); // Если это не стандартная ошибка
        console.error('Ошибка входа:', err); // Логирование неизвестной ошибки
      }
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Имя пользователя"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;