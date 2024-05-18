var active = 3;

var mncircles = document.querySelectorAll(".mncircle");
var sec = document.querySelectorAll(".sec");
gsap.to(mncircles[active-1],{
    opacity: .5
})
gsap.to(sec[active-1],{
    opacity: 1
})

mncircles.forEach(function(val, index){
    val.addEventListener("click", function(){
        gsap.to("#circle",{
            rotate: (3-(index+1))*10,
            ease: Expo.easeInOut,
            duration: 1
        })
        greyout();
        gsap.to(this, {
            opacity: .5
        })
        gsap.to(sec[index],{
            opacity: 1
        })
    })
})

function greyout(){
    gsap.to(mncircles, {
        opacity: .08
    })
    gsap.to(sec,{
        opacity: .4
    })

}

gsap.to("#circle", {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2

})

var t1 = new TimelineMax({ paused: true });
t1.to(".nav-container", 1, {
    left: 0,
    ease: Expo.easeInOut
})
t1.staggerFrom(".main", 0.8,{
    y: 100,
    // opacity: 0,
    ease: Expo.easeInOut
}, "0.1", "-=0.4")
t1.reverse();
$(document).on("click", ".menu-open", function() {
    t1.reversed(!t1.reversed());
});

$(document).on("click", ".menu-close", function(){
    t1.reversed(!t1.reversed());
});

const copies = document.querySelectorAll(".copy");
function setupSplits () {
    $(document).ready(function () {
        $(".split-line").wrap('<div class="split-parent"</div>');
    })
    copies.forEach((copy) => {
        copy.split = new SplitText(copy, {
            type: "lines, words, chars",
            linesClass: "split-line",
        });
        copy.anim = gsap.from(copy.split.lines, {
            scrollTrigger: {
                trigger: copy,
                toggleAction: "restart pause resume",
                start: "top 80%",
                // markers: true
            },
            duration: 2,
            ease: "power4.inOut",
            yPercent: 100,
            stagger: 0.1
        })
    })
}
setupSplits();

gsap.from('.marquee',{
    scrollTrigger: {
        trigger: ".marquee",
        scroller: "body",
        start: "top 90%",
        // markers: true
    },
    duration: 2,
    ease: "power4.inOut",
    xPercent: 100,
    stagger: 0.1

})

const skillsSection = document.getElementById('skills-section');
const progressBars = document.querySelectorAll('.progress-bar');

