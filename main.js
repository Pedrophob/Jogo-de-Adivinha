const numberInput = document.querySelector("#input_adivinha");
const buttonEnviar = document.querySelector("#button_enviar");
const valorCertain = 20 ;
const message = document.querySelector ("#mensagem");

function random(){
    const random = (num) => Math.floor(Math.random()*num)
}

buttonEnviar.addEventListener( "click" , function(e){
    e.preventDefault();

    const numberValue = numberInput.value;

    if (numberValue == valorCertain){
        message.textContent = `PARABENS! , você acertou , o numero era ${valorCertain} muito obrigado` ;
        message.classList = "mensagem-check";

        setTimeout(() => {
            message.textContent = ""
            message.classList = ""
        },10000);

    }else if (numberValue != valorCertain){
        message.textContent = "ERROU! , infelizmente você não acertou mas não tem problema você pode tentar novamente"
        message.classList = "mensagem-error";

        setTimeout(() => {
            message.textContent = ""
            message.classList = ""
        },10000);

    }

    numberInput.value = ""

} )