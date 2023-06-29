// exercicio para o uso de keyof

async function fetchData<T>(url: string): Promise<T> {
    const base = 'https://api.origamid.dev/json';
    const response = await fetch(base + url);
    return await response.json()
}

interface IJogo {
    nome: string;
    ano: number;
    desenvolvedora: string;
    plataformas: string[];
}

interface ILivro {
    nome: string;
    ano: number;
    autor: string;
    paginas: string[];
}

function checkInterface <Interface>(obj: unknown, key: keyof Interface): obj is Interface {
    if(obj && typeof obj === 'object' && key in obj) {
        return true
    } else {
        return false
    }
}

async function handleData() {
    const jogo = await fetchData('/jogo.json');
    if( checkInterface<IJogo>(jogo, 'desenvolvedora')) {
        console.log(jogo);
    }
    const livro = await fetchData('/livro.json');
    if(checkInterface<ILivro>(jogo, 'nome')) {
        console.log(livro);
    }
     

}

handleData()