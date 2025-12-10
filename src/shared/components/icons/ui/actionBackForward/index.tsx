import type { IconProps } from "../../config";

export default function ActionBackForwardIcon(props: IconProps) {
  const { width = 20, height = 20, color = "#CAD4DD", className = "" } = props;

  return (
    <svg
      width={width + "px"}
      height={height + "px"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.05804 2.65358C7.31839 2.91392 7.31839 3.33603 7.05804 3.59638L4.31791 6.33652H12.3238C15.418 6.33652 17.9264 8.84487 17.9264 11.9391C17.9264 15.0333 15.418 17.5416 12.3238 17.5416H9.63151C9.26332 17.5416 8.96484 17.2432 8.96484 16.875C8.96484 16.5068 9.26332 16.2083 9.63151 16.2083H12.3238C14.6816 16.2083 16.5931 14.2969 16.5931 11.9391C16.5931 9.58125 14.6817 7.66985 12.3238 7.66985H4.31791L7.05804 10.41C7.31839 10.6703 7.31839 11.0924 7.05804 11.3528C6.79769 11.6131 6.37558 11.6131 6.11524 11.3528L1.76562 7.00318L6.11524 2.65358C6.37558 2.39323 6.79769 2.39323 7.05804 2.65358Z"
        fill={color}
      />
    </svg>
  );
}
