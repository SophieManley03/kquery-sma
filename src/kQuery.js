import kCollection from "./kCollection";

var kQuery = function(selector) {
  return new kCollection([].slice.call(document.querySelectorAll(selector)));
};

export default kQuery;
