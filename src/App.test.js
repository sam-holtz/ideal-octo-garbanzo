import { render, screen } from '@testing-library/react';
import App from './App';

test('renders smart banking heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/smart banking for freelancers/i);
  expect(headingElement).toBeInTheDocument();
});
