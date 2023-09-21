import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Index from '../pages/index.js';

test('renders the landing page', () => {
    render(<Index />);
    expect(screen.getByRole("heading")).toHaveTextContent('Meet Your Captains');

});