import { AppDataSource } from "./data-source";
import { alterarEmprestimo, cadastrarEmprestimo, listarEmprestimo, removerEmprestimo } from "./view/moduloEmprestimo";
import { alterarLivro, cadastrarLivro, listarLivro, removerLivro } from "./view/moduloLivro";
import { alterarUsuario, cadastrarUsuario, listarUsuario, removerUsuario } from "./view/moduloUsuario";
/**
 * Todo o programa vai ser executado no contexto de um banco de dados por isso.
 * Inicializa o AppDataSource e depois manda executar a função de nome "inicio".
 */
AppDataSource.initialize().then(
async() =>{inicio()}
).catch((error: any)=>console.log("erro ao conectar ao banco de dados ",error))
/**
 * Adiciona o prompt-sync para fazer a leitura do que o usuário digitar.
 */
var leia = require("prompt-sync")();

/**
 * Define a função "inicio", que é a primeira a ser chamada e tem objetivo de verificar qual módulo o usuário quer entrar (Livro, Usuário ou Empréstimo)
 */
async function inicio(){
    /**
     * Define a variável "opcaoModulo" como vazia.
     */
    var opcaoModulo: string = "";
    /**
     * Enquanto a variável opcaoModulo for diferente de S.
     */
    while(opcaoModulo.toUpperCase() != "S"){
        /**
         * Define o valor da variável "opcaoModulo" com o que o usuário digitar
         */
        opcaoModulo = leia("O que você deseja fazer? digite: (U) para usuário, (L) para livro, (E) para empréstimo");
        /**
         * Se a opcaoModulo for igual a U, chama a função "moduloUsuario" que está dentro deste arquivo (app.ts)
         */
        if(opcaoModulo.toUpperCase() == "U"){
            console.log("Você entrou no módulo Usuário ");
            await moduloUsuario();
        }
        /**
         * Se a opcaoModulo for igual a L, chama a função "moduloLivro" que está dentro deste arquivo (app.ts)
         */
        else if(opcaoModulo.toUpperCase() == "L"){
            console.log("Você entrou no módulo Livro ");
            await moduloLivro();
        }
        /**
         * Se a opcaoModulo for igual a E, chama a função "moduloEmprestimo" que está dentro deste arquivo (app.ts)
         */
        else if(opcaoModulo.toUpperCase() == "E"){
            console.log("Você entrou no módulo Empréstimo ");
            await moduloEmprestimo();
        }
        /**
         * Se a opcaoModulo for diferente de S, mostra a opção "Opção inválida"
         */
        else if(opcaoModulo.toUpperCase()!="S"){
            console.log("Opção inválida ");
        }
    }
}
/**
 * Define a função de nome "moduloLivro" que tem o objetivo de verificar quais funções do arquivo "domain/moduloLivro.ts" devem ser executadas de acordo com a opção que o usuário escolher.
 */
async function moduloLivro(){
     /**
     * Define o valor da variável "opcaoLivro" com o que o usuário digitar.
     */
    var opcaoLivro = leia("Digite \"C\" para cadastrar, \"L\" para listar, \"E\" para editar, \"R\" para remover e \"S\" para sair do módulo" );
     /**
     * Se o usuário digitar C, executa a funcao "cadastrarLivro" que está dentro do arquivo moduloLivro.ts.
     */
    if(opcaoLivro.toUpperCase() == "C"){
        console.log("Você está na opção de cadastro ");
        await cadastrarLivro();
    }
    /**
     * Se o usuário digitar L, executa a funcao "listarLivro" que está dentro do arquivo moduloLivro.ts.
     */
    else if(opcaoLivro.toUpperCase() == "L"){
        console.log("Você está na opção de lista ");
        await listarLivro();
    }
    /**
     * Se o usuário digitar E, executa a funcao "alterarLivro" que está dentro do arquivo moduloLivro.ts.
     */
    else if(opcaoLivro.toUpperCase() == "E"){
        console.log("Você está na opção editar ")
        await alterarLivro();
    }
    /**
     * Se o usuário digitar R, executa a funcao "removerLivro" que está dentro do arquivo moduloLivro.ts.
     */
    else if(opcaoLivro.toUpperCase() == "R"){
        console.log("Você está na opção remover ")
        await removerLivro();
    }
    /**
     * Se o usuário digitar S, retorna null e, consequentemente, retorna a execução da função início
     */
    else if(opcaoLivro.toUpperCase() == "S") {
        console.log("Você está saindo desse módulo ");
        return;
    }
    /**
     * Executa a função "moduloLivro" novamente para pedir as opções do módulo livro novamente (Cadastrar, listar, editar ou remove)
     */
    await moduloLivro();
}
async function moduloUsuario(){
    var opcaoUsuario = leia("Digite \"C\" para cadastrar, \"L\" para listar, \"E\" para editar, \"R\" para remover e \"S\" para sair do módulo" );
    if(opcaoUsuario.toUpperCase() == "C"){
        console.log("Você está na opção de cadastro ");
        await cadastrarUsuario();
    }else if(opcaoUsuario.toUpperCase() == "L"){
        console.log("Você está na opção de lista ");
        await listarUsuario();
    }else if(opcaoUsuario.toUpperCase() == "E"){
        console.log("Você está na opção editar ")
        await alterarUsuario();
    }else if(opcaoUsuario.toUpperCase() == "R"){
        console.log("Você está na opção remover ")
        await removerUsuario();
    }else if(opcaoUsuario.toUpperCase() == "S") {
        console.log("Você está saindo desse módulo ");
        return;
    }
    await moduloUsuario();
}
async function moduloEmprestimo(){
    var opcaoEmprestimo = leia("Digite \"C\" para cadastrar, \"L\" para listar, \"E\" para editar, \"R\" para remover e \"S\" para sair do módulo" );
    if(opcaoEmprestimo.toUpperCase() == "C"){
        console.log("Você está na opção de cadastro ");
        await cadastrarEmprestimo();
    }else if(opcaoEmprestimo.toUpperCase() == "L"){
        console.log("Você está na opção de lista ");
        await listarEmprestimo()
    }else if(opcaoEmprestimo.toUpperCase() == "E"){
        console.log("Você está na opção editar ")
        await alterarEmprestimo();
    }else if(opcaoEmprestimo.toUpperCase() == "R"){
        console.log("Você está na opção remover ")
        await removerEmprestimo();
    }else if(opcaoEmprestimo.toUpperCase() == "S") {
        console.log("Você está saindo desse módulo ");
        return;
    }
    await moduloEmprestimo();
}