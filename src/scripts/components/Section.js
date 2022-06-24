class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  addItem = (element) => {
    const cardElement = this._renderer(element);
    this._container.prepend(cardElement);
  };
  renderItems = (initialArray) => {
    initialArray.forEach((item) => this.addItem(item));
  };
}
export default Section;
