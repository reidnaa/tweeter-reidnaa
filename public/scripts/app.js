
$( document ).ready(function() {
  console.log( "ready!" );


// compiles tweet sections
  function createTweetElement(tweetData){
    const days = Math.floor((Date.now() - tweetData.created_at)/(1000 * 60 * 60 * 24));
    var header = $('<header>')
           .append(`<img class="avatar" src="${tweetData.user.avatars.regular}">`)
           .append(`<h3 class="username">${tweetData.user.name}</h2>`)
           .append(`<span>${tweetData.user.handle}</span>`);
    var paragr = $(`<p>`).text(`${tweetData.content.text}`);
    var icons = $('<div class="icons" >')
                .append('<i class="fa fa-heart">')
                .append('<i class="fa fa-retweet">')
                .append('<i class="fa fa-flag">');
    var footer = $('<footer>')
           .append(`<span>${days} days ago</span>`)
           .append(icons);

    var full = $('<article>').append(header).append(paragr).append(footer);

    return full;
  }

  // adds tweet to the top of other tweets (prepend)
  function renderTweets(tweets) {
    for(var tweet in tweets) {
      var createdTweet = createTweetElement(tweets[tweet]);
      $('#tweets-container').prepend(createdTweet);
    }
    return createdTweet;
    }


  function loadTweets() {
    $.getJSON('/tweets')
      .done((tweet) => {
        renderTweets(tweet);
      });
  }

  loadTweets();


  // function to take input and submits to DB
  function submitTweets(){
    $('#button').on('click', function(event){
      event.preventDefault();

      const $form = $('.text-input');
      if ($form.serialize().length <= 5) {
        alert(' Please add some content to your post');
        return;
      } else if ($form.serialize().length > 140){
        alert('Sorry but your post has too many characters.');
        return;
      }
      $.ajax({
        method: 'post',
        url:  '/tweets',
        data: $form.serialize()
      })

      .then( function(tweets){
        loadTweets(tweets);
        $form.val('');
        $('.counter').text(140);
        });

      })
  }

  submitTweets();

  // compose button slide functionality
  $( ".compose" ).on('click', function() {
    $( ".new-tweet" ).slideToggle( "slow" ,function(event){
        $('.text-input').focus();
    });
  });

});