let scoreHomeEl = document.getElementById("home-score")
let scoreHome = 0

function add1PointHome() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}

function add2PointHome() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

function add3PointHome() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}

let scoreGuestEl = document.getElementById("guest-score")
let scoreGuest = 0

function add1PointGuest() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

function add2PointGuest() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function add3PointGuest() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}

let resetBtn = document.getElementById("reset-btn")

function resetScore() {
    scoreHome = 0
    scoreHomeEl.textContent = scoreHome
    scoreGuest = 0
    scoreGuestEl.textContent = scoreGuest
}