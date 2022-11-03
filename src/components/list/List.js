import React from "react";
import "./List.css";
import Data from "../../Data";

const List = () => {
  return (
    <div className="list-container">
      {Data.map((list) => (
        <a href={list.link} id={list.id} target="_blank" rel="noreferrer">
          {list.tag}
        </a>
      ))}
    </div>
  );
};

export default List;
