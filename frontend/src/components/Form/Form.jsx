import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerLogin } from '../../slices/userSlice';
import { selectUserError } from '../../Store/selectors/selectors';

import './Form.scss';

export default function LoginForm() {
	const dispatch = useDispatch();
	const userLoginError = useSelector(selectUserError());
	const inputUsername = useRef();
	const inputPassword = useRef();
	const checkboxRemember = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(triggerLogin(inputUsername.current.value, inputPassword.current.value, checkboxRemember.current.checked));
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className='input-wrapper'>
				<label htmlFor='username'>Username</label>
				<input type='email' id='username' ref={inputUsername} required />
			</div>
			<div className='input-wrapper'>
				<label htmlFor='password'>Password</label>
				<input type='password' id='password' ref={inputPassword} required />
			</div>
			<div className='input-remember'>
				<input type='checkbox' id='remember-me' ref={checkboxRemember} />
				<label htmlFor='remember-me'>Remember me</label>
			</div>
			<button type='submit' className='sign-in-button'>
				Sign In
			</button>
			{userLoginError !== null ? <p style={{ color: '#ED4944', marginTop: '12px', textAlign: 'center' }}>E-mail or password incorrect !</p> : null}
		</form>
	);
}
