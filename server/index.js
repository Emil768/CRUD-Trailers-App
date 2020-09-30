let express = require("express");
let app = express();
let mysql = require("mysql");
let bodyParser = require("body-parser");
let cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

let db = mysql.createPool({
  host: "localhost",
  database: "trailersjs",
  password: "emil22878",
  user: "root",
});

app.get("/", (req, res) => {
  db.query("select* from trailers", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/insert", (req, res) => {
  let name = req.body.name;
  let realName = req.body.realName;
  let imgUrl = req.body.imgUrl;
  let rating = req.body.rating;
  let year = req.body.year;
  let ganre = req.body.ganre;
  let country = req.body.country;
  let urlVideo = req.body.urlVideo;
  let text = req.body.text;

  let sqlInsert =
    "insert into trailers(name,realName,imgUrl,rating,year,ganre,country,urlVideo,text) values (?,?,?,?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [name, realName, imgUrl, rating, year, ganre, country, urlVideo, text],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/update",(req,res)=>{
  let id = req.body.id;
  let name = req.body.name;
  let realName = req.body.realName;
  let imgUrl = req.body.imgUrl;
  let rating = req.body.rating;
  let year = req.body.year;
  let ganre = req.body.ganre;
  let country = req.body.country;
  let urlVideo = req.body.urlVideo;
  let text = req.body.text;
  console.log(req.body)
  let sqlUpdate = "update trailers set name=?,realName=?,imgUrl=?,rating=?,year=?,ganre=?,country=?,urlVideo=?,text=? where id=?";

  db.query(sqlUpdate,[name, realName, imgUrl, rating, year, ganre, country, urlVideo, text,id],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      console.log(result)
    }
  })
})

app.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  let sqlDelete = "delete from trailers where id = ?";
  db.query(sqlDelete, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("server is starting from 3001 port...");
});
