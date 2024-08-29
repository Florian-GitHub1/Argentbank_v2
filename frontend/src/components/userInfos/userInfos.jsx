import './userInfos.scss';

function userInfos({ firstName, lastName }) {
	return (
		<h1 className='greeting'>
			<span>Welcome back</span>
			<br />
			{firstName} {lastName} !
		</h1>
	);
}

export default userInfos;
