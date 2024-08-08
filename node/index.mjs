import oracledb from "oracledb";

const conn = await oracledb.getConnection({ connectString: "localhost:1521/XEPDB1", user: "test", password: "test" });
const result = await conn.execute("select table_name from tabs");
console.log(result);
conn.close();

