import React from "react";

function Btn({ color, click, textcolor, border, text, bgcolour }) {
  return (
    <button
      type="button"
      className={`flex gap-2 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2`}
      onClick={click}
      style={{
        color: { textcolor },
        backgroundColor: bgcolour,
        border: `1px solid ${border}`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M6.66636 18.3333H13.333C16.683 18.3333 17.283 16.9917 17.458 15.3583L18.083 8.69167C18.308 6.65833 17.7247 5 14.1664 5H5.83303C2.27469 5 1.69136 6.65833 1.91636 8.69167L2.54136 15.3583C2.71636 16.9917 3.31636 18.3333 6.66636 18.3333Z"
          stroke={color}
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66699 5.00033V4.33366C6.66699 2.85866 6.66699 1.66699 9.33366 1.66699H10.667C13.3337 1.66699 13.3337 2.85866 13.3337 4.33366V5.00033"
          stroke={color}
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6663 10.8333V11.6667C11.6663 11.675 11.6663 11.675 11.6663 11.6833C11.6663 12.5917 11.658 13.3333 9.99967 13.3333C8.34967 13.3333 8.33301 12.6 8.33301 11.6917V10.8333C8.33301 10 8.33301 10 9.16634 10H10.833C11.6663 10 11.6663 10 11.6663 10.8333Z"
          stroke={color}
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.042 9.16699C16.117 10.567 13.917 11.4003 11.667 11.6837"
          stroke={color}
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.18359 9.3916C4.05859 10.6749 6.17526 11.4499 8.33359 11.6916"
          stroke={color}
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        color={color}
      >
        <path
          d="M6.66636 18.3333H13.333C16.683 18.3333 17.283 16.9917 17.458 15.3583L18.083 8.69167C18.308 6.65833 17.7247 5 14.1664 5H5.83303C2.27469 5 1.69136 6.65833 1.91636 8.69167L2.54136 15.3583C2.71636 16.9917 3.31636 18.3333 6.66636 18.3333Z"
          stroke={color}
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.66699 5.00033V4.33366C6.66699 2.85866 6.66699 1.66699 9.33366 1.66699H10.667C13.3337 1.66699 13.3337 2.85866 13.3337 4.33366V5.00033"
          stroke={color}
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6663 10.8333V11.6667C11.6663 11.675 11.6663 11.675 11.6663 11.6833C11.6663 12.5917 11.658 13.3333 9.99967 13.3333C8.34967 13.3333 8.33301 12.6 8.33301 11.6917V10.8333C8.33301 10 8.33301 10 9.16634 10H10.833C11.6663 10 11.6663 10 11.6663 10.8333Z"
          stroke={color}
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.042 9.16699C16.117 10.567 13.917 11.4003 11.667 11.6837"
          stroke={color}
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.18359 9.3916C4.05859 10.6749 6.17526 11.4499 8.33359 11.6916"
          stroke={color}
          strokeWidth="1.2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default Btn;
