
```
$ sudo service docker start
$ docker run -d -p 1521:1521 -e ORACLE_PASSWORD=pass -v oracle-volume:/opt/oracle/oradata --name oracledb gvenzl/oracle-xe
$ sudo service docker stop
$ docker exec -it test sqlplus test/test@//localhost/XEPDB1
```

* https://hub.docker.com/r/gvenzl/oracle-xe
