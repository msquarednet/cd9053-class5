//var mongoose = require("mongoose");
var db = require("./db.js");

var Person = mongoose.model("Person", {
   name: String 
});

mongoose.connect("mongodb://localhost/my_world");

mongoose.connection.once("open", function() {
    console.log("totally connected!");
    var people = [
        {name:"Alice"},
        {name:"Betty"},
        {name:"Cindy"}
    ];
    Person.remove({}, function() {
        console.log("no people");
        Person.create(people, function(err, _moe, _larry, _curly, _shep) {
            console.log("created 3 people");
            Person.find({_id: _moe._id}, function(err,p) {
                console.log(p);
            });
            Person.update({_id: _moe._id}, {$set: {name: "Moses"}});
            console.log(_moe);
            console.log(_larry);
            console.log(_curly);
            console.log(_shep);
        });
    });
    Person.create({name:"Moe"}, {name:"Curly"});
    
    setTimeout(function() {
        mongoose.disconnect(function() {
            console.log("totally DISconnected!")
        });
    },3000);
});


