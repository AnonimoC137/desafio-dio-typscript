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
