const express=require('express');
const authData=require ('./authdata');
const bookData=require ('./book');
const app=new express();
const cors=require('cors');
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 4400;
const path= require('path');


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// app.use(express.static(__dirname + '/dist/'));
// app.use('/src/assets', express.static(__dirname + '/src/assets/'));

app.use(express.static('./dist/frontend'));


app.get("/*", (req, res)=> {
  res.sendFile(path.join(__dirname + '/dist//frontend/index.html'))})

app.post("/api/signup",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    var data={
        fullName:req.body.users.fullName,
        email:req.body.users.email,
        password:req.body.users.password
    };
    var _auth=new authData(data);
 _auth.save();
});




app.post("/api/login", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
    authData
    .findOne({ email: req.body.email, password: req.body.password },(err,user)=>{
      if(err){
        console.log("There is an error",err)
      }
      else{
        console.log(user)
      }
    })
    .clone()
    .then((user) => {
      if(user !== null){
      let payload = { subject: user.email + user.password };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
      }
      else{
        res.status(401).send('incorrect credentials')
      }
    });
  
  });


  // CRUD operations
  app.post("/api/addbook",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    var bookdata={
        bookName:req.body.data.bookName,
        author:req.body.data.author,
        imageUrl:req.body.data.imageUrl
    };
    var _book=new bookData(bookdata);
 _book.save();
});

  app.get("/api/mybooks", function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");

    bookData.find()
    .then(function(books){
      res.send(books);
    })
  })


  app.delete("/api/delete/:id",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    console.log(req.params.id);
    bookData.findByIdAndDelete(req.params.id).then(()=>{
      console.log('success')
      res.send();
  })
     
    })
    

   

  app.get("/api/:id", function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");


    const id=req.params.id;
    bookData.findOne({"_id":id}).then((_book)=>{
      res.send(_book);
    })
  
  })

  app.put("/api/edit",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");

    id=req.body.book._id;
    bookName=req.body.book.bookName;
    author=req.body.book.author;
    imageUrl=req.body.book.imageUrl;
    bookData.findByIdAndUpdate({"_id":id},
                                {$set:{"bookName":bookName,
                                        "author":author,
                                        "imageUrl":imageUrl }})
      .then(function(){
        res.send();
      })

});


app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
