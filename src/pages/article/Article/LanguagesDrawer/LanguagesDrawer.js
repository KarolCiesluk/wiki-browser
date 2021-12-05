import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";

import {
  selectArticleLanguages,
  selectShowLanguages
} from "pages/article/articleSlice";
import { goToOtherLanguage } from "./goToOtherLanguage";
import { useToggleShowLanguages } from "../useToggleShowLanguages";
import {
  LanguagesList,
  ListItem,
  StyledDrawer,
  StyledLink,
  Background,
  DrawerHeader,
  DrawerTitle
} from "./styled";
import { CancelButton } from "common";

const LanguagesDrawer = () => {
  const availableLanguages = useSelector(selectArticleLanguages);
  const showLanguages = useSelector(selectShowLanguages);
  const toggleShowLanguages = useToggleShowLanguages();

  return (
    <>
      <Background open={showLanguages} onClick={toggleShowLanguages} />

      <StyledDrawer active={showLanguages}>

        <DrawerHeader>
          <DrawerTitle>Read article in other language</DrawerTitle>

          <CancelButton onClick={toggleShowLanguages}>
            <IoClose />
          </CancelButton>

        </DrawerHeader>

        <LanguagesList>
          {availableLanguages?.map(language => (
            <ListItem key={nanoid()}>
              <StyledLink
                to={goToOtherLanguage({
                  key: language.key,
                  languageCode: language.code,
                })}
              >
                {language.name}
              </StyledLink>
            </ListItem>
          ))}
        </LanguagesList>

      </StyledDrawer>
    </>
  );
};

export default LanguagesDrawer;