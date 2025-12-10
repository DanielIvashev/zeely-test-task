import type { CSSProperties } from "react";

type CircularProgressProps = {
  progress: number;
};

export default function CircularProgress(props: CircularProgressProps) {
  return (
    <svg
      width="65"
      height="65"
      viewBox="0 0 250 250"
      className="circular-progress"
      style={
        {
          "--progress": Math.round(props.progress || 0),
        } as CSSProperties
      }
    >
      <circle className="bg"></circle>
      <circle className="fg"></circle>
    </svg>
  );
}
