let nome = "Cactus D'vridu"
let nivelDeexperiencia = 9000
let XP = ""

if(nivelDeexperiencia <= 1000){
    console.log(XP="nivel Ferro")
}else if(nivelDeexperiencia >= 1001 && nivelDeexperiencia<2001){
    console.log(XP="nivel Bronze")
}else if(nivelDeexperiencia >= 2001 && nivelDeexperiencia<5001){
    console.log(XP="nivel Prata")
}else if(nivelDeexperiencia >= 6001 && nivelDeexperiencia<7001){
    console.log(XP="nivel Ouro")
}else if(nivelDeexperiencia >= 7001 && nivelDeexperiencia<8001){
    console.log(XP="nivel Platina")
}else if(nivelDeexperiencia >= 8001 && nivelDeexperiencia<9001){
    console.log(XP="nivel Ascendente")
}else if(nivelDeexperiencia >= 9001 && nivelDeexperiencia<10001){
    console.log(XP="nivel Imortal")
}else
{
    console.log(XP="nivel Radiante")
}

const notificação = "Conquista alcançada!"

console.log(notificação)
console.log (nome + " está no " + XP)