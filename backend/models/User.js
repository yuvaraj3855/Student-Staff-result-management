const { User } = require('../mysql/util')
async function createUser(userData) {
    try {
        const user = await User.create(userData);
        return user;
    } catch (error) {
        throw error;
    }
}

async function findUserByUsername(username) {
    try {
        const user = await User.findOne({ where: { username } });
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    findUserByUsername,
};
