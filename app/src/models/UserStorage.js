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
}

module.exports = UserStorage;