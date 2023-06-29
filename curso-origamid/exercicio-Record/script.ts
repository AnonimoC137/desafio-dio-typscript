type Objeto = Record<string, string>;

function mostrarTitulo(obj: Objeto) {
    if('titulo' in obj) {
        console.log(obj.titulo)
    }
}

mostrarTitulo({
    titulo: 'esta tudo certo',
})