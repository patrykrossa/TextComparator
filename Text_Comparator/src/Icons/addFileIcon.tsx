import { Icon } from "@chakra-ui/react";
import React from "react";

export const AddFileIcon = ({ color }: { color: string }) => {
  return (
    <Icon
      width="94"
      height="97"
      viewBox="0 0 94 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
    >
      <g filter="url(#filter0_d_7_9)">
        <path
          d="M31.3333 49.4062H62.6667C64.2725 49.4062 65.6042 48.0887 65.6042 46.5C65.6042 44.9112 64.2725 43.5938 62.6667 43.5938H31.3333C29.7275 43.5938 28.3958 44.9112 28.3958 46.5C28.3958 48.0887 29.7275 49.4062 31.3333 49.4062Z"
          fill={color}
        />
        <path
          d="M47 64.9062C48.6058 64.9062 49.9375 63.5887 49.9375 62V31C49.9375 29.4112 48.6058 28.0938 47 28.0938C45.3942 28.0938 44.0625 29.4112 44.0625 31V62C44.0625 63.5887 45.3942 64.9062 47 64.9062Z"
          fill={color}
        />
        <path
          d="M35.25 88.1562H58.75C80.0175 88.1562 89.1042 79.1663 89.1042 58.125V34.875C89.1042 13.8338 80.0175 4.84375 58.75 4.84375H35.25C13.9825 4.84375 4.89582 13.8338 4.89582 34.875V58.125C4.89582 79.1663 13.9825 88.1562 35.25 88.1562ZM58.75 10.6562C76.8058 10.6562 83.2292 17.0112 83.2292 34.875V58.125C83.2292 75.9888 76.8058 82.3438 58.75 82.3438H35.25C17.1942 82.3438 10.7708 75.9888 10.7708 58.125V34.875C10.7708 17.0112 17.1942 10.6562 35.25 10.6562H58.75Z"
          fill={color}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_7_9"
          x="-4"
          y="0"
          width="102"
          height="101"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7_9"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_7_9"
            result="shape"
          />
        </filter>
      </defs>
    </Icon>
  );
};
