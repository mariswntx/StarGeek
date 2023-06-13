var listausuario = []

listausuario = JSON.parse(localStorage.getItem('bdcadastrinho'))
if (listausuario == null) {
    listausuario = []
}
console.log(listausuario);

function gerar() {
    var nome = document.getElementById("nome").value

    var sobrenome = document.getElementById("sobrenome").value

    var email = document.getElementById("email").value

    var endereco = document.getElementById("endereco").value

    var senha = document.getElementById("senha").value


    if (nome == "" || email == "" || endereco == "" || senha == '') {
        alert('preencha todas as partes')
        return false
    }

    var usuario = {
        nome: nome,
        email: email,
        endereco: endereco,
        senha: senha
    }

    listausuario.push(usuario)
    localStorage.setItem('bdcadastrinho', JSON.stringify(listausuario))

    alert('Usuario cadastrado com sucesso ;)')

    location.href = "login.html"
}


