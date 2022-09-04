let homeRes = document.getElementById("home-result");
let guestRes = document.getElementById("guest-result");

// home result
let homeResult = 0;
function homeOnePoint() {
    homeResult += 1;
    homeRes.textContent = homeResult;
}

function homeTwoPoints() {
    homeResult += 2;
    homeRes.textContent = homeResult;
}

function homeThreePoints() {
    homeResult += 3;
    homeRes.textContent = homeResult;
}

// guest result
let guestResult = 0;
function guestOnePoint() {
    guestResult += 1;
    guestRes.textContent = guestResult;
}

function guestTwoPoints() {
    guestResult += 2;
    guestRes.textContent = guestResult;
}

function guestThreePoints() {
    guestResult += 3;
    guestRes.textContent = guestResult;
}

