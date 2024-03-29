import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

/**
 * @param {{
 *   id?: string;
 *   children: ReactNode;
 * }}
 * @return {JSX.Element}
 */
export const Portal = ({ id, children }) => {
  const [mounted, setMounted] = useState(false);
  // create div element only once using ref
  /** @type {HTMLDivElement | null} */
  const elRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    /** @type {HTMLElement} */
    let portalRoot;

    if (typeof document === "object") {
      elRef.current = document.createElement("div");

      if (!document.querySelector("#portal-root")) {
        const root = document.createElement("div");
        root.setAttribute("id", "portal-root");
        document.body.append(root);
      }

      portalRoot = document.querySelector("#portal-root");
    }

    const el = elRef.current;

    if (!!portalRoot && !!el) {
      el.id = twMerge("portal", id);
      portalRoot.appendChild(el);
    }
    return () => {
      if (!!portalRoot && portalRoot.hasChildNodes())
        portalRoot.removeChild(el);
    };
  }, []);

  return mounted ? createPortal(children, elRef.current) : null;
};

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};
