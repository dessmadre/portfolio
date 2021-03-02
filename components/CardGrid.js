export default function CardGrid({ children }) {
	return (
		<div className='pt-12 grid gap-5 grid-cols-1 md:grid-cols-2 grid-rows-2'>
			{children}
		</div>
	);
}
