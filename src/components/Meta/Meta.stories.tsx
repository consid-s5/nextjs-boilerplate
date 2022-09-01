/**
 * Meta - stories
 */

import React from 'react';
import Meta from './Meta';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	title: '3. Components/Meta',
	component: Meta,
};

export const Default = () => {
	return <Meta />;
};
Default.story = { parameters: { docs: { disable: true } } };

export const Demo = () => {
	return <Meta />;
};
