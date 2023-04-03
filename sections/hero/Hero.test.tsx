import { render, screen } from '@testing-library/react';
import Hero from './Hero';

beforeAll(() => {
  const mockIntersectionObserver = jest.fn().mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });

  window.IntersectionObserver = mockIntersectionObserver;
});

it('should render hero section components', () => {
  render(<Hero />);

  const link = screen.getByTestId('Linkedin');
  expect(link).toHaveAttribute('stroke', '#343434');

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
      name: /currently looking out for opportunities/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument();
});
