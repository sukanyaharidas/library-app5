const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/Library");
const Schema=mongoose.Schema;

const bookSchema=new Schema({
    bookName: String,
    author: String,
    imageUrl: String
});

var bookData=mongoose.model('books', bookSchema);
module.exports=bookData;