/**
 * 서버 설정 먼저 해주세요
 * 참고 : https://to2.kr/d9o
 */
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const mysql = require("mysql2");
const db = mysql.createPoolCluster();

const app = express();
const port = 4000;

app.use(express.json());
app.use(
  session({
    secret: "SECRET",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

db.add("article_project", {
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "article_project",
  port: 3306,
});

function 디비실행(query) {
  return new Promise(function (resolve, reject) {
    db.getConnection("article_project", function (error, connection) {
      if (error) {
        console.log("디비 연결 오류", error);
        reject(true);
      }

      connection.query(query, function (error, data) {
        if (error) {
          console.log("쿼리 오류", error);
          reject(true);
        }

        resolve(data);
      });

      connection.release();
    });
  });
}

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/join", (req, res) => {
  const { id, nickname, pw } = req.body;

  /**
   * DB 연결!!
   */
  console.log(req.body);

  res.send("/");
});

app.listen(port, () => {
  console.log("서버가 실행되었습니다");
});
