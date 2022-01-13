import { render, waitFor, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Timeline from './Timeline';
jest.useFakeTimers();

test('should render Timeline correctly', () => {
    render(<Timeline />);

    const timelineDiv = screen.getByTestId('timeline-div');
    expect(timelineDiv).toBeInTheDocument();
});

test('should render timeline with event component', async () => {
    render(<Timeline />);

    const timelineDiv = screen.getByTestId('timeline-div');
    expect(timelineDiv).toBeInTheDocument();

    act(() => {
        jest.runOnlyPendingTimers();
    });
    await waitFor(() => {
        const firstEvent = screen.getByRole('heading');
        expect(firstEvent).toBeInTheDocument();
    });
});
