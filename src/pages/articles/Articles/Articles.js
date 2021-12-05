import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { nanoid } from "@reduxjs/toolkit";

import {
  Content,
  PageTitle,
  Title,
  useClearDataOnLeave,
  useFetchOnPageLoad
} from "common";
import { Pagination } from "./Pagination";
import { selectors, actions } from "../articlesSlice";
import { useList } from "./useList";
import { useGoToFirstPageWhenListEmpty } from "./useGoToFirstPageWhenListEmpty";
import { useAddHistoryItemOnPageLoad } from "./useAddHistoryItemOnPageLoad";
import placeholder from "./placeholder.svg";
import { getTitleText } from "./getTitleText";
import {
  Description,
  Image,
  ImageWrapper,
  ArticleList,
  ListItem,
  StyledLink,
  TextWrapper,
} from "./styled";

const Articles = ({ articlesCountOnPage = 12 }) => {
  const allArticles = useSelector(selectors.selectData);
  const status = useSelector(selectors.selectStatus);
  const { query } = useParams();

  const allArticlesLength = allArticles?.length;

  const articles = useList({
    list: allArticles,
    numberOfItems: articlesCountOnPage,
  });

  useFetchOnPageLoad({
    fetchAction: actions.fetch,
    value: query,
  });

  useAddHistoryItemOnPageLoad({ query });

  useGoToFirstPageWhenListEmpty(articles);

  useClearDataOnLeave({ clearAction: actions.clear });

  return (
    <Content status={status}>

      <PageTitle>
        {getTitleText({
          listLength: allArticlesLength,
          query,
        })}
      </PageTitle>

      {!!allArticlesLength &&
        <ArticleList>
          {articles.map(article =>
            <ListItem key={nanoid()}>
              <StyledLink
                to={`/article/${article.key}`}
              >
                <ImageWrapper url={article.thumbnail?.url}>
                  <Image
                    src={article.thumbnail?.url || placeholder}
                    alt=""
                  />
                </ImageWrapper>

                <TextWrapper>
                  <Title>
                    {article.title}
                  </Title>

                  <Description>
                    {article.description}
                  </Description>
                </TextWrapper>

              </StyledLink>
            </ListItem>
          )}
        </ArticleList>
      }

      {allArticlesLength >= articlesCountOnPage &&
        <Pagination
          pageSize={articlesCountOnPage}
          totalCount={allArticlesLength}
        />
      }

    </Content>
  );
};

export default Articles;