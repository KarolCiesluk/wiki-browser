import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IoLanguageSharp } from 'react-icons/io5';

import {
  Content,
  defaultLanguageCode,
  useClearDataOnLeave,
  useFetchOnPageLoad,
  useQueryParameter
} from "common";
import LanguagesDrawer from "./LanguagesDrawer";
import {
  clearArticleData,
  fetchArticle,
  selectAreLanguagesAvailable,
  selectArticle,
  selectArticleStatus,
} from "../articleSlice";
import { useToggleShowLanguages } from "./useToggleShowLanguages";
import { languageQueryName } from "./languageQueryName";
import { ArticleTitle, LanguageButton, StyledIframe } from "./styled";

const Article = () => {
  const { title } = useParams();
  const language = useQueryParameter(languageQueryName) || defaultLanguageCode;

  const status = useSelector(selectArticleStatus);
  const article = useSelector(selectArticle);
  const areLanguagesAvailable = useSelector(selectAreLanguagesAvailable);

  useFetchOnPageLoad({
    fetchAction: fetchArticle,
    value: title,
    language,
  });

  const toggleShowLanguages = useToggleShowLanguages();

  useClearDataOnLeave({
    clearAction: clearArticleData,
  });

  return (
    <Content status={status}>

      <ArticleTitle>
        {areLanguagesAvailable &&
          <>
            <LanguagesDrawer />

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

      <StyledIframe
        title="Wikipedia article"
        src={article?.html_url}
        width="100%"
        height="450px"
      />

    </Content>
  );
};

export default Article;