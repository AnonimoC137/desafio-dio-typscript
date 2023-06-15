## Iniciando no typescript ##

* Segue um exemplo inicial de como vamos declarar um variavel colocando tipagem estatica nela.

@EXEMPLO
```bash
let idade: number;

idade = 21;

typeof idade; // number

idade = '21' // Error
```

## porque usar o typescript ##

* Como é uma linguagem com tipagem estatica, ele previne situações como:

@exemplo - javascript
```bash
const sum = (num1, num2) {
  return num1 + num2
};

sum("2", "3"); // 23 (porem nao queremos esse resultado)
```
* já com o typescript

@exemplo - typescript
```bash
const sum = (num1: number, num2: number) {
  return num1 + num2
};

sum("2", "3"); // 23 Error 
```

# Instalando o typescript #

* podemos instalar ele de modo global para podermos ter acesso em todos os nossos projetos

@exemplo
```bash
npm install -g typescript
```

# Criando o primeiro arquivo TS #

* Como padrao vamos criar um arquivo chamado index.ts, nele podemos passar nosso codigo typescript.

* Em nosso terminal vamos entrar na pasta onde estamos trabalhando, e colocar um comando para o compilador do TS processar nosso codigo para javascript, nesse primeiro momentoele vai estar transformando em ES5, mais para frente vamos mudar isso.
### compilando nosso arquivo TS PARA JS ###
@exemplo
```bash
tsc index.ts
```
* Apos as configurações do arquivo do tsconfig no terminal vamos compilar comente usando o: 

@exemplo
```bash
tsc
```
* Apos isso vai ser criado um arquivo index.js com a versao do nosso codigo em javascript ES5.

# Configurando o arquivo TS #

* Para deixarmos nosso processo de codar em TS mais facil, vamos fazer algumas configurações, precisamos gerar esse arquivo atravez do terminal.

@exemplo
```bash
tsc --init
```
* Após fazermos isso vai ser gerado um arquivo chamado "tsconfig.json", nele vamos poder fazer algumas alterações.

## alterações feitas no tsconfig.json ##

* "target": "es2016",
* "module": "ESNext",

* "outDir": "./dist", 
=> essa alteração é importante, separamos nossos arquivos .ts dos .js, colocamos os .ts dentro da pasta src e as do .js dentro da pasta dist (que vao ser enviadas futuramente para um github) essa alteração que fizemos é justamente para que sempre que for compilado um arquivo .js seja encaminhado para essa pasta.

* "rootDir": "./src", => essa alteração é a mesma coisa que fizemos para os arquivos gerados com .js só de dessa vez é para os arquivos typescript.

* Precisamos do comando no terminal "tsc" para que essas mudanças aconteçam

@exemplo
```bash
tsc
```

# Tipos basicos #

* Agora vou mostrar alguns tipos basicos no typescript.

@exemplo
```bash
let age: number = 5;
const firstName = 'Alexandre';
const isValid: boolean = true;
let idk: any = 5;

idk = '12';
idk = true;

const ids: number[] = [1, 2, 3, 4, 5]
const booleans: boolean[] = [true, false, true, false]
const names: string[] = ['felipe', 'alexandre']

//tupla
const person: [number, string] = [1, 'Alexandre'];

// Lista de tuplas

const listaTuplas: [number, string][] = [
  [1, 'Alexandre'],
  [2, 'felipe'],
]

// Intersections 

const productId: string | number | boolean = false


//Enum

enum Direction {
  Up = 1,
  down = 2,
}

const direction = Direction.up
console.log(direction)

// Type Assertions 
const productName: any = 'bone';

let itemId = productName as string;

ou

let itemId = <string>productName; 

```

# Uso de Functions #

* Dentro de nossas funções podemos definir os tipos que seram nossos parametros, assim como podemos definir qual o tipo do retorno que vamos receber, podemos tambem passar metodos dentro para manipular os dados como o .toString() assim modificando um number para string.

@exemplo
```bash
const sum = (x: number, y: number): number | string => {
    return (x + y).toString()
}

const value = sum(2, 3);
```
* Outro exemplo é o "void" quando a function não retorna nada o tipo do retorno é void(vazio)

@exemplo
```bash
const log = (message: string): void  => {
    console.log(message)
}
```
# Usando Objetos #

* Podemos pré-definir os tipos de nosso objeto criando um objeto unico que vai conter todos os tipos, alem de definir quais são opcionais usando o "?".

* No exemplo abaixo criamos o objeto com os tipos com o nome de User e abaixo em uma const nosso objeto chamado user(não vai se confundir) mas ai atribuimos o User ao nosso objeto, precisamos passar os dois primeiros itens pois eles são obrigatorios já que só colocamos o "?" nos dois ultimos.

@exemplo
```bash
type User = {
    firstName: string;
    age: number;
    email?: string;
    password?: number;
}

const user: User = {
    firstName: 'Alexandre',
    age: 20,
}
```
* Podemos usar tambem "type objetos" em conjunto, nesse caso vamos definir o orders como um "type objeto" de "Order" porem em lista, e dentro desse "type objeto" vamos ter propriedades com seus tipos, ai quando formos passar o "orders" dentro de nossa "const user", vamos passar como uma array e dentro dela um objeto com as propriedades definidas lá em "Order" como no exemplo abaixo:

@exemplo
```bash
type Order = {
  productId: string;
  price: number;
}
type User = {
    firstName: string;
    age: number;
    email?: string;
    password?: number;
    orders: Order[];
}

const user: User = {
    firstName: 'Alexandre',
    age: 20,
    orders: [{productId: '1', price: 200}],
}
```
* Podemos usar tambem um metodo chamado "Unions" para usar mais de um "type objeto" em uma "const" ou "variavel" que criarmos, no exemplo a seguir vamos definir a "const author" como o "type objeto" de "Author" e de "User" usando o "&" para acrescentar os dois no exemplo abaixo: 

@exemplo
```bash
type User = {
    firstName: string;
    age: number;
    email?: string;
    password?: number;
    orders: Order[];
}

type Author = {
  books: string[]
}

const author: Author & User = {
  firstName: 'Alexandre',
    age: 20,
    orders: [{productId: '1', price: 200}],
    books: ['livro1', 'livro2']
}

```