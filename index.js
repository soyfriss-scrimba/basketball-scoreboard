let scoreHome = 0
let scoreGuest = 0

let scoreHomeEl = document.getElementById("score-home")
let scoreGuestEl = document.getElementById("score-guest")

scoreHomeEl.textContent = scoreHome
scoreGuestEl.textContent = scoreGuest

let sumOneHome = document.getElementById("sum-one-home")
sumOneHome.addEventListener('click', sumOneToHomeScore)

function sumOneToHomeScore() {
    console.log('sumOneToHomeScore()');
    scoreHome += 1;
    scoreHomeEl.textContent = scoreHome
}

function sumTwoToHomeScore() {
    scoreHome += 2;
    scoreHomeEl.textContent = scoreHome
}

function sumThreeToHomeScore() {
    scoreHome += 3;
    scoreHomeEl.textContent = scoreHome
}

function sumOneToGuestScore() {
    scoreGuest += 1;
    scoreGuestEl.textContent = scoreGuest
}

function sumTwoToGuestScore() {
    scoreGuest += 2;
    scoreGuestEl.textContent = scoreGuest
}

function sumThreeToGuestScore() {
    scoreGuest += 3;
    scoreGuestEl.textContent = scoreGuest
}
