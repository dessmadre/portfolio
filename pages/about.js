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
					<p className='text-2xl font-semibold w-3/5'>
						My name is Jose Duarte, and I am a front-end web developer. I
						Learned Javascript in 2020 and started making react apps as soon as
						I got comfortable with the language.
					</p>
				</div>
			</Container>
		</>
	);
};

export default About;
