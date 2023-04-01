module.exports = class UserDto {
    name;
    surname;
    email;
    ava;
    favouriteProducts;
    id;

    constructor(model) {
        this.name = model.name
        this.surname = model.surname
        this.email = model.email
        this.ava = model.ava
        this.favouriteProducts = model.favouriteProducts
        this.id = model._id
    }
}