import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';


interface BugButtonProps {
    className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
  const {t} = useTranslation()
  const [error, setError] = useState(false);
  const throwError = () => {
    setError(true)
  }
  useEffect(() => {
    if(error) throw new Error();
  }, [error])
  return (
    <Button theme={ThemeButton.CLEAR} onClick={throwError}>
        throw error
    </Button>
  )
}
