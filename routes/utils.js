function timeLog(request, response, next) {
    console.log('Time: ', Date.now())
    next()
}

module.exports = {timeLog}