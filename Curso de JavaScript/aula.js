// Receber uma quantidade de valores pra avaliar 
// Função exibe se cada valor é par ou impar
// exibirTipo(5)
// function exibirTipo(limite) {
//     for (let i = 0; i <= limite; i++){
//         if (i % 2 === 0) {
//             console.log(i, 'PAR')
//         } else {
//             console.log(i, 'IMPAR')
//         }
//     }
// }


// Velocidade máxima de até 70Km/h
// A cada 5km/h acima do limte você ganha 1 ponto
// Math.floor()
// Caso pontos maior que 12 -> 'Carteira Suspendida' 
// verificarVelocidade(180)
// function verificarVelocidade(velocidade) {
//     const velocidadeMaxima = 70
//     const kmPorPonto = 5
//     if (velocidade <= velocidadeMaxima) {
//         console.log('Ok')
//     } else {
//         const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto)
//         if (pontos >= 12)
//             console.log('Carteira Suspensa')
//         else
//             console.log('pontos', pontos)
//     }
// }


// Divsível por 3 => Fizz 
// Divisível por 5 => Buzz 
// Divisível por 3 e 5 => FizzBuzz
// Não dvisível por 3 ou 5 => entrada
// Não é um número => 'Não é um número'
// const resultado = fizzBuzz(15)
// console.log(resultado)
// function fizzBuzz(entrada) {
//     if (typeof entrada !== 'number') 
//         return 'Não é um número'
//     if ((entrada % 3 === 0) && (entrada % 5 === 0))
//         return 'FizzBuzz'
//     if (entrada % 3 === 0) 
//         return 'Fizz'
//     if (entrada % 5 === 0)
//         return 'Buzz'
//     return entrada 
// }


// Escreva uma função que usa 2 números e retorna o maior entre eles.
// function maiorNumero(n1=0, n2=0) {
//     return n1 > n2 ? n1 : n2  
// }
// console.log(maiorNumero(-2,-3))


// 1.For
// for(let i = 5; i >= 1; i--) {
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }

// 2. while
// let i = 5
// while(i >= 1) {
//     if(i % 2 !== 0){
//         console.log(i)
//     }
//     i--
// }

// 3.do..while
// let i = 0
// do {
//     console.log('Digitando!')
//     i++
// } while (i < 10)

// 4. for-in
// const pessoa = {
//     nome: 'Jhonatan', 
//     idade: 25
// }
// for(let chave in pessoa) {
//     console.log(chave, pessoa['nome'])
// }

// const cores = ['Vermelho', 'Azul', 'Verde']
// for (let indice in cores) {
//     console.log(indice, cores[indice])
// }

// 5. for-of
// const cores = ['Vermelho', 'Azul', 'Verde']
// for(let cor of cores) {
//     console.log(cor)
// }


// let permissao
// permissao = 'gerente'
// switch (permissao) {
//     case 'comum':
//     console.log('usuário comum');
//     break

//     case 'gerente':
//     console.log('usuário gerente');
//     break

//     case 'diretor':
//     console.log('usuário diretor');
//     break

//     default:
//     console.log('Usuário não reconhecido!')
// }


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