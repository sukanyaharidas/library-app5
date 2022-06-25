const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const DB = "mongodb+srv://dream:library@cluster0.uq5mq.mongodb.net/test";
mongoose.connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
 console.log("Database Connection Successful")
}).catch((err)=>{
 console.log(err)
})

const bookSchema=new Schema({
    bookName: String,
    author: String,
    imageUrl: String
});

var bookData=mongoose.model('books', bookSchema);
module.exports=bookData;
