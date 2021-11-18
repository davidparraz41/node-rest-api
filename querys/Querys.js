const findUserByEmail = 'SELECT * FROM user_app WHERE email = $1';

const findAllUsers = 'SELECT * FROM user_app';


const query = {
    findUserByEmail,
    findAllUsers
}

module.exports = query;
