
// loader*****************************

var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
   this.setTimeout(function(){
    loader.style.display ="none";
   },3000)
});


// cursur*********************************
var body = document.querySelector("#body")
 var cursor = document.querySelector("#circle")

body.addEventListener("mousemove", function(event){
    gsap.to("#circle",{
        x:event.x,
        y:event.y,
        duration:1
    })
   
})


// navbr*************************

var logo = gsap.timeline()

logo.from('.logo', {
    x: -30,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.3
})
logo.from('li', {
    x: 30,
    opacity: 0,
    duration: 0.6,
    delay: 0.3,
    stagger: 0.3,
})


//  responsive navbar************************
var menu = document.querySelector(".menu i")
var cross = document.querySelector(".full i")

var open = gsap.timeline()

open.to(".menu i", {
    opacity: 0
})

open.to(".full", {
    right: 0,
    duration: 0.8,
})
open.from(".full h4", {
    x: 100,
    duration: 0.7,
    stagger: 0.28,
    opacity: 0
})

open.pause()


menu.addEventListener("click", function () {
    open.play()
})

cross.addEventListener("click", function () {
    open.reverse()
})


// navbar end *************************


//  text animation countnew

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Frontend Developer.", "Backend Developer.", "Full Stack Developer."];

let el = document.getElementById("TypeWriter");

let sleepTime = 90;
let curPhareseIndex = 0;

const writeLoop = async () => {
    while (true) {

        let cuword = phrases[curPhareseIndex];
        await sleep(sleepTime);

        for (let i = 0; i < cuword.length; i++) {
            el.innerHTML = cuword.substring(0, i + 1);
            await sleep(sleepTime)
        }
        await sleep(sleepTime * 10);

        for (let i = cuword.length; i > 0; i--) {
            el.innerHTML = cuword.substring(0, i - 1);
            await sleep(sleepTime);
        }
        await sleep(sleepTime * 5);

        if (curPhareseIndex === phrases.length - 1) {
            curPhareseIndex = 0;
        } else {
            curPhareseIndex++
        }
    };
};
writeLoop()


// text animation end ****************

// hero station ki gsap
// start

var hero = gsap.timeline()

hero.from(".hero-left h1",{
    x: -300,
    opacity: 0.01,
    duration: 0.4,
    delay: .4,
    stagger: 0.3
})
hero.from(".hero-left h2",{
    x: -300,
    opacity: 0.01,
    duration: 0.5,
    delay: 0.4,
    stagger: 0.3
})
hero.from(".hero-left img",{
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.3,
    scale:1.5

})
gsap.from(".hero-right img",{
    x: 400,
    opacity: 0,
    duration: 0.9,
    delay: 0.5,
    stagger: 0.3,
    scale:2
})

// **********************About Section gsap

gsap.from(".about-main h1",{
    // x: 600,
    opacity: 0,
    duration: 0.9,
    delay: 0.8,
    stagger: 0.3,
    scale:2
})

