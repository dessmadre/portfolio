import Head from 'next/head';

import Container from 'components/Container';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Container>
				<h1>Portfolio</h1>
			</Container>
		</div>
	);
}

// export async function getStaticProps({ preview = false }) {
// 	const allPosts = await getAllPostsForHome(preview);
// 	return {
// 		props: { allPosts, preview },
// 	};
// }
