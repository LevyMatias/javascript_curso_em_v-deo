function verificar(){
    var date = new Date();
    var year = date.getFullYear();
    var fAno = document.getElementById('fnum');
    var res = document.getElementById('res');
    if(fAno.value.length == 0 || fAno.value > year){
        alert("Verifique os dados e tente novamente!");
    }
    else {
        var fSex = document.getElementsByName('fs');
        var idade = year - Number(fAno.value);
        var gen = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto'); 

        if(fSex[0].checked){
            gen = 'homem';
            if(idade >= 0 && idade <= 12){
                // crianca
                img.setAttribute('src', 'crianca-m.jpg');
            } else if(idade <= 50){
                // adulto
                img.setAttribute('src', 'jovem-homem.jpg');
            } else {
                // idoso
                img.setAttribute('src', 'adulto-m.jpg');
            }
        }
        else if(fSex[1].checked){
            gen = 'mulher';
            if(idade >= 0 && idade <= 12){
                // crianca
                img.setAttribute('src', 'crianca-f.jpg');
            } else if(idade <= 50){
                // adulto
                img.setAttribute('src', 'mulher-jovem.jpg');
            } else {
                // idoso
                img.setAttribute('src', 'adulto-f.jpg');
            }
        }
        res.innerHTML = `O ${gen} com ${idade} anos!`;
        res.appendChild(img);
    }
}