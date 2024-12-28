import React, { useEffect, useState } from "react";
import './index.css';
import Showcase from "./cakeweb";
import { BsSearchHeart } from "react-icons/bs"; import { RiFileList3Line } from "react-icons/ri";
import Pic1 from './assets/cake-1284548_1280.jpg';
import Pic2 from './assets/red-velvet-cake-4917734_1280.jpg';
import Pic3 from './assets/blueberry-1082500_1280.jpg';
import Pic4 from './assets/cherry-cake-8152717_1280.jpg';
import Pic5 from './assets/german-black-forest-cake-533754_1280.jpg';
import Pic6 from './assets/lemon-cake-8274419_1280.jpg';
import Pic7 from './assets/muffin-3510308_1280.jpg';
import Pic8 from './assets/muffin-3607780_1280.jpg';
import Pic9 from './assets/chocolate-cake-4446608_1280.jpg';
import Pic10 from './assets/cake-4890393_1280.jpg';
import Pic11 from './assets/strawberry-roll-1263099_1280.jpg';
import Pic12 from './assets/cake-1971552_1280.jpg';
import Pic13 from './assets/matcha-847918_1280.jpg';
import Pic14 from './assets/walnut.jpg';
import Pic15 from './assets/plum.jpg';
import Pic16 from './assets/almond-2558572_1280.jpg';
import Pic17 from './assets/cheesecake-2867614_1280.jpg';
import Pic18 from './assets/sponge-cake-5494587_1280.jpg';
import Pic19 from './assets/quark-tart-2549438_1280.jpg';
import Pic20 from './assets/fruit-cake-6879425_1280.jpg';
import Pic21 from './assets/black-forest-cake-.jpg';
import Pic22 from './assets/brownie-4020349_1280.jpg';
import Pic23 from './assets/Qurak Berry cake.jpg';
import Pic24 from './assets/cheese cake.jpg';

import { useCart } from "react-use-cart";

export default function Product() {
  const [search, setsearch] = useState("");
  const [billbox, setBillbox] = useState(false)
  const [inputs, setInput] = useState(false)
  const [card, setCards] = useState();
  // const [viwe, setViwe] = useState();
  // const [total, setTotal] = useState(0);
  const {
    isEmpty,
     totalUniqueItems,
      items,
      totalItems,
      cartTotal,
       updateItemQuantity, 
       removeItem,
        emptyCart
  } = useCart([0]);
 
       const Data = [
          {
            name:"Torte Dessert Cake",
            price:300,
            image:Pic1,
          },
          {
            name:"Red Velet cake",
            price:450,
            image:Pic2,
          },
          {
            name:"Blueberry Cake",
            price:200,
            image:Pic3,
          },
          {
            name:"Cherry Cake",
            price:250,
            image:Pic4,
          },
          {
            name:"German Black Forest Cake",
            price:100,
            image:Pic5,
          },
          {
            name:"Lemon cake",
            price:150,
            image:Pic6,
          },
          {
            name:"Muffin pine cake",
            price:100,
            image:Pic7,
          },
          {
            name:"Muffin cup cake",
            price:100,
            image:Pic8,
          },
          {
            name:"Chocolate cake",
            price:150,
            image:Pic9,
          },
          {
            name:"Carrot cake",
            price:350,
            image:Pic10,
          },
          {
            name:"Strawberry Roll",
            price:350,
            image:Pic11,
          },
          {
            name:"Piece cake",
            price:100,
            image:Pic12,
          },
          {
            name:"matcha cake",
            price:120,
            image:Pic13,
          },
          {
            name:"Walnut cake",
            price:300,
            image:Pic14,
          },
          {
            name:"Plum cake",
            price:150,
            image:Pic15,
          },
          {
            name:"Almond cake",
            price:200,
            image:Pic16,
          },
          {
            name:"Cheese cake",
            price:250,
            image:Pic17,
          },
          {
            name:"Sponge cake",
            price:100,
            image:Pic18,
          },
          {
            name:"Quark art",
            price:250,
            image:Pic19,
          },
          {
            name:"Fruit cake",
            price:300,
            image:Pic20,
          },
          {
            name:"Black Forest cake",
            price:450,
            image:Pic21,
          },
          {
            name:"Brownie",
            price:250,
            image:Pic22,
          },
          {
            name:"Qurak Berry cake",
            price:390,
            image:Pic23,
          },
          {
            name:"cheese cake",
            price:340,
            image:Pic24,
          },
            
          ]
  function billboxslide() {
    setBillbox(!billbox)
  }
  function Inputbtn() {
    setInput(!inputs)
  }
  const sendProducts = (rec) => {

    setCards(rec);
  }
 

  return (
    <>

      <nav>
        <h1>SOway<span className="navspan">GO</span> <span className="navshop">Shop</span> </h1>
        <div className="nav">
          <input className={`inputs ${inputs == false ? "input-hide" : "input-show"}} type="text" placeholder="Enter your Vegitables" defaultValue={search} onChange={vicky => setsearch(vicky.target.value)`} />
          <button onClick={Inputbtn}>
            <BsSearchHeart />
          </button>
          <h6 className="navh1">{totalItems}</h6>
          <button onClick={billboxslide}>
            <RiFileList3Line /></button></div>
           
        <div className={`bilbox ${billbox == false ? "billbox-hidden" : "billbox-show"}`}>
          <div className="reddiv">
            <h1 className="rednav">Card : ({totalUniqueItems}) Total Item : ({totalItems}) </h1>
            {items.map((item)=>{
               if(isEmpty) return <h1> Your Cart is Empty </h1> 
              return(
                 
                < >
                <table>
                  <tr> 
                  <td>
                <img className="cardimg" src={item.image}/>
                </td>
                <th>
            <h5>Product Name : {item.name}</h5>
            <h5>Product Price : {item.price}</h5>
            </th>
            <th>
            <button className="cardbtn" onClick={()=>updateItemQuantity(item.id,item.quantity-1)}> - </button>
            <button className="cardbtn" onClick={()=>updateItemQuantity(item.id,item.quantity+1)}> + </button>
            </th>
            <th>
            <button className="cardbtn" onClick={()=>removeItem(item.id)}>Remove</button>
            </th>
            </tr>
            </table>
            </>
             
          )
        })}
          </div>
          <div className="total">
            <h1 className="rednav">Total Amount Rs : { cartTotal}</h1>
            <div >
            <button className="downbtn" onClick={()=>emptyCart()}>Clear Now</button>
            <button className="downbtn">Buy Now</button>
            </div>
            </div>
        </div>

      </nav>
      <div className="overall">
        {Data.filter((item) => {
          if (search == "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLocaleLowerCase())) {
            return item;
          }
        })
          .map((item, index) => (
            <Showcase key={index}  items={item} sent={sendProducts} proName={item.name} proImg={item.image} priTxt={item.price} />
          ))}
      </div>



    </>
  )
}