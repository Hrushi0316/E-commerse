import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useEffect,useState } from 'react'
import axios from "axios";
import NoPage from './NoPage';

const Fasion = () => {
    const [data, setData] = useState([]);  // 👈 STATE to store items

  const addinngCart = async (productId,productname) => {
    console.log("ADDING:",productname, `to cart`,productId);
   await axios.post(
    "http://localhost:3001/api/cart",
    { productId },
    { withCredentials: true }
  );
  
};
  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:3001/api/fasion", {
          withCredentials: true,
        });
        console.log("Items:", res.data);
        setData(res.data)
      } catch (error) {
        console.log("Error:", error);
      }
    }

    fetchData();   // ✔️ ONLY CALL ONCE
  }, []);

  return (
    <div>
        <Navbar/>
        <div className='section'>
    {data.length === 0 ? (
  <div><NoPage/></div>
) : (
  data.map((ele) => (
    <div key={ele._id} className='individual'>
      <div className="item">
        <h3 className='itemname'>{ele.name}</h3>

        <div className='outerimg'>
          <img className='image' src={ele.image} alt={ele.name} />
        </div>

        <p className='description'>{ele.description}</p>
        <p className="price">₹{ele.price}</p>

        <div className='buttons'>
          <button onClick={() => addinngCart(ele._id, ele.name)}>
            Add to cart
          </button>
          <button>Buy Now</button>
        </div>

      </div>
    </div>
  ))
)}

      </div>
        <Footer/>
    </div>
  )
}

export default Fasion
