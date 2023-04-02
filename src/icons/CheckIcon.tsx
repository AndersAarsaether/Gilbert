import React, { FC } from "react";

interface CheckIconProps {
  fill: string;
}

const CheckIcon: FC<CheckIconProps> = ({ fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    width="25"
    height="25"
    viewBox="0 0 512 512"
    preserveAspectRatio="xMidYMid meet"
  >
    <path d="M460.5 73.4C450 76.7 449.6 77 316 210.6L184.5 342 125 282.5c-55.3-55.1-60-59.6-66.2-62.5-15.9-7.4-32.8-5.1-45.4 6.3-10 9-14.9 23.4-12.5 36.4 2.5 13.4.9 11.7 83.9 94.4 72.6 72.4 77.1 76.7 83.2 79.4 7.8 3.4 18.5 4.4 25.7 2.5 12.2-3.3 7 1.6 162.9-154.3C518 123.1 508.8 133 511.3 118.7c3.4-19.9-9.1-39.2-29.2-45.3-5.6-1.7-16.2-1.7-21.6 0z" />
  </svg>
);

export default CheckIcon;
