import { useState } from "react";
import { IoLanguageSharp } from 'react-icons/io5';

import { Content } from "common";
import LanguagesDrawer from "./LanguagesDrawer";
import { ArticleTitle, LanguageButton } from "./styled";
import { useArticlePageState } from "./useArticlePageState";

const Article = () => {
  const [status, article, languages] = useArticlePageState();
  const [showLanguages, setShowLanguages] = useState(false);

  const areLanguagesAvailable = !!languages?.length;

  const toggleShowLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  return (
    <Content status={status}>

      <ArticleTitle>
        {areLanguagesAvailable &&
          <>
            <LanguagesDrawer
              showLanguages={showLanguages}
              availableLanguages={languages}
              onClick={toggleShowLanguages}
            />

            <LanguageButton
              onClick={toggleShowLanguages}
              title="Read article in other language"
            >
              <IoLanguageSharp />
            </LanguageButton>
          </>
        }

        {article?.title}
      </ArticleTitle>

      <iframe
        title="Wikipedia article"
        src={article?.html_url}
        width="100%"
        height="450px"
      />

    </Content>
  );
};

export default Article;