"use strict";

class UserStorage {
    static #users = {
        id: ["logsh", "박성현", "tjdgus"],
        psword: ["1234", "1122", "2211"],
        names: ["에이군", "비군", "씨군"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info, i)  => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    };
}

module.exports = UserStorage;