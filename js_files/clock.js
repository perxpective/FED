let secondHand = document.querySelector("#sec");    // Second Hand
let minHand = document.querySelector("#min")    // Minute Hand
let hourHand = document.querySelector("#hr")    // Hour Hand


setInterval(clockRotating, 1000)

function clockRotating() {
    var date = new Date();
    var getSeconds = date.getSeconds() / 60;
    var getMinutes = date.getMinutes() / 60;
    var getHours = date.getHours() / 12

    secondHand.style.transform = "rotate(" + getSeconds * 360 + "deg)"  // Rotate Second Hand
    minHand.style.transform = "rotate(" + getMinutes * 360 + "deg)" // Rotate Minute Hand
    hourHand.style.transform = "rotate(" + getHours * 360 + "deg)"  // Rotate Hour Hand

    // Display Analog Clock
    document.querySelector(".current-day").innerHTML = date.toDateString()
    document.querySelector(".current-seconds").innerHTML = date.getSeconds()

}