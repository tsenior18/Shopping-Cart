var i = 0,
    text
text = 'Welcome To the Shopping Page'

function typingEffect() {
    if (i < text.length) {
        document.getElementById("h1").innerHTML += text.charAt(i);
        i++
        setTimeout(typingEffect, 50);
    }
}
typingEffect();