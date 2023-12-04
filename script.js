class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    older (anotherUser) {
        if (this.age > anotherUser.age) {
            return 'older' }
            else if (anotherUser.age > this.age) {
                return 'younger'
            }
            else {
                return 'equal'
            }
    }
}

const user1 = new User('Mario', 'Rossi', 25, 'Roma');
const user2 = new User('Carlo', 'Bianchi', 30, 'Napoli');

const olderCheck = user1.older(user2);
console.log(olderCheck);