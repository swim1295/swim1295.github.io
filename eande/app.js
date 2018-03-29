window.onload = function() {
    var b = document.getElementById('box2');
    b.style.backgroundColor = "#f00";
    b.onmouseover = function() {
        this.style.backgroundColor = "#00f";
    }

    b.onmouseout = function() {
        this.style.backgroundColor = "#f00";
    }
}
