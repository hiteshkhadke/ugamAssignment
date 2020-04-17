const express = require('express');
let bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const readExcelFile = require('./readExcelFile')

const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('hello world')
});

app.post('/readExcel', upload.single('file'), (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
    
    req.body.filePath = req.file.path;
    let temp = readExcelFile.readExcelFile(req.body);
    res.send(temp);
});

app.listen(5000, () => console.log('server started...'));