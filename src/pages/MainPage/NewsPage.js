import React from "react";
import { NewsCard } from "../../components/NewsCard/NewsCard";
import { Container } from "../../components/UI/Container";
import { Grid, GridItem } from "../../components/UI/Grid";

const news = [
  {
    title: "Кошка построила домик!",
    text:
      "Но никого не впускает! Почему ты такая злюка и никого не пускаешь? Из-за лапок?",
    approved: true,
    createdAt: 1600560000000,
  },
  {
    title: "Котика перепутали с хлебушком!",
    text: "И засунули в пакетик! По последним данным, он не очень этому рад.",
    approved: false,
    createdAt: 1600646400000,
  },
  {
    title: "В аэропорту задержан котик!",
    text:
      "Он ничего не сделал, просто сотрудникам полиции не хватает милых котиков.",
    approved: true,
    createdAt: 1600732800000,
  },
  {
    title: "Собачка залезла в коробку и сидит",
    text: "Зачем она это делает? Что это значит? Она что, кот?",
    approved: false,
    createdAt: 1600819200000,
  },
  {
    title: "Местные крыски такие маленькие, такие утютю",
    text: "Нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх",
    approved: false,
    createdAt: 1600905600000,
  },
  {
    title: "Доллар упал уже до 90 рублей",
    text: "Министерство кошачих дел заявило что они ничего не роняли",
    approved: true,
    createdAt: 1600992000000,
  },
  {
    title: "Котик устроился программистом",
    text:
      "Вот только писать код он не может - у него лапки. Держись, котик, мы с тобой!",
    approved: false,
    createdAt: 1601078400000,
  },
];

export const NewsPage = () => (
  <Container>
    <Grid>
      {news.map((article) => (
        <GridItem key={article.createdAt}>
          <NewsCard {...article} />
        </GridItem>
      ))}
    </Grid>
  </Container>
);
