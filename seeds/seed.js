const sequelize = require('../config/connection');
const { User, SavedNews } = require('../models');

const userData = require('./userData.json');
const searchData = require('./searchData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const savedArticle of searchData) {
    await SavedNews.create({
      ...savedArticle,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
