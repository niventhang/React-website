import React, { useState } from "react";
import "./sample.css";
import { MdOutlineAddShoppingCart } from "react-icons/md";

import Pic1 from "./assets/cake-1284548_1280.jpg";
import Pic2 from "./assets/red-velvet-cake-4917734_1280.jpg";
import Pic3 from "./assets/blueberry-1082500_1280.jpg";
import Pic4 from "./assets/cherry-cake-8152717_1280.jpg";
import Pic5 from "./assets/german-black-forest-cake-533754_1280.jpg";
import Pic6 from "./assets/lemon-cake-8274419_1280.jpg";
import Pic7 from "./assets/muffin-3510308_1280.jpg";
import Pic8 from "./assets/muffin-3607780_1280.jpg";
import Pic9 from "./assets/chocolate-cake-4446608_1280.jpg";
import Pic10 from "./assets/cake-4890393_1280.jpg";
import Pic11 from "./assets/strawberry-roll-1263099_1280.jpg";
import Pic12 from "./assets/cake-1971552_1280.jpg";
import Pic13 from "./assets/matcha-847918_1280.jpg";
import Pic14 from "./assets/walnut.jpg";
import Pic15 from "./assets/plum.jpg";
import Pic16 from "./assets/almond-2558572_1280.jpg";
import Pic17 from "./assets/cheesecake-2867614_1280.jpg";
import Pic18 from "./assets/sponge-cake-5494587_1280.jpg";
import Pic19 from "./assets/quark-tart-2549438_1280.jpg";
import Pic20 from "./assets/fruit-cake-6879425_1280.jpg";
import Pic21 from "./assets/black-forest-cake-.jpg";
import Pic22 from "./assets/brownie-4020349_1280.jpg";
import Pic23 from "./assets/Qurak Berry cake.jpg";
import Pic24 from "./assets/cheese cake.jpg";

export default function Product() {
  const [billBoxVisible, setBillBoxVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState({});

  const addToCart = (item) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[item.name]) {
        newCart[item.name].quantity += 1;
        newCart[item.name].price += item.price;
      } else {
        newCart[item.name] = { price: item.price, quantity: 1 };
      }
      return newCart;
    });
    setBillBoxVisible(true); // Show bill box when an item is added
  };

  const closeBillBox = () => setBillBoxVisible(false);

  const saveBill = () => alert("Bill saved successfully!");

  const totalPrice = Object.values(cart).reduce(
    (acc, item) => acc + item.price,
    0
  );

  const Data = [
    {
      name: "Torte Dessert Cake",
      price: 300,
      image: Pic1,
    },
    {
      name: "Red Velet cake",
      price: 450,
      image: Pic2,
    },
    {
      name: "Blueberry Cake",
      price: 200,
      image: Pic3,
    },
    {
      name: "Cherry Cake",
      price: 250,
      image: Pic4,
    },
    {
      name: "German Black Forest Cake",
      price: 100,
      image: Pic5,
    },
    {
      name: "Lemon cake",
      price: 150,
      image: Pic6,
    },
    {
      name: "Muffin pine cake",
      price: 100,
      image: Pic7,
    },
    {
      name: "Muffin cup cake",
      price: 100,
      image: Pic8,
    },
    {
      name: "Chocolate cake",
      price: 150,
      image: Pic9,
    },
    {
      name: "Carrot cake",
      price: 350,
      image: Pic10,
    },
    {
      name: "Strawberry Roll",
      price: 350,
      image: Pic11,
    },
    {
      name: "Piece cake",
      price: 100,
      image: Pic12,
    },
    {
      name: "matcha cake",
      price: 120,
      image: Pic13,
    },
    {
      name: "Walnut cake",
      price: 300,
      image: Pic14,
    },
    {
      name: "Plum cake",
      price: 150,
      image: Pic15,
    },
    {
      name: "Almond cake",
      price: 200,
      image: Pic16,
    },
    {
      name: "Cheese cake",
      price: 250,
      image: Pic17,
    },
    {
      name: "Sponge cake",
      price: 100,
      image: Pic18,
    },
    {
      name: "Quark art",
      price: 250,
      image: Pic19,
    },
    {
      name: "Fruit cake",
      price: 300,
      image: Pic20,
    },
    {
      name: "Black Forest cake",
      price: 450,
      image: Pic21,
    },
    {
      name: "Brownie",
      price: 250,
      image: Pic22,
    },
    {
      name: "Qurak Berry cake",
      price: 390,
      image: Pic23,
    },
    {
      name: "cheese cake",
      price: 340,

      image: Pic24,
    },
  ];
  return (
    <div className="overall">
      <nav>
        <h1>
          Tasty <span>Dessert</span>
        </h1>
        <div className="input">
          <input
            placeholder="Search desserts..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <MdOutlineAddShoppingCart onClick={addToCart} className="icon" />
        </div>
      </nav>
      {billBoxVisible && (
        <div className="billbox billbox-show">
          <h2>BILL SUMMARY</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(cart).map(([name, item]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{item.quantity}</td>
                  <td>&#8377;{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: &#8377;{totalPrice}</h3>
          <button onClick={closeBillBox} className="close">
            Close
          </button>
          <button onClick={saveBill} className="save">
            Save Bill
          </button>
        </div>
      )}
      <div className="box">
        {Data.filter((item) =>
          searchTerm === ""
            ? true
            : item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((item) => (
          <div className="cont1" key={item.name}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>&#8377;{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
