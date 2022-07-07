const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

console.log(process.env.DIALECT);
console.log(process.env.DB_USER);

const db = new Sequelize({
	dialect:process.env.DIALECT,
	host: process.env.HOST,
	username: process.env.DB_USER,
	password: process.env.PASSWORD,
	port: process.env.DB_PORT,
	database: process.env.DATABASE,
	logging: false,
	dialectOptions: process.env.NODE_ENV === 'production' ? {
		ssl: {
			require: true,
			rejectUnauthorized: false
		}
	} : {},
});

module.exports = { 
    db, 
    DataTypes 
};