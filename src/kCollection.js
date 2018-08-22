class kCollection {
  constructor(values) {
    this.values = values;
  }

  replaceWith(kCollectionValue) {
    this.values.forEach((element, i) => {
      element.parentNode.replaceChild(kCollectionValue.values[i], element);
    });

    return new kCollection(kCollectionValue.values);
  }

  find(cssSelectorString) {
    let t = [];
    this.values.map(_ => {
      const obj = [].slice.call(_.querySelectorAll(cssSelectorString));
      t = t.concat(obj);
    });

    return new kCollection(t);
  }

  style(inlineStyle) {
    this.values.forEach(element => {
      const tmp = JSON.stringify(inlineStyle)
        .replace("{", "")
        .replace("}", "")
        .replace(",", ";");
      const style = tmp.split('"').join("");
      element.setAttribute("style", style);
    });
    return new kCollection(this.values);
  }

  remove() {
    this.values.forEach(element => {
      element.parentNode.removeChild(element);
    });
    return [];
  }

  get() {
    return this.values;
  }
}

export default kCollection;
