const hscore = document.querySelector(".h-score");
const gscore = document.querySelector(".g-score");
const hbtn1 = document.querySelector(".hbtn1");
const hbtn2 = document.querySelector(".hbtn2");
const hbtn3 = document.querySelector(".hbtn3");
const hbtn4 = document.querySelector(".hbtn4");
const gbtn1 = document.querySelector(".gbtn1");
const gbtn2 = document.querySelector(".gbtn2");
const gbtn3 = document.querySelector(".gbtn3");
const gbtn4 = document.querySelector(".gbtn4");
const newBtn = document.querySelector(".new-btn");
const endBtn = document.querySelector(".end-btn");
const homeBG = document.querySelector(".home-bg");
const guestBG = document.querySelector(".guest-bg");
const message = document.querySelector(".mess");
const h_btn = document.querySelectorAll(".h-btn");
const g_btn = document.querySelectorAll(".g-btn");
const addqtr = document.querySelector(".addqtr");
const qtr2 = document.querySelector(".qtr2");
const foul = document.querySelector(".foul");
const foulg = document.querySelector(".foulg");
const quatr = document.querySelector(".quatr");
const quatr1 = document.querySelector(".quatr1");
let period = 0;
let teamFouls = 0;
let teamFoulsg = 0
let isalive = true;
let homeScore = 0;
let guestScore = 0;


let team1 = prompt("NAME OF THE TEAM1:");
let team2 = prompt("NAME OF THE TEAM2:");

document.getElementById("team1").innerHTML = team1;
document.getElementById("team2").innerHTML = team2;



hbtn1.addEventListener("click", function () {
    if (isalive) {
        homeScore += 1;
        hscore.textContent = homeScore;
    }
});
hbtn2.addEventListener("click", function () {
    if (isalive) {
        homeScore += 2;
        hscore.textContent = homeScore;
    }
});
hbtn3.addEventListener("click", function () {
    if (isalive) {
        homeScore += 3;
        hscore.textContent = homeScore;
    }
});
hbtn4.addEventListener("click", function () {
    if (isalive) {
        homeScore -= 1;
        hscore.textContent = homeScore;
    }
});


gbtn1.addEventListener("click", function () {
    if (isalive) {
        guestScore += 1;
        gscore.textContent = guestScore;
    }
});
gbtn2.addEventListener("click", function () {
    if (isalive) {
        guestScore += 2;
        gscore.textContent = guestScore;
    }
});
gbtn3.addEventListener("click", function () {
    if (isalive) {
        guestScore += 3;
        gscore.textContent = guestScore;
    }
});
gbtn4.addEventListener("click", function () {
    if (isalive) {
        guestScore -= 1;
        gscore.textContent = guestScore;
    }
});



endBtn.addEventListener("click", function () {
    if (homeScore > guestScore) {
        guestBG.classList.remove("winner");
        homeBG.classList.add("winner");
        g_btn.forEach((y) => {
            y.style.backgroundColor = "black";
        });
        h_btn.forEach((x) => {
            x.style.backgroundColor = "black";
        });

        message.textContent = team1 + " WINS";
        isalive = false;
    } else if (homeScore === guestScore) {
        guestBG.classList.add("draw");
        g_btn.forEach((y) => {
            y.style.backgroundColor = "black";
        });
        homeBG.classList.add("draw");
        h_btn.forEach((y) => {
            y.style.backgroundColor = "black";
        });
        message.textContent = "MATCH DRAW";
        isalive = false;
    } else {
        homeBG.classList.remove("winner");
        guestBG.classList.add("winner");
        h_btn.forEach((y) => {
            y.style.backgroundColor = "black";
        });
        g_btn.forEach((x) => {
            x.style.backgroundColor = "black";
        });
        message.textContent = team2 + " WINS";
        isalive = false;
    }

});
newBtn.addEventListener("click", function () {
    if (!isalive) {
        message.textContent = "";
        homeScore = 0;
        guestScore = 0;
        period = 0;
        teamFouls = 0;
        teamFoulsg = 0;
        homeBG.classList.remove("winner");
        guestBG.classList.remove("winner");
        h_btn.forEach((y) => {
            y.style.backgroundColor = "black";
        });
        g_btn.forEach((x) => {
            x.style.backgroundColor = "black";
        });
        guestBG.classList.remove("draw");
        homeBG.classList.remove("draw");
        hscore.textContent = homeScore;
        gscore.textContent = guestScore;
        qtr2.textContent = period;
        quatr.textContent = teamFouls;
        quatr1.textContent = teamFoulsg;
    }
    isalive = true;
});

addqtr.addEventListener("click", function () {

    period += 1;
    qtr2.textContent = period;

    if (period == 5) {
        qtr2.textContent = "OT";


    }
    else if (period == 6) {
        qtr2.textContent = "OT2"

    }

});
foul.addEventListener("click", function () {

    teamFouls += 1;
    quatr.textContent = teamFouls;

});
foulg.addEventListener("click", function () {

    teamFoulsg += 1;
    quatr1.textContent = teamFoulsg;

});