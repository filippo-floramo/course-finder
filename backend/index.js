const express = require('express');
const cors = require('cors');
const port = 3001;


const app = express();

// register view engine
//app.set('views', 'views');


//creating middleware & static files
app.use(express.urlencoded({ extended: true }));
app.use(cors())
//app.use(express.json());


app.get('/', (req, res) => {

   return res.status(200).json({
      title: "Express Testing",
      message: "The app is working properly!",
   })
})

app.listen(port, () => {
   console.log("ready on port", port);
})
