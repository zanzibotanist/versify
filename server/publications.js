Meteor.publish('posts', function() {
  return Posts.find();
});

// Where book, chapter, and verse are the same, publish only the content with the highest vote score.
