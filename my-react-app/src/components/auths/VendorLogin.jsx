import axios from 'axios';
import './auth.css';
import { useNavigate } from 'react-router-dom';

const VendorLogin = () => {
    const navigate = useNavigate();
   async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target['email'].value;
    const password = e.target['password'].value;
    try{
        await axios.post('http://localhost:3001/vendor/login', {
          email,
          password
        }, { withCredentials: true
        });
        navigate('/create-items');

    }catch(err){
      console.log(`Error at the axios call: ${err}`);
    }
  }

  return (
    <div className='lg'>
    <div className="auth-container">
      <h3 className="auth-title">Vendor Sign In</h3>
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input id="email" className="form-input" type="email" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input id="password" className="form-input" type="password" />
        </div>

        <button className="auth-btn" type="submit">Sign In</button>
      </form>
    </div>
    </div>
  )
}

export default VendorLogin
