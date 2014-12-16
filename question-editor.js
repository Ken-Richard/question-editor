Questions = new Mongo.Collection("questions");

if (Meteor.isClient) {

  Template.body.helpers({
    questions: function () {
      return Questions.find({});
    }
  });

}

if (Meteor.isServer) {

  Meteor.startup(function () {
    if (Questions.find().count() === 0) {
      var data = {};
      data = JSON.parse(Assets.getText("questions.json"));
      _.each(data, function (document) {
        Questions.insert(document);
      });
    }
  });

}
