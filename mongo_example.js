"use strict";

const {MongoClient} = require("mongodb");
const MONOGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONOGODB_URI, (err, db) => {

  if (err) {
    console.error(`failed to connect: ${MONOGODB_URI}`);
    throw err;
  }


// ==> we have a connection to the "test-tweets" db,
// starting here

console.log(`connected to the mongodb: ${MONOGODB_URI}`);


function getTweets(callback){

db.collection("tweets").find().toArray(callback);
}

getTweets((err, tweets) => {

if (err) throw err;

console.log("Logging each tweet: ");
for (let tweet of tweets){
  console.log(tweet);
}





// get tweets "find"


// ==> This is inside this callback now. Think about it:
    // This is now the "end of the program", right?.

// ===> at the end, we close the connection:

db.close();
});

});