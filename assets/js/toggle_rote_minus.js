function clicktglClass(e_name) {
  document.addEventListener('DOMContentLoaded', function () {
    for (let i in e_name) {
      e_name[i].addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('inview');
        this.nextElementSibling.classList.toggle('inview');
        this.previousElementSibling.classList.toggle('inview');
      })
    }
  })
}

const toglle_block = document.querySelectorAll('.toglle_block');
clicktglClass(toglle_block)


// class ClickAddClass {
//   constructor() {
//     this.DOM = {};
//     this.DOM.btn = document.querySelector('.toglle_block');
//     this.DOM.
//   }
// }
