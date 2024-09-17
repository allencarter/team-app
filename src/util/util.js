const util = (() => {
  return {
    getEl: (el) => {
      return document.querySelector(el);
    },
    getDomStrings: () => {
      return DOMstrings;
    }
  }
})();

export { util };
