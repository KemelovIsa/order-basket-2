import React, { useState } from 'react';
import img1 from '../assets/img/coffee.png'
import img2 from '../assets/img/cola.svg'
import img3 from '../assets/img/cheeseburger.svg'
import img4 from '../assets/img/hamburger.png'
import img5 from '../assets/img/tea.svg'
import img6 from '../assets/img/fries.svg'
import './MenuItems.scss'

const MenuItems = () => {
  const [menuItems] = useState([
    {
      id: 1,
      title: "Hamburger",
      price: 80,
      img:img4,
    },
    {
      id: 2,
      title: "Coffee",
      price: 100,
      img: img1,
    },
    {
      id: 3,
      title: "Cola",
      price: 60,
      img: img2,
    },
    {
      id: 4,
      title: "Tea",
      price: 50,
      img: img5,
    },
    {
      id: 5,
      title: "Ch-burger",
      price: 100,
      img: img3,
    },
    {
      id: 6,
      title: "Fries",
      price: 40,
      img:img6,
    },
  ]);

  const [orderBaskest, setOrderBaskets] = useState([]);

  const pushProduct = (id) => {
    const existingProduct = orderBaskest.find((item) => item.id === id);

    if (existingProduct) {
      const updatedBasket = orderBaskest.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      );
      setOrderBaskets(updatedBasket);
    } else {
      const newItem = menuItems.find((item) => item.id === id);
      setOrderBaskets([...orderBaskest, { ...newItem, count: 1 }]);
    }
  };

  
  return (
    <div>
      <div>
        {menuItems.map((item) => (
          <div className="food" key={item.id} onClick={() => pushProduct(item.id)}>
            <img src={item.img} alt={item.title} />
            <h1>{item.title}</h1>
            <p>{item.price}</p>
          
          </div>
        ))}
      </div>
      <div>
        {orderBaskest.map((item, index) => (
          <div className="product" key={index}>
            <h5>{item.title}</h5>
            <p>count: {item.count}</p>
            <p>price: {item.price * item.count}</p>
            

          </div>
        ))}
      </div>
      
    </div>
  );
};

export default MenuItems;
