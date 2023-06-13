var listaCadastro = []
listaCadastro = JSON.parse(localStorage.getItem('bdcadastrinho'))
if (listaCadastro == null) {
    listaCadastro = []
}
console.log(listaCadastro);

function login() {
    var nome = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    var encontrado = false
    listaCadastro.forEach((item, i) => {
        if (nome == item.email && senha == item.senha) {
            alert('Bem Vindo ao StarGeek')
            encontrado = true
            location.href="pagina-principal.html"
        }
    })

    if (encontrado == false) {
        alert ('Usuário não encontrado')
        return
    }

    
}   