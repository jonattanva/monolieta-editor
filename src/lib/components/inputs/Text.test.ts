import '@testing-library/jest-dom';
import Text from './Text.svelte';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';

describe('<Text />', function () {
    it('should render with placeholder', function () {
        render(Text, { placeholder: 'placeholder' });
        const input = screen.getByRole('textbox');

        expect(input).toHaveAttribute('placeholder', 'placeholder');
    });

    it('should render with data-testid', function () {
        render(Text, { testid: 'action' });
        expect(screen.getByTestId('action')).toBeInTheDocument();
    });
});
