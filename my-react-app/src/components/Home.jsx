import { useEffect, useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import './Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const addinngCart = async (productId,productname) => {
  console.log("ADDING:",productname, `to cart`,productId);
  await axios.post(
    "http://localhost:3001/user/cart",
    { productId },
    { withCredentials: true }
  );
  
};

  const [data, setData] = useState([]);  // 👈 STATE to store items
  const navigate = useNavigate();

   const mobilePage=()=>{
    navigate("/mobile");
  }
   const fasionPage=()=>{
    navigate("/fasion");
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3001/all/items', { withCredentials: true });
      setData(res.data);   // 👈 store data in state
    };
    fetchData();
  }, []);

  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <div className='menu'>
      <button  onClick={mobilePage} className='special'>Mobiles & Electronics</button>
      <button  onClick={fasionPage}className='special'>Fashions</button>
      </div>

      {/* Render the items */}
      <div className='section'>
      {data.map((ele) => (
        <div  key={ele._id} className='individual'>
         <div className="item">
          <h3 className='itemname'>{ele.name}</h3>
          <div className='outerimg'>
          <img className='image'src={ele.image} alt={ele.name} />
          </div>
          <p className='description'>{ele.description}</p>
          <p className="price">₹{ele.price}</p>

          <div className='buttons'>
            
          <button onClick={()=>{
            addinngCart(ele._id,ele.name)
          }}>Add to cart</button>
          <button >Buy Now</button>
            
          </div>
         </div>
        </div>
      ))}
      </div>



      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
