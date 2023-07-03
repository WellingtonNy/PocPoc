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

export async function postarResultado(dia:string, numero:number) {
    const query = (`INSERT INTO historico_rifas (dia, numero)
    VALUES ($1,$2);`)
    await connection.query(query,[dia,numero])  
}

export async function deletarResultado(id:number) {
    const query = (`DELETE FROM historico_rifas
    WHERE id=$1;`)
    await connection.query(query,[id])  
}

export async function attResultado(id: number,dia:string, numero:number) {
    const query = (`UPDATE historico_rifas
    SET dia = $2, numero = $3
    WHERE id=$1;`)
    await connection.query(query,[id,dia,numero])  
}
