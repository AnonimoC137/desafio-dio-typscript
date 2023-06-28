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
window.UserData = {};
function isUserData(obj) {
    if (obj &&
        typeof obj === 'object' &&
        ('nome' in obj || 'email' in obj || 'cpf' in obj)) {
        return true;
    }
    else {
        return false;
    }
}
function validJSON(str) {
    try {
        JSON.parse(str);
        return true;
    }
    catch (e) {
        return false;
    }
}
function loadLocalStorage() {
    const localUserData = localStorage.getItem('UserData');
    if (localUserData && validJSON(localUserData)) {
        const UserData = JSON.parse(localUserData);
        if (isUserData(UserData)) {
            Object.entries(UserData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
loadLocalStorage();
function handleEvent({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem('UserData', JSON.stringify(window.UserData));
    }
}
form === null || form === void 0 ? void 0 : form.addEventListener('keyup', handleEvent);
