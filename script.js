const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});
const previews = document.querySelectorAll(".video-card video");

previews.forEach(video=>{

    video.addEventListener("mouseenter",()=>{

        video.play();

    });

    video.addEventListener("mouseleave",()=>{

        video.pause();

        video.currentTime=0;

    });

});
document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        if(target){

            lenis.scrollTo(target,{
                duration:1.6,
                offset:-80
            });

        }

    });

});
const lenis = new Lenis({
    duration: 1.4,
    smoothWheel: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
