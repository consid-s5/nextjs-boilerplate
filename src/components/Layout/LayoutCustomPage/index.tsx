/**
 * LayoutCustomPage
 */

import React from 'react';
import clsx from 'clsx';
import styles from './LayoutCustomPage.module.css';

interface Props {
	/** React children */
	children?: React.ReactNode

	/** Optional className for the grid wrapper */
	className?: string;
}

export const LayoutArea1: React.FC<Props> = ({ children, className = '' }) => (
	<div className={clsx(className, styles['layout-custompage__area-1'])}>{children}</div>
);
export const LayoutArea2: React.FC<Props> = ({ children, className = '' }) => (
	<div className={clsx(className, styles['layout-custompage__area-2'])}>{children}</div>
);
export const LayoutArea3: React.FC<Props> = ({ children, className = '' }) => (
	<div className={clsx(className, styles['layout-custompage__area-3'])}>{children}</div>
);
export const LayoutArea4: React.FC<Props> = ({ children, className = '' }) => (
	<div className={clsx(className, styles['layout-custompage__area-4'])}>{children}</div>
);
export const LayoutArea5: React.FC<Props> = ({ children, className = '' }) => (
	<div className={clsx(className, styles['layout-custompage__area-5'])}>{children}</div>
);
export const LayoutArea6: React.FC<Props> = ({ children, className = '' }) => (
	<div className={clsx(className, styles['layout-custompage__area-6'])}>{children}</div>
);
export const LayoutArea7: React.FC<Props> = ({ children, className = '' }) => (
	<div className={clsx(className, styles['layout-custompage__area-7'])}>{children}</div>
);
export const LayoutArea8: React.FC<Props> = ({ children, className = '' }) => (
	<div className={clsx(className, styles['layout-custompage__area-8'])}>{children}</div>
);
export const LayoutGroup1: React.FC<Props> = ({ children, className = '' }) => (
	<div className={clsx(className, styles['layout-custompage__group-1'])}>{children}</div>
);
export const LayoutGroup2: React.FC<Props> = ({ children, className = '' }) => (
	<div className={clsx(className, styles['layout-custompage__group-2'])}>{children}</div>
);

/** Example of a page with custom layout. */
export const LayoutCustomPage: React.FC<Props> = ({
	children,
	className = '',
}) => {
	return (
		<div
			className={clsx(
				className,
				styles['layout-custompage']
			)}
		>
			{children}
		</div>
	);
};
