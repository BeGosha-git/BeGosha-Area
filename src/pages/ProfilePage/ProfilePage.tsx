import React from 'react'
import '../../pages.css';
import './ProfilePage.css';
import { useCart } from '../../context/CartContext/CartContext';

const ProfilePage: React.FC = () => {
    const { userCart } = useCart();
    
    return (
        <div className="PageForm">
            <h1>Мой профиль</h1>
            <h2>История покупок</h2>
            {userCart?.purchaseHistory.length === 0 && <p>Вы еще ничего не купили.</p>}
            {userCart?.purchaseHistory.map((purchase, index) => (
                <div key={index}>
                    <h3>Покупка от {purchase.date}</h3>
                    <ul>
                        {purchase.products.map(product => (
                            <li key={product.id}>
                                {product.name} - Количество: {product.quantity} - Цена: {product.price}$
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ProfilePage;