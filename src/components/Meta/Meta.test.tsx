/**
 * Meta - test
 */

import React from 'react';
import { render } from '@test-utils/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import Meta from './Meta';
expect.extend(toHaveNoViolations);

describe('Meta', () => {
	it('should not have any accessibility issues', async () => {
		const { container } = render(<Meta>Test</Meta>);
		const results = await axe(container);
		expect(results).toHaveNoViolations();
	});
});
