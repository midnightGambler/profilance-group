import React, { useRef, useState } from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { filterNews } from "../../actions/news";

export const FilterInput = ({ className }) => {
  const [filter, setFilter] = useState("");
  const timeoutRef = useRef(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);

    timeoutRef.current && clearTimeout(timeoutRef.current);

    const timeout = setTimeout(() => dispatch(filterNews(value)), 300);

    timeoutRef.current = timeout;
  };

  return (
    <input
      value={filter}
      onChange={handleChange}
      placeholder="Введите название новости"
      className={cn("news-filter", className)}
    />
  );
};
