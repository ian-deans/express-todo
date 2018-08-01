const router = require('express').Router();

router.use('/', require('./html'))
router.use('/task_lists', require('./taskLists'))

module.exports = router