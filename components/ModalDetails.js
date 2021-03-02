import Tag from './Tag';
import ReactMarkdown from 'react-markdown';

export default function ModalDetails({
	title,
	about,
	liveLink,
	githubLink,
	techUsed,
}) {
	const tags = techUsed.map(tag => <Tag tech={tag} key={tag} />);

	const markdown = `${about}`;
	console.log(markdown);

	return (
		<div className='modal__details--container'>
			<h1 className='modal__details--title'>{title}</h1>
			<ReactMarkdown
				className='modal__details--about'
				children={markdown}></ReactMarkdown>
			<div className='modal__details--tags'>{tags}</div>
			<div className='flex w-full items-center justify-evenly'>
				<a href={githubLink} target='_blank'>
					<div className='modal__details--iconbox'>
						<svg className='modal__details--icon'>
							<use xlinkHref='/sprite.svg#icon-github' />
						</svg>
						<span className='modal__details--span'>Visit Github</span>
					</div>
				</a>
				<a href={liveLink} target='_blank'>
					<div className='modal__details--iconbox'>
						<svg className='modal__details--icon'>
							<use xlinkHref='/sprite.svg#icon-link' />
						</svg>
						<span className='modal__details--span'>Visit Site</span>
					</div>
				</a>
			</div>
		</div>
	);
}
