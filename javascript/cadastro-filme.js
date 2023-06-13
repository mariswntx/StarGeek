var listafilme = []

listafilme = JSON.parse(localStorage.getItem('bdfilmes'))
if (listafilme == null) {
    listafilme = []
}
function gerar() {

    var nomeFilme = document.getElementById("nome").value
    var descricao = document.getElementById("descricao").value
    var link = document.getElementById("imagem").value
    var gif = document.getElementById("gif").value

    if (nomeFilme == "" || descricao == "" || link == "" || gif == '') {
        alert('Preencha todas as partes, não pode conter campos vazios!')
        return false
    }


    var filmes = {
        nomeFilme: nomeFilme,
        descricao: descricao,
        link: link,
        gif: gif
    }

    listafilme.push(filmes)
    localStorage.setItem('bdfilmes', JSON.stringify(listafilme))

    location.href="pagina-principal.html"


}

function carregarImagem() {
    document.getElementById("img").src = document.getElementById('imagem').value
}

function carregargif() {
    document.getElementById("imggif").src = document.getElementById('gif').value
}
function exibirCatalogoFilmes(){
    document.getElementById('listaFilme').innerHTML = ''
    listafilme.forEach((item, i) => {
            document.getElementById('listaFilme').innerHTML += `
            <div>     
                <a href='#'>
                    <img src="${item.link}" class="midia" id='_${i}' 
                    onMouseEnter="exibirIMG('${item.gif}', '_${i}')"
                    onMouseLeave="exibirIMG('${item.link}', '_${i}')">
                </a>
                <br> 
                
                <img src="img/bin.svg" onclick="excluirFilme(${i})"  class="lixeira">
            </div>`
        
    })
}

function exibirIMG (link, id){
    document.getElementById(id).src = link
}

function excluirFilme(i){
    if (confirm('Deseja realmente excluir esta mídia')){
        listafilme.splice(i, 1)
        localStorage.setItem('bdfilmes', JSON.stringify(listafilme))
        exibirCatalogoFilmes()
    }
}

exibirCatalogoFilmes()