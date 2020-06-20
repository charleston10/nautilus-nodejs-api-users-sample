import { UseCase } from 'nautilus-nodejs-api-core'

class Create extends UseCase {

    private repository: any;
    private Model: any;

    constructor({ userRepository, userModel }: any) {
        super()
        this.repository = userRepository;
        this.Model = userModel;
    }

    async execute(data: any) {
        const { SUCCESS, ERROR } = this.outputs;

        const model = new this.Model(data);

        try {
            const newData = await this.repository.add(model);
            this.emit(SUCCESS, newData);
        } catch (error) {
            this.emit(ERROR, error);
        }
    }
}

Create.setOutputs(['SUCCESS', 'ERROR']);

export default Create;