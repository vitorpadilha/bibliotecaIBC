import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Livro } from "./livro";
import { Usuario } from "./usuario";
import { AppDataSource } from "../data-source";
@Entity()
export class Emprestimo {
    @ManyToOne(()=>Usuario)
    @JoinColumn()
    usuario: Usuario;
    @ManyToOne(()=>Livro)
    @JoinColumn()
    livro:Livro;
    @PrimaryGeneratedColumn()
    id?: number
    @Column()
    dataEmprestimo:string;
    @Column()
    dataRetorno:string;
    constructor(usuario:Usuario, livro:Livro, dtaemprestimo:string, dataretorno:string, id: number|null){
        this.usuario = usuario;
        if(id)
            this.id=id;
        this.livro = livro;
        this.dataEmprestimo = dtaemprestimo;
        this.dataRetorno = dataretorno;
    }
    exibir(){
        
    }
    async cadastrar(){
        await AppDataSource.manager.save(this);
    }
    async alterar(){
        await AppDataSource.manager.save(this);
    }
    async remover(){
        await AppDataSource.manager.save(this);
    }
    static async listar(usuario: Usuario): Promise<Emprestimo[]>{
        return await AppDataSource.manager.getRepository(Emprestimo).find({where: {usuario:usuario}, relations : ["livro", "usuario"]});
    }
    static async procurarPeloId(id: number): Promise<Emprestimo | null>{
        return await AppDataSource.manager.getRepository(Emprestimo).findOneBy({id:id});
    }
}