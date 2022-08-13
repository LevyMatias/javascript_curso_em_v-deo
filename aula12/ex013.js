// condicoes
var dateNow = new Date();
var dia = dateNow.getDay();

switch(dia){
    case 0:
        console.log("Hoje é domingo!");
        break;
    case 1:
        console.log("Hoje é segunda-feira!");
        break;
    case 2:
        console.log("Hoje é terca-feira!");
        break;
    case 3:
        console.log("Hoje é quarta-feira!");
        break;
    case 4:
        console.log("Hoje é quinta-feira!");
        break;
    case 5:
        console.log("hoje é sexta-feira!");
        break;
    case 6:
        console.log("Hoje é Sabado!");
        break;
}