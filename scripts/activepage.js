console.log(window.location.pathname);

document.querySelector(`a.header-nav-item[href="${window.location.pathname}"`).classList.add("active");
