import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useClearDataOnLeave } from "common/useClearDataOnLeave";
import { searchQueryName } from "common/searchQueryName";
import { selectors, actions } from "../articleListSlice";
import { useQueryParameter } from "./useQueryParameter";
import { useFetchOnPageLoad } from "./useFetchOnPageLoad";
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
import { Header } from "common";
import { Content } from "./Content";
import placeholder from "./placeholder.svg";

const ArticleList = () => {
  const articles = useSelector(selectors.selectData);
  const status = useSelector(selectors.selectStatus);

  const query = useQueryParameter(searchQueryName);

  const articlesLength = articles?.length;

  useFetchOnPageLoad({
    fetchAction: actions.fetch,
    value: query,
  });

  useEffect(() => {
    console.log("articles:", articles, "status:", status);
  }, [articles, status]);

  useClearDataOnLeave({ clearAction: actions.clear });

  const getTitleText = () => {
    if (!!articlesLength) {
      return `Search results for "${query}" (${articlesLength}):`;
    }

    return `Sorry, there are no results for "${query}"`;
  };

  return (
    <Content status={status}>

      <Header>
        {getTitleText()}
      </Header>

      {
        !!articlesLength &&
        <List>
          {articles.map(article =>
            <ListItem key={article.id}>
              <StyledLink
                to={`/article/${article.id}`}
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

    </Content>
  );
};

export default ArticleList;