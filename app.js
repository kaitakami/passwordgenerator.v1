let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\"", ":", ";", ".", ">", "<", ",", "/", "?", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(chars.length)
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let passwordThree = document.getElementById("password-three")
let passwordFour = document.getElementById("password-four")

function passwordGenerator() {
    let passwordResultOne = "";
    for (i = 0; i < 16; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
        passwordResultOne += chars[randomNumber]
        passwordOne.textContent = passwordResultOne;
    }

    let passwordResultTwo = "";
    for (i = 0; i < 16; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
        passwordResultTwo += chars[randomNumber]
        passwordTwo.textContent = passwordResultTwo;
    }

    let passwordResultThree = "";
    for (i = 0; i < 16; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
        passwordResultThree += chars[randomNumber]
        passwordThree.textContent = passwordResultThree;
    }

    let passwordResultFour = "";
    for (i = 0; i < 16; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
        passwordResultFour += chars[randomNumber]
        passwordFour.textContent = passwordResultFour;
    }
}

const copyPasswordOne = document.querySelector(".copyOne");
const copyPasswordTwo = document.querySelector(".copyTwo");
const copyPasswordThree = document.querySelector(".copyThree");
const copyPasswordFour = document.querySelector(".copyFour");

copyPasswordOne.onclick = function() {
    document.execCommand("copy");
}

copyPasswordOne.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", copyPasswordOne.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});


copyPasswordTwo.onclick = function() {
    document.execCommand("copy");
}

copyPasswordTwo.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", copyPasswordTwo.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});


copyPasswordThree.onclick = function() {
    document.execCommand("copy");
}

copyPasswordThree.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", copyPasswordThree.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});

copyPasswordFour.onclick = function() {
    document.execCommand("copy");
}

copyPasswordFour.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", copyPasswordFour.textContent);
        console.log(event.clipboardData.getData("text"))
    }
});