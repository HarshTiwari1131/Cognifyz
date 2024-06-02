// Change Background Color
document.getElementById("colorButton").addEventListener("click", function () {
    changeContentBackgroundColor();
});

function changeContentBackgroundColor() {
    var content = document.querySelector(".content");
    var randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    content.style.backgroundColor = randomColor;
}

// Calculator
document.getElementById("calculateButton").addEventListener("click", function () {
    calculate();
});

function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var result = num1 + num2;
        document.getElementById("result").textContent = "Result: " + result;
    } else {
        document.getElementById("result").textContent = "Please enter valid numbers.";
    }
}

// greeting
function displayGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    const currentTime = hour + ":" + (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes());
    const message = greeting + "\nCurrent Time: " + currentTime;
    alert(message);
}

displayGreeting();