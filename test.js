// function compareArrays(arr1, arr2) {
//     return arr1.every((element, index) => element === arr2[index] && arr1.length === arr2.length);
// };

// console.log(compareArrays([1, 2, 3], [1, 2, 3])); // true
// console.log(compareArrays([1, 2], [1, 2, 3])); // false
// console.log(compareArrays([1, 2, 3], [3, 2, 1])); // false
// console.log(compareArrays([0, 1, 2], [0, 1])); // false
// console.log(compareArrays([0, 1], [0, 1, 2])); // false
// console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false


// const users = [
//     {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
//     {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
//     {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
//     {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
//     {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
//     {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
//     {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
//     {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
//     {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
//     {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
//     {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
//     {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
//     {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
//     {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
//   ]

// function getUsersNamesInAgeRange(users, gender) {
//     let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, age, index, arr) => {
//         acc += age;
//         if (index === arr.length - 1) {
//             return acc / arr.length;
//         };
//         return acc;
//     }, 0);
//     return result;
// };

// function getUsersNamesInAgeRange(users, gender) {
//     return users.filter(user => user.gender === gender).map(user => user.age).
//     reduce((average, userAge, index, array) => average + userAge / array.length, 0);
// };

// console.log(getUsersNamesInAgeRange(users, "мужской")); // 32
// console.log(getUsersNamesInAgeRange(users, "женский")); // 27.4
// console.log(getUsersNamesInAgeRange([], "мужской")); // 0
// console.log(getUsersNamesInAgeRange(users, "инопланетянин")); // 0


// ФУНКЦИЯ КОНСТРУКТОР:
function Car(engine) {
    this.engine = engine;
};

// Чтобы создать объект нашей функции - необходимо использовать ключевое слово new:
new Car('V8');


console.log(new Car('V8'));