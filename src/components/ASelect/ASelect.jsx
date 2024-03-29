import React, { useMemo, useEffect, useRef, useState, memo } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { Portal } from "./Portal";
import { isEmpty } from "./isEmpty";
import { Arrow } from "./Arrow";
import { ExpandableListView } from "./ExpandableListView";
import { CircleXMark } from "./CircleXMark";

/**
 * ASelect component
 * @typedef {object} GroupOptions
 * @property {string} groupName - Header or Group name
 * @property {(string[] | object[])} options - List of options for the group
 * @property {string[]} [keyProp] - List of Groups and its options
 *
 * @typedef {object} ASelectProps
 * @property {string} value - Currently selected value.
 * @property {(currentOptionString: string, currentOptionObject: object, search: string) => void} onChange - Function called when a new value is selected.
 * @property {boolean} [searchable=true] - Boolean indicating if the dropdown is searchable.
 * @property {string} [placeholder] - Placeholder text for the input field.
 * @property {(string[] | object[] | GroupOptions[])} options - List of options to display in the dropdown.
 * @property {string} [keyProp] - Property to be used as a key within the objects of the options list. Mandatory if options is a list of string or object
 * @property {boolean} [disabled] - Disable Select
 * @property {string | number} [width] - Width
 * @property {number} [zIndex] - zIndex
 * @property {string | number} [fontSize] - FontSize
 * @property {boolean} [required] - Required
 *
 * @param {ASelectProps} props - ASelect component props.
 * @returns {JSX.Element} - React JSX Element
 */
