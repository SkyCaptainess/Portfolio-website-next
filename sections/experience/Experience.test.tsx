import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Experience from './Experience';

beforeAll(() => {
  const mockIntersectionObserver = jest.fn().mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });

  window.IntersectionObserver = mockIntersectionObserver;
});

it('should render components in the Experience section', async () => {
  render(<Experience />);

  const experienceHeading = await screen.findByRole('heading', {
    name: '🧑‍💻 Experience',
  });
  const dateHeading = await screen.findByRole('heading', {
    name: 'Oct 2022 - Mar 2023',
  });
  const titleHeading = await screen.findByRole('heading', {
    name: 'Software Engineer Trainee',
  });
  const companyHeading = await screen.findByRole('heading', {
    name: '@ foodpanda',
  });
  const companyURL = await screen.findByRole('link', {
    name: 'foodpanda',
  });

  await waitFor(() => {
    expect(experienceHeading).toBeInTheDocument();
  });

  expect(dateHeading).toBeInTheDocument();
  expect(titleHeading).toBeInTheDocument();
  expect(companyHeading).toBeInTheDocument();
  expect(companyURL).toBeInTheDocument();
});
