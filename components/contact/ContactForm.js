import { useState } from 'react';
import { sendContactMail } from 'components/contact/contact-api';
import { motion, AnimateSharedLayout } from 'framer-motion';

export default function ContactForm() {
	const [state, setState] = useState({
		formButtonDisabled: false,
		formButton: 'Send',
		name: '',
		email: '',
		formContent: '',
	});

	const { formButtonDisabled, formButton, name, email, formContent } = state;

	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();

		const recipientMail = 'wpheadless@gmail.com';
		const _ = await sendContactMail(
			recipientMail,
			name,
			email,
			formContent,
		).then(
			setState({
				name: '',
				email: '',
				formContent: '',
				formButtonDisabled: true,
				formButton: 'Thanks!',
			}),
		);
	};

	return (
		<div className='w-full min-h-screen bg-gray-50 flex items-center'>
			<div className='px-5 pt-12 pb-8 mx-1 flex flex-wrap flex-col md:flex-row w-full h-auto items-start justify-center rounded-xl '>
				<div className='w-full md:w-1/3 px-4 py-5 self-start justify-self-stretch bg-green-50 rounded-xl shadow-xl'>
					<h2 className='text-4xl font-semibold '>Contact Me</h2>
					<p className='mt-2 text-sm '>
						You can reach me by filling out this contact form. I look forward to
						hearing from you, let's work together and made make your idea a
						reality.
					</p>
					<div className='flex flex-col mt-5'>
						<p className='contactInfo'>
							<span>
								<svg className='contactInfo__icon'>
									<use xlinkHref='/sprite.svg#icon-phone' />
								</svg>
							</span>{' '}
							(818)721-6257
						</p>
						<p className='contactInfo'>
							<span>
								<svg className='contactInfo__icon'>
									<use xlinkHref='/sprite.svg#icon-mail' />
								</svg>
							</span>{' '}
							jduarte0912@gmail.com
						</p>
					</div>
					<div className='mt-14'>
						<ul className='flex justify-evenly'>
							<li>
								<a
									href='https://www.linkedin.com/in/jose-r-duarte/'
									target='_blank'>
									<svg className='social__icon'>
										<use xlinkHref='/sprite.svg#icon-linkedin' />
									</svg>
								</a>
							</li>
							<li>
								<a href='https://twitter.com/Space__Coupe' target='_blank'>
									<svg className='social__icon'>
										<use xlinkHref='/sprite.svg#icon-twitter' />
									</svg>
								</a>
							</li>
							<li>
								<a
									href='https://www.instagram.com/finkerlinginggood/'
									target='_blank'>
									<svg className='social__icon'>
										<use xlinkHref='/sprite.svg#icon-instagram' />
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<form className='md:w-2/3 py-2 rounded-xl' onSubmit={handleSubmit}>
					<div className='flex flex-wrap'>
						<div className='w-full  px-3 mb-6 md:mb-0'>
							<label className='form__label' htmlFor='name'>
								Name
							</label>
							<input
								layout
								className='form__input '
								id='name'
								name='name'
								value={name || ''}
								onChange={handleChange}
								required
							/>
						</div>
						<div className='w-full px-3 mb-6 md:mb-0'>
							<label className='form__label' htmlFor='email'>
								Email
							</label>
							<input
								layout
								className='form__input'
								id='email'
								name='email'
								value={email || ''}
								onChange={handleChange}
								required
							/>
						</div>
						<div className='w-full px-3 mb-6 md:mb-0'>
							<label className='form__label' htmlFor='email'>
								Message
							</label>
							<textarea
								layout
								className='form__input resize-none'
								id='message'
								name='formContent'
								value={formContent || ''}
								onChange={handleChange}
								required
							/>
						</div>
						<div className='md:flex md:items-center w-full px-3 justify-start'>
							<div className='self-end'>
								<motion.button
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className={`shadow focus:outline-none ${
										formButtonDisabled ? 'bg-indigo-300' : 'bg-green-200'
									} focus:shadow-md text-black font-bold py-2 px-4 rounded`}
									type='submit'
									disabled={formButtonDisabled}>
									{formButton}
								</motion.button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
