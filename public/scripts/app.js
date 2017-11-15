/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {
    console.log( "ready!" );

// function createTweetElement(){






var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function createTweetElement(tweetData){
var header = $('<header>')
       .append(`<img class="avatar" src="${tweetData.user.avatars.regular}">`)
       .append(`<h3 class="username">${tweetData.user.name}</h2>`)
       .append(`<span>${tweetData.user.handle}</span>`);
var paragr = $(`<p>${tweetData.content.text}</p>`);
var icons = $('<div>')
            .append('<i class="fa fa-heart">')
            .append('<i class="fa fa-retweet">')
            .append('<i class="fa fa-flag">');
var footer = $('<footer>')
       .append(`<span>${tweetData.created_at}</span>`)
       .append(icons);


var full = $('<article>').append(header).append(paragr).append(footer);



return full;
}
renderTweets(data);

  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container


function renderTweets(tweets) {
  for(var tweet in tweets) {
    var createdTweet = createTweetElement(tweets[tweet]);
    $('#tweets-container').append(createdTweet);
  }
  return createdTweet;
}











// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.





  });