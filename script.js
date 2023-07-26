
const cursor = new MouseFollower({
    speed : 1
})

const body = document.body;
body.addEventListener('mouseenter',()=>{
    cursor.setImg('assets/cursor.png');
})
body.addEventListener('mouseleave',()=>{
    cursor.removeImg();
})

gsap.from('#bottomDiv h1 , #bottomDiv h3',{
    opacity:0.5,
    x:"-50%",
    duration:1
})

gsap.from('#fixedBtns',{
    opacity:0.5,
    y:"-50%",
    duration:1
})

