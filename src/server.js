var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
var mongoose = require('mongoose');
var http=require('http');
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:true});

mongoose.connect('mongodb://localhost/wt1',{ useNewUrlParser: true });
console.log("connected to mongodb....");

var Schema = new mongoose.Schema({
  name : String,
  add : String,
	ph : String,
  email : String,
  cli : Number
});

var cust = mongoose.model('customer',Schema);
console.log("Loaded Schema....");

app.get('/',function(req, res) {
    res.sendFile(__dirname+'/welcome.html');

});

app.get('/feedback',function(req, res) {
    res.sendFile(__dirname+'/feedback.html');

});

app.get('/admin',function(req, res) {
  res.sendFile(__dirname+'/admin.html');

});

app.post('/cliview',function(req, res) {
  res.sendFile(__dirname+'/cliview.html');

});

app.get('/cliview.css',function(req, res) {
  res.sendFile(__dirname+'/cliview.css');

});

app.get('/admin.css',function(req, res) {
  res.sendFile(__dirname+'/admin.css');

});

app.get('/welcome.css',function(req, res) {
  res.sendFile(__dirname+'/welcome.css');

});

app.get('/feedback.css',function(req, res) {
  res.sendFile(__dirname+'/feedback.css');

});

app.get('/hotel1.jpg',function(req, res) {
  res.sendFile(__dirname+'/hotel1.jpg');

});

app.get('/rock.jpg',function(req, res) {
  res.sendFile(__dirname+'/rock.jpg');

});

app.get('/hotel2.jpg',function(req, res) {
  res.sendFile(__dirname+'/hotel2.jpg');

});

app.get('/cli.jpg',function(req, res) {
  res.sendFile(__dirname+'/cli.jpg');

});

app.get('/c1.jpg',function(req, res) {
  res.sendFile(__dirname+'/c1.jpg');

});

app.get('/c2.jpg',function(req, res) {
  res.sendFile(__dirname+'/c2.jpg');

});

app.get('/c3.jpg',function(req, res) {
  res.sendFile(__dirname+'/c3.jpg');

});

app.get('/c4.jpg',function(req, res) {
  res.sendFile(__dirname+'/c4.jpg');

});

app.get('/c5.jpg',function(req, res) {
  res.sendFile(__dirname+'/c5.jpg');

});


