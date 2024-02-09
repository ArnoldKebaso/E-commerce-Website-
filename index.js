var express = require('express')
var ejs = require('ejs')
var bodyParser = require('body-parser')
var app = express()
var path = require('path')

app.use(bodyParser.urlencoded({ extended: true}))


app.use(express.static('public'));
app.set('view engine','ejs');


app.get('/index', function(req, res) {
    res.render('pages/index')

})

app.get('/shop', function(req, res) {
    const url =req.url 
    if(url === '/shop'){
        res.render('pages/shop')
    }
    else{
        res.status(404).json(
            {
                success: false,
                message: "404 The page you are looking for does not exist"
            }
        )
    }
})

app.get('/about', function(req, res) {
    res.render('pages/about')

})
app.get('/contact', function(req, res) {
    res.render('pages/contact')

})
app.get('/sproduct', function(req, res) {
    res.render('pages/sproduct')

})
app.get('/cart', function(req, res) {
    res.render('pages/cart')

})
app.get('/blog', function(req, res) {
    res.render('pages/blog')

})

app.use(express.static(path.join(__dirname, 'views\pages\cart.ejs')))



//localhost:8000
app.listen(8000,()=>{
    console.log("Serveris now running on port 8000")
})