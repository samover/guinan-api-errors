/**
 * index.js
 * server/errors
 *
 * Created by samover on 09/05/2017.
 */

const uuid = require("uuid").v4;
const httpStatus = require("http-status");

// ABSTRACT CLASS
class ApiError extends Error {
    constructor({ code, status, message, detail, url }) {
        super(message);
        this.id = uuid();
        this.code = code;
        this.status = status;
        this.detail = detail;
        this.url = url;
    }
}

class BadRequestError extends ApiError {
    constructor(opts) {
        super(Object.assign(opts, { status: httpStatus.BAD_REQUEST }));
        this.name = "BadRequestError";
    }
}

class NotFoundError extends ApiError {
    constructor(opts) {
        super(Object.assign(opts, { status: httpStatus.NOT_FOUND }));
        this.name = "NotFoundError";
    }
}

class ForbiddenError extends ApiError {
    constructor(opts) {
        super(Object.assign(opts, { status: httpStatus.FORBIDDEN }));
        this.name = "ForbiddenError";
    }
}

class InternalServerError extends ApiError {
    constructor(opts) {
        super(Object.assign(opts, { status: httpStatus.INTERNAL_SERVER_ERROR }));
        this.name = "InternalServerError";
    }
}

class ServiceUnavailableError extends ApiError {
    constructor(opts) {
        super(Object.assign(opts, { status: httpStatus.SERVICE_UNAVAILABLE }));
        this.name = "ServiceUnavailableError";
    }
}

class UnauthorizedError extends ApiError {
    constructor(opts) {
        super(Object.assign(opts, { status: httpStatus.UNAUTHORIZED }));
        this.name = "UnauthorizedError";
    }
}
module.exports = {
    ApiError,
    BadRequestError,
    NotFoundError,
    ForbiddenError,
    UnauthorizedError,
    ServiceUnavailableError,
    InternalServerError,
};
