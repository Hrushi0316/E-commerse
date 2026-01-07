import React from 'react'
import {useEffect,useState} from "react"
import axios from "axios";
import Footer from './src/components/Footer';
import './Cart.css';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const navigate = useNavigate();
    const [data,setData] =useState([])
    useEffect(()=>{
       async function fetchData(){
        const res = await axios.get('http://localhost:3001/cart', { withCredentials: true });
        setData(res.data)
       };
       fetchData();
    },[]);
    console.log(data);

    function mobileNavigate(){
      navigate("/mobile")
    }
    function fasionNavigate(){
      navigate("/fasion")
    }
    function homeNavigate(){
      navigate("/home")
    }

  return (
    <>
    <div className='divBox'>
      <button onClick={mobileNavigate}>Mobile & Electronics</button>
      <button onClick={fasionNavigate}>Fasion</button>
      <button onClick={homeNavigate}>Back</button>  
    </div>
    <div>
      {data.map((ele) => (
  <div key={ele.productId._id} className='individual'>
    <div className="item">
      <h3 className='itemname'>{ele.productId.name}</h3>

      <div className='outerimg'>
        <img className='image' src={ele.productId.image} alt={ele.productId.name} />
      </div>

      <p className='description'>{ele.productId.description}</p>
      <p className="price">₹{ele.productId.price}</p>

      <div className='buttons'>
        <button>Buy Now</button>
      </div>
    </div>
  </div>
))}

    </div>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default Cart
