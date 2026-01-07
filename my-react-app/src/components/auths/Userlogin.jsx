import './auth.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate,} from 'react-router-dom';

const Userlogin = () => {

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target['email'].value;
    const password = e.target['password'].value;

    try{
        const response = await axios.post('http://localhost:3001/user/login', {
          email,
          password
        },{
           withCredentials: true
       });
        console.log(response);
        navigate('/home');
        console.log(email,password)


    }catch(err){
      console.log(`Error at the axios call: ${err}`);
      alert("Login failed. Please check your credentials and try again.");

    }
    console.log('User login', { email, password });
    
  }

  return (
    <div className='lg'>

    <div className="auth-container">
      <h3 className="auth-title">User Sign In</h3>
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            id="email"
            className="form-input"
            type="email"
            placeholder="you@example.com"
            name="email"
            />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input
            id="password"
            className="form-input"
            type="password"
            name="password"
            placeholder="••••••••"
            />
        </div>

        <button className="auth-btn" type="submit" >Sign In</button>

        <div className="secondary-row">
          <span className="form-note">Don't have an account?</span>
          <button type="button" className="link-btn"><Link to="/user/register">Register</Link></button>
        </div>
      </form>
    </div>
            </div>
  )
}

export default Userlogin
