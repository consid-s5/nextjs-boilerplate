/**
 * Testing utils
 * Some extentions for React testing library.
 * https://testing-library.com/docs/react-testing-library/setup#custom-render
 * https://github.com/kentcdodds/react-testing-library-course/blob/tjs/src/__tests__/redux-03.js
 * https://github.com/kentcdodds/react-testing-library-course/blob/tjs/src/__tests__/react-router-03.js
 */

import React from 'react';
import { renderToString as reactDomRenderToString } from 'react-dom/server';
import { render } from '@testing-library/react';

interface Props {
	/** React children */
	children?: React.ReactNode
}

const AllTheProviders: React.FC<Props> = ({ children }) => {
	// return <Router history={history}>{children}</Router>;
	return <>{children}</>;
};

const customRender = (ui: any, options?: any) =>
	render(ui, { wrapper: AllTheProviders, ...options });

const renderToString = (component: any) => {
	return reactDomRenderToString(
		<AllTheProviders>{component}</AllTheProviders>
	);
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, renderToString };
