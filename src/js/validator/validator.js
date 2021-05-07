export class Validator {
    constructor (data) {
        this.validateUsername(data);
    }

    validateUsername(data) {
        if(/^[A-Za-z][\w\-]*[A-Za-z]$/.test(data) && !/\d{3,}/.test(data)) {
            this.name = data;
            return true;
        }
        throw new Error('передано недопустимое имя');
    }
}