document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#botao').addEventListener('click', function(){
        let text = document.querySelector('#texto').value

        document.querySelector('#resultado').innerHTML = uper(text)
    })

    function uper(txt){
        return txt.toUpperCase()
    }
})