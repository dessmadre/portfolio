import Image from 'next/image';

export default function ModalImage({ selectedImg }) {
	return (
		<div className='modal__image--img'>
			<Image
				className='absolute'
				src={`${selectedImg}`}
				layout='fill'
				objectFit='cover'
				objectPosition='left'
			/>
		</div>
	);
}
