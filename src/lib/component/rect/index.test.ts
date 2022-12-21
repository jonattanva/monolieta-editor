import Rect from './index.svelte';
import { describe, it, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('<Rect />', function () {
    it('should render with label', function () {
        render(Rect, {
            x: 0,
            y: 0,
            width: 10,
            height: 20,
            label: 'person'
        });
        expect(screen.getByText(/person/i)).toBeDefined();
    });
});
