const text = document.querySelector("#text-to-type");


function change(newtext) {
    text.textContent = newtext
}

setTimeout(() => {
    change(`I'M A FRONTEND DEVELOPER`)
}, 4000);