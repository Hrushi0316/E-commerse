import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  return (
    <>
   <div className='lg'>
    <div className='header'>
        <div><img src="https://cdn-icons-png.flaticon.com/128/825/825479.png" alt="logo" /></div>
        <h3 className='company-name'>Easy buy..</h3>
    </div>
        <p className='header-heading'>Welcome to Eaasy buy — your one-stop destination for effortless online shopping. Discover a wide range of top-quality products from trusted brands, including the latest mobiles, stylish watches, electronics, fashion essentials, and more. We make your shopping experience smooth, reliable, and enjoyable. Start exploring today and find everything you need in just a click!</p>

    <div className='auths'>

    <div className='container' >
       <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="shopping" />
       <h4>Login as the user</h4>
       <Link to="/user/login"><button className='btn btn-primary'>User Login</button></Link>
    </div>
    <div className='container'>
       <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="shopping" />
       <h4>Register as the user</h4>
       <Link to="/user/register"><button className='btn btn-primary'>User Register</button></Link>
    </div>
    <div className='container'>
       <img src="https://cdn-icons-png.flaticon.com/128/560/560216.png" alt="shopping" />
       <h4>Login as the Vendor</h4>
       <Link to="/vendor/login"><button className='btn btn-primary'>Vendor Login</button></Link>
    </div>
    <div className='container'>
       <img src="https://cdn-icons-png.flaticon.com/128/560/560216.png" alt="shopping" />
       <h4>Register as the Vendor</h4>
       <Link to="/vendor/register"><button className='btn btn-primary'>Vendor Register</button></Link>
    </div>
    </div>
     <Link to="/home"><button className='btn btn-secondary'>Back to Home</button></Link>
   </div>
    </>
  )
}

export default Landing
