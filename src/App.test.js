import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Predictive analytics', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Tabiri/i);
  expect(linkElement).toBeInTheDocument();
});
