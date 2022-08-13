function contar(){
    var inicio = document.getElementById('num1');
    var fim = document.getElementById('num2');
    var passo = document.getElementById('num3');
    var res = document.getElementById('res');

    if(inicio.value.length === 0){
        alert("Verifique os dados e tente novamente!");
    } else {
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        let r = Number(res.value);
        for(let j = i; j < f; j++){
            if(res === f) break;
            res.innerHTML += `${j * p} `;
        }
    }

    
}