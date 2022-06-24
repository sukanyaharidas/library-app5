const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/Library");
const Schema=mongoose.Schema;

const authSchema=new Schema({
    fullName: String,
    email: String,
    password: String
});

var authData=mongoose.model('auths', authSchema);
module.exports=authData;