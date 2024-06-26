import { Emprestimo } from "../domain/emprestimo";
import { Livro } from "../domain/livro";
import { Usuario } from "../domain/usuario";

var leia = require("prompt-sync")();
export async function cadastrarEmprestimo(){
    let usuario:Usuario|null=null;
    while(usuario == null){ 
        let idusuario = leia("informe o id do usuario :")
        usuario = await Usuario.procurarPeloId(idusuario)
        if(usuario == null){
            console.log("usuario não encontrado: ")
        }
    }

    let livro:Livro|null=null;
    while(livro== null){ 
        let idLivro:number = leia("informe o id do livro :")
        livro = await Livro.procurarPeloId(idLivro)
        if(livro == null){
            console.log("livro não encontrado: ")
        }
    }
    let datadeemprestimo = leia("informe a data do emprestimo: ")
    let datadedevolucao = leia("informe a data de devolução: ")
    let emprestimo:Emprestimo = new Emprestimo(usuario, livro, datadeemprestimo, datadedevolucao,null);
    await emprestimo.cadastrar();
    console.log("Empréstimo cadastrado com sucesso.")
}
export async function listarEmprestimo(){
    let usuario:Usuario|null=null;
    
    while(usuario== null){ 
        let idUsuario:number = leia("informe o id do usuario emprestimo:")
        usuario = await Usuario.procurarPeloId(idUsuario)
        if(usuario == null){
            console.log("livro não encontrado: ")
        }
    }
    let listaDeEmprestimo:Emprestimo[]=await Emprestimo.listar(usuario)
    
    if(listaDeEmprestimo.length == 0){
        console.log("nenhum empréstimo encontrado: ")

    }
    else{
        listaDeEmprestimo.forEach(function(emprestimo){
            console.log("Id do empréstimo: "+ emprestimo.id)
            console.log("Título do livro: "+ emprestimo.livro.titulo)
            console.log("Data do empréstimo: "+ emprestimo.dataEmprestimo)
            console.log("Data do Retorno: "+ emprestimo.dataRetorno)

        })

    }
    
    
}

export async function removerEmprestimo(){
    let id = leia("informe o id do emprestimo: ")
    let emprestimoaserremovido: Emprestimo|null = await Emprestimo.procurarPeloId(id);
    if(emprestimoaserremovido == null){
        console.log(" emprestimo não encontrado: ")
    }else{
        await emprestimoaserremovido.remover();
        console.log("emprestimo removido com sucésso: ")
    }
}
export async function alterarEmprestimo(){
    let idEmprestimo: number = leia("Digite o id do empréstimo que deseja editar");
        let emprestimo: Emprestimo | null = await Emprestimo.procurarPeloId(idEmprestimo);
        if(emprestimo==null)
            console.log("Empréstimo não encontrado");
        else {
            let novaDataRetorno = leia("Informe a nova data de retorno");
            emprestimo.dataRetorno = novaDataRetorno;
            emprestimo.alterar();
        }
}               