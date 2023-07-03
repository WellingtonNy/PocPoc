import connection from "../database/database.connection"

type Rifa ={
    id: number,
    dia: string,
    numero: number;
}

export async function todasAsRifas() {
    const query = 'SELECT * from historico_rifas'
   const retorno = await connection.query<Rifa>(query)

   return retorno.rows
}

export async function postarResultado(dia,numero) {
    const query = (`INSERT INTO historico_rifas (dia, numero)
    VALUES ($1,$2);`)
    
}