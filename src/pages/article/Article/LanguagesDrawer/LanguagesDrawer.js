import { nanoid } from "@reduxjs/toolkit";
import { IoClose } from "react-icons/io5";

import { CancelButton } from "common";
import { goToOtherLanguage } from "./goToOtherLanguage";
import {
  LanguagesList,
  ListItem,
  StyledDrawer,
  StyledLink,
  Background,
  DrawerHeader,
  DrawerTitle
} from "./styled";

const LanguagesDrawer = ({ showLanguages, availableLanguages, onClick }) => {
  return (
    <>
      <Background open={showLanguages} onClick={onClick} />

      <StyledDrawer active={showLanguages}>

        <DrawerHeader>
          <DrawerTitle>Read article in other language</DrawerTitle>

          <CancelButton onClick={onClick}>
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