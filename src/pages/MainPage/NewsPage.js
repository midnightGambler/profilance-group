import React from "react";
import { Container } from "../../components/UI/Container";

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
    approved: true,
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
    approved: true,
    createdAt: 1600819200000,
  },
  {
    title: "Местные крыски такие маленькие, такие утютю",
    text: "Нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх-нюх",
    approved: true,
    createdAt: 1600905600000,
  },
  {
    title: "Доллар приближается к 90 рублям",
    text: "Министерство кошачих дел заявило что они ничего не роняли",
    approved: true,
    createdAt: 1600992000000,
  },
];

const NewsCard = ({ title, text, createdAt }) => {
  return (
    <div className="news-layout__item">
      <div className="card">
        <div className="card__header">
          <h3 title={title} className="card__header-title">
            {title}
          </h3>
        </div>
        <div className="card__body">
          <p>{text}</p>
          <span>{createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export const NewsPage = () => (
  <Container>
    <h1>news page</h1>
    <div className="news-layout">
      {news.map((article) => (
        <NewsCard key={article.createdAt} {...article} />
      ))}
    </div>
  </Container>
);
