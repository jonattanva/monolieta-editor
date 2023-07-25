import Project from './Project.svelte';
import { describe, it } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/svelte';

describe('<Project />', function () {
    it('should render with title project', function () {
        render(Project);
        expect(screen.getByText('Monolieta')).toBeInTheDocument();
    });

    it('should render with menu', async function () {
        render(Project);

        const button = screen.getByTestId('menu');
        fireEvent.click(button);

        // prettier-ignore
        await waitFor(() => {
            expect(screen.getByText('Open...')).toBeInTheDocument();
            expect(screen.getByText('Import image')).toBeInTheDocument();
            expect(screen.getByText('Label')).toBeInTheDocument();
            expect(screen.getByText('Light mode')).toBeInTheDocument();
        }, { timeout: 500 });
    });
});
