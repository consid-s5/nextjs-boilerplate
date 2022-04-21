/**
 * ActionButton
 */

import React from 'react';
import clsx from 'clsx';
import { useMachine } from '@xstate/react';
import { actionButtonMachine } from '@state-machines/actionButton.machine';

export type customStateTypes = 'idle' | 'loading' | 'failure' | 'success';

interface Props {
	/** React children */
	children?: React.ReactNode

	/** Should the success checkmark be shown? */
	showSuccess?: boolean;

	/** Number of milliseconds the spinner must be shown (set to 0 to not use a minimum time)? */
	minimunLoadingTime?: number;

	/** onClick callback method */
	onClick?: (e: any) => void;

	/** onSuccess callback method */
	onSuccess?: (e: any) => void;

	/** onError callback method */
	onError?: (e: any) => void;

	/** option className */
	className?: string;

}

/** Button with a spinner and feedback message. */
const ActionButton: React.FC<Props> = ({
	children,
	showSuccess = true,
	minimunLoadingTime = 2000,
	onClick,
	onSuccess,
	onError,
	className,
	...buttonProps
}) => {
	const [current, send] = useMachine(actionButtonMachine, {
		context: { showSuccess },
		devTools: process?.env?.NEXT_PUBLIC_XSTATE_INSPECTOR === 'true'
	});

	const clickHandler = async ({ ...args }) => {
		// Only allow click if the state is idle or failure
		if (current.matches('idle')) {
			send('LOAD');
		} else if (current.matches('failure')) {
			send('RETRY');
		} else {
			return;
		}

		if (onClick) {
			const minTimeout = new Promise((resolve) => {
				setTimeout(resolve, minimunLoadingTime);
			});

			Promise.all([minTimeout, onClick({ ...args })])
				.then((results) => {
					if (onSuccess) {
						onSuccess(results[1]);
					}
					send('RESOLVE');
				})
				.catch((error) => {
					if (onError) {
						onError(error);
					}
					send('REJECT');
				});
		}
	};

	return (
		<button
			type="button"
			onClick={clickHandler}
			{...buttonProps}
			data-cid="ActionButton"
			className={clsx(
				'flex justify-center p-4 rounded text-white min-w-[200px] min-h-[60px]',
				className,
				!current.matches('failure') && 'bg-green-500 hover:bg-green-600',
				current.matches('failure') && 'bg-red-500 hover:bg-red-600'
			)}
		>
			{current.matches('loading') && (
				<div className="relative w-7 h-7">
					<svg
						viewBox="25 25 50 50"
						transform-origin="center center 0px"
						className={clsx(
							'w-full h-full animate-spinnerRotate'
						)}
					>
						<circle
							cx="50"
							cy="50"
							r="20"
							fill="none"
							strokeWidth="3"
							strokeMiterlimit="10"
							strokeDasharray="1px, 200px"
							strokeDashoffset="0px"
							stroke="currentColor"
							strokeLinecap="round"
							className="animate-spinnerDash"
						></circle>
					</svg>
				</div>
			)}
			{current.matches('success') && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 26 18"
					className="w-7 h-7"
				>
					<path
						fill="none"
						stroke="currentColor"
						transform-origin="50% 50% 0px"
						strokeDasharray="3rem"
						strokeDashoffset="3rem"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="3"
						d="M1 8.98L9.01 17 25 1"
						className="animate-spinnerStroke"
					></path>
				</svg>
			)}
			{current.matches('failure') && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 40 40"
					className="w-7 h-7"
				>
					<path
						fill="none"
						transform-origin="50% 50% 0px"
						stroke="currentColor"
						strokeDasharray="3rem"
						strokeDashoffset="3rem"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="3"
						d="M 10,10 L 30,30 M 30,10 L 10,30"
						className="animate-spinnerStroke"
					></path>
				</svg>
			)}
			{current.matches('idle') && children}
		</button>
	);
};

export default ActionButton;
