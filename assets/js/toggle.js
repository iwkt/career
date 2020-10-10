class AcdBtn {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector('#History__acd__btn');
    this.DOM.container = document.querySelector('#History__acd');
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