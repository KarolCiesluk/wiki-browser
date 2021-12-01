import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { nanoid } from "@reduxjs/toolkit";

import { Content } from "./Content";
import { Header } from "common";
import { Pagination } from "./Pagination";
import { selectors, actions } from "../articleListSlice";
import { useClearDataOnLeave } from "common/useClearDataOnLeave";
import { useList } from "./useList";
import { useGoToFirstPageWhenListEmpty } from "./useGoToFirstPageWhenListEmpty";
import placeholder from "./placeholder.svg";
import {
  Description,
  Image,
  ImageWrapper,
  List,
  ListItem,
  StyledLink,
  TextWrapper,
  Title
} from "./styled";
import { useFetchOnPageLoad } from "common/useFetchOnPageLoad";
import { getTitleText } from "./getTitleText";

const ArticleList = ({ articlesCountOnPage = 12 }) => {
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

  useGoToFirstPageWhenListEmpty(articles);

  useClearDataOnLeave({ clearAction: actions.clear });

  return (
    <Content status={status}>

      <Header>
        {getTitleText({
          listLength: allArticlesLength,
          query,
        })}
      </Header>

      {!!allArticlesLength &&
        <List>
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
        </List>
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

export default ArticleList;