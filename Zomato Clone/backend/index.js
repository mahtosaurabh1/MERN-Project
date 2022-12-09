let express=require('express')
let cors=require('cors')
const router = require('./Routes/routes');
require('./db/config')

const app=express();

app.use(cors())
app.use(express.json())

app.use('/',router);



app.listen(5000)