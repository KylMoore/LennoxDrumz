import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const LanguageMenu = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    changeLanguage(newLanguage);
  };

  return (
    <div className="languageMenu">
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default LanguageMenu;
