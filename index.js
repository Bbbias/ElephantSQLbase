(async () => {
    const db = require("./db");
    console.log("Começou!")

    // console.log('INSERT INTO CLIENTES');
    // const result = await db.insertCustomers({nome: "Zé", idade: 18, uf: "SP"});
    // console.log(result.rowCount);
    
    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);

    console.log('UPDATE CLIENTES');
    const result2 = await db.updateCustomers(1, {nome: "Tereza", idade: 72, uf: "SC"});
    console.log(result2.rowCount);

    // console.log('DELETE FROM CLIENTES');
    // const result3 = await db.deleteCustomers(1);
    // console.log(result3.rowCount);
    
 }
)();