import React, { useEffect, useState } from "react";
import axios from "axios";
import Trailer from "./Trailer";
function Trailers() {
  let [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001").then((res) => setItems(res.data));
  }, []);
  let emptyItems = "Трейлеров на сегодня нет!";

  return (
    <div className="trailers">
      <div className="container">
        <h2>{items.length ? "Все трейлеры" : emptyItems}</h2>
        <div className="trailers__content">
          {items.map((item, index) => {
            return <Trailer key={index} {...item} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Trailers;
