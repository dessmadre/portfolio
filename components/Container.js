export default function Container({ children }) {
	return (
		<main className='min-h-screen max-w-screen px-2 md:px-12 bg-gray-300 realtive'>
			{children}
		</main>
	);
}
