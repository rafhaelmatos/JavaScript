function comparaNum(n1, n2) {
    if (!n1 || !n2) return 'Defina dois números'
    const primFrase = criaPrimFrase(n1, n2);
    const segunFrase = criaSegunFrase(n1, n2);
    return `${primFrase} ${segunFrase}`;
}
function criaPrimFrase(n1, n2) {
    let iguais = ''

    if(n1 !== n2) {
        iguais = 'não'
    }
    return `Os números ${n1} e ${n2} ${iguais} são iguais.`
}
function criaSegunFrase(n1, n2) {
    const soma = n1 + n2
    let resultado10 = 'menor'
    let resultado20 = 'menor'
    const compara10 = soma > 10
    const compara20 = soma > 20
    if (compara10) {
        resultado10 = 'maior'
    }
    if (compara20) {
        resultado20 ='maior'
    }
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

comparaNum(12, 5)