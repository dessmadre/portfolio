import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimateSharedLayout } from 'framer-motion';

const Header = () => {
	const router = useRouter();
	const activeLink = router.pathname;

	const links = [
		{ label: 'Portfolio', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' },
	]
		.filter(link => link)
		.map(({ label, href }) => {
			return (
				<Link href={href} key={href}>
					<motion.li
						layout
						initial={false}
						transition={{ type: 'spring', stiffness: 500, damping: 30 }}
						className={`cursor-pointer ${
							activeLink === href
								? 'text-black font-bold border-b-2 border-green-400'
								: 'text-green-400 font-semibold border-b-2 border-transparent   '
						} `}>
						{label}
					</motion.li>
				</Link>
			);
		});

	return (
		<nav className='w-full h-12 flex px-12 items-center shadow-lg z-50'>
			<Link href='/'>
				<h3 className='flex-1 text-xl font-bold cursor-pointer'>Jose Duarte</h3>
			</Link>

			<ul className='flex justify-between w-2/5'>
				{' '}
				<AnimateSharedLayout>{links} </AnimateSharedLayout>
			</ul>
		</nav>
	);
};

export default Header;
