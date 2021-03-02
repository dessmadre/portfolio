import Container from 'components/Container';
import Meta from 'components/Meta';

const About = () => {
	return (
		<>
			<Meta />
			<Container>
				<div className='flex items-center justify-center flex-wrap flex-col w-full h-full'>
					<h1
						className='
					py-24 text-5xl font-bold'>
						About Me<span className='text-green-400'>.</span>
					</h1>
					<p className='text-2xl font-semibold'>
						My name is Jose Duarte, I am a front-end web developer. I started
						learing JavaScript in 2020 and started working with React shortly
						after.
					</p>
				</div>
			</Container>
		</>
	);
};

export default About;
