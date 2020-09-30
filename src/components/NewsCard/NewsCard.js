import React, { useMemo } from "react";
import format from "date-fns/format";
import CheckIcon from "../../icons/check.svg";
import { Button } from "../UI/Button";

export const NewsCard = ({ title, text, createdAt, approved }) => {
  const formattedDate = useMemo(() => format(createdAt, "dd.MM.yyyy"), [
    createdAt,
  ]);

  return (
    <div className="news-card">
      <div className="news-card__header">
        <h3 title={title} className="news-card__title">
          {title}
        </h3>
        {approved && (
          <CheckIcon
            className="icon--ml"
            width="1rem"
            height="1rem"
            fill="#f9a109"
          />
        )}
      </div>

      <div className="news-card__body">
        <small className="news-card__timestamp news-card__timestamp--mb">
          Опубликовано: {formattedDate}
        </small>
        <p className="news-card__text">{text}</p>
      </div>

      <div className="news-card__actions">
        <Button>Одобрить</Button>
        <Button variant="error">Удалить</Button>
      </div>
    </div>
  );
};
