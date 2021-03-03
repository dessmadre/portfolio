export const Projects = [
	{
		title: 'Candle Shack',
		img: '/candle_shack.png',
		about:
			"### __Purpose__\n \n	\nI wanted to build a E-commerce app using a headless CMS, I chose to use Commerce.js to store product and order information. This app is built using Next.js and uses it data fetching features to recieve data from Commerce.js. I styled this website using Tailwind CSS and Framer Motion. Tailwind for the styling of the components and Framer Motion to animate the buttons and the cart.\n \n### __Challenges__\n \nLearning the Commerce.js interface was important I had an issue where I wasn't receiving shipping options during checkout. It turned out that I forgot to click on a setting which allowed that information to display. In order to to persist the data from Commer.js I implement state-managment with React's Context Api which allowed to me cache the data. I had difficulty with the implentation of it, but got it to work in the end.",
		liveLink: 'https://candle-shack.vercel.app/',
		githubLink: 'https://github.com/dessmadre/commercejs-w-next',
		techUsed: ['Next.js', 'Vercel', 'Tailwind CSS', 'Commercejs', 'REST'],
	},
	{
		title: 'Stream.it',
		img: '/streaming_it.png',
		about:
			'### __Purpose__\n	\nThe purpose of this app was to learn how to build a fullstack React application using Typescript, Apollo, GraphQL. The app has CRUD functionality and the data is being persisted in a MongoDB database. The backend is written in Node.js, and authentication is handled by JSON web Token. Apollo Server interfaces with the backend and sends data responses to the front-end which is handled with Apollo Client.\n \n### __Challenges__\n \nI purchased a Udemy course that showed me how to make this website. I diverted from the course by using Tailwind CSS to style my project instead of Material UI. I also refactored the components from the original video in order to reduce filesize. One of my challenges with this project was learning how to use and implement monorepos.',
		liveLink: 'https://streaming-it-next-app.herokuapp.com/',
		githubLink: 'https://github.com/dessmadre/Stream.it',
		techUsed: [
			'Node',
			'Heroku',
			'TailwindCss',
			'Next.js',
			'GraphQL',
			'Apollo',
			'TypeScript',
			'CRUD',
		],
	},
	{
		title: 'Cows!',
		img: '/cows.png',
		about:
			"### __Purpose__\n \nThe Purpose of the app was to learn how to use Wordpress as a Headless CMS. I am interested in the JAM stack, when I learned that I could leverage Wordpress's platform as a way to create custom webpages without the need of a pre-installed themes, and I wanted to know how. With the use a plugin called WPGraphQL I was able to hook into my Wordpress database and gain access to its data, allowing me to display it on a Next.js project. The reason for the theme of the website, I usually go for a placeholder image of a cow, and that was the inspiration for the app. I was able to style it using Tailwind CSS, which made it easier to build the application.\n \n### __Challenges__\n \nThe biggest challenge with this project was learning how to use GraphQL. I was not familiar with how to use it, after reading some documentation I learned its benefit's when it came to fetching data from an API. Another challenge was styling the site, I didn't want to use a component library and instead I opted to use Tailwind CSS a library that I wasn 't familiar with. After using it on this app, I really liked how easily you could style a custom components.",
		liveLink: 'https://headless-next-lilac.vercel.app/',
		githubLink: 'https://github.com/dessmadre/headless-next',
		techUsed: ['NextJs', 'Vercel', 'Tailwind CSS', 'Graphql', 'JWT'],
	},

	{
		title: "Ralphie's List",
		img: '/ralphies-list.png',
		about:
			" \n### __Purpose__\n		\nThe purpose of this app was to create a catalog for vendors who use OfferUp as platform for selling thier goods. This app works by leveraging OfferUp's API which allows me access to all the products a seller has available. This app makes it easier for a seller to track thier inventory and can make it easier to show what they offer. The products can be filtered with the searchbar.\n \n### __Challenges__\n \nThe most challenging part of this project was working with OfferUp's API, unfortuantely it is not public. In order to make the app display a sellers product, I have to to to a sellers page and get their product data from OfferUp everytime they updates thier merchandise. Nonetheless, I built the app and Ralphie's List is the catalog of my friend Ralph. Another challege was learing how to use filters and how I could filter the data on the page through the use of pagination and a searchbar,\n",
		liveLink: 'https://calymex.com/',
		githubLink: 'https://github.com/dessmadre/raplhies-list',
		techUsed: ['NextJS', 'Vercel', 'Sass'],
	},
];
