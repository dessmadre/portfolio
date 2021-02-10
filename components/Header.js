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
								? 'text-black font-bold'
								: 'text-gray-300 font-semibold '
						} `}>
						{label}
					</motion.li>
				</Link>
			);
		});

	return (
		<nav className='w-screen h-16 flex p-4 items-center'>
			<h3 className='flex-1 text-xl font-bold '>Jose Duarte</h3>

			<ul className='flex justify-between w-2/5'>
				{' '}
				<AnimateSharedLayout>{links} </AnimateSharedLayout>
			</ul>
		</nav>
	);
};

export default Header;
