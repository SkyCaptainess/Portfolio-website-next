import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Contact from './Contact';

beforeAll(() => {
  window.IntersectionObserver = jest.fn().mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
});

it('should render the components', async () => {
  render(<Contact />);

  const contactHeading = await screen.findByRole('heading', {
    name: /🤙 What's next?/,
  });
  const contactSubHeading = screen.getByRole('heading', {
    name: /get in touch/i,
  });
  const contactButton = screen.getByRole('link', { name: /email/i });

  await waitFor(() => {
    expect(contactHeading).toBeInTheDocument();
  });
  expect(contactSubHeading).toBeInTheDocument();
  expect(contactButton).toBeInTheDocument();
});
