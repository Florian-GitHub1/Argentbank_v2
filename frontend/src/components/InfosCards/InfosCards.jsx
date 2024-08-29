import React from 'react';
import './InfosCards.scss';

//svg
import talk from '../../assets/svg/talk.svg';
import interest from '../../assets/svg/interest.svg';
import security from '../../assets/svg/security.svg';
//img
import serviceClient from '../../assets/service-client.png';
import interet from '../../assets/interet.png';
import securiter from '../../assets/securiter.png';

export default function InfosCards() {
	return (
		<>
			{/*  First card */}
			<div className='card-content-wrapper'>
				<div className='text-wrapper'>
					<div className='title-desc'>
						<h3 className='card-title'>You are our #1 priority</h3>
						<div className='card-desc'>
							<p className='card-amount-description'>Need to talk to a representative ?</p>
							<p className='card-amount-subtext'>You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
						</div>
					</div>
					<div className='btn-wrapper'>
						<button className='cta'>Ask your questions</button>
					</div>
					<div className='svg-blur'></div>
					<img className='svg' src={talk} alt='' />
				</div>
				<div className='img-wrapper'>
					<img src={serviceClient} alt='' />
				</div>
			</div>
			{/*  Second card */}
			<div className='card-content-wrapper wrapper-left'>
				<div className='img-wrapper'>
					<img className='img-left' src={interet} alt='' />
				</div>
				<div className='text-wrapper'>
					<div className='title-desc'>
						<h3 className='card-title'>More savings means higher rates</h3>
						<div className='card-desc'>
							<p className='card-amount-description'>The more you save with us, the higher your interest rate will be !</p>
							{/* <p className='card-amount-subtext'>You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p> */}
						</div>
					</div>
					<div className='svg-blur svg-blur_left'></div>
					<img className='svg norotate' src={interest} alt='' />
				</div>
			</div>
			{/*  Third card */}
			<div className='card-content-wrapper'>
				<div className='text-wrapper'>
					<div className='title-desc'>
						<h3 className='card-title'>Security you can trust</h3>
						<div className='card-desc'>
							<p className='card-amount-description'>We use top of the line encryption to make sure your data and money is always safe.</p>
							{/* <p className='card-amount-subtext'>You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p> */}
						</div>
					</div>
					<div className='svg-blur'></div>
					<img className='svg norotate_security' src={security} alt='' />
				</div>
				<div className='img-wrapper'>
					<img src={securiter} alt='' />
				</div>
			</div>
		</>
	);
}
