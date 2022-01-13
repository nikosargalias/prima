import { render, waitFor, screen } from '@testing-library/react';
import Timeline from './Timeline';
jest.setTimeout(30000);

test('should render Timeline correctly', () => {
    render(<Timeline />);

    const timelineDiv = screen.getByTestId('timeline-div');
    expect(timelineDiv).toBeInTheDocument();
});

test('should render timeline with event component', async () => {
    render(<Timeline />);

    const timelineDiv = screen.getByTestId('timeline-div');
    expect(timelineDiv).toBeInTheDocument();

    await new Promise((res) => setTimeout(res, 6000));
    await waitFor(() => {
        const firstEvent = screen.getByRole('heading');
        expect(firstEvent).toBeInTheDocument();
    });
});
