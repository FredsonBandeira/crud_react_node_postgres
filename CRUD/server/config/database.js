const Pool = require('pg').Pool;
  

const pool = new Pool({
    user: 'byywhiikedqjap',
    host: 'ec2-52-30-159-47.eu-west-1.compute.amazonaws.com',
    database: 'd7l63906mn3ulg',
    password: '86689f08d966753db6fe644f9e48f1c3eef2cdf69ec38156c9979eae735e73d3',
    dialect: 'postgres',
    port: 5432,
    ssl:{rejectUnauthorized:false}
});

module.exports = pool;
