const User = require('./User');
const Project = require('./SavedNews');

User.hasMany(SavedNews, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

SavedNews.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, SavedNews };
