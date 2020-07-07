import path from 'path';
import {
    container,
    application,
    database,
    logger
} from 'nautilus-nodejs-api-core';

application
    .register(container)
    .loadValues([
        path.join(`data`, `mappers`),
        path.join(`domain`, `model`)
    ], __dirname)
    .loadModules([
        path.join(`data`, `repository`, `*.*`),
        path.join(`domain`, `usecase`, `*.*`)
    ], __dirname)
    .loadRoutes(
        path.join(`presentation`, `controllers`, `*.*`)
        , __dirname)
    .loadDatabase(
        database
            .register(container)
            .configure({
                host: process.env.DB_HOST,
                dialect: process.env.DB_DIALECT,
                database: process.env.DB_NAME,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                options: { logging: false }
            })
            .loadEntity(
                path.join(`data`, `local`, `entities`)
                , __dirname)
    )
    .loadMiddleware([
        path.join(`core`, `middleware`)
    ], __dirname)//load middlewares
    .startDatabase()
    .startServer(process.env.PORT || 3000)
    .catch((e: any) => {
        logger.error(e.stack);
        process.exit();
    })