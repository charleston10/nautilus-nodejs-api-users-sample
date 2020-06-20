import { BaseRepository } from 'nautilus-nodejs-api-core'

class UserRepository extends BaseRepository {

    constructor({ userEntity, userMapper }: any) {
        super(userEntity, userMapper);
    }
}

export default UserRepository;