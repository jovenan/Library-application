const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

require('dotenv').config()

mongoose.connect(process.env.CHAVE_DB);

// carrega os models
const LivrosModel = require('./models/livros');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// carrega as rotas
const Routes = require('./routes/index');
app.use('/', Routes);

app.listen(port, () =>
  console.log("server is running in port http://localhost:" + port)
);