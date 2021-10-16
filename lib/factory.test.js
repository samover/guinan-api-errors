const factory = require("./factory")
// @ponicode
describe("factory.isParentOf", () => {
    test("0", () => {
        let callFunction = () => {
            factory.isParentOf("invalid choice")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            factory.isParentOf("error\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            factory.isParentOf("multiple errors occurred")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            factory.isParentOf("error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            factory.isParentOf("too many arguments")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            factory.isParentOf(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("factory._create", () => {
    test("0", () => {
        let callFunction = () => {
            factory._create("number", "function unescape(code) {\n        return code.replace(/\\\\('|\\\\)/g, \"$1\").replace(/[\\r\\t\\n]/g, \" \");\n    }", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            factory._create("number", "function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}", "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            factory._create("object", "function substr(start, length) {\n        return string_substr.call(\n            this,\n            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,\n            length\n        );\n    }", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            factory._create("string", "function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            factory._create("object", "function unescape(code) {\n        return code.replace(/\\\\('|\\\\)/g, \"$1\").replace(/[\\r\\t\\n]/g, \" \");\n    }", "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            factory._create(undefined, undefined, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("factory.badRequest", () => {
    test("0", () => {
        let callFunction = () => {
            factory.badRequest("function readToken_lt_gt(code) {\n\t      // '<>'\n\t      var next = this.input.charCodeAt(this.state.pos + 1);\n\t      var size = 1;\n\t\n\t      if (next === code) {\n\t        size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;\n\t        if (this.input.charCodeAt(this.state.pos + size) === 61) return this.finishOp(_types.types.assign, size + 1);\n\t        return this.finishOp(_types.types.bitShift, size);\n\t      }\n\t\n\t      if (next === 33 && code === 60 && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {\n\t        if (this.inModule) this.unexpected();\n\t        // `<!--`, an XML-style comment that should be interpreted as a line comment\n\t        this.skipLineComment(4);\n\t        this.skipSpace();\n\t        return this.nextToken();\n\t      }\n\t\n\t      if (next === 61) {\n\t        // <= | >=\n\t        size = 2;\n\t      }\n\t\n\t      return this.finishOp(_types.types.relational, size);\n\t    }", "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            factory.badRequest("function log(code) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        console.log(utils.tr.apply(null, arguments));\n    }\n", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            factory.badRequest("function readToken_lt_gt(code) {\n\t      // '<>'\n\t      var next = this.input.charCodeAt(this.state.pos + 1);\n\t      var size = 1;\n\t\n\t      if (next === code) {\n\t        size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;\n\t        if (this.input.charCodeAt(this.state.pos + size) === 61) return this.finishOp(_types.types.assign, size + 1);\n\t        return this.finishOp(_types.types.bitShift, size);\n\t      }\n\t\n\t      if (next === 33 && code === 60 && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {\n\t        if (this.inModule) this.unexpected();\n\t        // `<!--`, an XML-style comment that should be interpreted as a line comment\n\t        this.skipLineComment(4);\n\t        this.skipSpace();\n\t        return this.nextToken();\n\t      }\n\t\n\t      if (next === 61) {\n\t        // <= | >=\n\t        size = 2;\n\t      }\n\t\n\t      return this.finishOp(_types.types.relational, size);\n\t    }", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            factory.badRequest("function log(code) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        console.log(utils.tr.apply(null, arguments));\n    }\n", "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            factory.badRequest("function log(code) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        console.log(utils.tr.apply(null, arguments));\n    }\n", "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            factory.badRequest(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("factory.notFound", () => {
    test("0", () => {
        let callFunction = () => {
            factory.notFound("function log(code) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        console.log(utils.tr.apply(null, arguments));\n    }\n", "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            factory.notFound("function unescape(code) {\n        return code.replace(/\\\\('|\\\\)/g, \"$1\").replace(/[\\r\\t\\n]/g, \" \");\n    }", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            factory.notFound("function unescape(code) {\n        return code.replace(/\\\\('|\\\\)/g, \"$1\").replace(/[\\r\\t\\n]/g, \" \");\n    }", "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            factory.notFound("function substr(start, length) {\n        return string_substr.call(\n            this,\n            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,\n            length\n        );\n    }", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            factory.notFound("function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}", "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            factory.notFound(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("factory.forbidden", () => {
    test("0", () => {
        let callFunction = () => {
            factory.forbidden("function unescape(code) {\n        return code.replace(/\\\\('|\\\\)/g, \"$1\").replace(/[\\r\\t\\n]/g, \" \");\n    }", "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            factory.forbidden("function substr(start, length) {\n        return string_substr.call(\n            this,\n            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,\n            length\n        );\n    }", "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            factory.forbidden("function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            factory.forbidden("function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}", "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            factory.forbidden("function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            factory.forbidden(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("factory.internalServer", () => {
    test("0", () => {
        let callFunction = () => {
            factory.internalServer("function readToken_lt_gt(code) {\n\t      // '<>'\n\t      var next = this.input.charCodeAt(this.state.pos + 1);\n\t      var size = 1;\n\t\n\t      if (next === code) {\n\t        size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;\n\t        if (this.input.charCodeAt(this.state.pos + size) === 61) return this.finishOp(_types.types.assign, size + 1);\n\t        return this.finishOp(_types.types.bitShift, size);\n\t      }\n\t\n\t      if (next === 33 && code === 60 && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {\n\t        if (this.inModule) this.unexpected();\n\t        // `<!--`, an XML-style comment that should be interpreted as a line comment\n\t        this.skipLineComment(4);\n\t        this.skipSpace();\n\t        return this.nextToken();\n\t      }\n\t\n\t      if (next === 61) {\n\t        // <= | >=\n\t        size = 2;\n\t      }\n\t\n\t      return this.finishOp(_types.types.relational, size);\n\t    }", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            factory.internalServer("function unescape(code) {\n        return code.replace(/\\\\('|\\\\)/g, \"$1\").replace(/[\\r\\t\\n]/g, \" \");\n    }", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            factory.internalServer("function unescape(code) {\n        return code.replace(/\\\\('|\\\\)/g, \"$1\").replace(/[\\r\\t\\n]/g, \" \");\n    }", "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            factory.internalServer("function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}", "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            factory.internalServer("function substr(start, length) {\n        return string_substr.call(\n            this,\n            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,\n            length\n        );\n    }", "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            factory.internalServer(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("factory.serviceUnavailable", () => {
    test("0", () => {
        let callFunction = () => {
            factory.serviceUnavailable("function substr(start, length) {\n        return string_substr.call(\n            this,\n            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,\n            length\n        );\n    }", "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            factory.serviceUnavailable("function substr(start, length) {\n        return string_substr.call(\n            this,\n            start < 0 ? ((start = this.length + start) < 0 ? 0 : start) : start,\n            length\n        );\n    }", "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            factory.serviceUnavailable("function readToken_lt_gt(code) {\n\t      // '<>'\n\t      var next = this.input.charCodeAt(this.state.pos + 1);\n\t      var size = 1;\n\t\n\t      if (next === code) {\n\t        size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;\n\t        if (this.input.charCodeAt(this.state.pos + size) === 61) return this.finishOp(_types.types.assign, size + 1);\n\t        return this.finishOp(_types.types.bitShift, size);\n\t      }\n\t\n\t      if (next === 33 && code === 60 && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {\n\t        if (this.inModule) this.unexpected();\n\t        // `<!--`, an XML-style comment that should be interpreted as a line comment\n\t        this.skipLineComment(4);\n\t        this.skipSpace();\n\t        return this.nextToken();\n\t      }\n\t\n\t      if (next === 61) {\n\t        // <= | >=\n\t        size = 2;\n\t      }\n\t\n\t      return this.finishOp(_types.types.relational, size);\n\t    }", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            factory.serviceUnavailable("function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}", "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            factory.serviceUnavailable("function unescape(code) {\n        return code.replace(/\\\\('|\\\\)/g, \"$1\").replace(/[\\r\\t\\n]/g, \" \");\n    }", "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            factory.serviceUnavailable(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("factory.unauthorized", () => {
    test("0", () => {
        let callFunction = () => {
            factory.unauthorized("function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}", "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            factory.unauthorized("function unescape(code) {\n        return code.replace(/\\\\('|\\\\)/g, \"$1\").replace(/[\\r\\t\\n]/g, \" \");\n    }", "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            factory.unauthorized("function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            factory.unauthorized("function(code) {\n\t\t\t\treturn I.mode === 'client' || !Basic.arrayDiff(code, [200, 404]);\n\t\t\t}", "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            factory.unauthorized("function log(code) {\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        console.log(utils.tr.apply(null, arguments));\n    }\n", "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            factory.unauthorized(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
