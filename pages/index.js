import { useState } from 'react';

import { Projects } from 'lib/projects';
import Container from 'components/Container';
import Card from 'components/Card';
import Meta from 'components/Meta';
import Modal from 'components/Modal';
import CardGrid from 'components/CardGrid';

export default function Home({ projects }) {
	const [selectedImg, setSelectedImg] = useState(null);
	const [details, setDetails] = useState({
		title: null,
		img: null,
		about: null,
		liveLink: null,
		githubLink: null,
		techUsed: null,
	});

	return (
		<div>
			<Meta />
			<Container>
				<div className='flex py-8 items-center justify-center'>
					<h1 className='text-5xl font-semibold '>Projects</h1>
				</div>
				<CardGrid>
					{projects.map(project => {
						return (
							<Card
								key={project.liveLink}
								image={project.img}
								title={project.title}
								about={project.about}
								liveLink={project.liveLink}
								githubLink={project.githubLink}
								techUsed={project.techUsed}
								setSelectedImg={setSelectedImg}
								details={details}
								setDetails={setDetails}
							/>
						);
					})}
				</CardGrid>
				{selectedImg && (
					<Modal
						selectedImg={selectedImg}
						details={details}
						setDetails={setDetails}
						setSelectedImg={setSelectedImg}
					/>
				)}
			</Container>
		</div>
	);
}

export function getStaticProps() {
	const projects = Projects;

	return {
		props: {
			projects,
		},
	};
}
