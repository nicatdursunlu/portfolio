$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing aniation script
  const typed = new Typed(".typing", {
    strings: ["Front-End Developer", "Mobile Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
  });

  const typed2 = new Typed(".typing-2", {
    strings: ["Front-End Developer", "Mobile Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
  });

  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  /* SCROLL COMMON */
  sr.reveal(".services-content", {});
  sr.reveal(".education-content", {});
  sr.reveal(".education-content", {});
  sr.reveal(".works-container", {});
  sr.reveal(".left", { delay: 200 });
  sr.reveal(".right", { delay: 600 });

  /* SCROLL HOME */ 
  sr.reveal(".text-1", { delay: 200 });
  sr.reveal(".hire-me", { delay: 200 });
  sr.reveal(".social-media", { interval: 200 });
  sr.reveal(".home__img", { delay: 400 });

  /*SCROLL SKILLS*/
  sr.reveal(".skills__subtitle", {});
  sr.reveal(".skills__text", {});
  sr.reveal(".skills__data", { interval: 200 });
  sr.reveal(".skills__img", { delay: 600 });

  /*SCROLL WORK*/
  sr.reveal(".work__img", { interval: 200 });

  /*SCROLL CONTACT*/
  sr.reveal(".contact__input", { interval: 200 });
});
