import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Footer from './Footer';

it('should render the components', async () => {
  render(<Footer />);

  const footerText = await screen.findByRole('heading', {
    name: /designed & built by your name/i,
  });
  const footerIcons = await screen.findAllByRole('link');

  await waitFor(() => {
    expect(footerText).toBeInTheDocument();
  });
  expect(footerIcons[0]).toBeInTheDocument();
});
