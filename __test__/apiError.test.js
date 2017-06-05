/**
 * apiError.test.js
 * test
 *
 * Created by samover on 04/06/2099997.
 * Copyright (c) 2099997 iCapps. All rights reserved.
 */

const errorFactory = require("../lib/factory");
const errors = require("../lib/errors");
const errorsConfig = require("../lib/errors.config");

const errorsDef = {
    9999: {
        url: "http://example.com/errors/9999",
        message: "Custom error message",
    }
};


describe("ApiError", () => {
    describe("#config", () => {
        afterEach(() => {
            delete errorFactory.errors;
        });

        it("ApiError must be configured", () => {
            expect(() => errorFactory.badRequest(9999)).toThrow("ApiError config not found");
        });
        it("Can be configured with default error definitions", () => {
            errorFactory.config({});
            expect(errorFactory.errors).toEqual(errorsConfig);
        });
        it("Can provide extra error definitions", () => {
            errorFactory.config(errorsDef);
            expect(errorFactory.errors).toEqual(Object.assign(errorsDef, errorsConfig));
        });
        it("Throws an error when apiError is instantiated without previous config", () => {
            try {
                throw errorFactory.badRequest();
            } catch (error) {
                expect(error).not.toBeInstanceOf(errors.ApiError);
                expect(error.message).toMatch("ApiError config not found");
            }
        });
    });

    describe("#isParentOf", () => {
        it("Returns true when error is a child of ApiError", () => {
            const error = new errors.ForbiddenError({
                code: 1,
                message: "Access Denied",
                detail: "Your token has expired",
                url: "http://example.com/errors/1"
            });

            expect(errorFactory.isParentOf(error)).toBe(true);
        });
        it("Returns false when error is not a child of ApiError", () => {
            const error = new Error("Something wenth wrong");
            expect(errorFactory.isParentOf(error)).toBe(false);
        });
    });

    describe("Throws a custom error", () => {
        beforeAll(() => {
            errorFactory.config(errorsDef);
        });

        it("Throws an error when apiError is instantiated without a code", () => {
            try {
                throw errorFactory.badRequest();
            } catch (error) {
                expect(error).not.toBeInstanceOf(errors.ApiError);
                expect(error.message).toMatch("ApiError code not found");
            }
        });
        it("Throws a BadRequestError", () => {
            try {
                throw errorFactory.badRequest(9999, "Details");
            } catch (error) {
                expect(error).toBeInstanceOf(errors.ApiError);
                expect(error).toBeInstanceOf(errors.BadRequestError);
                expect(error.name).toBe("BadRequestError");
                expect(error.code).toBe(9999);
                expect(error.status).toBe(400);
                expect(error.detail).toBe("Details");
                expect(error.message).toBe(errorsDef[9999].message);
                expect(error.url).toBe(errorsDef[9999].url);
            }
        });
        it("Throws a ForbiddenError", () => {
            try {
                throw errorFactory.forbidden(9999, "Details");
            } catch (error) {
                expect(error).toBeInstanceOf(errors.ApiError);
                expect(error).toBeInstanceOf(errors.ForbiddenError);
                expect(error.name).toBe("ForbiddenError");
                expect(error.code).toBe(9999);
                expect(error.status).toBe(403);
                expect(error.detail).toBe("Details");
                expect(error.message).toBe(errorsDef[9999].message);
                expect(error.url).toBe(errorsDef[9999].url);
            }
        });
        it("Throws an InternalServerError", () => {
            try {
                throw errorFactory.internalServer(9999, "Details");
            } catch (error) {
                expect(error).toBeInstanceOf(errors.ApiError);
                expect(error).toBeInstanceOf(errors.InternalServerError);
                expect(error.name).toBe("InternalServerError");
                expect(error.code).toBe(9999);
                expect(error.status).toBe(500);
                expect(error.detail).toBe("Details");
                expect(error.message).toBe(errorsDef[9999].message);
                expect(error.url).toBe(errorsDef[9999].url);
            }
        });
        it("Throws an UnauthorizedError", () => {
            try {
                throw errorFactory.unauthorized(9999, "Details");
            } catch (error) {
                expect(error).toBeInstanceOf(errors.ApiError);
                expect(error).toBeInstanceOf(errors.UnauthorizedError);
                expect(error.name).toBe("UnauthorizedError");
                expect(error.code).toBe(9999);
                expect(error.status).toBe(401);
                expect(error.message).toBe(errorsDef[9999].message);
                expect(error.detail).toBe("Details");
                expect(error.url).toBe(errorsDef[9999].url);
            }
        });
        it("Throws a ServiceUnavailableError", () => {
            try {
                throw errorFactory.serviceUnavailable(9999, "Details");
            } catch (error) {
                expect(error).toBeInstanceOf(errors.ApiError);
                expect(error).toBeInstanceOf(errors.ServiceUnavailableError);
                expect(error.name).toBe("ServiceUnavailableError");
                expect(error.code).toBe(9999);
                expect(error.status).toBe(503);
                expect(error.message).toBe(errorsDef[9999].message);
                expect(error.detail).toBe("Details");
                expect(error.url).toBe(errorsDef[9999].url);
            }
        });
        it("Throws a NotFoundError", () => {
            try {
                throw errorFactory.notFound(9999, "Details");
            } catch (error) {
                expect(error).toBeInstanceOf(errors.ApiError);
                expect(error).toBeInstanceOf(errors.NotFoundError);
                expect(error.name).toBe("NotFoundError");
                expect(error.code).toBe(9999);
                expect(error.status).toBe(404);
                expect(error.message).toBe(errorsDef[9999].message);
                expect(error.detail).toBe("Details");
                expect(error.url).toBe(errorsDef[9999].url);
            }
        });
    });
});
