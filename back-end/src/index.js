const express = require('express')
const cors = require('cors');
const mongoose = require("mongoose");
const donutRouter = require("../routes/donutRoutes")
const app = express()
const port = 9000

const url_mongo = 'mongodb+srv://luisarquescalero:Uta3rfkA2QqklzYr@practica-9.zqeqvhp.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url_mongo);

// aquí hacemos la conexión con mongoose
const db = mongoose.connection;

// esto siguiente es para saber si ha habido algún error al conectarse a mongo
db.on("error", (error) => {
  console.log(`Error al conectar con mongo ${error}`);
});
// y esto es para saber si se ha conectado correctamente
db.on("connected", () => {
  console.log(`Succecss connect`);
});
 
db.on("disconected", () => {
  console.log(`Mongo is disconected`);
});

app.use(express.json())
app.use(cors());

app.use('/donut', donutRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
