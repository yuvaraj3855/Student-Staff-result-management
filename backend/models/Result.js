const { Results } = require('../mysql/util')

function createResult(resultData, callback) {
    Results.create({
        register_id: resultData.register_id,
        subject: resultData.subject,
        score: resultData.score,
        grade: resultData.grade,
    })
        .then(result => {
            callback(null, result);
        })
        .catch(error => {
            callback(error, null);
        });
}

function getAllResults(callback) {
    Results.findAll()
        .then(results => {
            callback(null, results);
        })
        .catch(error => {
            callback(error, null);
        });
}

// Export the model functions
module.exports = {
    createResult,
    getAllResults,
};
