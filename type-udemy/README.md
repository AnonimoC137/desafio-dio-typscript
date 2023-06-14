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