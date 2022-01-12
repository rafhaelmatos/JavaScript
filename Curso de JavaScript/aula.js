let permissao
permissao = 'gerente'
switch (permissao) {
    case 'comum':
    console.log('usuário comum');
    break

    case 'gerente':
    console.log('usuário gerente');
    break

    case 'diretor':
    console.log('usuário diretor');
    break

    default:
    console.log('Usuário não reconhecido!')
}


// let hora = 12;
// if (hora > 6 && hora < 12) {
//     console.log('bom dia')
// } else if (hora >= 12 && hora < 18) {
//     console.log('boa tarde')
// } else {
//     console.log('boa noite')
// }


// Trocando valores
// let a = 'vermelho'
// let b = 'azul'
// let c = a
// a = b
// b = c
// console.log(a)
// console.log(b)


// Falsy
//undefined
//null
// 0
// false
// ''
// NaN - not a Number

//Truthy - Tudo q não é falsy

// let corPersonalizada = ''
// let corPadrao = 'Azul'
// let corPerfil = corPersonalizada || corPadrao
// console.log(corPerfil)


// Operador lógico ou (||)
// retorna TRUE se um dos operandos forem true
// let maiorDeIdade = false
// let possuiCarteiraDeTrabalho = false
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho
// console.log('pode aplicar: ', podeAplicar)

// Operando NOT (!)
// let candidatoRecusado = !podeAplicar
// console.log('Candidato Recusado', candidatoRecusado)

// Operador lógico e (&&)
// retorna TRUE se os dois operandos forem true
// console.log(false && true)

// Operador ternário
// let pontos = 100
// let tipo = pontos > 100 ? 'premium' : 'comum'
// console.log(tipo)

// Operadores de igualdade
// Igualdade estrita:
// console.log(1 === 1)
// console.log('1' === 1)
// Igualdade solta:
// console.log(1 == 1)
// console.log('1' == 1)


// function dizerNome() {
//     console.log('Jhonatan')
// }
// dizerNome()

// function MultiplicarPorDois(valor) {
//     return valor * 2
// }
// let resultado = MultiplicarPorDois(5)
// console.log(resultado)


// let corSite = 'Azul';
// function resetaCor(cor, tonalidade) {
//     corSite = cor + ' ' + tonalidade;
// };

// console.log(corSite);
// resetaCor('vermelho', 'claro');
// console.log(corSite);


// let familia = [26, 45, 'Jhonatan', 50, 17];
// console.log(familia[2]);


// let nome = 'Rafael'; // string
// let idade = 25 // number literal
// let estaAprovado = true // boolean
// let sobrenome // undefined
// let corSelecionado = null // Redefinir um valor
// let pessoa = {
//     nome: 'Rafael',
//     idade: 25,
//     estaAprovado: true,
//     sobrenome: 'de Souza'
// };
// console.log(pessoa);


// let idade = 5;
// console.log(idade);
// let altura = 180
// console.log(altura);