import React from "react";
import "./List.css";
import Data from "../../DataFile";

const List = () => {
  return (
    <div className="list-container">
      {Data.map((list) => (
        <a href={list.link} id={list.id} target={list.target} rel={list.rel}>
          {list.tag}
        </a>
      ))}
    </div>
  );
};

export default List;
