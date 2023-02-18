import React, { useEffect } from 'react';

export const useOutsideAlerter = (
  ref: React.RefObject<HTMLDivElement>,
  handleClick: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent): void => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        handleClick();
      }
      return;
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, handleClick]);

  return;
};
