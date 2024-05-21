import { Categoria } from "./domain/categoria";
import { Livro } from "./domain/livro";
import { Usuario } from "./domain/usuario";
            
var livro1: Livro = new Livro("O pequeno príncipe", "Antonio de Saint", Categoria.ROMANCE, 380,1);
var livro2: Livro = new Livro("O apanhador de sonhos", "Stephen King", Categoria.TERROR, 400,1)
//console.log(livro1.titulo)
var usuario1: Usuario = new Usuario("Veronica", 12, "Rua A", "454546");
var usuario2: Usuario = new Usuario("Cláudia", 32, "travessa 7", "788");
//livro1.exibir();
//livro2.exibir();
usuario1.exibir();
usuario2.exibir();
