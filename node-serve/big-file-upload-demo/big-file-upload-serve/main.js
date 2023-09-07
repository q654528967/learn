const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5
const upload = multer({ dest: 'uploads/' }) // for parsing multipart/form-data
const fs = require('fs')
const path = require('path')
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const chunkDirs = path.join(__dirname, 'uploads/chunk')
// 解决跨域问题
app.all("*", function (req, res, next) {
  // 设置允许跨域的域名,*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*');
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type');
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
  if (req.method.toLowerCase() == 'options')
    res.send(200); // 让options 尝试请求快速结束
  else
    next();
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/big-file-upload', upload.single('file'), (req, res) => {
  const { body: {
    fileName, chunkName
  }, file } = req
  const oldPath = path.join(__dirname, file.path)
  const chunkDir = path.join(__dirname, file.destination + fileName + '-chunks/')
  if (!fs.existsSync(chunkDir)) fs.mkdirSync(chunkDir)
  const newPath = chunkDir + chunkName
  fs.renameSync(oldPath, newPath)
  res.send({ code: 200, msg: 'ok' })
})
app.post('/big-file-upload-merge', (req, res) => {
  console.log(req.body);
  res.send({ code: 200, msg: 'merge ok' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})