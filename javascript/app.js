
function sendMessage() {
    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let text = document.getElementById('mensagem').value;
    let message = (`Olá, eu me chamo, ${nome}!\nE-mail: ${email}\nTelefone: ${telefone}\n${text}`);

    /*Validação campos vazios */

    if (nome =="") {
        const nameEmpty = document.getElementById('nameEmpty').innerHTML = 'Por favor, insira seu nome!'
        return false    
    } else if (email =="" ) {
        const emailEmpty = document.getElementById('emailEmpty').innerHTML = 'Por favor, insira seu email '
        return false    
    }else if(telefone ==""){
        const foneEmpty = document.getElementById('foneEmpty').innerHTML = 'Por favor, insira seu número de celular!'
        return false    
    }else
        nameEmpty.innerHTML = ""
        emailEmpty.innerHTML = ""
        foneEmpty.innerHTML = ""
        

    window.open("https://wa.me/119999999?text=" + encodeURIComponent(message));
      
}

const click = document.getElementById('btn-Send')

click.addEventListener('click', function(event){
    event.preventDefault;
    sendMessage();
});


/*Função Regular (Regex para Validação do email) */
function validarEmail(email){
    
    let re = /\S+@\S+\.\S+/;
    return re.test(email)
}


/*Ano atual*/

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

document.getElementById('date').innerHTML = anoAtual