const initSlider = () => {
    const sliders = document.querySelectorAll(".slider-wrapper");
  
    sliders.forEach(slider => {
      const imageList = slider.querySelector(".image-list");
      const slideButtons = slider.querySelectorAll(".slide-button");
      const sliderScrollbar = slider.querySelector(".container .slider-scrollbar");
      const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
      slideButtons.forEach(button => {
        button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
      });
  
      const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
      }
  
      imageList.addEventListener("scroll", () => {
        handleSlideButtons();
      });
  
      handleSlideButtons(); 
  
      // event listener for window resize
      window.addEventListener("resize", () => {
        handleSlideButtons();
      });
  
      //  event listener for window load
      window.addEventListener("load", () => {
        handleSlideButtons();
      });
    });
  }
  

  initSlider();
  
  