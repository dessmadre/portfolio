import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Card({
	setShown,
	setSelectedImg,
	setDetails,
	title,
	image,
	about,
	liveLink,
	githubLink,
	techUsed,
}) {
	return (
		<div onClick={setShown} className='col-span-1 mb-5 cursor-pointer'>
			<motion.div
				whileHover={{ scale: 1.01, opacity: 1 }}
				whileTap={{ scale: 0.99 }}
				className='portfolio__image'
				onClick={() => {
					setSelectedImg(`${image}`);
					setDetails({
						title: title,
						about: about,
						liveLink: liveLink,
						githubLink: githubLink,
						techUsed: techUsed,
					});
				}}>
				<Image
					className='absolute'
					src={`${image}`}
					layout='fill'
					objectFit='cover'
					objectPosition='center'
				/>
			</motion.div>
			<h3 className='w-auto text-3xl font-semibold mt-2 cursor-pointer'>
				{title}
			</h3>
		</div>
	);
}
