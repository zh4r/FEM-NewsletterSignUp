const express = require("express")
const app = express();
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/submitted', async (req, res) => {
    res.render('submitted');
});

app.listen(8080, () => {
    console.log("Listenin on port 8080")
});


