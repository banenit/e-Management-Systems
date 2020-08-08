// 
var express=require('express');
var app=express();
var cors = require('cors')

app.use(cors());


app.listen(3000);
console.log('API is running on port 3000');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


app.post('/Students', (req, res) => {
  if (req.body._id == '')
      insertRecord(req, res);
      else
      updateRecord(req, res);
});

app.get('/Students', function(req, res) { 
  console.log("Students");
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("College");
  dbo.collection("Students").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
      res.send(result);
    db.close();
  });
});

  res.status(200);

})


app.get('/Grades', function(req, res) { 
  console.log("Grades");
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("College");
  dbo.collection("Grades").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
      res.send(result);
    db.close();
  });
});

  res.status(200);

})

app.get('/Students/Stage/:term', function(req, res) { 
  console.log("Students Stage");
  var stageID=req.params["term"] ;
   var query = { "Stage" :parseInt(stageID)};


  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("College");
  dbo.collection("Students").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(query);
    console.log(result);
      res.send(result);
    db.close();
  });
});

  res.status(200);

})

app.get('/Students/:term', function(req, res) { 
  console.log("Show a Student");
  var StudentID=req.params["term"] ;
   var query = { "id" :parseInt(StudentID)};


  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("College");
  dbo.collection("Students").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(query);
    console.log(result);
      res.send(result);
    db.close();
  });
});

  res.status(200);

})

 