const express = require('express');
const port = 3000;


const app = express();

// register view engine
//app.set('views', 'views');


//creating middleware & static files
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
   return res.status(200).json({
      title: "Express Testing",
      message: "The app is working properly!",
   })
})

app.listen(port, () => {
   console.log("ready on port", port);
})

module.exports = app