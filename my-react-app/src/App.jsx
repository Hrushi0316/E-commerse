import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import Landing from './components/Landing.jsx';
import UserRegister from './components/auths/UserRegister.jsx';
import Userlogin from './components/auths/Userlogin.jsx';
import VendorLogin from './components/auths/VendorLogin.jsx'; 
import VendorRegister from './components/auths/VendorRegister.jsx';
import CreateItems from './components/CreateItems.jsx';
import Mobile from './components/Mobile.jsx';
import Cart from '../Cart.jsx';
import Fasion from './components/Fasion.jsx';
import NoPage from './components/NoPage.jsx';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/user/register" element={<UserRegister />} />
      <Route path="/user/login" element={<Userlogin />} />
      <Route path="/vendor/login" element={<VendorLogin />} />
      <Route path="/vendor/register" element={<VendorRegister />} />
      <Route path="/create-items" element={<CreateItems />} />
      <Route path="/mobile" element={<Mobile/>} />
      <Route path="/fasion" element={<Fasion/>} />
      <Route path="/Nopage" element={<NoPage/>} />
      <Route path ="/cart" element={<Cart/>}/>
    </Routes>
    </>
  );
}

export default App;