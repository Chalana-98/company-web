import React from 'react'
import { Button } from '@nextui-org/react'

interface IconButtonProps {
  text: string;
}

const IconButton = ({ text }: IconButtonProps) => {
  return (
    <Button
      variant="bordered"
      color="primary"
      className="font-medium group"
      endContent={
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-1 group-hover:translate-x-1 transition-transform"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      }
    >
      {text}
    </Button>
  );
};

export default IconButton
