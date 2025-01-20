import React from 'react';
import { useProfile } from '../context/ProfileContext';

const Profile: React.FC = () => {
  const { user, logout } = useProfile();
  console.log(user)
  if (!user) {
    return (
      <div>
        <h2>Профиль</h2>
        <p>Вы не вошли в систему. Пожалуйста, войдите или зарегистрируйтесь.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Профиль пользователя</h2>
      <p><strong>Имя пользователя:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button onClick={logout}>Выйти</button>
    </div>
  );
};

export default Profile;