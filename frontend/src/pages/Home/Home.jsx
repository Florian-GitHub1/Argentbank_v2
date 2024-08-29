import { MessageSquareMore, BadgeEuro, ShieldCheck } from 'lucide-react';

import InfosCards from '../../components/InfosCards/InfosCards';

import '../Home/Home.scss';

export default function Home() {
	return (
		<main>
			<div className='hero'>
				<section className='hero-content'>
					<p className='subtitle'>
						No <span className='green'>fees</span>.
					</p>
					<p className='subtitle'>
						No <span className='green'>minimum deposit</span>.
					</p>
					<p className='subtitle'>
						High <span className='green'>interest rates</span>.
					</p>
					<p className='text'>
						Open a savings account with <span className='medium'>Argentbank today</span> !
					</p>
				</section>
				<section className='features'>
					<div className='features-block'>
						<div className='feature-item'>
							<MessageSquareMore className='feature-item-svg' size={24} color={'#07090D'} strokeWidth={2} />
							<h3 className='feature-item-title'>You are our #1 priority</h3>
						</div>
						<span className='vertical-separation'></span>
						<div className='feature-item'>
							<BadgeEuro className='feature-item-svg' size={24} color={'#07090D'} strokeWidth={2} />
							<h3 className='feature-item-title'>More savings means higher rates</h3>
						</div>
						<span className='vertical-separation'></span>
						<div className='feature-item'>
							<ShieldCheck className='feature-item-svg' size={24} color={'#07090D'} strokeWidth={2} />
							<h3 className='feature-item-title'>Security you can trust</h3>
						</div>
					</div>
				</section>
			</div>
			<section className='cards-container'>
				<InfosCards />
			</section>
		</main>
	);
}
