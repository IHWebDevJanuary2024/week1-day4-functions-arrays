function sum(numberOne, numberTwo) {
    return numberOne + numberTwo
}

const result1 = sum(20, 20)
const result2 = sum(50, 20)
const result3 = sum(10000, 20)

console.log(`THE FIRST TURTLE IS: ${result1}
THE SECOND TURTLE IS: ${result2}
THE THIRD TURTLE IS: ${result3}
`);

function dittoPower(pokemon) {
    console.log("Now ditto is " + pokemon);
}

// dittoPower("Charmander")

function getUserInfo(firstName, lastName) {
    const userInfo = {
        firstName: firstName,
        lastName: lastName
    };

    return userInfo;
}

const userData = getUserInfo('ana', 'martinez');
const firstName = userData.firstName;
console.log(getUserInfo('Mica', 'Katzman').firstName);
