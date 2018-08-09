let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cors = require('cors')

let index = require('./routers/index');
let tasks = require('./routers/tasks');



let app = express();

//View engine
app.set('views', path.join( __dirname,'views'));  
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'client')));

//BP midl
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', index);
app.use('/api', tasks);

let port = 3000;

app.listen(port, function(){
    console.log('Server started ...' + port);
})


