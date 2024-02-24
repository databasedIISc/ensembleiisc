console.log(window.location.pathname);
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(`a.header-nav-item[href="${window.location.pathname}"`).classList.add("active");
  document.querySelector(`header-mob-nav a[href="${window.location.pathname}"`).classList.add("active");
});
