const mongoose= require("mongoose");

var mongoURL="mongodb+srv://kuzhali29:Kuzh@li29@cluster0.s25mj6v.mongodb.net/"
mongoose.connect(mongoURL,{useUnifiedTopology : true , useUrlParser: true})

var connection=mongoose.connection

connection.on('error',() =>{
    console.log('mongo db  connection failed')
}
)
connection.on('connected',() =>{
    console.log('mongo db  connection success')
}
)
