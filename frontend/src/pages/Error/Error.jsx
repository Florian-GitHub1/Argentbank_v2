import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';

export default function Error() {
	return (
		<main className='error-page'>
			<section className='error'>
				<h2 className='title-error'>404</h2>
				<p className='text-error'>The requested page doesn't exist.</p>
				<p className='text-error text-error-subtitle'>Please return to home page.</p>
				<Link to='/'>
					<button className='button-404'>Home page</button>
				</Link>
			</section>
		</main>
	);
}
