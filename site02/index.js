verificar = () => {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || fAno.value > ano || fAno.value < 0) {

        alert("Verifique a data")
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade =ano - Number(fAno.value);
        var genero = ''
        if (fsex[0].checked){
        genero = "homem"
        }else{
            genero = "mulher"
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Gênero: ${genero}. Idade: ${idade} anos` 
    }


}
