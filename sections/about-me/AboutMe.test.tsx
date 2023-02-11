import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AboutMe from './AboutMe';

beforeAll(() => {
  const mockIntersectionObserver = jest.fn().mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });

  window.IntersectionObserver = mockIntersectionObserver;
});

it('should render the components', async () => {
  render(<AboutMe />);

  const aboutmeHeading = await screen.findByRole('heading', {
    name: '👨 About Me',
  });
  const aboutmeSlogan = await screen.findByRole('heading', {
    name: /never too late to learn/i,
  });

  await waitFor(() => {
    expect(aboutmeHeading).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(aboutmeSlogan).toBeInTheDocument();
  });
});
