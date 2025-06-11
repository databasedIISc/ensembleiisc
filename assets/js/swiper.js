document.querySelectorAll('.swiper').forEach(swiperElement => {
    let swiperItems = swiperElement.querySelector(".swiper-items");
    let swiperControls = swiperElement.querySelector(".swiper-controls");
    let prevButton = swiperControls.querySelector(".prev");
    let nextButton = swiperControls.querySelector(".next");
    const delay = 250;
    prevButton.addEventListener("click", () => {
        let item = swiperItems.lastElementChild;
        swiperItems.firstElementChild.style.opacity = "0";
        setTimeout(() => {
            swiperItems.prepend(item);
            swiperItems.firstElementChild.style.opacity = "1";
        }, delay); // match the transition duration
        // console.log("Scrolled left");
    });
    
    nextButton.addEventListener("click", () => {
        let item = swiperItems.firstElementChild;
        swiperItems.firstElementChild.style.opacity = "0";
        setTimeout(() => {
            swiperItems.append(item);
            swiperItems.firstElementChild.style.opacity = "1";
        }, delay); // match the transition duration       
        // console.log("Scrolled right");
    });
});