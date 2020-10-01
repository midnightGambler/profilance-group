import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveNews } from "../../actions/news";
import { AddNewsModal } from "../../components/AddNewsModal/AddNewsModal";
import { NewsCard } from "../../components/NewsCard/NewsCard";
import { FilterInput } from "../../components/NewsFilter/NewsFilter";
import { Button } from "../../components/UI/Button";
import { Container } from "../../components/UI/Container";
import { Grid, GridItem } from "../../components/UI/Grid";

export const NewsPage = () => {
  const [isAddNewsModalOpen, setIsAddNewsModalOpen] = useState(false);

  const { news, isUser, isAuthorized } = useSelector(({ news, auth }) => ({
    news: news.list,
    isUser: auth.usertype === "user",
    isAuthorized: auth.isAuthorized,
  }));

  const dispatch = useDispatch();

  const handleApproveNews = useCallback((id) => dispatch(approveNews(id)), []);

  const renderNews = () => {
    let filteredNews = news;
    if (!isAuthorized) {
      filteredNews = filteredNews.filter((acticle) => acticle.approved);
    }
    return filteredNews.map((article) => (
      <GridItem key={article.createdAt}>
        <NewsCard handleApproveNews={handleApproveNews} {...article} />
      </GridItem>
    ));
  };

  const toggleAddNewsModal = () => setIsAddNewsModalOpen(!isAddNewsModalOpen);

  return (
    <>
      <Container className="news-page">
        <div className="news-page__actions">
          <FilterInput className="news-page__actions--filter" />
          {isUser && (
            <Button className="news-page__actions--add">Добавить</Button>
          )}
        </div>

        <Grid>{renderNews()}</Grid>
      </Container>
      <AddNewsModal isOpen={isAddNewsModalOpen} onClose={toggleAddNewsModal} />
    </>
  );
};
