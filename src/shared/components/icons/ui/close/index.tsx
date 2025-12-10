import type { IconProps } from "../../config";

export default function CloseIcon(props: IconProps) {
  const { width = 24, height = 24, color = "black", className = "" } = props;

  return (
    <svg
      width={width + "px"}
      height={height + "px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 6L18 18"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18 6L6 18"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
