const router = require('express').Router();
const apiRoutes = require('./api');

// Prefix all routes defined in the api directory with `/api`
router.use('/api', apiRoutes);

// If user enter a route that does not exist, display this message.
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;