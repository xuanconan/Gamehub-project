//require mongoose and connect to database
var mongoose = require('mongoose');

// var connectionString = 'mongodb://localhost/cs5610';

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds125565.mlab.com:25565/heroku_p8cl5qsb'; // use yours
}

// mongodb://heroku_gdrfzfcv:hjnmv3ti0mcdq24s8u58sdckk7@ds133856.mlab.com:33856/heroku_gdrfzfcv

// hw6: var connectionString = 'mongodb://admin:admin@ds133964.mlab.com:33964/heroku_1gbtpnhz';
//                                                    ds133964.mlab.com:33964/heroku_1gbtpnhz

var connectionString = 'mongodb://admin:admin@ds125565.mlab.com:25565/heroku_p8cl5qsb';


//                                            ds133856.mlab.com:33856/heroku_gdrfzfcv
// mongodb://<dbuser>:<dbpassword>@ds125565.mlab.com:25565/heroku_p8cl5qsb
var db = mongoose.connect(connectionString, { userMongoClient: true });
module.exports = db;
