import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Contact from './Contact';

beforeAll(() => {
  const mockIntersectionObserver = jest.fn().mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });

  window.IntersectionObserver = mockIntersectionObserver;
});

it('should render the components', async () => {
  render(<Contact />);

  const contactHeading = await screen.findByRole('heading', {
    name: /🤙 What's next?/,
  });
  const contactSubHeading = screen.getByRole('heading', {
    name: /get in touch/i,
  });
  const contactButton = screen.getByRole('link', { name: /say hello/i });

  await waitFor(() => {
    expect(contactHeading).toBeInTheDocument();
  });
  expect(contactSubHeading).toBeInTheDocument();
  expect(contactButton).toBeInTheDocument();
});
