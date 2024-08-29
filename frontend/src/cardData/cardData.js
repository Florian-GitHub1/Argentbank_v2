//svg
import talk from '../assets/svg/talk.svg';
import interest from '../assets/svg/interest.svg';
import security from '../assets/svg/security.svg';
//img
import serviceClient from '../assets/service-client.png';
import interet from '../assets/interet.png';
import securiter from '../assets/securiter.png';

export const infosCardsData = [
	{
		id: '1',
		title: 'You are our #1 priority',
		description: 'Need to talk to a representative ? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
		img: serviceClient,
		svg: talk,
	},
	{
		id: '2',
		title: 'More savings means higher rates',
		description: 'The more you save with us, the higher your interest rate will be !',
		img: interet,
		svg: interest,
	},
	{
		id: '3',
		title: 'Security you can trust',
		description: 'We use top of the line encryption to make sure your data and money is always safe.',
		img: securiter,
		svg: security,
	},
];
