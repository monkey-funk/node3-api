//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err,db){
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b782f93fe1124cd216a9db5')
    // }).toArray().then(function(docs){
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined,2));
    // }, function(err){
    //     console.log('Unable to fetch', err);
    // });
    db.collection('Users').find({
        name: 'Benny Oneill'
    }).count().then(function(count){
        console.log(`users count: ${count}` );
    }, function(err){
        console.log('Unable to fetch', err);
    });
    //db.close();
});