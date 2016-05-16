var kq = undefined;

(function() {

  kq = function(params) {
    return new Library(params);
  };



  class Library {

    /**
     * Creates a Kq element object.
     * @constructor
     * @param {string} selector Selector to query HTML element.
     * @return {[HTMLElement]}
     */
    constructor(selector) {
      console.log("constructor");
      this.nodes = [];
      /** Switch over how to select element **/
      switch(selector.charAt(0)) {

        /** Selecting by class **/
        case '.':
          this.nodes = Library.nodesFromSelector(document.getElementsByClassName(selector.substring(1)));
          return this;

        /** Selecting by Id **/
        case '#':
          this.nodes = Library.nodesFromSelector(document.getElementById(selector.substring(1)));
          return this;

        /** Default selector  **/
        default:
          this.nodes = Library.nodesFromSelector(document.querySelectorAll(selector));
          return this;

      }
    }

    /**
     * This is for getting element nodes from selector construction.
     * @function private
     * @param {[HTMLElement]} selector
     * @return
     */
    static nodesFromSelector(selector) {
      let n = [];
      for (var i = 0; i < selector.length; i++) {
        let el = selector[i];
        n.push(el);
      }
      return n;
    }

    /**
     * Change Color
     * @function
     * @param {string} color Color change to append onto element
     */
    color(color) {
      for (let el in this.nodes) this.nodes[el].style.color = color;
      return this;
    }

  }

})();





