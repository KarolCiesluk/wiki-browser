import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";

import { CancelButton } from "common";
import {
  selectArticleLanguages,
  selectShowLanguages
} from "../../articleSlice";
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
          {availableLanguages?.map(({ key, code, name }) => (
            <ListItem key={nanoid()}>
              <StyledLink
                to={goToOtherLanguage({
                  key,
                  languageCode: code,
                })}
              >
                {name}
              </StyledLink>
            </ListItem>
          ))}
        </LanguagesList>

      </StyledDrawer>
    </>
  );
};

export default LanguagesDrawer;