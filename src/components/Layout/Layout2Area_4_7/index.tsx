/**
 * Layout2Area_4_7
 */

import React from 'react';
import clsx from 'clsx';

interface Props {
	/** React children */
	children?: React.ReactNode

	/** Optional className for the grid wrapper */
	className?: string;
}

export const LayoutArea1: React.FC<Props> = ({
	children,
	className = '',
}) => <div className={clsx(className, 'col-span-4 sm:col-span-3 lg:col-span-4')}>{children}</div>;

export const LayoutArea2: React.FC<Props> = ({
	children,
	className = '',
}) => (
	<div
		className={clsx(
			className,
			'col-span-4 sm:col-span-5 sm:col-start-4 lg:col-span-7 lg:col-start-6'
		)}
	>
		{children}
	</div>
);

/** Layout with one sidebar (4 column wide) and content (7 column wide). */
export const Layout2Area_4_7: React.FC<Props> = ({
	children,
	className = '',
}) => {
	return (
		<div
			className={clsx(
				className,
				'grid sm:grid-flow-col grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4 sm:gap-6'
			)}
		>
			{children}
		</div>
	);
};
