import React, { useEffect, useState } from "react";
import axios from "axios";
import Iframe from "react-iframe";
import { useHistory } from "react-router";
import TrailerUpdate from "./TrailerUpdate";
function TrailerInfo(props) {
  let trailerId = props.match.params.id;
  let history = useHistory();
  let [itemInfo, setItemsInfo] = useState([]);
  let [quesUpdate,setQuesUpdate] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:3001`)
      .then((res) => setItemsInfo(res.data[trailerId]));
  }, []);
  
  let quesDeleteTrailer = () => {
    let confirm = window.confirm(
      "Вы действительно хотите удалить этот трейлер?"
    );
    if (confirm) {
      axios.delete(`http://localhost:3001/delete/${itemInfo.id}`);
      console.log(itemInfo.id);
      history.push("/");
    }
  };

  let quesUpdateTrailer = () =>{
    let confirm = window.confirm("Вы действительно хотите изменить трейлер?");
    if(confirm){
      setQuesUpdate(true)
    }
  }

  let closeModalUpdate = () =>{
    setQuesUpdate(false)
  }
 

  return (
    <div className="trailer__info">
      <div className="container">
        <div className="trailer__info-content">
          <div className="trailer__info-poster">
            <img src={itemInfo.imgUrl} alt="" />
          </div>
          <div className="trailer__info-desc">
            <div className="trailer__info-options">
              <div onClick={quesUpdateTrailer} className="change">✎</div>
              <div onClick={quesDeleteTrailer} className="delete">
                ✖
              </div>
            </div>
            <div className="trailer__info-title">
              <h2>{itemInfo.name}</h2>
            </div>
            <div className="trailer__info-rating">
              <span>
                Rating: <b>&#9733; {itemInfo.rating}</b>
              </span>
            </div>
            <div className="trailer__info-realName">
              <span>
                Название: <b>{itemInfo.realName}</b>
              </span>
            </div>
            <div className="trailer__info-year">
              <span>
                Год: <b>{itemInfo.year}</b>
              </span>
            </div>
            <div className="trailer__info-country">
              <span>
                Страна: <b>{itemInfo.country}</b>
              </span>
            </div>
            <div className="trailer__info-ganre">
              <span>
                Жанры: <b>{itemInfo.ganre}</b>
              </span>
            </div>
            <div className="trailer__info-text">{itemInfo.text}</div>
          </div>
        </div>

        <Iframe url={itemInfo.urlVideo} width="100%" height="550px" />
      </div>
      <TrailerUpdate active = {quesUpdate} {...itemInfo} close={closeModalUpdate}/>
    </div>
  );
}

export default TrailerInfo;
