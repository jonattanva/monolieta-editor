// @ts-ignore
import Fab from './index.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Fab />', function () {
	it('should render with click handler', function () {
		const fn = vi.fn();
		render(Fab, { click: fn });

		fireEvent.click(screen.getByRole('button'));
		expect(fn).toHaveBeenCalled();
	});

	it('should render with data test', function () {
		render(Fab, { test: 'action' });
		expect(screen.getByTestId('action')).toBeInTheDocument();
	});
});
