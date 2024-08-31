import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './PageError.module.scss'
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';


interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const {t} = useTranslation()
  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
        <h4>{t('Произошла непредвиденная ошибка')}</h4>
        <Button theme={ThemeButton.CLEAR} onClick={reloadPage}>
            {t("Обноваить страницу")}
        </Button>
    </div>
  )
}
