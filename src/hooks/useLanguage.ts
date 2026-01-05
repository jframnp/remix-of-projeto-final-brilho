import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = i18n.language;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Get current path without language prefix
    const pathParts = location.pathname.split("/").filter(Boolean);
    const currentLangInPath = ["en", "es"].includes(pathParts[0]) ? pathParts[0] : null;
    
    let newPath = currentLangInPath 
      ? "/" + pathParts.slice(1).join("/")
      : location.pathname;
    
    // Add new language prefix if not Portuguese
    if (lang === "en") {
      newPath = "/en" + (newPath === "/" ? "" : newPath);
    } else if (lang === "es") {
      newPath = "/es" + (newPath === "/" ? "" : newPath);
    }
    
    // Navigate to new path if it changed
    if (newPath !== location.pathname) {
      navigate(newPath || "/");
    }
  };

  // Set HTML lang on mount and language change
  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return {
    currentLang,
    changeLanguage,
    t: i18n.t,
  };
};