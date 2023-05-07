import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Skills from './Skills';

beforeAll(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });

  window.IntersectionObserver = mockIntersectionObserver;
});

it('should render the components', async () => {
  render(<Skills />);

  const skillsHeading = await screen.findByRole('heading', {
    name: '💪 Skills',
  });
  const subHeading = await screen.findByRole('heading', {
    name: 'I am not that bad with:',
  });
  const codingHeading = await screen.findAllByRole('heading', {
    name: 'coding',
  });
  const designHeading = await screen.findAllByRole('heading', {
    name: 'design',
  });

  const lottieAnimation = await screen.findByRole('complementary');

  await waitFor(() => expect(skillsHeading).toBeInTheDocument());
  await waitFor(() => expect(subHeading).toBeInTheDocument());
  await waitFor(() => expect(codingHeading[0]).toBeInTheDocument());
  await waitFor(() => expect(designHeading[0]).toBeInTheDocument());
  await waitFor(() => expect(lottieAnimation).toBeInTheDocument());
});
