"use strict";
// crie uma interface UserData para o formulario abaixo
// crie uma variavel global UserData no window, ela sera um objeto qualquer
// adicione um evento de keyup ao formulario
// quando o evento ocorrer adicione a {[id]: value ao UserData}
// salve UserData no localStorage.
//Crie um User Type Guard, para verificar se o valor de localStorage é compativel com UserData.
//Ao refresh da pagina, preencha os valores de localStorage (caso seja UserData)
// no formulario e em window.UserData
const form = document.querySelector('#form');
function handleEvent({ event }) {
    '';
}
if (form instanceof HTMLElement) {
    form === null || form === void 0 ? void 0 : form.addEventListener('keyup', handleEvent);
}
console.log(form);
