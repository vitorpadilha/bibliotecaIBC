import { Livro } from "../domain/livro";

var leia = require("prompt-sync")();
export async function cadastrarLivro(){
    let tituloLivro = leia("informe o titulo: ")
    let autor = leia("informe o autor: ")
    let disponibilidade = leia("informe a disponibilidade: ")
    let categoria = leia("informe a categoria: ")
    let livro: Livro = new Livro(tituloLivro, autor, categoria, disponibilidade,null)
    await livro.cadastrar();
}
export async function listarLivro(){
    let stringdebusca = leia("informe o titulo que você deseja buscar: ")
    let listaDeLivros:Livro[]=await Livro.listar(stringdebusca)
    if(listaDeLivros.length == 0){
        console.log("nenhun livro encontrado: ")

    }
    else{
        listaDeLivros.forEach(function(livro){
            console.log("Id do livro: "+ livro.id)
            console.log("Título do livro: "+ livro.titulo)
        })
    }
    
}
export async function removerLivro(){
    let id = leia("informe o id do livro: ")
    let livroaserremovido: Livro|null = await Livro.procurarPeloId(id);
    if(livroaserremovido == null){
        console.log(" livro não encontrado: ")
    }
    else{
        await livroaserremovido.remover();
        console.log("livro removido com sucésso: ")
    }
}

export async function alterarLivro(){
    let id: number= leia("informe o aid do livro: ")
    let livroaeditar:Livro|null= await Livro.procurarPeloId(id);
    if(livroaeditar==null){
        console.log("livro não encontrado: ")
    }else{
     let novotitulo = leia("informe o novo titulo do livro: ")   
     let novoautor = leia("informe o novo autor do livro: ")
     let disponibilidade = leia("informe a disponibilidade do livro: ")
     let categoria = leia("informe a nova categoria do livro: ")
     livroaeditar.titulo= novotitulo;
     livroaeditar.autor = novoautor;
     livroaeditar.disponibilidade = disponibilidade;
     livroaeditar.categoria=categoria;
    await  livroaeditar.alterar();
     console.log("livro alterado com sucesso: ")
    }
}               