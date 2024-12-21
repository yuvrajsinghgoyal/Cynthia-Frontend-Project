// import LocomotiveScroll from 'locomotive-scroll';

// gsap wala concep apply nahi ho raha hai 

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});





function circleMouseFollower(){
    window.addEventListener('mousemove',function(details){
        document.querySelector("#minicircle").style.transform=`translate(${details.clientX}px,${details.clientY}px)`
    })
}

circleMouseFollower();

//hovering image function



