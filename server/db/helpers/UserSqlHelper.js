var db = require('../dbconnection');

var UserSqlHelper = {

    getAllUsers: function (callback) {

        return db.query("Select * from users", callback);

    },
    getUserById: function (id, callback) {

        return db.query("select * from users where Id=?", [id], callback);
    },
    addUser: function (user, callback) {
        return db.query("Insert into users(FirstName,LastName,RoleId) values(?,?,?)", [
            user.firstName, user.lastName, user.roleId
        ], callback);
    },
    deleteUser: function (id, callback) {
        return db.query("delete from users where Id=?", [id], callback);
    },
    updateUser: function (id, user, callback) {
        return db.query("update task set FirstName=?,LastName=? where Id=?", [
            user.FirstName, user.LastName, id
        ], callback);
    }

};
module.exports = UserSqlHelper;