const router = require('express').Router();
const utils = require('./utils');
const controller = require('../controllers/taskLists')


const middlewareFunction = (request, response, next) => {
    // A middleware function can be used to perform logic before routes
    console.log('Running middleware function before routes')
    next();
}

router
    .use(utils.timeLog)

    .all('*', middlewareFunction)

    .post('/', controller.create)
    .get('/', controller.getAll)
    .param('id', (req, res, next, id) => {
        // get user by the id
        // let user = await User.find({id: id})
        let taskList = {id: '00AA', tasks: ['1', '2']}
        req.list_data = taskList;
        next();
    })
    .get('/:id', controller.getById)
    .patch('/:id', controller.update)
    .delete('/:id', controller.delete)

module.exports = router