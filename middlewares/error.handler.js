function logErrors(err, req, res, next){
    console.log(err);
    res.json({
        message: err.message,
        stack: err.stack
    })
}

module.exports = {logErrors}