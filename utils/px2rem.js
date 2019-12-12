/**
 * @description: set document's fontSize for autoSize
 */
if (process.client) {
  (function () {
    const deviceWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px';
    window.onresize = function () {
      const deviceWidth = document.documentElement.clientWidth;
      document.documentElement.style.fontSize = deviceWidth / 19.2 + 'px';
    };
  })();
}
