const User = require('./User');
const UserAuth = require('./UserAuth');
const Movie = require('./Movie');
const Comment = require('./Comment');
const Rating = require('./Rating');

User.hasMany(Comment);
User.hasMany(Rating);
User.hasOne(UserAuth);

UserAuth.belongsTo(User);

Movie.hasMany(Comment, {
  onDelete: 'CASCADE'
});
Movie.hasMany(Rating, {
  onDelete: 'CASCADE'
});

Comment.belongsTo(User);
Comment.belongsTo(Movie);

Rating.belongsTo(User);
Rating.belongsTo(Movie);