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
		<div className='contact'>
			<div className='contact__container'>
				<div className='contact__info'>
					<h2 className='contact__info--title'>Contact Me</h2>
					<div className='contact__info--info'>
						<p className='contact__info-info-details'>
							<span>
								<svg className='contact__info--info-icon'>
									<use xlinkHref='/sprite.svg#icon-phone' />
								</svg>
							</span>{' '}
							(818)721-6257
						</p>
						<p className='contact__info-info-details'>
							<span>
								<svg className='contact__info--info-icon'>
									<use xlinkHref='/sprite.svg#icon-mail' />
								</svg>
							</span>{' '}
							jduarte0912@gmail.com
						</p>
					</div>
					<div className='contact__info--socials'>
						<ul className='flex justify-evenly'>
							<li>
								<a
									href='https://www.linkedin.com/in/jose-r-duarte/'
									target='_blank'>
									<svg className='contact__info--socials-icon'>
										<use xlinkHref='/sprite.svg#icon-linkedin' />
									</svg>
								</a>
							</li>
							<li>
								<a href='https://twitter.com/Space__Coupe' target='_blank'>
									<svg className='contact__info--socials-icon'>
										<use xlinkHref='/sprite.svg#icon-twitter' />
									</svg>
								</a>
							</li>
							<li>
								<a href='https://github.com/dessmadre' target='_blank'>
									<svg className='contact__info--socials-icon'>
										<use xlinkHref='/sprite.svg#icon-github' />
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<form className='contact__form' onSubmit={handleSubmit}>
					<div className='contact__form--container'>
						<div className='contact__form--input-group'>
							<label className='contact__form--label' htmlFor='name'>
								Name
							</label>
							<input
								className='contact__form--input'
								id='name'
								name='name'
								value={name || ''}
								onChange={handleChange}
								required
							/>
						</div>
						<div className='contact__form--input-group'>
							<label className='contact__form--label' htmlFor='email'>
								Email
							</label>
							<input
								className='contact__form--input'
								id='email'
								name='email'
								value={email || ''}
								onChange={handleChange}
								required
							/>
						</div>
						<div className='contact__form--input-group'>
							<label className='contact__form--label' htmlFor='email'>
								Message
							</label>
							<textarea
								className='contact__form--input resize-none'
								id='message'
								name='formContent'
								value={formContent || ''}
								onChange={handleChange}
								required
							/>
						</div>
						<div className='contact__form--btn-block'>
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className={`contact__form--btn ${
									formButtonDisabled ? 'bg-green-200' : 'bg-indigo-300'
								} `}
								type='submit'
								disabled={formButtonDisabled}>
								{formButton}
							</motion.button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
