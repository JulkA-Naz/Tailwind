const tham = document.querySelector(".tham");
const menu = document.querySelector(".menu__body");
tham.addEventListener("click", () => {
  tham.classList.toggle("tham-active");
  menu.classList.toggle("hidden");
  // menu.classList.toggle('-translate-y-full');
  menu.classList.toggle("active");
});
//Плавна прокрутка
document.querySelectorAll('a[href^="#"').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = document.querySelector('.header').offsetHeight;
    // const topOffset = 0; // если не нужен отступ сверху 
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

//Тема
// localStorage.setItem("theme", "light");
// const selectedTheme = localStorage.getItem('theme');
// if (selectedTheme) {
//   document.body.classList.add(selectedTheme);
// } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//   document.body.classList.add("dark");
// } else { document.body.classList.add("light"); }
function darkModeListener() {
  document.querySelector("html").classList.toggle("dark");
}

document.querySelector("input[type='checkbox']#dark-toggle").addEventListener("click", darkModeListener);
