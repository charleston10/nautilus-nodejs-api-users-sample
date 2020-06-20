import { route, GET, POST } from 'awilix-express';
import HTTP_STATUS from 'http-status';

@route('/users')
export default class UserController {

    private _getAll: any;
    private _create: any;

    constructor({ getAll, create }: any) {
        this._getAll = getAll;
        this._create = create;
    }

    @GET()
    async get(req: any, res: any, next: any) {
        const { SUCCESS, ERROR } = this._getAll.outputs;

        this._getAll
            .on(SUCCESS, (listResult: Array<Object>) => {
                res
                    .status(HTTP_STATUS.OK)
                    .json(listResult);
            })
            .on(ERROR, next);

        this._getAll.execute();
    }

    @POST()
    async create(req: any, res: any, next: any) {
        const { SUCCESS, ERROR } = this._create.outputs;

        this._create
            .on(SUCCESS, (result: Object) => {
                res
                    .status(HTTP_STATUS.OK)
                    .json(result);
            })
            .on(ERROR, next);

        this._create.execute(req.body);
    }
}