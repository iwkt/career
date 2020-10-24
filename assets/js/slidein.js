// window.addEventListener("scroll", function () {
//   let scroll = document.documentElement.scrollTop;

//   if (scroll > 400) {
//     document.querySelector(".slide_in").classList.add("active");
//   } else {
//     document.querySelector(".slide_in").classList.remove("active")
//   }
// });

class windowScroll {
  constructor() {
    this._scroll();
  }
  _scroll () {
    window.addEventListener('scroll', function () {
      let scroll = document.documentElement.scrollTop;

      if (scroll > 400) {
        document.querySelector('.slide_in').classList.add("active");
      } else {
        document.querySelector('.slide_in').classList.remove("active")
      }
    });
  }
}