const Select = ({
  value,
  onChange,
  options = [],
  keyProp,
  searchable = true,
  placeholder = "Search...",
  disabled,
  width,
  zIndex,
  fontSize = 16,
  required = false,
}) => {
  const [state, setState] = useState({
    open: false,
    search: "",
    currentOption: "",
    selectedOption: value ?? "",
  });
  const { open, search, currentOption, selectedOption } = state;
  const containerRef = useRef();
  const optionsRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        optionsRef.current &&
        !optionsRef.current.contains(event.target)
      ) {
        setState((prevState) => ({
          ...prevState,
          open: false,
          currentOption: "",
        }));
      }
    };

    const handleFocusIn = (e) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target) &&
        optionsRef.current &&
        !optionsRef.current.contains(e.target)
      ) {
        setState((prevState) => ({
          ...prevState,
          open: false,
          currentOption: "",
        }));
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("focusin", handleFocusIn);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("focusin", handleFocusIn);
    };
  }, []);

  useEffect(() => {
    if (!!optionsRef.current && !!currentOption) {
      const matchResult = currentOption.match(/_group_(.+)/);
      if (matchResult) {
        const selectedElement = optionsRef.current.querySelector(
          `[data-key="${matchResult[1]}"]`
        );

        if (selectedElement) {
          selectedElement.scrollIntoView({
            behavior: "instant",
            block: "nearest",
          });
        }
      }
    }
  }, [currentOption, optionsRef]);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      selectedOption: value ?? "",
      search: value,
    }));
  }, [value]);

  const isGrouped = useMemo(() => {
    if (!isEmpty(options)) {
      for (const option of options) {
        if (
          option &&
          typeof option === "object" &&
          option.hasOwnProperty("groupName")
        ) {
          return true;
        }
      }
    }
    return false;
  }, [options]);

  const handleKeyPress = (e) => {
    if (!open) return;

    const fromOptions = !isGrouped
      ? filteredOptions
      : [].concat(
          ...filteredOptions.map((g) =>
            g.options.map(
              (go) =>
                g.groupName +
                "_group_" +
                (typeof go === "object" ? go[g.keyProp] : go)
            )
          )
        );

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        const nextIndex = Math.min(
          fromOptions.indexOf(currentOption) + 1,
          fromOptions.length - 1
        );
        setState((prevState) => ({
          ...prevState,
          currentOption: fromOptions[nextIndex],
        }));
        break;
      case "ArrowUp":
        e.preventDefault();
        const prevIndex = Math.max(fromOptions.indexOf(currentOption) - 1, 0);
        setState((prevState) => ({
          ...prevState,
          currentOption: fromOptions[prevIndex],
        }));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (!isEmpty(currentOption)) {
          const currentOptionValue = isGrouped
            ? currentOption.match(/_group_(.+)/)[1]
            : currentOption;
          setState((prevState) => ({
            ...prevState,
            search: currentOptionValue,
            selectedOption: currentOptionValue,
            open: false,
            currentOption: "",
          }));
          onChange(
            currentOptionValue,
            isGrouped
              ? options.filter(
                  (g) => g.groupName === currentOption.match(/(.+)_group_/)[1]
                )
              : currentOptionValue,
            currentOptionValue
          );
        }
        break;
      case "Escape":
        e.preventDefault();
        setState((prevState) => ({
          ...prevState,
          open: false,
          currentOption: "",
        }));
        break;
      default:
        break;
    }
  };

  /**
   *
   * @param {any} item
   * @param {any} e
   * @param {string | undefined | null} itemKeyProp
   */
  const handleOptionClick = (item, e, itemKeyProp = undefined) => {
    e.preventDefault();
    e.stopPropagation();
    setState((prevState) => ({
      ...prevState,
      open: false,
      currentOption: "",
    }));

    const itemValue =
      typeof item === "object" && !!itemKeyProp ? item[itemKeyProp] : item;

    setState((prevState) => ({
      ...prevState,
      search: itemValue,
      selectedOption: itemValue,
    }));

    onChange(itemValue, item, itemValue);
  };

  const filteredOptions = useMemo(() => {
    const searchFilter = (opts, key) => {
      if (!Array.isArray(opts)) return [];
      if (!searchable || !String(search).trim()) return opts;

      return opts.filter((item) =>
        typeof item === "object"
          ? item[key]
              ?.toLowerCase()
              ?.includes(String(search).trim().toLowerCase())
          : item.toLowerCase().includes(String(search).trim().toLowerCase())
      );
    };

    if (isGrouped) {
      return options.map((group) => ({
        groupName: group.groupName,
        options: searchFilter(group.options, group.keyProp),
        keyProp: group.keyProp,
      }));
    }

    return searchFilter(options, keyProp);
  }, [options, keyProp, search, searchable]);

  return (
    <div
      className={twMerge(
        "flex flex-col h-fit",
        disabled ? "opacity-50 touch-none pointer-events-none" : ""
      )}
      style={{
        width: width ?? "auto",
        fontSize: fontSize,
      }}
      ref={containerRef}
    >
      <div
        className="flex items-center justify-between w-full bg-white text-black border divide-x"
        onKeyDown={handleKeyPress}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls="options-list"
        aria-owns="options-list"
      >
        <div className="flex items-center justify-between w-full">
          <input
            className="outline-none px-2 py-1 w-full bg-white text-black"
            type="text"
            value={search}
            placeholder={placeholder}
            onChange={(e) => {
              if (searchable) {
                setState((prevState) => ({
                  ...prevState,
                  search: e.target.value,
                  open: true,
                }));

                let currentOptionValue = "";
                if (isGrouped && currentOption) {
                  const matchResult = currentOption.match(/_group_(.+)/);
                  currentOptionValue = matchResult ? matchResult[1] : "";
                } else {
                  currentOptionValue = currentOption || "";
                }

                onChange(
                  currentOptionValue,
                  isGrouped
                    ? options.filter(
                        (g) =>
                          currentOption &&
                          g.groupName === currentOption.match(/(.+)_group_/)[1]
                      )
                    : currentOptionValue,
                  e.target.value
                );
              }
            }}
            onFocus={() =>
              setState((prevState) => ({ ...prevState, open: true }))
            }
            tabIndex={0}
            aria-autocomplete="list"
            aria-controls="options-list"
            aria-label="Search"
            required={required}
          />
          {!isEmpty(search) && (
            <span
              className="px-1 cursor-pointer flex items-center justify-center"
              onClick={() => {
                setState((prevState) => ({
                  ...prevState,
                  search: "",
                  currentOption: "",
                  selectedOption: "",
                  open: !open,
                }));
                onChange("", undefined, "");
              }}
            >
              <CircleXMark className="h-4 w-4 inline-block fill-current" />
            </span>
          )}
        </div>
        <span
          className="cursor-pointer px-1"
          onClick={() =>
            setState((prevState) => ({ ...prevState, open: !open }))
          }
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
              setState((prevState) => ({ ...prevState, open: !open }));
            }
          }}
          tabIndex={0}
          aria-label="Toggle dropdown"
        >
          <Arrow direction={open ? "up" : "down"} />
        </span>
      </div>
      {open && (
        <Portal>
          <div
            className="flex flex-col w-full absolute bg-white text-black border"
            style={{
              top:
                containerRef.current?.getBoundingClientRect()?.bottom +
                2 +
                "px",
              left: containerRef.current?.getBoundingClientRect()?.left + "px",
              width:
                width ??
                containerRef.current?.getBoundingClientRect()?.width + "px",
              maxHeight: "200px",
              overflowY: "auto",
              zIndex: zIndex ?? 1,
              fontSize: fontSize,
            }}
            ref={optionsRef}
            role="listbox"
            aria-labelledby="options-list"
          >
            {isGrouped
              ? filteredOptions.map((group, groupIndex) => (
                  <ExpandableListView
                    key={groupIndex}
                    defaultOpen
                    header={group.groupName}
                    content={
                      <div className="flex flex-col w-full text-black bg-white">
                        {group.options.map((item, index) => (
                          <div
                            key={index}
                            className={twMerge(
                              "px-2 py-1 cursor-pointer bg-white text-black hover:bg-blue-400 hover:text-white w-full",
                              !!currentOption &&
                                currentOption.indexOf(group.groupName) !== -1 &&
                                currentOption.indexOf(
                                  typeof item === "object"
                                    ? item[group.keyProp]
                                    : item
                                ) !== -1
                                ? "bg-blue-400 text-white"
                                : "",
                              !!selectedOption &&
                                selectedOption === item &&
                                !currentOption
                                ? "bg-gray-200"
                                : ""
                            )}
                            onClick={(e) =>
                              handleOptionClick(item, e, group.keyProp)
                            }
                            data-key={
                              typeof item === "object"
                                ? item[group.keyProp]
                                : item
                            }
                          >
                            {typeof item === "object"
                              ? item[group.keyProp]
                              : item}
                          </div>
                        ))}
                      </div>
                    }
                  />
                ))
              : filteredOptions.map((item, index) => (
                  <div
                    key={index}
                    className={twMerge(
                      "px-2 py-1 cursor-pointer bg-white text-black hover:bg-blue-400 hover:text-white w-full",
                      !!currentOption && currentOption === item
                        ? "bg-blue-400 text-white"
                        : "",
                      !!selectedOption &&
                        selectedOption === item &&
                        !currentOption
                        ? "bg-gray-200"
                        : ""
                    )}
                    onClick={(e) => handleOptionClick(item, e, keyProp)}
                    data-key={
                      typeof item === "object" && !isEmpty(keyProp)
                        ? item[keyProp]
                        : item
                    }
                  >
                    {typeof item === "object" && !isEmpty(keyProp)
                      ? item[keyProp]
                      : item}
                  </div>
                ))}
          </div>
        </Portal>
      )}
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(
      PropTypes.shape({
        groupName: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(
          PropTypes.oneOfType([PropTypes.string, PropTypes.object])
        ).isRequired,
        keyProp: PropTypes.string,
      })
    ),
  ]).isRequired,
  keyProp: PropTypes.string,
  searchable: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zIndex: PropTypes.number,
  fontSize: PropTypes.number,
};

export const ASelect = memo(Select);
