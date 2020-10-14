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

  //  scroll common
  sr.reveal(".services-content", {});
  sr.reveal(".education-content", {});
  sr.reveal(".education-content", {});
  sr.reveal(".works-container", {});
  sr.reveal(".left", { delay: 200 });
  sr.reveal(".right", { delay: 600 });

  // scroll home 
  sr.reveal(".text-1", { delay: 200 });
  sr.reveal(".hire-me", { delay: 200 });
  sr.reveal(".social-media", { interval: 200 });


  // read more/less button 
  $(".read-more").on("click", function () {
    $(this).parent().toggleClass("show-content");
    const replaceBtnTitle = $(this).parent().hasClass("show-content")
      ? "Read less"
      : "Read more";
    $(this).text(replaceBtnTitle);
  });
});
