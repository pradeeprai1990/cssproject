
$(document).ready(function(){
  $("#hero-section-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: [
      "<i class='bi bi-arrow-left'></i>", 
      "<i class='bi bi-arrow-right'></i>"
    ],
    responsive: {
      0: {
        nav: false,  
        dots: true   
      },
      768: {
        nav: false,   
        dots: false   
      }
    }
  });
});


    $(document).ready(function(){
    $("#testmonial-slide-card").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
      nav: true,
      dots: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      navContainer: '.testmonial-nav',
      navText: [
        "<i class='bi bi-arrow-left'></i>", 
        "<i class='bi bi-arrow-right'></i>"
      ]
    });
  });

$('#testmonialslider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{ items:1 },
        768:{ items:2 },
        1024:{ items:3 }
    }
});

$('#moblieSliderresult').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{ items:1 },
        768:{ items:1 },
        1024:{ items:1 }
    }
});

$('#popular-courses-mobile').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{ items:1 },
        768:{ items:1 },
        1024:{ items:1 }
    }
});
$('#popular-courses-mobiles').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{ items:1 },
        768:{ items:1 },
        1024:{ items:1 }
    }
});
$('#video-testmonial-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{ items:1 },
        768:{ items:3 },
        1024:{ items:3 }
    }
});

$('#freeresources').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{ items:1 },
        768:{ items:3 },
        1024:{ items:3 }
    }
});



document.addEventListener('DOMContentLoaded', function () {
    var videoModal = document.getElementById('videoModal');
    var videoFrame = document.getElementById('videoFrame');

    videoModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget;
        var videoSrc = button.getAttribute('data-video');
        videoFrame.src = videoSrc + "?autoplay=1";
    });

    videoModal.addEventListener('hidden.bs.modal', function () {
        videoFrame.src = "";
    });
});


  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".about-left img", {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".about-left",
      start: "top 80%"
    }
  });
  gsap.from(".student-count", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: ".about-left",
      start: "top 70%"
    }
  });
  gsap.from(".about-right h5, .about-right h2, .about-feature", {
    x: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".about-right",
      start: "top 80%"
    }
  });

  const path = document.querySelector("#aboutVector path");
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: "#aboutVector",
      start: "top 80%"
    },
    onComplete: () => {
      gsap.to(path, {
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        keyframes: [
          { stroke: "#FFB31F", duration: 1.2 },
          { stroke: "#00C2FF", duration: 1.2 },
          { stroke: "#28A745", duration: 1.2 },
          { stroke: "#FF1F5A", duration: 1.2 }
        ]
      });
    }
  });
  gsap.from(".popular-courses", {
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".popular-courses",
      start: "top 85%"
    }
  });
  gsap.from(".course-card", {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".row.pt-4",
      start: "top 80%"
    }
  });
   gsap.from(".latest-news", {
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".latest-news",
      start: "top 85%"
    }
  });

  gsap.from(".latest-news-card", {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".row.pt-4",
      start: "top 85%"
    }
  });
  gsap.from(".joinhowbtn", {
    scale: 0.7,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".joinhowbtn",
      start: "top 85%"
    }
  });

  // gsap.from(".freeresources", {
  //   opacity: 0,
  //   y: 80,
  //   duration: 1.2,
  //   ease: "power3.out",
  //   scrollTrigger: {
  //     trigger: ".freeresources",
  //     start: "top 85%"
  //   }
  // });

  // gsap.from(".col-md-3:nth-child(1) .service-card", {
  //   x: -100,
  //   opacity: 0,
  //   duration: 1,
  //   ease: "power3.out",
  //   scrollTrigger: {
  //     trigger: ".row.pt-lg-4",
  //     start: "top 85%"
  //   }
  // });

  // gsap.from(".col-md-3:nth-child(2) .service-card", {
  //   y: -100,
  //   opacity: 0,
  //   duration: 1,
  //   delay: 0.2,
  //   ease: "power3.out",
  //   scrollTrigger: {
  //     trigger: ".row.pt-lg-4",
  //     start: "top 85%"
  //   }
  // });

  // gsap.from(".col-md-3:nth-child(3) .service-card", {
  //   y: 100,
  //   opacity: 0,
  //   duration: 1,
  //   delay: 0.4,
  //   ease: "power3.out",
  //   scrollTrigger: {
  //     trigger: ".row.pt-lg-4",
  //     start: "top 85%"
  //   }
  // });

  // gsap.from(".col-md-3:nth-child(4) .service-card", {
  //   x: 100,
  //   opacity: 0,
  //   duration: 1,
  //   delay: 0.6,
  //   ease: "power3.out",
  //   scrollTrigger: {
  //     trigger: ".row.pt-lg-4",
  //     start: "top 85%"
  //   }
  // });

  // gsap.from(".freeresourcess .item .service-card", {
  //   scale: 0.7,
  //   opacity: 0,
  //   duration: 0.8,
  //   stagger: 0.2,
  //   ease: "back.out(1.7)",
  //   scrollTrigger: {
  //     trigger: ".freeresourcess",
  //     start: "top 85%"
  //   }
  // });


gsap.from(".events-activities", {
  opacity: 0,
  y: 80,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".events-activities",
    start: "top 85%",
  }
});
gsap.from(".events-activities-card", {
  scale: 0.85,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".events-activities-card",
    start: "top 85%",
  }
});

 gsap.utils.toArray(".topper-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",           
        toggleActions: "play none none reset"
      },
      y: 80,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.05,             
      ease: "power3.out"
    });
  });
  document.querySelectorAll(".topper-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.05, y: -10, duration: 0.3, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
    });
  });


  gsap.from(".why-choose-left-img", {
  x: -150,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".why-choose-section",
    start: "top 80%"
  }
});

gsap.from(".why-choose-card", {
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".why-choose-section",
    start: "top 70%"
  }
});
  gsap.to(".hero-star i", {
  color: "red",
  repeat: -1,
  yoyo: true,
  duration: 1,
  ease: "power1.inOut"
});
gsap.from(".hero-section-slider-contant", {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});
gsap.from(".hero-section-slide-right", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  delay: 0.3
});

 gsap.from(".col-lg-8 .voice-studend-card", {
    scrollTrigger: {
      trigger: ".col-lg-8",
      start: "top 85%",
    },
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
  gsap.from(".col-lg-4 .voice-studend-card", {
    scrollTrigger: {
      trigger: ".col-lg-4",
      start: "top 90%",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3
  });
  
  gsap.from(".voice-student", {
    scrollTrigger: {
      trigger: ".voice-student",
      start: "top 85%",   
    },
    opacity: 0,
    scale: 0.95,
    duration: 1.2,
    ease: "power2.out"
  });

  gsap.from(".book-free-counselling", {
  scrollTrigger: {
    trigger: ".book-free-counselling",
    start: "top 80%",
    toggleActions: "play none none none" 
  },
  opacity: 0,
  scale: 0.95,
  duration: 1.2,
  ease: "power2.out"
});

gsap.from(".book-free-counselling-img", {
  scrollTrigger: {
    trigger: ".book-free-counselling",
    start: "top 70%",
  },
  x: -120,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});
gsap.from(".book-free-from-layout", {
  scrollTrigger: {
    trigger: ".book-free-counselling",
    start: "top 70%",
  },
  x: 120,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});