import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { GrClose } from "react-icons/gr";

import {
  selectArticleLanguages,
  selectShowLanguages
} from "features/article/articleSlice";
import { goToOtherLanguage } from "./goToOtherLanguage";
import { useToggleShowLanguages } from "../useToggleShowLanguages";
import {
  List,
  LinkItem,
  StyledMenu,
  StyledLink,
  Background,
  DrawerHeader,
  ExitButton,
  DrawerTitle
} from "./styled";

const LanguagesDrawer = () => {
  const availableLanguages = useSelector(selectArticleLanguages);
  const showLanguages = useSelector(selectShowLanguages);
  const toggleShowLanguages = useToggleShowLanguages();

  return (
    <>
      <Background open={showLanguages} onClick={toggleShowLanguages} />

      <StyledMenu active={showLanguages}>

        <DrawerHeader>
          <DrawerTitle>Read article in other language</DrawerTitle>

          <ExitButton onClick={toggleShowLanguages}>
            <GrClose />
          </ExitButton>

        </DrawerHeader>

        <List>
          {availableLanguages?.map(language => (
            <LinkItem key={nanoid()}>
              <StyledLink
                to={goToOtherLanguage({
                  key: language.key,
                  languageCode: language.code,
                })}
              >
                {language.name}
              </StyledLink>
            </LinkItem>
          ))}
        </List>

      </StyledMenu>
    </>
  );
};

export default LanguagesDrawer;