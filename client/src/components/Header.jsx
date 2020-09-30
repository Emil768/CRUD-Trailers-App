import React, { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  let [activeItem, setActiveItem] = useState(null);

  let addActiveItem = (index) => {
    setActiveItem(index);
  };
  let items = [
    {
      name: "Трейлер",
      to: "/",
    },
    {
      name: "Добавить трейлер",
      to: "/addTrailer",
    },
  ];

  return (
    <div className="header">
      <div className="container">
        <ul className="menu">
          {items.map((item, index) => {
            return (
              <li
                onClick={() => addActiveItem(index)}
                className="menu__item"
                key={index}
              >
                <Link
                  className={
                    activeItem === index ? "menu__link active" : "menu__link"
                  }
                  to={item.to}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
