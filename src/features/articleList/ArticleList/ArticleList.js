import { useSelector } from "react-redux";

import { Content } from "./Content";
import { Header } from "common";
import { Pagination } from "./Pagination";
import { selectors, actions } from "../articleListSlice";
import { useClearDataOnLeave } from "common/useClearDataOnLeave";
import { useQueryParameter } from "./useQueryParameter";
import { useFetchOnPageLoad } from "./useFetchOnPageLoad";
import { useList } from "./useList";
import { useGoToFirstPageWhenListEmpty } from "./useGoToFirstPageWhenListEmpty";
import { searchQueryName } from "common/searchQueryName";
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

const ArticleList = ({ articlesCountOnPage = 12 }) => {
  const allArticles = useSelector(selectors.selectData);
  const status = useSelector(selectors.selectStatus);
  const searchQuery = useQueryParameter(searchQueryName);

  const articles = useList({
    list: allArticles,
    numberOfItems: articlesCountOnPage,
  });

  useGoToFirstPageWhenListEmpty(articles);

  useFetchOnPageLoad({
    fetchAction: actions.fetch,
    value: searchQuery,
  });

  const allArticlesLength = allArticles?.length;

  useClearDataOnLeave({ clearAction: actions.clear });

  const getTitleText = () => {
    if (!!allArticlesLength) {
      return `Search results for "${searchQuery}" (${allArticlesLength}):`;
    }

    return `Sorry, there are no results for "${searchQuery}"`;
  };

  return (
    <Content status={status}>

      <Header>
        {getTitleText()}
      </Header>

      {!!allArticlesLength &&
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