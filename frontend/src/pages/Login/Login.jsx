import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserIsConnected } from '../../Store/selectors/selectors';

import Form from '../../components/Form/Form';
import './Login.scss';

export default function Login() {
	const userIsConnected = useSelector(selectUserIsConnected());

	if (userIsConnected) {
		return <Navigate to='/profile' replace />;
	}
	return (
		<main className='main bg-dark'>
			<section className='sign-in-content'>
				<h1>Sign In</h1>
				<Form />
			</section>
		</main>
	);
}
