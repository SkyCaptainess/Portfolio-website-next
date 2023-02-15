import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Projects from './Projects';

beforeAll(() => {
  const mockIntersectionObserver = jest.fn().mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });

  window.IntersectionObserver = mockIntersectionObserver;
});

it('should render the components', async () => {
  render(<Projects />);

  const projectsHeading = await screen.findByRole('heading', {
    name: '👇 Projects',
  });
  const projectsSlogan = screen.getByRole('heading', {
    name: /Coding projects that I enjoyed working on./i,
  });
  const projectsTitle = screen.getByRole('heading', { name: /stockstracker/i });
  const projectsImage = screen.getByRole('img', {
    name: /image of stockstracker/i,
  });

  await waitFor(() => {
    expect(projectsHeading).toBeInTheDocument();
  });
  expect(projectsSlogan).toBeInTheDocument();
  expect(projectsTitle).toBeInTheDocument();
  expect(projectsImage).toBeInTheDocument();
});
