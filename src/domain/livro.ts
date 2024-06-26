import { Column, Entity, Like, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./categoria";
import { AppDataSource } from "../data-source";
import { Emprestimo } from "./emprestimo";
@Entity()   
export class Livro{
    @Column()
    titulo:string;
    @Column()
    autor:string;
    @Column()
    categoria:Categoria;
    @Column()
    disponibilidade:number;
    @PrimaryGeneratedColumn()
    id: number | null;
    @OneToMany(()=>Emprestimo, (emprestimo)=>emprestimo.livro)
    emprestimos!: Emprestimo[];
    constructor(titulo: string, autor:string, categoria:Categoria, disponibilidade:number, id:number|null) {
        this.titulo=titulo;
        this.id=id;
        this.autor=autor;
        this.categoria=categoria;
        this.disponibilidade=disponibilidade;
    }
    exibir(){
        
    }
    async cadastrar(){
        console.log("cadastrado com sucesso")
        await AppDataSource.manager.save(this);
    }
    async alterar(){
        await AppDataSource.manager.save(this)
    }
    async remover(){
        await AppDataSource.manager.remove(this)
    }
    static async listar(titulo:string): Promise<Livro[]>{

        //console.log("listado com sucesso")
        let retorno:Livro[] = await AppDataSource.manager.getRepository(Livro).find({where: {titulo: Like("%"+ titulo+"%")}});
        //console.log(retorno);
        return  retorno;
    }
    static async procurarPeloId(idDoLivro: number): Promise<Livro | null>{
        
        return await AppDataSource.manager.getRepository(Livro).findOneBy({id: idDoLivro})
    }
}
