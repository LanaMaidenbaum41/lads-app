//requires
const express = require('express');
const path = require('path');

//Require routes
const userRoutes = require('./server/routes/userRoutes');
const lessonRoutes = require('./server/routes/lessonRoutes');
// const sectionRoutes = require('./server/routes/sectionRoutes');
// const contentRoutes = require('./server/routes/contentRoutes');


//create body parser object
const bodyParser = require('body-parser');


//create new express object
const app = express();




// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
app.use(express.static('./node_modules'));


//use body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Use routes middleware
app.use('/users', userRoutes);
app.use('/lessons', lessonRoutes);
// app.use('/sections', sectionRoutes);
// app.use('/content', contentRoutes);




// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});

