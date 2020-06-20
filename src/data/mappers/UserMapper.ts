
const UserMapper = {
    toModel({ dataValues }: any) {
        const { id, name, email, photo_url, phone } = dataValues;

        return { id, name, email, photo_url, phone };
    },

    toEntity(survivor: any) {
        const { name, email, photo_url, phone } = survivor;

        return { name, email, photo_url, phone };
    }
};

module.exports = UserMapper;
