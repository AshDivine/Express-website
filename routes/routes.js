// load all resouces on /static route from static folder 
const express = require('express')
var app = express();

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

