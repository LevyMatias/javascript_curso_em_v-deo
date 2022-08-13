function carregar(){
    var message = document.getElementById('msg');
    var image = document.getElementById('picture');
    var data = new Date();
    var hour = data.getHours();
    message.innerHTML = `Agora são ${hour} horas!`;

    if(hour <= 12 && hour > 0){
        image.src = 'manha.jpg';
        document.body.style.background = '#e8e541';
    }
    else if(hour < 18 && hour > 12){
        image.src = 'tarde.jpg';
        document.body.style.background = '#c42902';
    }
    else {
        image.src = 'noite.jpg';
        document.body.style.background = '#110021';
    }
}