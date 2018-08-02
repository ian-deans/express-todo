
module.exports = {
    create: (request, response, next) => {

    },
    getAll: (request, response, next) => {
        response.json(['all', 'the', 'users'])
    },
    getById:(request, response, next) => {
        if (request.list_data) {
            return response.json(request.list_data)
        }
        response.error = new Error('No user id provided');
        next();
    }, 
    update: (request, response, next) => {

    },
    delete: (request, response, next) => {

    },
}