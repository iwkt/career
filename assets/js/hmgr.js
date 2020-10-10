// const mobilemenu = document.querySelector('#MBL__menu')

// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('navOpen').addEventListener('click', function () {
//     this.classList.toggle('active');
//     mobilemenu.classList.toggle('active');
//   })
// });


class MobileMenu {
  constructor(){
    this.DOM ={};
    this.DOM.btn = document.querySelector('#navOpen');
    this.DOM.container = document.querySelector('#MBL_menu');
    // this.DOM.body = document.querySelector('body');
    this.eventType = this._getEventType();
    this._addEvent();
  }
  
  _getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click';
  }

  _toggle() {
    this.DOM.btn.classList.toggle('active');
    this.DOM.container.classList.toggle('active');
    // this.DOM.body.classList.toggle('active');
  }
  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

// class ABC extends MobileMenu {
//   constructor () {

//     this.btn = document.querySelector("#History__acd__btn");
//     this.container = document.querySelector("#History__acd");
//   }

//   _getEventType(){
//     super._getEventType();
//   }

//   _toggle(){
//     super._toggle();
//   }

//   _addEvent() {
//     super._addEvent();
//   }
// }