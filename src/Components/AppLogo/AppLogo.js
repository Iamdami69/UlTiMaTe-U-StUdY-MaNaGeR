//@ts-check

import { AppLogoPath } from "./AppLogoStyles";

export function AppLogo({ color, size, event }) {
  return (
    <svg
      onClick={event}
      className={`hasCursorPointer`}
      style={{
        width: size,
        aspectRatio: "1/1"
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      role="img"
      aria-label="#"
    >
      <AppLogoPath
        color={color}
        fill={color}
        d="M0 0h4.5v9a4.5 4.5 0 109 0V6H18v3A9 9 0 110 9V0zm18 4.5V0h-4.5v4.5H18z"
      ></AppLogoPath>
    </svg>
  );
}
