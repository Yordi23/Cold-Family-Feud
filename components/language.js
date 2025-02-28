import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher(props) {
  const { i18n, t } = useTranslation();
  return (
    <div className="flex flex-row space-x-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="2em"
        height="2em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2l1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"
          fill="gray"
        />
      </svg>
      <select
        className="bg-secondary-300 text-foreground"
        value={i18n.language}
        onChange={
          props.onChange
            ? props.onChange
            : (e) => {
              i18n.changeLanguage(e.target.value);
            }
        }
      >
        <option value="en">English ({t("english")})</option>
        <option value="es">Español ({t("spanish")})</option>
        <option value="id">Indonesian ({t("indonesian")})</option>
      </select>
    </div>
  );
}
