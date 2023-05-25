import React from 'react';
import MainNavigation from '../MainNavigation';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('Navbar is rendered with applicable elements', async () => {
  render(<MainNavigation />);
  expect(
    await screen.findByRole('heading', { name: /andrew/i })
  ).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')[0]).toBeInTheDocument();
});

it('Dark mode switch toggling', async () => {
  const user = userEvent.setup();
  render(<MainNavigation />);

  const darkModeSwitch = screen.getByTestId('darkModeSwitch');
  const sunMoon = screen.getByTestId('sun-moon');
  expect(sunMoon).toHaveAttribute('color', '#343434');
  await waitFor(() => {
    expect(darkModeSwitch).toBeInTheDocument();
  });

  await user.click(darkModeSwitch);

  await waitFor(() => {
    user.click(darkModeSwitch);
    expect(sunMoon).toHaveAttribute('color', '#343434');
  });
});
