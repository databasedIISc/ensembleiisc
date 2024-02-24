const headerComponents = document.querySelectorAll("header");
const footerContainers = document.querySelectorAll('.footer-container');
const origin = window.location.origin;

const headerContent= `
<div class="header-container">
    <div class="header-logo">Ensemble, IISc</div>
    <div class="header-nav">
        <a class="header-nav-item" href="${origin}/">Home</a>
        <a class="header-nav-item" href="${origin}/gallery/">Gallery</a>
        <a class="header-nav-item" href="${origin}/the-team/">The Team</a>
        <a class="header-nav-item" href="${origin}/activities/">Activities</a>
        <a class="header-nav-item" href="${origin}/contact/">Contact</a>
    </div>

    <div class="header-mob-nav-btn">
        <span></span>
        <span></span>
        <span></span>
        <p style="display: none">x</p>
    </div>

    <div class="header-mob-nav no-display">
        <a class="header-mob-nav-item" href="${origin}/">Home</a>
        <a class="header-mob-nav-item" href="${origin}/gallery/">Gallery</a>
        <a class="header-mob-nav-item" href="${origin}/the-team/">The Team</a>
        <a class="header-mob-nav-item" href="${origin}/activities/">Activities</a>
        <a class="header-mob-nav-item" href="${origin}/contact/">Contact</a>
    </div>
</div>
`;

const footerContent = `
<div class="Main_text"><b>Join our mailing list for updates on events and for receiving our newsletter!</b></div>
<form>Enter your email here<br><input class="footer-email" type="email"><button class="footer-button">Join</button></form>
<div class="details"> Indian Institute of Science, Bangalore <span class="verticle-line"></span>ensemble.iisc@gmail.com</div>
<span class="horizontal-line"></span>
<p>© 2023 by Ensemble, IISc</p>
`;

// footerContainers.forEach(element => {
//  element.innerHTML=footerContent   
// });

headerComponents.forEach(element=>{
    element.innerHTML=headerContent;
});

// Attach toggle function for header-mob-nav
document.querySelector(".header-mob-nav-btn").addEventListener("click", () => {
    document.querySelector(".header-mob-nav").classList.toggle("no-display");
});