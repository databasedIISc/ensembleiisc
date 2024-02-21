class Slideshow {
  constructor(imgCaptionArray, id) {
      // Constructor to initialize the slideshow with image-caption array and ID of the container
      this.imgCaptionArray = imgCaptionArray; // Array of image-caption pairs
      this.id = id; // ID of the slideshow container
      this.slideIndex = 1; // Index of the current slide, initialized to 1
  }

  // Method to create HTML structure for the slideshow
  createHtmlSlideShow(parentDiv) {
      // Creating necessary containers for slides, dots, and navigation
      let slidesContainer = document.createElement('div');
      let DotsContainer = document.createElement('div');
      let slideShowNavigators = document.createElement('div');

      // Setting class attribute for the slides container
      slidesContainer.setAttribute("class", "slideshow-container");

      // Looping through the image-caption array to create slides
      this.imgCaptionArray.forEach((slide, index) => {
          let HTMLSlide = document.createElement('div'); // Creating slide container
          HTMLSlide.classList.add(`mySlides${this.id}`); // Adding class for slide styling
          HTMLSlide.classList.add("fade"); // Adding class for fade effect
          // Setting display style based on index (first slide displayed, others hidden)
          HTMLSlide.setAttribute('style', `${index === 0 ? 'display:block' : 'display:none'}`);
          // Setting HTML content for slide (image and caption)
          DotsContainer.setAttribute("class","dot-container")
          slideShowNavigators.setAttribute("class","slideShowNavigators")
          
          HTMLSlide.innerHTML = `
              <img class="slideShowImg" src="${slide[0]}" style="width:100%">
              <div class="text"><span style="text-align:left;">${slide[1]} </span> <span>${index+1}/${this.imgCaptionArray.length}</span></div>
          `;
          slidesContainer.appendChild(HTMLSlide); // Appending slide to slides container
      });

      // Looping through the image-caption array to create navigation dots
      for (let i = 0; i < this.imgCaptionArray.length; i++) {
          let htmlDot = document.createElement('div'); // Creating dot container
          // Setting HTML content for dot with onclick event to navigate to respective slide
          htmlDot.innerHTML = `
              <span  class="${i === 0 ? `dot SS${this.id}Dots active` : `dot SS${this.id}Dots`}" ></span>
          `;

          htmlDot.addEventListener('click', () => this.currentSlide(i + 1));
          DotsContainer.appendChild(htmlDot); // Appending dot to dots container
      }

          // Setting HTML content for slideshow navigators (previous and next buttons)
          slideShowNavigators.innerHTML = `
          <a id="prev${this.id}" class="prev">❮</a>
          <a  id="next${this.id}" class="next">❯</a>
      `;

      // Add event listeners for prev and next buttons to navigate slides
      slideShowNavigators.querySelector(`#prev${this.id}`).addEventListener('click', () => this.plusSlides(-1));
      slideShowNavigators.querySelector(`#next${this.id}`).addEventListener('click', () => this.plusSlides(1));


      // Appending containers to the parent div to display the slideshow
      parentDiv.appendChild(slidesContainer); // Append slides container
      parentDiv.appendChild(DotsContainer); // Append dots container
      parentDiv.appendChild(slideShowNavigators); // Append navigators container
  }

  // Method to navigate to the next or previous slide
  plusSlides(n) {
      this.showSlides(this.slideIndex += n);
  }

  // Method to navigate to a specific slide
  currentSlide(n) {
      this.showSlides(this.slideIndex = n);
  }

  // Method to display slides and update navigation dots based on current slide index
  showSlides(n) {
      let i;
      let slides = document.getElementsByClassName(`mySlides${this.id}`); // Get all slides
      let dots = document.getElementsByClassName(`SS${this.id}Dots`); // Get all dots
      if (n > slides.length) { this.slideIndex = 1; } // If index exceeds total slides, reset to 1
      if (n < 1) { this.slideIndex = slides.length; } // If index is less than 1, set to last slide
      // Hide all slides
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      // Remove 'active' class from all dots
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      // Display current slide and add 'active' class to corresponding dot
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
  }
}

let homePageSlideShow1ImgArray=[["./img/img1.webp","Maxwell's demon"],["./img/img 2.webp","<b>Lecture series</b><br> An ongoing lecture talk by Debadrito"],
["./img/img4.webp","<b>Paper presentation</b><br>After a successfull paper presentation"],["./img/img3.webp","Just a cool poster"]]

let homePageSlideShow1= new Slideshow(homePageSlideShow1ImgArray,1)
let homePageSlideShow2= new Slideshow(homePageSlideShow1ImgArray,2)
let homePageSlideShow1HTML=document.getElementById("SS01")

homePageSlideShow1.createHtmlSlideShow(homePageSlideShow1HTML)