app.post('/fetch', urlencodedParser, function (req, res){
  MongoClient.connect(url, function(err, client)  {
    var gcli1 = req.body.gcli;
    var cli="";
    if (err) throw err;
    var db = client.db('wt1');
    var i;
    if(gcli1==0){
    db.collection("customers").find({ cli: {$gt: 0} }).sort({cli:-1}).toArray(function(err, results) {
    var rr="<html>";
    rr = rr +"<body>";
    rr = rr +"<h1>CLI Results:</h1><br>";
    rr = rr +"<h3>Here are the most loyal customers for given cli:"+gcli1+"</h3>"
    rr = rr +"<table border='2px black solid' border-collapse='collapse'>";
    rr = rr +"<tr>";
    rr = rr+"<th>"+"Name"+"</th>";
    rr = rr+"<th>"+"Address"+"</th>";
    rr = rr+"<th>"+"Phone No."+"</th>";
    rr = rr+"<th>"+"Email"+"</th>";
    rr = rr+"<th>"+"CLI"+"</th>";
    rr = rr+"<th>"+"Discount Coupons"+"</th>"
    rr = rr+"</tr>";
    for ( i=0; i<results.length; i++)
    {
      rr=rr+"<tr>";
      rr=rr+"<td>"+results[i].name+"</td>";
      rr=rr+"<td>"+results[i].add+"</td>";
      rr=rr+"<td>"+results[i].ph+"</td>";
      rr=rr+"<td>"+results[i].email+"</td>";
      rr=rr+"<td>"+results[i].cli+"</td>";
      rr=rr+"<td><button onclick='send()'>Send</button></td>"
      rr=rr+"</tr>";
     //rr = rr+ "Name:" + results[i].name + "<br>"; 
     //rr = rr+ "Address:" + results[i].add + "<br>"; 
     //rr = rr+ "Phone No.:" + results[i].ph + "<br>"; 
     //rr = rr+ "Email:" + results[i].email + "<br>"; 
     //rr = rr+ "CLI:" + results[i].cli + "<br>"; 
     //rr = rr+ "----------------------------------------<br>"; 
    }
    //console.dir(results.name);
    rr = rr +"</table>";
    rr = rr +"<script type='text/javascript'>"
    rr = rr +"function send(){"
    rr = rr +"alert('Coupon sent to customer succesfully');}"
    rr = rr +"</script>"
    rr = rr + "</body>";
    res.send(rr);
    client.close();
    
   });
  }

  if(gcli1==1){
    db.collection("customers").find({ cli: {$gt: 1} }).sort({cli:-1}).toArray(function(err, results) {
    var rr="<html>";
    rr = rr +"<body>";
    rr = rr +"<h3>Here are the most loyal customers for given cli:"+gcli1+"</h3>"
    rr = rr +"<table border='2px black solid' border-collapse='collapse'>";
    rr = rr +"<tr>";
    rr = rr+"<th>"+"Name"+"</th>";
    rr = rr+"<th>"+"Address"+"</th>";
    rr = rr+"<th>"+"Phone No."+"</th>";
    rr = rr+"<th>"+"Email"+"</th>";
    rr = rr+"<th>"+"CLI"+"</th>";
    rr = rr+"<th>"+"Discount Coupons"+"</th>"
    rr = rr+"</tr>";
    for ( i=0; i<results.length; i++)
    {
      rr=rr+"<tr>";
      rr=rr+"<td>"+results[i].name+"</td>";
      rr=rr+"<td>"+results[i].add+"</td>";
      rr=rr+"<td>"+results[i].ph+"</td>";
      rr=rr+"<td>"+results[i].email+"</td>";
      rr=rr+"<td>"+results[i].cli+"</td>";
      rr=rr+"<td><button onclick='send()'>Send</button></td>"
      rr=rr+"</tr>";
     //rr = rr+ "Name:" + results[i].name + "<br>"; 
     //rr = rr+ "Address:" + results[i].add + "<br>"; 
     //rr = rr+ "Phone No.:" + results[i].ph + "<br>"; 
     //rr = rr+ "Email:" + results[i].email + "<br>"; 
     //rr = rr+ "CLI:" + results[i].cli + "<br>"; 
     //rr = rr+ "----------------------------------------<br>"; 
    }
    //console.dir(results.name);
    rr = rr +"</table>";
    rr = rr +"<script type='text/javascript'>"
    rr = rr +"function send(){"
    rr = rr +"alert('Coupon sent to customer succesfully');}"
    rr = rr +"</script>"
    rr = rr + "</body>";
    res.send(rr);
    client.close();
    
   });
  }

  if(gcli1==2){
    db.collection("customers").find({ cli: {$gt: 2} }).sort({cli:-1}).toArray(function(err, results) {
    var rr="<html>";
    rr = rr +"<body>";
    rr = rr +"<h3>Here are the most loyal customers for given cli:"+gcli1+"</h3>"
    rr = rr +"<table border='2px black solid' border-collapse='collapse'>";
    rr = rr +"<tr>";
    rr = rr+"<th>"+"Name"+"</th>";
    rr = rr+"<th>"+"Address"+"</th>";
    rr = rr+"<th>"+"Phone No."+"</th>";
    rr = rr+"<th>"+"Email"+"</th>";
    rr = rr+"<th>"+"CLI"+"</th>";
    rr = rr+"<th>"+"Discount Coupons"+"</th>"
    rr = rr+"</tr>";
    for ( i=0; i<results.length; i++)
    {
      rr=rr+"<tr>";
      rr=rr+"<td>"+results[i].name+"</td>";
      rr=rr+"<td>"+results[i].add+"</td>";
      rr=rr+"<td>"+results[i].ph+"</td>";
      rr=rr+"<td>"+results[i].email+"</td>";
      rr=rr+"<td>"+results[i].cli+"</td>";
      rr=rr+"<td><button onclick='send()'>Send</button></td>"
      rr=rr+"</tr>";
     //rr = rr+ "Name:" + results[i].name + "<br>"; 
     //rr = rr+ "Address:" + results[i].add + "<br>"; 
     //rr = rr+ "Phone No.:" + results[i].ph + "<br>"; 
     //rr = rr+ "Email:" + results[i].email + "<br>"; 
     //rr = rr+ "CLI:" + results[i].cli + "<br>"; 
     //rr = rr+ "----------------------------------------<br>"; 
    }
    //console.dir(results.name);
    rr = rr +"</table>";
    rr = rr +"<script type='text/javascript'>"
    rr = rr +"function send(){"
    rr = rr +"alert('Coupon sent to customer succesfully');}"
    rr = rr +"</script>"
    rr = rr + "</body>";
    res.send(rr);
    client.close();
    
   });
  }

  if(gcli1==3){
    db.collection("customers").find({ cli: {$gt: 3} }).sort({cli:-1}).toArray(function(err, results) {
    var rr="<html>";
    rr = rr +"<body>";
    rr = rr +"<h3>Here are the most loyal customers for given cli:"+gcli1+"</h3>"
    rr = rr +"<table border='2px black solid' border-collapse='collapse'>";
    rr = rr +"<tr>";
    rr = rr+"<th>"+"Name"+"</th>";
    rr = rr+"<th>"+"Address"+"</th>";
    rr = rr+"<th>"+"Phone No."+"</th>";
    rr = rr+"<th>"+"Email"+"</th>";
    rr = rr+"<th>"+"CLI"+"</th>";
    rr = rr+"<th>"+"Discount Coupons"+"</th>"
    rr = rr+"</tr>";
    for ( i=0; i<results.length; i++)
    {
      rr=rr+"<tr>";
      rr=rr+"<td>"+results[i].name+"</td>";
      rr=rr+"<td>"+results[i].add+"</td>";
      rr=rr+"<td>"+results[i].ph+"</td>";
      rr=rr+"<td>"+results[i].email+"</td>";
      rr=rr+"<td>"+results[i].cli+"</td>";
      rr=rr+"<td><button onclick='send()'>Send</button></td>"
      rr=rr+"</tr>";
     //rr = rr+ "Name:" + results[i].name + "<br>"; 
     //rr = rr+ "Address:" + results[i].add + "<br>"; 
     //rr = rr+ "Phone No.:" + results[i].ph + "<br>"; 
     //rr = rr+ "Email:" + results[i].email + "<br>"; 
     //rr = rr+ "CLI:" + results[i].cli + "<br>"; 
     //rr = rr+ "----------------------------------------<br>"; 
    }
    //console.dir(results.name);
    rr = rr +"</table>";
    rr = rr +"<script type='text/javascript'>"
    rr = rr +"function send(){"
    rr = rr +"alert('Coupon sent to customer succesfully');}"
    rr = rr +"</script>"
    rr = rr + "</body>";
    res.send(rr);
    client.close();
    
   });
  }

  if(gcli1==4){
    db.collection("customers").find({ cli: {$gt: 4} }).sort({cli:-1}).toArray(function(err, results) {
    var rr="<html>";
    rr = rr +"<body>";
    rr = rr +"<h3>Here are the most loyal customers for given cli:"+gcli1+"</h3>"
    rr = rr +"<table border='2px black solid' border-collapse='collapse'>";
    rr = rr +"<tr>";
    rr = rr+"<th>"+"Name"+"</th>";
    rr = rr+"<th>"+"Address"+"</th>";
    rr = rr+"<th>"+"Phone No."+"</th>";
    rr = rr+"<th>"+"Email"+"</th>";
    rr = rr+"<th>"+"CLI"+"</th>";
    rr = rr+"<th>"+"Discount Coupons"+"</th>"
    rr = rr+"</tr>";
    for ( i=0; i<results.length; i++)
    {
      rr=rr+"<tr>";
      rr=rr+"<td>"+results[i].name+"</td>";
      rr=rr+"<td>"+results[i].add+"</td>";
      rr=rr+"<td>"+results[i].ph+"</td>";
      rr=rr+"<td>"+results[i].email+"</td>";
      rr=rr+"<td>"+results[i].cli+"</td>";
      rr=rr+"<td><button onclick='send()'>Send</button></td>"
      rr=rr+"</tr>";
     //rr = rr+ "Name:" + results[i].name + "<br>"; 
     //rr = rr+ "Address:" + results[i].add + "<br>"; 
     //rr = rr+ "Phone No.:" + results[i].ph + "<br>"; 
     //rr = rr+ "Email:" + results[i].email + "<br>"; 
     //rr = rr+ "CLI:" + results[i].cli + "<br>"; 
     //rr = rr+ "----------------------------------------<br>"; 
    }
    //console.dir(results.name);
    rr = rr +"</table>";
    rr = rr +"<script type='text/javascript'>"
    rr = rr +"function send(){"
    rr = rr +"alert('Coupon sent to customer succesfully');}"
    rr = rr +"</script>"
    rr = rr + "</body>";
    res.send(rr);
    client.close();
    
   });
  }

  if(gcli1==5){
    db.collection("customers").find({ cli: {$gt: 5} }).sort({cli:-1}).toArray(function(err, results) {
    var rr="<html>";
    rr = rr +"<body>";
    rr = rr +"<h3>Here are the most loyal customers for given cli:"+gcli1+"</h3>"
    rr = rr +"<table border='2px black solid' border-collapse='collapse'>";
    rr = rr +"<tr>";
    rr = rr+"<th>"+"Name"+"</th>";
    rr = rr+"<th>"+"Address"+"</th>";
    rr = rr+"<th>"+"Phone No."+"</th>";
    rr = rr+"<th>"+"Email"+"</th>";
    rr = rr+"<th>"+"CLI"+"</th>";
    rr = rr+"<th>"+"Discount Coupons"+"</th>"
    rr = rr+"</tr>";
    for ( i=0; i<results.length; i++)
    {
      rr=rr+"<tr>";
      rr=rr+"<td>"+results[i].name+"</td>";
      rr=rr+"<td>"+results[i].add+"</td>";
      rr=rr+"<td>"+results[i].ph+"</td>";
      rr=rr+"<td>"+results[i].email+"</td>";
      rr=rr+"<td>"+results[i].cli+"</td>";
      rr=rr+"<td><button onclick='send()'>Send</button></td>"
      rr=rr+"</tr>";
     //rr = rr+ "Name:" + results[i].name + "<br>"; 
     //rr = rr+ "Address:" + results[i].add + "<br>"; 
     //rr = rr+ "Phone No.:" + results[i].ph + "<br>"; 
     //rr = rr+ "Email:" + results[i].email + "<br>"; 
     //rr = rr+ "CLI:" + results[i].cli + "<br>"; 
     //rr = rr+ "----------------------------------------<br>"; 
    }
    //console.dir(results.name);
    rr = rr +"</table>";
    rr = rr +"<script type='text/javascript'>"
    rr = rr +"function send(){"
    rr = rr +"alert('Coupon sent to customer succesfully');}"
    rr = rr +"</script>"
    rr = rr + "</body>";
    res.send(rr);
    client.close();
    
   });
  }

  if(gcli1==6){
    db.collection("customers").find({ cli: {$gt: 6} }).sort({cli:-1}).toArray(function(err, results) {
    var rr="<html>";
    rr = rr +"<body>";
    rr = rr +"<h3>Here are the most loyal customers for given cli:"+gcli1+"</h3>"
    rr = rr +"<table border='2px black solid' border-collapse='collapse'>";
    rr = rr +"<tr>";
    rr = rr+"<th>"+"Name"+"</th>";
    rr = rr+"<th>"+"Address"+"</th>";
    rr = rr+"<th>"+"Phone No."+"</th>";
    rr = rr+"<th>"+"Email"+"</th>";
    rr = rr+"<th>"+"CLI"+"</th>";
    rr = rr+"<th>"+"Discount Coupons"+"</th>"
    rr = rr+"</tr>";
    for ( i=0; i<results.length; i++)
    {
      rr=rr+"<tr>";
      rr=rr+"<td>"+results[i].name+"</td>";
      rr=rr+"<td>"+results[i].add+"</td>";
      rr=rr+"<td>"+results[i].ph+"</td>";
      rr=rr+"<td>"+results[i].email+"</td>";
      rr=rr+"<td>"+results[i].cli+"</td>";
      rr=rr+"<td><button onclick='send()'>Send</button></td>"
      rr=rr+"</tr>";
     //rr = rr+ "Name:" + results[i].name + "<br>"; 
     //rr = rr+ "Address:" + results[i].add + "<br>"; 
     //rr = rr+ "Phone No.:" + results[i].ph + "<br>"; 
     //rr = rr+ "Email:" + results[i].email + "<br>"; 
     //rr = rr+ "CLI:" + results[i].cli + "<br>"; 
     //rr = rr+ "----------------------------------------<br>"; 
    }
    //console.dir(results.name);
    rr = rr +"</table>";
    rr = rr +"<script type='text/javascript'>"
    rr = rr +"function send(){"
    rr = rr +"alert('Coupon sent to customer succesfully');}"
    rr = rr +"</script>"
    rr = rr + "</body>";
    res.send(rr);
    client.close();
    
   });
  }

  if(gcli1==7){
    db.collection("customers").find({ cli: {$gt: 7} }).sort({cli:-1}).toArray(function(err, results) {
    var rr="<html>";
    rr = rr +"<body>";
    rr = rr +"<h3>Here are the most loyal customers for given cli:"+gcli1+"</h3>"
    rr = rr +"<table border='2px black solid' border-collapse='collapse'>";
    rr = rr +"<tr>";
    rr = rr+"<th>"+"Name"+"</th>";
    rr = rr+"<th>"+"Address"+"</th>";
    rr = rr+"<th>"+"Phone No."+"</th>";
    rr = rr+"<th>"+"Email"+"</th>";
    rr = rr+"<th>"+"CLI"+"</th>";
    rr = rr+"<th>"+"Discount Coupons"+"</th>"
    rr = rr+"</tr>";
    for ( i=0; i<results.length; i++)
    {
      rr=rr+"<tr>";
      rr=rr+"<td>"+results[i].name+"</td>";
      rr=rr+"<td>"+results[i].add+"</td>";
      rr=rr+"<td>"+results[i].ph+"</td>";
      rr=rr+"<td>"+results[i].email+"</td>";
      rr=rr+"<td>"+results[i].cli+"</td>";
      rr=rr+"<td><button onclick='send()'>Send</button></td>"
      rr=rr+"</tr>";
     //rr = rr+ "Name:" + results[i].name + "<br>"; 
     //rr = rr+ "Address:" + results[i].add + "<br>"; 
     //rr = rr+ "Phone No.:" + results[i].ph + "<br>"; 
     //rr = rr+ "Email:" + results[i].email + "<br>"; 
     //rr = rr+ "CLI:" + results[i].cli + "<br>"; 
     //rr = rr+ "----------------------------------------<br>"; 
    }
    //console.dir(results.name);
    rr = rr +"</table>";
    rr = rr +"<script type='text/javascript'>"
    rr = rr +"function send(){"
    rr = rr +"alert('Coupon sent to customer succesfully');}"
    rr = rr +"</script>"
    rr = rr + "</body>";
    res.send(rr);
    client.close();
    
   });
  }

  if(gcli1==8){
    db.collection("customers").find({ cli: {$gt: 8} }).sort({cli:-1}).toArray(function(err, results) {
    var rr="<html>";
    rr = rr +"<body>";
    rr = rr +"<h3>Here are the most loyal customers for given cli:"+gcli1+"</h3>"
    rr = rr +"<table border='2px black solid' border-collapse='collapse'>";
    rr = rr +"<tr>";
    rr = rr+"<th>"+"Name"+"</th>";
    rr = rr+"<th>"+"Address"+"</th>";
    rr = rr+"<th>"+"Phone No."+"</th>";
    rr = rr+"<th>"+"Email"+"</th>";
    rr = rr+"<th>"+"CLI"+"</th>";
    rr = rr+"<th>"+"Discount Coupons"+"</th>"
    rr = rr+"</tr>";
    for ( i=0; i<results.length; i++)
    {
      rr=rr+"<tr>";
      rr=rr+"<td>"+results[i].name+"</td>";
      rr=rr+"<td>"+results[i].add+"</td>";
      rr=rr+"<td>"+results[i].ph+"</td>";
      rr=rr+"<td>"+results[i].email+"</td>";
      rr=rr+"<td>"+results[i].cli+"</td>";
      rr=rr+"<td><button onclick='send()'>Send</button></td>"
      rr=rr+"</tr>";
     //rr = rr+ "Name:" + results[i].name + "<br>"; 
     //rr = rr+ "Address:" + results[i].add + "<br>"; 
     //rr = rr+ "Phone No.:" + results[i].ph + "<br>"; 
     //rr = rr+ "Email:" + results[i].email + "<br>"; 
     //rr = rr+ "CLI:" + results[i].cli + "<br>"; 
     //rr = rr+ "----------------------------------------<br>"; 
    }
    //console.dir(results.name);
    rr = rr +"</table>";
    rr = rr +"<script type='text/javascript'>"
    rr = rr +"function send(){"
    rr = rr +"alert('Coupon sent to customer succesfully');}"
    rr = rr +"</script>"
    rr = rr + "</body>";
    res.send(rr);
    client.close();
    
   });
  }
  if(gcli1==9){
    db.collection("customers").find({ cli: {$gt: 9} }).sort({cli:-1}).toArray(function(err, results) {
    var rr="<html>";
    rr = rr +"<body>";
    rr = rr +"<h3>Here are the most loyal customers for given cli:"+gcli1+"</h3>"
    rr = rr +"<table border='2px black solid' border-collapse='collapse'>";
    rr = rr +"<tr>";
    rr = rr+"<th>"+"Name"+"</th>";
    rr = rr+"<th>"+"Address"+"</th>";
    rr = rr+"<th>"+"Phone No."+"</th>";
    rr = rr+"<th>"+"Email"+"</th>";
    rr = rr+"<th>"+"CLI"+"</th>";
    rr = rr+"<th>"+"Discount Coupons"+"</th>"
    rr = rr+"</tr>";
    for ( i=0; i<results.length; i++)
    {
      rr=rr+"<tr>";
      rr=rr+"<td>"+results[i].name+"</td>";
      rr=rr+"<td>"+results[i].add+"</td>";
      rr=rr+"<td>"+results[i].ph+"</td>";
      rr=rr+"<td>"+results[i].email+"</td>";
      rr=rr+"<td>"+results[i].cli+"</td>";
      rr=rr+"<td><button onclick='send()'>Send</button></td>"
      rr=rr+"</tr>";
     //rr = rr+ "Name:" + results[i].name + "<br>"; 
     //rr = rr+ "Address:" + results[i].add + "<br>"; 
     //rr = rr+ "Phone No.:" + results[i].ph + "<br>"; 
     //rr = rr+ "Email:" + results[i].email + "<br>"; 
     //rr = rr+ "CLI:" + results[i].cli + "<br>"; 
     //rr = rr+ "----------------------------------------<br>"; 
    }
    //console.dir(results.name);
    rr = rr +"</table>";
    rr = rr +"<script type='text/javascript'>"
    rr = rr +"function send(){"
    rr = rr +"alert('Coupon sent to customer succesfully');}"
    rr = rr +"</script>"
    rr = rr + "</body>";
    res.send(rr);
    client.close();
    
   });
  }
  });
  })


app.post('/insert', urlencodedParser, function (req, res){
      name = req.body.name;
      add = req.body.add;
      ph = req.body.ph;
      email = req.body.email;
      cli = req.body.cli;
      //var rr="<html>";
      //rr = rr+"<body>";
      //rr = rr+"<h1>Name:"+name;
      //rr = rr+"<br>";
      //rr = rr+"<h1>Address:"+add;
      //rr = rr+"<br>";
      //rr = rr+"<h1>Phone No.:"+ph;
      //rr = rr+"<br>";
      //rr = rr+"<h1>Email:"+email;
      //rr = rr+"<br>";
      //rr = rr+"<h1>CLI:"+cli;

	    new cust({
		    name:req.body.name,
		    add:req.body.add,
        ph:req.body.ph,
        email:req.body.email,
        cli:req.body.cli
	    }).save(function(err,doc){
        if(err)
           res.json(err);
  });
  //rr = rr+"</body>"; 
  //res.send(rr);
     }).listen(9000);