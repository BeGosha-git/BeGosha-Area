import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext/AuthContext';

const Register: React.FC = () => {
  const { register } = useAuth(); // Используем метод регистрации
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await register(username, email, password); // Регистрация пользователя
      window.location.href = '/profile'; // Перенаправление на страницу профиля
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message); // Обработка ошибки
        console.error('Ошибка регистрации:', err); // Логирование ошибки
      } else {
        setError('Неизвестная ошибка'); // Если это не стандартная ошибка
        console.error('Ошибка регистрации:', err); // Логирование неизвестной ошибки
      }
    }
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleRegister}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Имя пользователя" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" required />
        <button type="submit">Зарегистрироваться</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Обработка ошибок */}
    </div>
  );
};

export default Register;