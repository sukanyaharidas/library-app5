const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const DB = "mongodb+srv://dream:dream@cluster0.uq5mq.mongodb.net/Library?retryWrites=true&w=majority";
mongoose.connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
 console.log("Database Connection Successful")
}).catch((err)=>{
 console.log(err)
})

const authSchema=new Schema({
    fullName: String,
    email: String,
    password: String
});

var authData=mongoose.model('auths', authSchema);
module.exports=authData;
