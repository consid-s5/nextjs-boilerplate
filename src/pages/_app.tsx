import '../styles/globals.css';
import 'nprogress/nprogress.css';
import Router from 'next/router';
import NProgress from 'nprogress';

const debugMode =
	typeof document !== 'undefined' &&
	document.cookie?.split('; ').indexOf('debug=true') !== -1;

if (process.env.NODE_ENV === 'development') {
	if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
		require('../../mocks');
	}
}

if (process.env.NEXT_PUBLIC_DEVTOOLS || debugMode) {
	import(`@utils/devtools/apiViewer`)
		.then(module => {
			module.apiViewer();
		})
		.catch(err => {
			console.error(err.message);
		});
}

NProgress.configure({ showSpinner: false, trickleSpeed: 100 });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