function showProgress(){
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`
    })
}
function hideProgressProgress(){
    progressBars.forEach(p => {
        // const value = progressBar.dataset.progress;
        p.style.opacity = 1;
        p.style.width = `${value}%`
    })
}
window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight /2;

    if (sectionPos < screenPos) {
        showProgress();
    } else {
       hideProgress();
    }
});

// gsap.to('.main_section img', 2,{

// })
// gsap.to('.left p', 2,{
//     opacity: 1
    
// })
// var t1 = gsap.timeline({})

// t1.paused(true);
// t1.to('.second_section', {
//     // position: 'relative',
//      ZIndex: '999'
// })
// t1.from('.second_section', 1,{
//     translateY: 1000,
// })
// t1.to('.line', 1, {
//     translateY: -800
// })
// t1.from('.second_section .lekha', 1, {
//     translateY: 1000
// }, '=.2')
// t1.from('.second_section img', 1, {
//     translateY: 1000,
//     stagger: 0.2,
//     ease: Back.easeOut

// }, '-=.05')
// t1.to('#turbulnce', 1.7, {
//     attr: {baseFrequency: '0 0'},
//     delay: .01
// }, "-=.05")

function setupSplit() {
  
    var tlSplitBurrowing = gsap.timeline(), 
        SplitBurrowing = new SplitText(".left p", {type:"words,chars"}), 
        chars = SplitBurrowing.chars; 
        

        tlSplitBurrowing.from(chars, {
            duration: 0.8,
            opacity:0,
            y:10,
            ease:"circ.out",
            stagger: 0.02,
          scrollTrigger: {
              trigger: ".left",
        //   markers:true,
              start: "top 75%",
             end: "bottom center",
              scrub:1
            }
          //,   onComplete: () => {SplitBurrowing.revert()}
          }, "+=0");
        };
        ScrollTrigger.addEventListener("refresh", setupSplit);
        setupSplit();

     
gsap.from('.p2', {
    scrollTrigger: {
        trigger: '.paragraph',
        scrub: 2,
        // markers:true,
        start: "50% 100%", // position of trigger meets the scroller position
        end: "0% 0%",
    },
    opacity:0,
    y: "20vh",
    ease: 'sine'
})
gsap.from('.p1', {
    scrollTrigger: {
        trigger: '.paragraph-2',
        scrub: 2,
        // markers:true,
        start: "50% 100%", // position of trigger meets the scroller position
        end: "0% 0%",
    },
    opacity:0,
    y: "20vh",
    ease: 'sine'
})

gsap.registerPlugin(SplitText);

const introTitle = new SplitText('.intro__title', {type: "lines", linesClass: "intro-line"});
// const splitTitles = new SplitText(titles, {type: "lines, chars", linesClass: "line", charsClass: "char", position: "relative" });
let stl = gsap.timeline({
    scrollTrigger: {
        trigger: '.img-1',
        scrub: 1,
        // markers:true,
        start: "top bottom", // position of trigger meets the scroller position
        end: "bottom top"
    }
});
stl.to('.intro__title', {
    x: 400,
    ease: 'power4.in',
    duration: 6,
    
})


// gsap.registerPlugin(ScrollTrigger);
// var t1 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".images-section",
//         start: "top 60%",
//         end : "bottom top",
//         scrub: 1,
//         markers: false
//     }
// });
// t1.fromTo(".rl",{
//     y: '50%'
// },{y: '-10%'},0);
// t1.fromTo(".rr",{
//     y: '20%'
// },{y: '-20%'},0);

// gsap.fromTo(".rtitle", {x: '100%'}, {x: '-120%' , scrollTrigger: {
//     trigger: ".rtitle",
//     start: "center center",
//     end: "bottom center",
//     endTrigger: ".images-section",
//     pin: true,
//     scrub: 1,
//     markers: false



// }},0

// )

gsap.registerPlugin(ScrollTrigger);
let revealAnimations = [];

// Scroll
const lenis = new Lenis({
  lerp: 0.07
});

lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

// Reveal
document.querySelectorAll('.heading-section').forEach(text => {
  // Split text
  let splitText = new SplitType(text, {
    type: 'words'
  })

  // Animation
  const section = text.closest('section');
  gsap.from(splitText.words, {
    opacity: 0,
    ease: 'none',
    stagger: 1,
    duration: 5,
    scrollTrigger: {
      trigger: section,
      start: 'top top', 
      end: () => `+=${window.innerHeight * 5}px`,
      scrub: true,
    //   markers: true,
      pin: true,
    }
  })
})

// gsap.registerPlugin(MotionPathPlugin);

// gsap.set(".moving-car", {scale: 0.5, autoAlpha: 1});

// gsap.to(".moving-car", {
//   duration: 5, 
//   ease: "power1.inOut",
//   immediateRender: true,
//   motionPath: {
//     path: "#path",
//     align: "#path",
//     alignOrigin: [0.5, 0.5],
//     autoRotate: 90
//   }
// });

// MotionPathHelper.create(".moving-car");
let currentScroll = 0;
let isScrollingDown = true;
let arrows = document.querySelectorAll(".arrow");

let tween = gsap.to(".marquee_part", {
    xPercent: -100,
    repeat: -1,
    duration: 5,
    ease: "linear"
}).totalProgress(0.5);
gsap.set(".marquee_inner", {
    xPercent: -50
});

// window.addEventListener("scroll", function() {
//     if (window.pageYOffset > currentScroll) {
//         isScrollingDown = true;
//     } else {
//         isScrollingDown = false;
//     }
//     gsap.to(tween, {
//         timeScale: isScrollingDown ? 1 : -1,
//     });
//     arrows.forEach((arrow) => {
//         if (isScrollingDown) {
//             arrow.classList.remove("active");
//         } else {
//             arrow.classList.add("active");
//         }
//     });
//     currentScroll = window.pageYOffset;
// });

gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      toggleActions: "restart none none reset"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    xPercent: -100,
    ease: Power2.out
  });
  tl.from(image, 1.5, {
    xPercent: 100,
    scale: 1.3,
    delay: -1.5,
    ease: Power2.out
  });
});

gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 20%",
    // markers: true,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});



