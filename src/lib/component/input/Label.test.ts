import Label from './Label.svelte';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';

describe('<Label />', function () {
    it('should render with placeholder', function () {
        render(Label, { placeholder: 'placeholder' });
        const input = screen.getByRole('textbox');

        expect(input).toHaveAttribute('placeholder', 'placeholder');
    });

    it('should render with data test', function () {
        render(Label, { test: 'action' });
        expect(screen.getByTestId('action')).toBeInTheDocument();
    });

    it('should render with value', function () {
        render(Label, { value: 'value' });
        const input = screen.getByRole('textbox');

        expect(input).toHaveValue('value');
    });
});
