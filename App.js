const express=require('express');
const hbs=require('handlebars');
const sessionstorage=require('sessionstorage');
const cors=require('cors');
const path=require('path');
require('dotenv').config();
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');
const webpush=require('web-push');
const mongoose=require('mongoose');
const { static } = require('express');
const app=express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true})); 



app.set('view engine','hbs');

app.use(express.static(path.join(__dirname+'/public')));


const port=process.env.PORT||8000;
const url=process.env.DATABASE_API_KEY;



mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false})
.then(()=>{console.log(`Database connected successfuly`)})
.catch((err)=>{console.log(`Error: ${err}`)})


app.listen(port,()=>console.log(`Server started on port ${port}`))





const indexRoutes=require("./routes/index");
const loginRoutes=require("./routes/login");
const registerRoutes=require("./routes/register");


const contactRoutes=require("./routes/contacts");
const locationRoutes=require("./routes/location");
const forgotPasswordRoutes=require("./routes/forgotPassword");
const logoutRoutes=require("./routes/logoutRoutes");
const notificationRoutes=require("./routes/notification")


app.use('/',indexRoutes);
app.use('/login',loginRoutes);
app.use('/register',registerRoutes);
app.use('/user/forgotPassword',forgotPasswordRoutes);
app.use('/user/notify',notificationRoutes);

app.use('/user/logout',logoutRoutes);
app.use('/user/contacts',contactRoutes);
app.use('/user/location',locationRoutes);




