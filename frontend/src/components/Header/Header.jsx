import { NavLink, Link } from 'react-router-dom';
import { LockOpen, Power } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../slices/userSlice';
import { selectUserIsConnected, selectUserFirstName } from '../../Store/selectors/selectors';

import './Header.scss';

export default function Header() {
	const userIsConnected = useSelector(selectUserIsConnected());
	const userFirstName = useSelector(selectUserFirstName());
	const dispatch = useDispatch();

	return (
		<nav className='main-nav'>
			<Link className='main-nav-logo' to='/'>
				<h1 className='main-nav-logo-header'>Argentbank</h1>
			</Link>
			<div>
				{userIsConnected ? (
					<>
						<NavLink className='main-nav-item-username' to='/profile'>
							<span>{userFirstName}</span>
						</NavLink>
						<NavLink className='main-nav-item' to='/' onClick={() => dispatch(logout())}>
							<Power className='main-nav-item-svg' size={18} color={`#07090d`} strokeWidth={1.5} />
						</NavLink>
					</>
				) : (
					<>
						<NavLink className='main-nav-item inactive' to='/login'>
							<LockOpen className='main-nav-item-svg' size={18} color={`#07090d`} strokeWidth={1.5} />
						</NavLink>
					</>
				)}
			</div>
		</nav>
	);
}
