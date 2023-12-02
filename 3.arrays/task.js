// Задача 1. Сравнить массивы
function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((value, index) => {
        console.log(value, arr2[index]);
        return value === arr2[index];
    }
    )
}

// Задача 2. Фильтрация и преобразование массива
function getUsersNamesInAgeRange(users, gender) {
    const filterUsers = users.filter(user => user.gender === gender);
    if (filterUsers.length === 0) {
        return 0
    }

    const age = filterUsers.map(user =>user.age);
    const averageAge = age.reduce((sum, age) => sum + age, 0) / age.length;
    return averageAge
}