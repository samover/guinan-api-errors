const errorsConfig = require("./errors.config");
const errors = require("./errors");

module.exports = {
    config: function config(errorsDef = {}) {
        this.errors = Object.assign(errorsDef, errorsConfig);
    },
    isParentOf: function isParentOf(error) {
        return error instanceof errors.ApiError;
    },
    _create: function _create(type, code, detail) {
        if (!this.errors) throw new Error("ApiError config not found");
        if (!this.errors[code]) throw new Error("ApiError code not found");
        return new errors[type]({
            code,
            message: this.errors[code].message,
            url: this.errors[code].url,
            detail,
        });
    },
    badRequest: function badRequest(code, detail) {
        return this._create("BadRequestError", code, detail);
    },
    notFound: function notFound(code, detail) {
        return this._create("NotFoundError", code, detail);
    },
    forbidden: function forbidden(code, detail) {
        return this._create("ForbiddenError", code, detail);
    },
    internalServer: function internalServer(code, detail) {
        return this._create("InternalServerError", code, detail);
    },
    serviceUnavailable: function serviceUnavailable(code, detail) {
        return this._create("ServiceUnavailableError", code, detail);
    },
    unauthorized: function unauthorized(code, detail) {
        return this._create("UnauthorizedError", code, detail);
    },
};
