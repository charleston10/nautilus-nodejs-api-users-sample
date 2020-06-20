import {
    container,
    application,
    database,
    logger
} from 'nautilus-nodejs-api-core';

database
    .register(container)
    .loadEntity(`data\\local\\entities`, __dirname);

application
    .register(container)
    .loadValues(['data\\mappers', 'domain\\model'], __dirname)
    .loadModules([
        'data\\repository\\*.ts',
        'domain\\usecase\\*.ts'
    ], __dirname)
    .loadRoutes('presentation\\controllers\\*.ts', __dirname)
    .loadDatabase(database)
    .start(process.env.PORT || 3000)
    .catch((e: any) => {
        logger.error(e.stack);
        process.exit();
    })