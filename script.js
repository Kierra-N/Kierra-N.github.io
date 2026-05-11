// Tutorial 9 Requirement: Alert Function
function showAlert() {
    alert("Thanks for visiting the Sims Survey Page!");
}

// Tutorial 9 Requirement: Current Time
function showTime() {
    const now = new Date();

    document.getElementById("time").innerHTML =
        "Current Time: " + now.toLocaleTimeString();
}

setInterval(showTime, 1000);

// Tutorial 9 Requirement: Countdown Timer
let count = 10;

function countdownTimer() {

    document.getElementById("countdown").innerHTML =
        "Next Sim Day Starts In: " + count;

    count--;

    if (count < 0) {
        count = 10;
    }
}

setInterval(countdownTimer, 1000);