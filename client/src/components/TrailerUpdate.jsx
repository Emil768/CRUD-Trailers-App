import axios from 'axios';
import React,{useEffect, useRef,useState} from 'react'

function TrailerUpdate({id,active,close,name,realName,imgUrl,urlVideo,ganre,year,text,country,rating }) {
    useEffect(()=>{
        setName(name);
        setRealName(realName);
        setImgUrl(imgUrl);
        setRating(rating);
        setYear(year);
        setGanre(ganre);
        setCountry(country);
        setUrlVideo(urlVideo);
        setText(text);
        document.body.addEventListener("click",handleOutsideClick)
    },[name,realName,imgUrl,rating,year,ganre,country,urlVideo,text])
   
    let contentRef = useRef();
    let [nameUpdate, setName] = useState("");
    let [realNameUpdate, setRealName] = useState("");
    let [imgUrlUpdate, setImgUrl] = useState("");
    let [ratingUpdate, setRating] = useState("");
    let [yearUpdate, setYear] = useState("");
    let [ganreUpdate, setGanre] = useState("");
    let [countryUpdate, setCountry] = useState("");
    let [urlVideoUpdate, setUrlVideo] = useState("");
    let [textUpdate, setText] = useState("");

   
    
    let handleOutsideClick = (e) =>{
        let path = e.path;
        if(!path.includes(contentRef.current)){
            close()
        }
    }

    let closeModalUpdate = () =>{
        close()
    }

    let updateTrailer = () =>{
        axios.put("http://localhost:3001/update",{
            name: nameUpdate,
            realName: realNameUpdate,
            imgUrl: imgUrlUpdate,
            rating: ratingUpdate,
            year: yearUpdate,
            ganre: ganreUpdate,
            country: countryUpdate,
            urlVideo: urlVideoUpdate,
            text: textUpdate,
            id:id
        }).then(()=>alert("Succefully!"))
    }
   
    return (
        <div className={active?"trailer-update active":"trailer-update"}>
            <div ref={contentRef} className="update__content">
            <div onClick={closeModalUpdate} className="update__close">✕</div>
            <h1 className="update__title">{name}</h1>
            <div className="update__text">
            <form className="form">
            <label>Название</label>
            <input  onChange={(e) => setName(e.target.value)} type="text" name="name"  defaultValue={nameUpdate} required/>
            <label>Оригинальное название</label>
            <input onChange={(e) => setRealName(e.target.value)} type="text" defaultValue={realNameUpdate} required/>
            <label>Ссылка на картинку</label>
            <input onChange={(e) => setImgUrl(e.target.value)} type="text" defaultValue={imgUrlUpdate} required/>
            <label>Рейтинг</label>
            <input onChange={(e) => setRating(e.target.value)} type="text" defaultValue={ratingUpdate} required/>
            <label>Год</label>
            <input onChange={(e) => setYear(e.target.value)} type="text" defaultValue={yearUpdate} required/>
            <label>Жанр</label>
            <input onChange={(e) => setGanre(e.target.value)} type="text" defaultValue={ganreUpdate} required/>
            <label>Страна</label>
            <input  onChange={(e) => setCountry(e.target.value)} type="text" defaultValue={countryUpdate} required/>
            <label>Ссылка на видео</label>
            <input  onChange={(e) => setUrlVideo(e.target.value)} type="text" defaultValue={urlVideoUpdate} required/>
            <label>Описание</label>
            <textarea
            onChange={(e) => setText(e.target.value)}
                name="text"
                id=""
                cols="30"
                rows="10"
                type="text"
                defaultValue={textUpdate}
                required
            ></textarea>
            <button onClick={updateTrailer}>Изменить</button>
        </form>
            </div>
            </div>
        </div>
    )
}

export default TrailerUpdate
