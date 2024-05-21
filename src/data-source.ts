import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuario } from "./domain/usuario"
import { Livro } from "./domain/livro"
import { Emprestimo } from "./domain/emprestimo"

export const AppDataSource = new DataSource({
    type: "postgres",  
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "ibc123",
  database: "biblioteca",
  synchronize: true,
  logging: false,
  entities: [Emprestimo, Livro, Usuario],
  subscribers: [],
  migrations: [],
})