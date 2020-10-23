/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../../languages';
import { Lang } from '../../types';
import {
  SelectWrapper,
  Select,
  Option,
  Overlay,
  CurrentLanguage,
  ArrowElement,
} from './LanguageSelector.styles';

interface IProps {
  currentLanguage?: Lang;
}

const LanguageSelector: React.FC<IProps> = ({ currentLanguage }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState(
    LANGUAGES[currentLanguage || 'en'] || LANGUAGES[i18n.language],
  );
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);

  const toggleSelect = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsSelectOpen(!isSelectOpen);
  };

  const changeLanguage = (lang: Lang) => {
    setLanguage(LANGUAGES[lang]);
    i18n.changeLanguage(lang);
  };

  return (
    <SelectWrapper onClick={(event: React.MouseEvent<HTMLDivElement>) => toggleSelect(event)}>
      <Select
        onClick={(event: React.MouseEvent<HTMLDivElement>) => toggleSelect(event)}
        showed={isSelectOpen}
      >
        <div>
          {Object.keys(LANGUAGES).map((lang: string) => (
            <Option key={lang} onClick={() => changeLanguage(lang as Lang)}>
              {LANGUAGES[lang]}
            </Option>
          ))}
        </div>
      </Select>
      <Overlay showed={isSelectOpen} onClick={toggleSelect} />
      <CurrentLanguage>{language}</CurrentLanguage>
      <ArrowElement reverse={isSelectOpen} onClick={toggleSelect} />
    </SelectWrapper>
  );
};

export { LanguageSelector };
