import React, { useState } from "react";
import axios from "axios";
function TrailerAdd() {
  let [name, setName] = useState("");
  let [realName, setRealName] = useState("");
  let [imgUrl, setImgUrl] = useState("");
  let [rating, setRating] = useState("");
  let [year, setYear] = useState("");
  let [ganre, setGanre] = useState("");
  let [country, setCountry] = useState("");
  let [urlVideo, setUrlVideo] = useState("");
  let [text, setText] = useState("");
  // let [name, setName] = useState("");

  let addTrailer = () => {
    axios
      .post("http://localhost:3001/insert", {
        name: name,
        realName: realName,
        imgUrl: imgUrl,
        rating: rating,
        year: year,
        ganre: ganre,
        country: country,
        urlVideo: urlVideo,
        text: text,
      })
      .then(() => alert("Succesfully!"));
  };
  return (
    <div className="trailer-add">
      <div className="container">
        <form className="form">
          <label>Название</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
          />
          <label>Оригинальное название</label>
          <input
            onChange={(e) => setRealName(e.target.value)}
            type="text"
            required
          />
          <label>Ссылка на картинку</label>
          <input
            onChange={(e) => setImgUrl(e.target.value)}
            type="text"
            required
          />
          <label>Рейтинг</label>
          <input
            onChange={(e) => setRating(e.target.value)}
            type="text"
            required
          />
          <label>Год</label>
          <input
            onChange={(e) => setYear(e.target.value)}
            type="text"
            required
          />
          <label>Жанр</label>
          <input
            onChange={(e) => setGanre(e.target.value)}
            type="text"
            required
          />
          <label>Страна</label>
          <input
            onChange={(e) => setCountry(e.target.value)}
            type="text"
            required
          />
          <label>Ссылка на видео</label>
          <input
            onChange={(e) => setUrlVideo(e.target.value)}
            type="text"
            required
          />
          <label>Описание</label>
          <textarea
            name="text"
            id=""
            cols="30"
            rows="10"
            onChange={(e) => setText(e.target.value)}
            type="text"
            required
          ></textarea>
          <button onClick={addTrailer}>Добавить</button>
        </form>
      </div>
    </div>
  );
}

export default TrailerAdd;
