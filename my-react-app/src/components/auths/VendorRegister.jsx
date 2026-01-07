import './auth.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VendorRegister = () => {
    const navigate = useNavigate();

	async  function handleSubmit(e) {
		e.preventDefault();
		const companyName = e.target['company-name'].value;
		const phoneNo = e.target['phone-no'].value;
		const email = e.target['vendor-email'].value;
		const password = e.target['vendor-pass'].value;
		const address = e.target['vendor-address'].value;

		try{
			await axios.post('http://localhost:3001/vendor/register', {
				companyName,
				phoneNo,
				email,
				password,
				address	
			}, { withCredentials: true});
			navigate('/create-items');

		}catch(err){
			console.log(`Error at the axios call: ${err}`);
		}
	}

	return (
        <div className='lg'>
		<div className="auth-container">
			<h3 className="auth-title">Vendor Registration</h3>
			<form className="auth-form" onSubmit={handleSubmit} noValidate>
				<div className="form-group">
					<label className="form-label" htmlFor="company-name">Company Name</label>
					<input id="company-name" className="form-input"  placeholder="Acme, Inc." />
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="phone-no">PhoneNO</label>
					<input id="phone-no" className="form-input"  placeholder="Alice Example" />
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="vendor-email">Work email</label>
					<input id="vendor-email" className="form-input" type="email"  placeholder="you@example.com" />
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="vendor-pass">Password</label>
					<input id="vendor-pass" className="form-input" type="password"  placeholder="Minimum 6 characters" />
				</div>

				<div className="form-group">
					<label className="form-label" htmlFor="vendor-address">Address</label>
					<input id="vendor-address" className="form-input" type="text" placeholder="Minimum 6 characters" />
				</div>

				<button className="auth-btn" type="submit" > Create vendor account</button>
			</form>
		</div>
        </div>
	)
}

export default VendorRegister
