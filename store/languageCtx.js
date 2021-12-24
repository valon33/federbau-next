import { createContext, useState } from "react";

const LanguageContext = createContext({
  language: "",
  changeLanguage: (lang) => {},
});

export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("EN");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const context = {
    language,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={context}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
