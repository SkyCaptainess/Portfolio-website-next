import React, { useEffect } from 'react';

export const useOutsideAlerter = (
  ref: React.RefObject<HTMLDivElement>,
  handleClick: () => void
) => {
  return useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent): void => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        handleClick();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    };
  }, [ref, handleClick]);
};
