//using express
const { json } = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
//using path
const path = require('path');
//using body parser
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//creating roots
app.get('/',(req, res)  => {
    res.send('Welcome to Data Representation & Querying!')
})

//listens at localhost3000/hello  and passes up http request and sends back response
app.get('/hello/:name', (req, res) =>{
 console.log(req.params.name)
 res.send('hello ' + req.params.name)
})

//sends json data from server too client
app.get('/api/movies', (req,res) =>{
 const Mymovies = [
    {
    "Title": "Avengers: Infinity War",
    "Year": "2018",
    "imdbID": "tt4154756",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
    "Title": "Captain America: Civil War",
    "Year": "2016",
    "imdbID": "tt3498820",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    }
 ];
    
    res.json({movies:Mymovies});
});


app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

//listens for get request coming at name and returns first name and last name too client
app.get('/name',(req, res) => {
    res.send('Hello ' + req.query.fname + ' '+req.query.lname)
})

//listens for post request at /name,passed as part of body
app.post('/name',(req,res) =>{
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname)
})


//sets up webserver
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
