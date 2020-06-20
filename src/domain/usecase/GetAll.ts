import { UseCase } from 'nautilus-nodejs-api-core'

class GetAll extends UseCase {

    private repository: any;

    constructor({ userRepository }: any) {
        super()
        this.repository = userRepository;
    }

    async execute() {
        const { SUCCESS, ERROR } = this.outputs;

        try {
            const data = await this.repository.getAll();
            
            this.emit(SUCCESS, data);
        } catch (error) {
            this.emit(ERROR, error);
        }
    }
}

GetAll.setOutputs(['SUCCESS', 'ERROR']);

export default GetAll;