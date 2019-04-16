const nunjucks = require('nunjucks');
const express = require('express');
// console.log(nunjucks.renderString('Hello {{ username }}', { username: 'James' }));

var Contentstack = require('contentstack');
var config = require('config');

var Stack = Contentstack.Stack("blt8a39c02ae1629e8b", "csf5f45b2a4e67528573ffa0c7", "development");

var app = express();

// load all resouces on /static route from static folder 

app.use('/bc',express.static(__dirname + '/static'));

nunjucks.configure('view', {    
    autoescape: true,
    express: app
});


app.get('/', function(req, res) {

    // data = fetch home from contentstack

    const Query = Stack.ContentType('articles').Entry("blt7fae1a65eccdd27b")
    Query.fetch()
    .then(function success(entry) {
        // console.log(entry.get('title')); 
        console.log('here------------------', entry.toJSON());

        const data = entry.toJSON();


        res.render('sample.html', data);
    }, function error(err) {
        console.log('err------------------', err);
    });


});

app.get('/about', function(req, res) {

        // data = fetch aboutus from contentstack
        const Query = Stack.ContentType('about').Entry("blt12916317b0fca556")
        Query.fetch()
        .then(function success(entry) {
            // console.log(entry.get('title')); 
            console.log('here------------------', entry.toJSON());

            const data = entry.toJSON();


        res.render('about.html', data);
    }, function error(err) {
        console.log('err------------------', err);
    });
});

app.get('/contact', function(req, res) {

    // data = fetch aboutus from contentstack
    const Query = Stack.ContentType('contact_us').Entry("blte56b76d1e179d185")
    Query.fetch()
    .then(function success(entry) {
        // console.log(entry.get('title')); 
        console.log('here------------------', entry.toJSON());

        const data = entry.toJSON();


        res.render('contact.html', data);
    }, function error(err) {
        console.log('err------------------', err);
    });
});


const PORT = process.env.PORT || 3000
app.listen(PORT, err =>{
   if(err) throw err
    console.log("app started on", PORT);
});



