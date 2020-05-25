// Setting Default Index position to 0
var i = 0,
    text
text = 'Welcome To the Shopping Page'


function typingEffect() {
    if (i < text.length) {
        // Adding the relevant Index position to the page
        document.getElementById("h1").innerHTML += text.charAt(i);
        i++
        setTimeout(typingEffect, 50);
    }
}
typingEffect();