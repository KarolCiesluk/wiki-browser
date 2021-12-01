import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { IoLanguageSharp } from 'react-icons/io5';

import { useClearDataOnLeave } from "common/useClearDataOnLeave";
import { useFetchOnPageLoad } from "common/useFetchOnPageLoad";
import { Content } from "features/articleList/ArticleList/Content";
import { useQueryParameter } from "features/articleList/ArticleList/useQueryParameter";
import {
  clearArticleData,
  fetchArticle,
  selectArticle,
  selectArticleLanguages,
  selectArticleStatus,
  selectShowLanguages,
  toggleShowLanguages
} from "../articleSlice";
import { goToOtherLanguage } from "./goToOtherLanguage";
import { ArticleHeader, LanguageButton } from "./styled";

const Article = () => {
  const { title } = useParams();
  const language = useQueryParameter("language") || undefined;
  const dispatch = useDispatch();

  const status = useSelector(selectArticleStatus);
  const article = useSelector(selectArticle);
  const availableLanguages = useSelector(selectArticleLanguages);
  const showLanguages = useSelector(selectShowLanguages);

  useFetchOnPageLoad({
    fetchAction: fetchArticle,
    value: title,
    language,
  });

  const handleButtonClick = () => {
    dispatch(toggleShowLanguages());
  };

  useClearDataOnLeave({
    clearAction: clearArticleData,
  });

  return (
    <Content status={status}>

      {showLanguages &&
        <aside>
          <h2>Languages</h2>

          <ul >
            {availableLanguages?.map(language => (
              <li key={nanoid()}>
                <Link
                  to={goToOtherLanguage({
                    key: language.key,
                    languageCode: language.code,
                  })}
                >
                  {language.name}
                </Link>
              </li>
            ))}
          </ul>

        </aside>
      }

      <ArticleHeader>

        <LanguageButton
          onClick={handleButtonClick}
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