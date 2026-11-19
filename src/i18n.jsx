import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ui } from "./content/ui";
import raw from "./data/projet.json";
import { projectsMeta, slugify } from "./content/projectsMeta";

const LangContext = createContext(null);

const initialLang = () => {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "fr" || saved === "en") return saved;
  } catch {
    /* localStorage indisponible */
  }
  return (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
};

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: ui[lang], toggle: () => setLang((l) => (l === "en" ? "fr" : "en")) }),
    [lang]
  );
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);

// Liste des projets dans la langue courante.
export const buildProjects = (lang) =>
  raw.map((p, i) => {
    const meta = projectsMeta[p.nom] || {};
    const fr = lang === "fr" && meta.fr ? meta.fr : null;
    const images = p.galerie_img.map((f) => `/${f}`);
    const cover = meta.cover || (p.img.endsWith(".gif") ? p.galerie_img[0] : p.img);
    return {
      index: i,
      slug: slugify(p.nom),
      name: p.nom,
      type: p.type,
      label: fr ? fr.description : p.description,
      long: fr ? fr.long : p.long_description,
      cover: `/${cover}`,
      images,
      tools: meta.tools || [],
      link: p.hasLink ? p.link : null,
      featured: !!meta.featured,
    };
  });

export const useProjects = () => {
  const { lang } = useLang();
  return useMemo(() => buildProjects(lang), [lang]);
};
