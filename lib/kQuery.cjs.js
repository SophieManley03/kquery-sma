'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var kCollection = function () {
  function kCollection(values) {
    _classCallCheck(this, kCollection);

    this.values = values;
  }

  _createClass(kCollection, [{
    key: "replaceWith",
    value: function replaceWith(kCollectionValue) {
      this.values.forEach(function (element, i) {
        element.parentNode.replaceChild(kCollectionValue.values[i], element);
      });

      return new kCollection(kCollectionValue.values);
    }
  }, {
    key: "find",
    value: function find(cssSelectorString) {
      var t = [];
      this.values.map(function (element) {
        var obj = [].slice.call(element.querySelectorAll(cssSelectorString));
        t = t.concat(obj);
      });

      return new kCollection(t);
    }
  }, {
    key: "append",
    value: function append(HTMLString) {
      this.values.forEach(function (v) {
        v.insertAdjacentHTML("beforeend", HTMLString);
      });

      return new kCollection(this.values);
    }
  }, {
    key: "style",
    value: function style(inlineStyle) {
      this.values.forEach(function (element) {
        var tmp = JSON.stringify(inlineStyle).replace("{", "").replace("}", "").replace(",", ";");
        var style = tmp.split('"').join("");
        element.setAttribute("style", style);
      });
      return new kCollection(this.values);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.values.forEach(function (element) {
        element.parentNode.removeChild(element);
      });
      return [];
    }
  }, {
    key: "get",
    value: function get() {
      return this.values;
    }
  }]);

  return kCollection;
}();

var kQuery = function kQuery(selector) {
  return new kCollection([].slice.call(document.querySelectorAll(selector)));
};

module.exports = kQuery;
