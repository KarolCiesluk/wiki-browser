import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IoLanguageSharp } from 'react-icons/io5';

import { useClearDataOnLeave } from "common/useClearDataOnLeave";
import { useFetchOnPageLoad } from "common/useFetchOnPageLoad";
import { Content } from "features/articleList/ArticleList/Content";
import { useQueryParameter } from "common/useQueryParameter";
import {
  clearArticleData,
  fetchArticle,
  selectArticle,
  selectArticleStatus,
} from "../articleSlice";
import { ArticleHeader, LanguageButton } from "./styled";
import LanguagesDrawer from "./LanguagesDrawer";
import { useToggleShowLanguages } from "./useToggleShowLanguages";

const Article = () => {
  const { title } = useParams();
  const language = useQueryParameter("language") || undefined;

  const status = useSelector(selectArticleStatus);
  const article = useSelector(selectArticle);

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

      <LanguagesDrawer />
      <ArticleHeader>

        <LanguageButton
          onClick={toggleShowLanguages}
          title="Read article in other language"
        >
          <IoLanguageSharp />
        </LanguageButton>

        {article?.title}

      </ArticleHeader>

      {!!article?.html &&
        <div
          dangerouslySetInnerHTML={{ __html: article?.html }}
        />
      }

    </Content>
  );
};

export default Article;