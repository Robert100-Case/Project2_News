const router = require('express').Router();
const { SavedNews, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  console.log("get all save articles entered");
  try {
    // Get all projects and JOIN with user data
    const searchData = await SavedNews.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const search = searchData.map((search) => search);
    console.log(searchData)
    console.log(req.session.logged_in)
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      search: search, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/stored_search/:id', async (req, res) => {
  try {
    const searchData = await Search.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const search = searchData.get({ plain: true });

    res.render('stored_search', {
      ...search,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/stored_search', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Search }],
    });

    const user = userData.get({ plain: true });

    res.render('stored_search', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/stored_search');
    return;
  }

  res.render('login');
});

module.exports = router;