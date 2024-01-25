let nivelDoheroi = ""
let numeroDevitorias = 112
let numeroDederrotas = 35
let saldoDevitorias


function contar(numeroDevitorias, numeroDederrotas){
    return numeroDevitorias - numeroDederrotas
}

let resultado = contar(numeroDevitorias, numeroDederrotas)
   
if(resultado <= 10){
        nivelDoheroi = "Ferro"

    }else if(resultado >= 10 && resultado <= 21){
        nivelDoheroi = "Bronze"

    }else if(resultado >= 21 && resultado <= 51){
        nivelDoheroi = "Prata"

    }else if(resultado >= 51 && resultado <= 81){
        nivelDoheroi = "Ouro"

    }else if(resultado >= 81 && resultado <= 91){
        nivelDoheroi = "Diamante"

    }else if(resultado >= 91 && resultado <= 101){
        nivelDoheroi = "Lendario"
        
    }else{
        nivelDoheroi = "Imortal"
    }

    console.log("O heroi tem saldo de " + resultado + " vitórias e está no nível de " + nivelDoheroi)

