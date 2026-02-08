import { useEffect } from "react";

function usePageStyles(styleHrefs) {
  useEffect(() => {
    const links = styleHrefs.map((href) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.dataset.pageStyle = "true";
      document.head.appendChild(link);
      return link;
    });

    return () => {
      links.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [JSON.stringify(styleHrefs)]);
}

export default usePageStyles;
