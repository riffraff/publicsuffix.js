window.GlobalEvilShimForExports = {};
window.exports = window.GlobalEvilShimForExports;
function require (arg) {
  return window.exports;
}
