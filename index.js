const express = require('express');
const port = 3000;


const app = express();

// register view engine
app.set('view engine', 'ejs');
//app.set('views', 'views');


//creating middleware & static files

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
   return res.render('index')
})

app.listen(port, () => {
   console.log("ready on port", port);
})

module.exports = app