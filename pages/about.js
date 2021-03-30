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
					py-24 text-5xl font-bold'
          >
            About Me<span className='text-green-400'>.</span>
          </h1>
          <p className='text-2xl font-semibold w-3/5'>
            My name is Jose Duarte, I am a Los Angeles based web-developer.
          </p>
        </div>
      </Container>
    </>
  );
};

export default About;
