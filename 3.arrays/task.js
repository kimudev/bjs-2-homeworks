function compareArrays(arr1, arr2) {
    return arr1.every((element, index) => element === arr2[index] && arr1.length === arr2.length);
};

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, age, index, arr) => {
        acc += age;
        if (index === arr.length - 1) {
            return acc / arr.length;
        };
        return acc;
    }, 0);
    return result;
};

// function getUsersNamesInAgeRange(users, gender) {
//     return users.filter(user => user.gender === gender).map(user => user.age).
//     reduce((average, userAge, index, array) => average + userAge / array.length, 0);
// };