import { isValidElement, useState, useMemo } from "react";
import { Arrow } from "./Arrow";
import { twMerge } from "tailwind-merge";
import { isEmpty } from "./isEmpty";

/**
 * @typedef {Object} ExpandableListViewProps
 * @property {string | React.ReactNode} [header] - The title of the expandable list.
 * @property {[string] | React.ReactNode | [React.ReactNode]} content - The content of the expandable list.
 * @property {boolean} [defaultOpen=false] - The default open state of the list.
 * @property {string} [headerClassName=''] - Custom CSS classes for the header.
 * @property {string} [contentClassName=''] - Custom CSS classes for the content.
 */

/**
 * Advanced Expandable List View component.
 * @param {ExpandableListViewProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>} props
 */
export const ExpandableListView = ({
  header,
  content,
  defaultOpen = false,
  headerClassName = "",
  contentClassName = "",
  ...props
}) => {
  /**
   * Manages the state for open/close functionality.
   */
  const [isOpen, setIsOpen] = useState(defaultOpen);

  /**
   * Toggles the open/close state.
   * @param {React.MouseEvent<HTMLSpanElement>} e - The click event.
   */
  const toggleOpen = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  /**
   * Memoized Arrow component based on the open/close state.
   */
  const CollapseArrow = useMemo(
    () => <Arrow direction={isOpen ? "down" : "right"} />,
    [isOpen]
  );

  return (
    <div className="w-full h-fit" {...props}>
      {!isEmpty(header) || isValidElement(header) ? (
        <div
          className={twMerge(
            "flex justify-start items-start w-full font-semibold",
            headerClassName
          )}
        >
          {(!isEmpty(content) || isValidElement(content)) && (
            <span
              className="px-1 cursor-pointer"
              onClick={toggleOpen}
              tabIndex={0}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && toggleOpen(e)
              }
              aria-expanded={isOpen}
            >
              {CollapseArrow}
            </span>
          )}
          <h2>{header}</h2>
        </div>
      ) : null}
      {isOpen && (!isEmpty(content) || isValidElement(content)) && (
        <div
          className={twMerge(
            "flex flex-col items-start w-full",
            !isEmpty(header) || isValidElement(header) ? "pl-4" : "",
            contentClassName
          )}
        >
          {Array.isArray(content) ? (
            content.map((c, i) => (
              <div className="w-full" key={i}>
                {c}
              </div>
            ))
          ) : isValidElement(content) ? (
            <div className="w-full">{content}</div>
          ) : (
            // Handle unexpected content types gracefully
            <div className="w-full">Invalid Content Type</div>
          )}
        </div>
      )}
    </div>
  );
};
