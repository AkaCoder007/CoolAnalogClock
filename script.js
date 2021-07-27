function setDate() {
    const now = new Date();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const hour = now.getHours();
    //  console.log(minutes);
    //  let secondsAngle = 90 + seconds * 6;
    console.log(seconds);
    rotater(seconds, secondHand);
    rotater(minutes, minuteHand);
    rotater(hour, hourHand);
    //  secondHand.style.transform = `rotate(${secondsAngle}deg)`;

}

function rotater(hand, arrows) {
    let handsAngle = 90 + hand * 6;
    arrows.style.transform = `rotate(${handsAngle}deg)`;
}
const secondHand = document.querySelector(".secondHand");
const minuteHand = document.querySelector(".minuteHand");
const hourHand = document.querySelector(".hourHand");
setInterval(setDate, 1000);

///////toggle style //

const themeChanger = document.querySelector(".colortheme button");

themeChanger.addEventListener("click", function() {

    document.querySelector("html").classList.toggle("lightmode");
    const hand = document.querySelectorAll(".hand");
    hand[1].classList.toggle("handstyle");
    hand[2].classList.toggle("handstyle");
    themeChanger.classList.toggle("buttonStyle");



});
console.log(themeChanger);