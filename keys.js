/*
Upon latest inspection, it appears my keys have expired and no longer work.  I
plan to revisit this homework post bootcamp and recreatee it from scratch. Reflecting
back on this assignment, I got really stumped and frustrated, and struggled to 
complete it.

*/




console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
