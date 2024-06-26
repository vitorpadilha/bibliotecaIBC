import { NoVersionOrUpdateDateColumnError } from "typeorm";
import { Usuario } from "../domain/usuario"
var leia = require("prompt-sync")();
export async function cadastrarUsuario(){
let nome = leia("informe o nome: ")
let endereço = leia("informe o endereço: ")
let numerodetelefone = leia("informe o numero de telefone: ")
let usuario: Usuario = new Usuario(nome, null, endereço, numerodetelefone)
await usuario.cadastrar();
}
export async function listarUsuario(){
    let stringdebusca = leia("informe o nome que você deseja buscar: ")
    let listadeusuarios:Usuario[]=await Usuario.listar(stringdebusca)
    if(listadeusuarios.length == 0){
        console.log("nenhun usuario encontrado: ")

    }else{
        listadeusuarios.forEach(function(usuario){
            console.log("Id do usuario: "+ usuario.idDoEstudante)
            console.log("nome do usuario: "+ usuario.nome)
        })
    }
}
export async function removerUsuario(){
    let id = leia("informe o id do usuario: ")
    let usuarioaserremovido: Usuario|null = await Usuario.procurarPeloId(id);
    if(usuarioaserremovido == null){
        console.log(" usuario não encontrado: ")
    }else{
        await usuarioaserremovido.remover();
        console.log("usuario removido com sucésso: ")
    }
}

export async function alterarUsuario(){
    let id: number=  leia("informe o id do usuario: ")
    let usuarioaeditar:Usuario|null=await Usuario.procurarPeloId(id);
    if(usuarioaeditar == null){
        console.log("usuario não encontrado: ")
    }else{   
        let novonome = leia("informe o novo nome do usuario: ")
        let endereço = leia("informe o novo endereço: ")
        let telefone = leia("informe o novo telefone : ")
        usuarioaeditar.nome= novonome;
        usuarioaeditar.endereço = endereço;
        usuarioaeditar.numerodotelefone = telefone;
        await usuarioaeditar.alterar();
        console.log("usuario alterado com sucesso: ")
    }
}               
