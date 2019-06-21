import React from "react";
import icons from "./icons";

const Icon = ({
  width = "3rem",
  height = "3rem",
  viewBox = "0 0 20 20",
  className = "",
  color = "currentColor",
  title,
  children,
  type
}) => (
  <svg width={width} height={height} className={className} viewBox={viewBox}>
    <title>{title}</title>
    {children || icons(type)}
    <style>{`
      svg {
        vertical-align: middle;
        fill: ${color};
      }
    `}</style>
  </svg>
);

export default Icon;
