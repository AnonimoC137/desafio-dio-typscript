// crie uma interface UserData para o formulario abaixo
// crie uma variavel global UserData no window, ela sera um objeto qualquer
// adicione um evento de keyup ao formulario
// quando o evento ocorrer adicione a {[id]: value ao UserData}
// salve UserData no localStorage.
//Crie um User Type Guard, para verificar se o valor de localStorage é compativel com UserData.
//Ao refresh da pagina, preencha os valores de localStorage (caso seja UserData)
// no formulario e em window.UserData
const form = document.querySelector<HTMLElement>('#form');

interface Window {
 UserData: any; 
}

window.UserData = {}

interface UserData {
    nome?: string;
    email?: string;
    cpf?: string;
}

function handleEvent({target}: KeyboardEvent) {
    if(target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value
        localStorage.setItem('UserData', JSON.stringify(window.UserData))
    }
}

form?.addEventListener('keyup', handleEvent)


console.log(form)


