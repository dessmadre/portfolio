import ModalDetails from './ModalDetails';
import ModalImage from './ModalImage';

const Modal = ({ selectedImg, setSelectedImg, details, setDetails }) => {
	const { title, about, liveLink, githubLink, techUsed } = details;

	const handleClick = e => {
		if (e.target.classList.contains('backdrop')) {
			setSelectedImg(null);
			setDetails(null);
		}
	};

	return (
		<div className='backdrop' onClick={handleClick}>
			<div className='modal'>
				<div className='modal__image'>
					<a href={liveLink} target='_blank'>
						<ModalImage selectedImg={selectedImg} />
					</a>
				</div>
				<div className='modal__details'>
					<ModalDetails
						title={title}
						about={about}
						liveLink={liveLink}
						githubLink={githubLink}
						techUsed={techUsed}
					/>
				</div>
			</div>
		</div>
	);
};

export default Modal;
