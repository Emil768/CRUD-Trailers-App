import React from "react";
import { Link } from "react-router-dom";
function Trailer({ id, name, year, imgUrl, index }) {
  return (
    <div className="trailer">
      <Link to={"/trailerInfo/" + index}>
        <img className="trailer__poster" src={imgUrl} alt="" />
        <h4 className="trailer__title">{name}</h4>
        <span className="trailer__year">{year}</span>
      </Link>
    </div>
  );
}

export default Trailer;
