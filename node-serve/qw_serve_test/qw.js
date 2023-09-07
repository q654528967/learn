const express = require("express");
const app = express();
const port = 3009;
const bodyParser = require("body-parser");
// const multer = require("multer"); // v1.0.5
// const upload = multer({ dest: "uploads/" }); // for parsing multipart/form-data
const WxCrypto = require("@wecom/crypto");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const token = "zb3qOYTHl4iWsgSjqANGUVt";
const EncodingAESKey = "SFTuID1crPEniHoOSx4w77C4BVniksir8PGEKWPv3TW";
// 解决跨域问题
app.all("*", function (req, res, next) {
  // 设置允许跨域的域名,*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  // 允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  // 跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == "options")
    res.send(200); // 让options 尝试请求快速结束
  else next();
});
app.get("/", (req, res) => {
  console.log(req.query);
  const { msg_signature, timestamp, nonce, echostr } = req.query;
  const unSignature = WxCrypto.getSignature(token, timestamp, nonce, echostr);
  if (unSignature === msg_signature) {
    const decryptRes = WxCrypto.decrypt(EncodingAESKey, echostr);
    res.send(decryptRes.message);
  } else {
    res.status(500).send({ error: "签名错误" });
  }
});
app.post("/", (req, res) => {
  console.log(req.body, "get");

  res.send("Hello World!");
});
app.post("/big-file-upload", (req, res) => {
  console.log(req, req.file);
  res.send({ code: 200, msg: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
