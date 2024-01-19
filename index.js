const exphbs = require("express-handlebars"); //Para el manejo de los HTML
const session = require("express-session");
const mysql = require('mysql2/promise');
const config = require('./basedate/mysql');
const morgan = require('morgan')
const bodyParser = require("body-parser"); //Para el manejo de los strings JSON
const express = require("express"); //Para el manejo del servidor Web
/* const MySQL = require("./modulos/mysql"); //Añado el archivo mysql.js presente en la carpeta módulos */

const app = express(); //Inicializo express para el manejo de las peticiones
app.use(morgan('dev'))

app.use(express.static("public")); //Expongo al lado cliente la carpeta "public"

app.use(bodyParser.urlencoded({ extended: false })); //Inicializo el parser JSON
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" })); //Inicializo Handlebars. Utilizo como base el layout "Main".
app.set("view engine", "handlebars"); //Inicializo Handlebars

const Listen_Port = 3000; //Puerto por el que estoy ejecutando la página Web

const server = app.listen(Listen_Port, function () {
  console.log(
    "Servidor NodeJS corriendo en http://localhost:" + Listen_Port + "/"
  );
});

app.get('/', require("./routes/viewRoutes"))