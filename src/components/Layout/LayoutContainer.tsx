/**
 * LayoutContainer
 */

import React from 'react';
import clsx from 'clsx';
import LayoutOverlay from './LayoutOverlay';

interface Props {
	/** React children */
	children?: React.ReactNode

	/** max-width for the container. */
	maxWidth?: 'standard' | 'narrow';

	/** Optional className for the grid wrapper */
	className?: string;

	/** Show a grid overlay */
	overlay?: boolean;
}

/** Layout container setting the page width. */
export const LayoutContainer: React.FC<Props> = ({
	children,
	maxWidth = 'standard',
	className = '',
	overlay = false,
}) => {
	const mw =
		maxWidth === 'standard' ? 'max-w-screen-2xl' : 'max-w-screen-xl';

	return (
		<div className={clsx('mx-4 sm:mx-6', overlay && 'relative')}>
			<div className={clsx(className, mw, 'mx-auto')}>{children}</div>
			{overlay && <LayoutOverlay maxWidth={maxWidth} />}
		</div>
	);
};
