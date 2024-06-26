import { Column, Entity, Like, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { AppDataSource } from "../data-source";

@Entity()
export class Usuario{
    @Column()
    nome:string;
    @PrimaryGeneratedColumn()
     idDoEstudante:number|null;
    @Column()
    endereço:string;
    @Column()
    numerodotelefone:string;
    constructor(nome:string, iddoEstudante:number|null, endereço:string,numerodetelefone:string){
        this.nome=nome;
        this.idDoEstudante=iddoEstudante;
        this.endereço=endereço;
        this.numerodotelefone=numerodetelefone;
    }
    exibir(){
        
    }
    async cadastrar(){
                console.log("cadastrado com sucesso")
                await AppDataSource.manager.save(this);
    }
    alterar(){
        console.log("alterado com sucesso")
    }
    async remover(){
        await AppDataSource.manager.remove(this)
        console.log("removido com sucesso")
    }
    static async listar(nome:string):Promise<Usuario[]>{
        let retorno:Usuario[] = await AppDataSource.manager.getRepository(Usuario).find({where: {nome: Like("%"+ nome+"%")}});
        //console.log("listado com sucesso")
        return  retorno;
    }
   static async procurarPeloId(idDoUsuario: number):Promise<Usuario|null>{

    
    
    return await AppDataSource.manager.getRepository(Usuario).findOneBy({idDoEstudante: idDoUsuario})
        
    }
}
