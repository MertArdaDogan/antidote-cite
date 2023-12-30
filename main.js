
gsap.from(".second",2,{
    translateY: [200, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 4800 + 40 * i,
})
// TweenMax.staggerFrom(".second-img",2,{
//     scale: "2",
//     delay: 1,
// })
gsap.from(".search, .watch",1.3,{
    opacity:0,
    delay:.5,
    x: -20,
    ease: Expo.easeInOut
})
gsap.from(".title",1.4,{
    opacity:0,
    delay:1,
    y: 20,
    ease: Expo.easeInOut
})
gsap.from(".btn",1.3,{
    opacity:0,
    delay:1.6,
    y: 20,
    ease: Expo.easeInOut
})
gsap.from(".line-one",1.6,{
    opacity:0,
    delay:2,
    y: -1000,
    ease:Expo.easeInOut
})
gsap.from(".line-two",1.6,{
    opacity:0,
    delay:2.3,
    y: -1000,
    ease:Expo.easeInOut
})
gsap.from("img",1.9,{
    opacity:0,
    delay:2.7,
    y: 1000,
    ease:Expo.easeInOut
})
gsap.from(".year",1,{
    opacity:0,
    delay:1.4,
    y: -20,
    ease:Expo.easeInOut
})
gsap.from(".socials",2,{
    opacity:0,
    delay:1.4,
    y: -30,
    ease:Expo.easeInOut
})