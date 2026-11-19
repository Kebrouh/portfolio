import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Fait apparaître les éléments .reveal au défilement (désactivé si "réduire les animations").
const Reveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    // Les cartes ajoutées après un filtre sont observées au prochain rendu.
    const mo = new MutationObserver(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    });
    mo.observe(document.getElementById("root"), { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
};

export default Reveal;
