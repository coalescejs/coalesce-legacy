SystemJS.config({
  devConfig: {
    "map": {
      "babel-preset-stage-0": "npm:babel-preset-stage-0@6.16.0",
      "chai": "npm:chai@3.5.0",
      "fetch-mock": "npm:fetch-mock@5.5.0",
      "mocha-lazy-bdd": "npm:mocha-lazy-bdd@0.1.1",
      "babel-plugin-transform-runtime": "npm:babel-plugin-transform-runtime@6.15.0",
      "babel-runtime": "npm:babel-runtime@6.18.0",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.17"
    },
    "packages": {
      "npm:babel-plugin-transform-runtime@6.15.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:mocha-lazy-bdd@0.1.1": {
        "map": {
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
        }
      },
      "npm:babel-preset-stage-0@6.16.0": {
        "map": {
          "babel-preset-stage-1": "npm:babel-preset-stage-1@6.16.0",
          "babel-plugin-transform-function-bind": "npm:babel-plugin-transform-function-bind@6.8.0",
          "babel-plugin-transform-do-expressions": "npm:babel-plugin-transform-do-expressions@6.8.0"
        }
      },
      "npm:fetch-mock@5.5.0": {
        "map": {
          "node-fetch": "npm:node-fetch@1.6.3"
        }
      },
      "npm:babel-preset-stage-1@6.16.0": {
        "map": {
          "babel-preset-stage-2": "npm:babel-preset-stage-2@6.18.0",
          "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.8.0",
          "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.18.0"
        }
      },
      "npm:node-fetch@1.6.3": {
        "map": {
          "is-stream": "npm:is-stream@1.1.0",
          "encoding": "npm:encoding@0.1.12"
        }
      },
      "npm:babel-plugin-transform-class-constructor-call@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.18.0",
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:babel-preset-stage-2@6.18.0": {
        "map": {
          "babel-preset-stage-3": "npm:babel-preset-stage-3@6.17.0",
          "babel-plugin-syntax-dynamic-import": "npm:babel-plugin-syntax-dynamic-import@6.18.0",
          "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.13.0",
          "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.18.0"
        }
      },
      "npm:babel-preset-stage-3@6.17.0": {
        "map": {
          "babel-plugin-transform-async-generator-functions": "npm:babel-plugin-transform-async-generator-functions@6.17.0",
          "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.13.0",
          "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.16.0",
          "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.8.0",
          "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.16.0"
        }
      },
      "npm:babel-plugin-transform-class-properties@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
          "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.13.0"
        }
      },
      "npm:babel-plugin-transform-async-generator-functions@6.17.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-plugin-syntax-async-generators": "npm:babel-plugin-syntax-async-generators@6.13.0",
          "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.18.0"
        }
      },
      "npm:babel-plugin-transform-object-rest-spread@6.16.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.13.0"
        }
      },
      "npm:babel-plugin-transform-async-to-generator@6.16.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.18.0",
          "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0"
        }
      },
      "npm:babel-helper-remap-async-to-generator@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-template": "npm:babel-template@6.16.0",
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
          "babel-types": "npm:babel-types@6.18.0"
        }
      },
      "npm:chai@3.5.0": {
        "map": {
          "deep-eql": "npm:deep-eql@0.1.3",
          "type-detect": "npm:type-detect@1.0.0",
          "assertion-error": "npm:assertion-error@1.0.2"
        }
      },
      "npm:deep-eql@0.1.3": {
        "map": {
          "type-detect": "npm:type-detect@0.1.1"
        }
      },
      "npm:babel-plugin-transform-do-expressions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-plugin-syntax-do-expressions": "npm:babel-plugin-syntax-do-expressions@6.13.0"
        }
      },
      "npm:babel-plugin-transform-function-bind@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-plugin-syntax-function-bind": "npm:babel-plugin-syntax-function-bind@6.13.0"
        }
      },
      "npm:babel-messages@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:invariant@2.2.1": {
        "map": {
          "loose-envify": "npm:loose-envify@1.3.0"
        }
      },
      "npm:encoding@0.1.12": {
        "map": {
          "iconv-lite": "npm:iconv-lite@0.4.13"
        }
      },
      "npm:babel-plugin-transform-export-extensions@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.13.0"
        }
      },
      "npm:babel-plugin-transform-decorators@6.13.0": {
        "map": {
          "babel-types": "npm:babel-types@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-template": "npm:babel-template@6.16.0",
          "babel-helper-define-map": "npm:babel-helper-define-map@6.18.0",
          "babel-helper-explode-class": "npm:babel-helper-explode-class@6.18.0",
          "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "has-ansi": "npm:has-ansi@2.0.0",
          "supports-color": "npm:supports-color@2.0.0"
        }
      },
      "npm:babel-plugin-transform-exponentiation-operator@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.18.0",
          "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.13.0"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:babel-runtime@6.18.0": {
        "map": {
          "core-js": "npm:core-js@2.4.1",
          "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
        }
      },
      "npm:babel-template@6.16.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0",
          "lodash": "npm:lodash@4.16.6",
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babylon": "npm:babylon@6.13.1"
        }
      },
      "npm:babel-types@6.18.0": {
        "map": {
          "lodash": "npm:lodash@4.16.6",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "esutils": "npm:esutils@2.0.2",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      },
      "npm:babel-helper-define-map@6.18.0": {
        "map": {
          "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
          "lodash": "npm:lodash@4.16.6",
          "babel-types": "npm:babel-types@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0"
        }
      },
      "npm:babel-helper-function-name@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babel-template": "npm:babel-template@6.16.0",
          "babel-types": "npm:babel-types@6.18.0",
          "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.18.0"
        }
      },
      "npm:babel-helper-explode-class@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babel-types": "npm:babel-types@6.18.0",
          "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.18.0"
        }
      },
      "npm:babel-traverse@6.18.0": {
        "map": {
          "babylon": "npm:babylon@6.13.1",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0",
          "lodash": "npm:lodash@4.16.6",
          "babel-code-frame": "npm:babel-code-frame@6.16.0",
          "globals": "npm:globals@9.12.0",
          "invariant": "npm:invariant@2.2.1",
          "debug": "npm:debug@2.2.0",
          "babel-messages": "npm:babel-messages@6.8.0"
        }
      },
      "npm:babel-helper-get-function-arity@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0"
        }
      },
      "npm:babel-helper-builder-binary-assignment-operator-visitor@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0",
          "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.18.0"
        }
      },
      "npm:babel-helper-bindify-decorators@6.18.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babel-types": "npm:babel-types@6.18.0"
        }
      },
      "npm:babel-code-frame@6.16.0": {
        "map": {
          "esutils": "npm:esutils@2.0.2",
          "chalk": "npm:chalk@1.1.3",
          "js-tokens": "npm:js-tokens@2.0.0"
        }
      },
      "npm:babel-helper-explode-assignable-expression@6.18.0": {
        "map": {
          "babel-traverse": "npm:babel-traverse@6.18.0",
          "babel-runtime": "npm:babel-runtime@6.18.0",
          "babel-types": "npm:babel-types@6.18.0"
        }
      },
      "npm:loose-envify@1.3.0": {
        "map": {
          "js-tokens": "npm:js-tokens@2.0.0"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "coalesce-legacy": {
      "format": "esm",
      "main": "coalesce.js",
      "meta": {
        "*.js": {
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-runtime"
            ],
            "presets": [
              "babel-preset-stage-0"
            ]
          },
          "loader": "plugin-babel"
        }
      }
    },
    "coalesce-legacy-tests": {
      "format": "esm",
      "main": "index.js",
      "meta": {
        "*.js": {
          "babelOptions": {
            "plugins": [
              "babel-plugin-transform-runtime"
            ],
            "presets": [
              "babel-preset-stage-0"
            ]
          },
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "coalesce": "github:coalescejs/coalesce2@dev",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "core-js": "npm:core-js@1.2.7",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "inflection": "npm:inflection@1.10.0",
    "lodash": "npm:lodash@4.16.6",
    "mocha": "npm:mocha@2.5.3",
    "module": "npm:jspm-nodelibs-module@0.2.0",
    "net": "npm:jspm-nodelibs-net@0.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "tty": "npm:jspm-nodelibs-tty@0.2.0",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.0"
  },
  packages: {
    "github:coalescejs/coalesce2@dev": {
      "map": {
        "lodash": "npm:lodash@4.16.6",
        "whatwg-fetch": "npm:whatwg-fetch@2.0.1",
        "inflection": "npm:inflection@1.10.0",
        "qs": "npm:qs@6.3.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5",
        "cipher-base": "npm:cipher-base@1.0.3"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.2",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.2"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "asn1.js": "npm:asn1.js@4.8.1"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:asn1.js@4.8.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:stream-http@2.4.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "readable-stream": "npm:readable-stream@2.1.5",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "core-util-is": "npm:core-util-is@1.0.2",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:mocha@2.5.3": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "css": "github:systemjs/plugin-css@0.1.32"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.0": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.0": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.4.1"
      }
    }
  }
});
