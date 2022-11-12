const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const insertData = require("./DB/dbInsert")
const connectData = require("./DB/dbConnect")

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
                                                                // server setup at "http://localhost:5000"
app.listen(PORT, console.log(`Server started on port ${PORT}`)); 

app.get("/", (res, req) => {   
  res.send("this is the sever of iStocks")
})

app.get("/status", (req, res) => {
  res.send("Connected to React");
});

app.post('/buyorder', (req, res) => {             // receiving buy data from client
  const data = req.body
  console.log(data)
  insertData(data.script, data.price, data.quantity)  // function which inserts data to DB
})

app.post('/sellorder', (req, res) => {            // receiving sell data from client
  const data = req.body
  console.log(data)
  insertData(data.script, data.price, data.quantity)
})

app.get('/record', async(req, res) => {            // passing the DB records to client
	let data = await connectData()                   // function connecting server to DB collection
  let response = await data.findOne()              // DB command
  res.json(response)
  console.log(response)
})







