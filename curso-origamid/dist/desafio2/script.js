"use strict";
const button = document.querySelector('.btn');
const p = document.querySelector(".p");
function handleClick() {
    if (p) {
        const contador = 0;
        p.innerHTML = (contador + 1).toString();
    }
}
if (button) {
    button.addEventListener("click", handleClick);
}
//# sourceMappingURL=script.js.map