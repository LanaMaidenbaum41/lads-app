var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'!Q@W#E4r5t6y',
database:'lads'

});

module.exports=connection;


