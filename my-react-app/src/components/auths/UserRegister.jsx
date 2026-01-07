import './auth.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const name = e.target['name'].value;
    const email = e.target['email'].value;
    const password = e.target['pass'].value;

    try {
      await axios.post(
        'http://localhost:3001/user/register',
        {
          name,
          email,
          password
        },
        {
          withCredentials: true
        }
      );

      console.log("User Registered Successfully!");
      navigate("/home"); // optional redirect

    } catch (err) {
      console.log(`Error at the axios call: ${err}`);
    }

    console.log("User registration:", { name, email, password });
  }

  return (
    <div className='lg'>
    <div className="auth-container ">
      <h3 className="auth-title">Create an account</h3>
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Full name</label>
          <input id="name" className="form-input" placeholder="Jane Doe" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input id="email" className="form-input" type="email" placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="pass">Password</label>
          <input id="pass" className="form-input" type="password" placeholder="Minimum 6 characters" />
        </div>


        <button className="auth-btn" type="submit" > Create account</button>
        <div className="secondary-row">
          <span className="form-note">Already have an account?</span>
          <button type="button" className="link-btn" ><Link to="/user/login">Sign in</Link></button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default UserRegister
