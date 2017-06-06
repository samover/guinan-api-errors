# README

This module exposes a series of predefined errors to be used consistently across
all the iCapps API's.

## Installation

- `yarn add guinan-api-errors`
- `const ApiError = require('guinan-api-errors')`

## Configuration

Configure once at the entry point of your app: `ApiError.config({})`.

### Aditional error definitions

You can pass a config object which will extend the [default iCapps error definitions](https://github.com/samover/api-error/blob/master/lib/errors.config.js). Make sure to use error codes > 9999 for additional error definitions.

Use the format:
```
{
    10010: {
        message: "Parking is full",
        url: "http://example.com/errors/10010",
    },
}
```

## Usage

`ApiError` exposes the methods `badRequest, forbidden, unauthorized, notFound,
serviceUnavailable and internalServer`. They all take the arguments `(code:
Number, detail: String)`.

E.g: `throw ApiError.badRequest(1001, "Something went wrong")`.

## Types of errors

- `BadRequestError`,
- `NotFoundError`,
- `ForbiddenError`,
- `UnauthorizedError`,
- `ServiceUnavailableError`,
- `InternalServerError`,

All errors are also instances of `Error`, `ApiError`.

## Development

Clone the repo and install dependencies: `yarn`.
Run the tests with `yarn test`.
