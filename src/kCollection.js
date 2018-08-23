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
    this.values.map(element => {
      const obj = [].slice.call(element.querySelectorAll(cssSelectorString));
      t = t.concat(obj);
    });

    return new kCollection(t);
  }

  /*
  * option: 'beforeBegin'|'afterBegin'|'beforeEnd'|'afterEnd'
  * Need a secure control
  */
  append(HTMLString, option) {
    this.values.forEach(v => {
      v.insertAdjacentHTML(option ? option : "beforeend", HTMLString);
    });

    return new kCollection(this.values);
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
