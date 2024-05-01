import React from 'react'

interface IconButtonProps {
  text: string;
}

const IconButton = ({ text }: IconButtonProps) => {
  return (
    <button
      type="button"
      className="text-center inline-flex items-center text-primaryTextColor hover:text-white border border-primaryTextColor hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:border-primarybgColor dark:text-primarybgColor dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
    >
      {text}
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2 text-primaryTextColor dark:text-primarybgColor"
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
    </button>
  );
};

export default IconButton
