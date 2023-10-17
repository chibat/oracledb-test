# oracledb-test

## start oracle database

```
$ docker run --name test -p 1521:1521 -e ORACLE_RANDOM_PASSWORD="y" -v ${PWD}/init_scripts:/container-entrypoint-initdb.d gvenzl/oracle-xe
```

## Deno
```
$ cd deno
$ deno --version
deno 1.37.2 (release, x86_64-unknown-linux-gnu)
v8 11.8.172.13
typescript 5.2.2
$ deno task start
Task start deno run --allow-sys --allow-env --allow-net main.ts
error: Uncaught (in promise) TypeError: The "string" argument must be of type string or an instance of Buffer or ArrayBuffer. Received undefined
    at Function.byteLength (ext:deno_node/internal/buffer.mjs:359:11)
    at WritePacket.writeKeyValue (file:///home/chiba/.cache/deno/npm/registry.npmjs.org/oracledb/6.2.0/lib/thin/protocol/packet.js:514:32)
    at AuthMessage.encode (file:///home/chiba/.cache/deno/npm/registry.npmjs.org/oracledb/6.2.0/lib/thin/protocol/messages/auth.js:186:11)
    at Protocol._encodeMessage (file:///home/chiba/.cache/deno/npm/registry.npmjs.org/oracledb/6.2.0/lib/thin/protocol/protocol.js:108:20)
    at Protocol._processMessage (file:///home/chiba/.cache/deno/npm/registry.npmjs.org/oracledb/6.2.0/lib/thin/protocol/protocol.js:151:18)
    at ThinConnectionImpl.connect (file:///home/chiba/.cache/deno/npm/registry.npmjs.org/oracledb/6.2.0/lib/thin/connection.js:687:30)
    at eventLoopTick (ext:core/01_core.js:183:11)
    at async Object.getConnection (file:///home/chiba/.cache/deno/npm/registry.npmjs.org/oracledb/6.2.0/lib/oracledb.js:642:3)
```

## Node
```
$ cd node
$ npm run node

> node@1.0.0 node
> node index.mjs

{
  metaData: [
    {
      name: 'TABLE_NAME',
      dbType: [DbType DB_TYPE_VARCHAR],
      nullable: false,
      byteSize: 128,
      dbTypeName: 'VARCHAR2',
      fetchType: [DbType DB_TYPE_VARCHAR]
    }
  ],
  rows: [
    [ 'REGIONS' ],
    [ 'COUNTRIES' ],
    [ 'CITIES' ],
    [ 'CURRENCIES' ],
    [ 'CURRENCIES_COUNTRIES' ]
  ]
}
```



