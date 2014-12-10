(function(win) {
    var timeout,
        doc = win.document, 
        html = doc.documentElement;
    function setFontSize() {
        var htmlWidth = html.getBoundingClientRect().width;
        win.rem = htmlWidth / 640 * 1.5, html.style.fontSize = win.rem + "rem";
    }
    win.addEventListener("resize", function() {
        clearTimeout(timeout), timeout = setTimeout(setFontSize, 300);
    }, false);
    setFontSize();
})(window);