import { Copyright } from 'lucide-react';

import '../Footer/Footer.scss';

export default function Footer() {
	return (
		<footer className='footer'>
			<p className='footer-text'>
				Copyright 2020{' '}
				<span>
					<Copyright size={18} color={`#fffffd`} strokeWidth={2} />
				</span>{' '}
				Argentbank
			</p>
		</footer>
	);
}
