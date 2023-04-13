async function connect() {
        if (global.connection)
        return global.connection.connect();

        const { Pool } = require('pg');
        const pool = new Pool ({
        connectionString: 'postgres://fuarktoa:i5l7w_L1T123B_-ptE2csOu0qzFbr9YB@kandula.db.elephantsql.com/fuarktoa'
    });

    //apenas testando conexão
        const client = await pool.connect();
        console.log("Criou pool de conexão no PostgreSQL")

        const res = await client.query('SELECT NOW()');
        console.log(res.rows[0]);
        client.release();

    //Aguardando npra usar sempre o mesmo 
        global.connection = pool
        return pool.connect();
        //Fecha conexão
}

    async function selectCustomers() {
        const client = await connect();
        const res = await client.query('SELECT * FROM clientes');
        return res.rows;
        }
    
    // async function insertCustomers(customer){
    //         const client = await connect();
    //         const sql = `INSERT INTO clientes(nome, idade, uf) VALUES ($1, $2, $3)`;
    //         const values = [customer.nome, customer.idade, customer.uf];
    //         return await client.query(sql, values);
    //     }
    
    async function updateCustomers(id, customer){
         const client = await connect();
         const sql = `UPDATE clientes SET nome=$1, idade=$2, uf=$3 WHERE id=$4`;
         const values = [customer.nome, customer.idade, customer.uf, id];
         return await client.query(sql, values);
     }
    
    // async function deleteCustomers(id){
    //      const client = await connect();
    //      const sql = `DELETE FROM clientes where id=$1`;
    //      return await client.query(sql, [id]);
    //   
    
    module.exports = {selectCustomers, /*insertCustomers*/ updateCustomers/*, deleteCustomers*/};
    
 
