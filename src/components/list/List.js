import React from "react";
import "./List.css";
import data from "../../data";

const List = () => {
  return (
    <div className="list-container">
      {data.map((list) => (
        <a href={list.link} id={list.id} target="_blank" rel="noreferrer">
          {list.tag}
        </a>
      ))}
    </div>
  );
};

export default List;
