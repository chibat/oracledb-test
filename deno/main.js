// @deno-types="npm:@types/oracledb"
import oracledb from "oracledb";

if (Deno.args[0] === "thick") {
  oracledb.initOracleClient();
}

const conn = await oracledb.getConnection({
  connectString: "localhost:1521/XEPDB1",
  user: "test",
  password: "test",
});
const result = await conn.execute("select table_name from tabs");
console.log(result);
conn.close();

