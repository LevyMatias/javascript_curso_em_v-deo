var now = new Date();
var hourDay = now.getHours();

if(hourDay <= 12){
    console.log("Bom Dia!");
}
else if(hourDay < 18){
    console.log("Boa Tarde!");
}
else {
    console.log("Boa Noite!");
}
