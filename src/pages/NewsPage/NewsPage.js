import React from "react";
import { useSelector } from "react-redux";
import { NewsCard } from "../../components/NewsCard/NewsCard";
import { FilterInput } from "../../components/NewsFilter/NewsFilter";
import { Button } from "../../components/UI/Button";
import { Container } from "../../components/UI/Container";
import { Grid, GridItem } from "../../components/UI/Grid";

export const NewsPage = () => {
  const news = useSelector(({ news }) => news.list);

  return (
    <Container className="news-page">
      <div className="news-page__actions">
        <FilterInput className="news-page__actions--filter" />
        <Button>Добавить</Button>
      </div>

      <Grid>
        {news.map((article) => (
          <GridItem key={article.createdAt}>
            <NewsCard {...article} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};
