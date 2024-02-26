import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

/* The `Arrow` function is a React component that renders an arrow icon. It takes two props:
`direction` and `className`. */
/**
 *
 * @param {{direction: "left" | "right" | "up" | "down", className: string}} params
 * @returns
 */
export const Arrow = ({ direction, className }) => (
  <span className="relative p-2 fill-current">
    <span
      className={twMerge(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[6px] border-l-transparent border-r-transparent border-b-0 border-t-current transition-[transform] fill-current",
        direction === "left" ? "rotate-90" : "",
        direction === "right" ? "-rotate-90" : "",
        direction === "up" ? "rotate-180" : "",
        direction === "down" ? "rotate-0" : "",
        className
      )}
    ></span>
  </span>
);

Arrow.propTypes = {
  direction: PropTypes.oneOf(["left", "right", "up", "down"]).isRequired,
  className: PropTypes.string,
};
