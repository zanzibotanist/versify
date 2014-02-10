//Handles Subscriptions and uses layoutTemplate when first loading posts data
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function () {
        return Meteor.subscribe('posts');
    }
});


//this maps URL paths of the form / to the postList template and URL paths of the form /posts/<ID> to the postPage template:
Router.map(function () {
    this.route('postsList', {
        path: '/'
    });

    this.route('postPage', {
        path: '/posts/:_id',
        data: function() { return Posts.findOne(this.params._id); }
    });

    this.route('postSubmit', {
        path: '/submit'
  });
    this.route('versions', {
        path: '/versions/:descriptorID',
        data: function() { return Posts.find(this.params.descriptorID);}
  });

});
