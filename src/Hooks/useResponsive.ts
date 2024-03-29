import { useState, useEffect } from "react";
export const useResponsive = () => {
  const windowWith = window.matchMedia("(max-width: 700px)");
  const [respon, setRepson] = useState(windowWith.matches);
  useEffect(() => {
    setRepson(windowWith.matches);
  }, [windowWith.matches]);
  return { respon };
};
