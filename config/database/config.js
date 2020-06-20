module.exports = {
    development: {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    },
    production: {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        pool: {
            max: 9,
            min: 0,
            idle: 10000
        }
    }
};