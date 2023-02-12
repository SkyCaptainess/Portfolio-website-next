import React from 'react';
import MainNavigation from '../MainNavigation';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it('Navbar is rendered with applicable elements', async () => {
  render(<MainNavigation />);
  expect(
    await screen.findByRole('heading', { name: /nicholas/i })
  ).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')[0]).toBeInTheDocument();
});

it('Dark mode switch toggling', async () => {
  const user = userEvent.setup();
  render(<MainNavigation />);

  const darkModeSwitch = screen.getByTestId('darkModeSwitch');
  await waitFor(() => {
    expect(darkModeSwitch).toBeInTheDocument();
  });
  expect(darkModeSwitch).toHaveAttribute('color', '#F8F8F8');
  await waitFor(() => {
    user.click(darkModeSwitch);
    expect(darkModeSwitch).toHaveAttribute('color', '#EB7F13');
  });
  await waitFor(() => {
    user.click(darkModeSwitch);
    expect(darkModeSwitch).toHaveAttribute('color', '#F8F8F8');
  });
});
