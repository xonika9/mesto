class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  addItem = (item) => {
    this._container.prepend(item);
  };
  renderItems = () => {
    this._initialArray.forEach((item) => {
      this._renderer(item);
    });
  };
}
export default Section;
