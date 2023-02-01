import React from 'react';
import DropdownMenu from '../DropdownMenu';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('Dropdown menu appears when Hamburger button is clicked', async () => {
  const user = userEvent.setup();
  render(<DropdownMenu />);
  const hamburgerBtn = screen.getByTestId('hamburger-btn');
  await user.click(hamburgerBtn);
  const dropdownUl = screen.getByTestId('dropdown-ul');
  expect(dropdownUl).toBeInTheDocument();
  await user.click(hamburgerBtn);
  await waitFor(() => expect(dropdownUl).not.toBeInTheDocument());
});
