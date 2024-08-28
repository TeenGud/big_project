import { useTranslation } from "react-i18next";
import * as cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "../Button/Button";
import { Theme } from "app/providers/ThemeProvider";
interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button 
    theme={ThemeButton.CLEAR} 
    onClick={() => toggleLanguage()}
    className={classNames(cls.LangSwitcher, {}, [className])}>
        {t("Язык")}
    </Button>
  );
};
