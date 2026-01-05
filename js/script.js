document.addEventListener("DOMContentLoaded", function () {

  const sliderImage = document.getElementById("slider-image");
  const caption = document.getElementById("caption");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  if (sliderImage && caption && nextBtn && prevBtn) {

    const slides = [
      { image: "assets/image1.jpg", caption: "Every smile with you feels magical 💖" },
      { image: "assets/image2.jpg", caption: "The moment our story took a beautiful turn ✨" },
      { image: "assets/image3.jpg", caption: "Memories I want to relive forever 💕" },
      { image: "assets/image4.jpg", caption: "Love is composed of a single soul inhabiting two bodies ❤️" },
      { image: "assets/image5.jpg", caption: "You are my favorite part of every day ❤️" },
      { image: "assets/image6.jpg", caption: "In a sky full of stars, your name is still my wish. 🌌" },
      { image: "assets/image7.webp", caption: "Love like ours doesn’t need confetti — just presence. ❤️" }
    ];

    let currentIndex = 0;

    function updateSlide() {
      sliderImage.classList.add("fade-out");
      caption.classList.add("fade-out");

      setTimeout(() => {
        sliderImage.src = slides[currentIndex].image;
        caption.textContent = slides[currentIndex].caption;

        sliderImage.classList.remove("fade-out");
        caption.classList.remove("fade-out");
        sliderImage.classList.add("fade-in");
        caption.classList.add("fade-in");
      }, 300);
    }

    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlide();
    });

    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlide();
    });

    /* ⌨ Keyboard Navigation */
    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") nextBtn.click();
      if (e.key === "ArrowLeft") prevBtn.click();
    });

    /* 📱 Touch Swipe */
    let startX = 0;

    sliderImage.addEventListener("touchstart", e => {
      startX = e.touches[0].clientX;
    });

    sliderImage.addEventListener("touchend", e => {
      let endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextBtn.click();
      if (endX - startX > 50) prevBtn.click();
    });
  }

    /* 💞 Forever Us Button (Surprise Page) */

  const foreverBtn = document.getElementById("foreverBtn");
  const foreverMessage = document.getElementById("foreverMessage");

  if (foreverBtn && foreverMessage) {
    foreverBtn.addEventListener("click", () => {
      foreverMessage.style.display = "block";
      foreverBtn.style.display = "none";
    });
  }

});
