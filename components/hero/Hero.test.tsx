import { render, screen } from '@testing-library/react';
import Hero from './Hero';

beforeAll(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

it('should render hero section components', () => {
  render(<Hero />);

  expect(
    screen.getByRole('img', { name: /profile picture/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /nothing excites me more than learning something new and starting a new adventure./i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /currently working as a SWE Trainee @ foodpanda/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /foodpanda/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument();
});
