//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, function(err,result){
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Rachel Oneill',
        age: 27,
        location: 'the couch'
    },function(err, result){
        if(err){
            return console.log('Document not added to Users');
        }
        console.log(result.ops[0]._id.getTimestamp());
    });
    db.close();
});