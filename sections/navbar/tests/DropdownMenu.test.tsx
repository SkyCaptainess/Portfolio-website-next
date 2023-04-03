import React from 'react';
import DropdownMenu from '../DropdownMenu';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('Dropdown menu appears when Hamburger button is clicked', async () => {
  const user = userEvent.setup();
  render(<DropdownMenu />);

  const hamburgerBtn = await screen.findByTestId('hamburger-btn');
  expect(screen.queryByTestId('dropdown-ul')).not.toBeInTheDocument();
  await waitFor(() => {
    user.click(hamburgerBtn);
    expect(screen.getByTestId('dropdown-ul')).toBeInTheDocument();
  });
  await waitFor(() => {
    user.click(hamburgerBtn);
    expect(screen.queryByTestId('dropdown-ul')).not.toBeInTheDocument();
  });
});
