(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["laravel-vue-easyforms"] = factory(require("vue"));
	else
		root["laravel-vue-easyforms"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0a06":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var buildURL = __webpack_require__("30b5");
var InterceptorManager = __webpack_require__("f6b4");
var dispatchRequest = __webpack_require__("5270");
var mergeConfig = __webpack_require__("4a7b");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "0df6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "1d2b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "2444":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__("c532");
var normalizeHeaderName = __webpack_require__("c8af");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__("b50d");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__("b50d");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "2d83":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__("387f");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "2e67":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "30b5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "387f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "3934":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "467f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__("2d83");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "4a7b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "5270":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var transformData = __webpack_require__("c401");
var isCancel = __webpack_require__("2e67");
var defaults = __webpack_require__("2444");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "5f02":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "7a77":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "7aac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "83b9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__("d925");
var combineURLs = __webpack_require__("e683");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__("7a77");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "b50d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var settle = __webpack_require__("467f");
var cookies = __webpack_require__("7aac");
var buildURL = __webpack_require__("30b5");
var buildFullPath = __webpack_require__("83b9");
var parseHeaders = __webpack_require__("c345");
var isURLSameOrigin = __webpack_require__("3934");
var createError = __webpack_require__("2d83");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "bc3a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cee4");

/***/ }),

/***/ "c345":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "c401":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "c532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("1d2b");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "c8af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "cee4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");
var bind = __webpack_require__("1d2b");
var Axios = __webpack_require__("0a06");
var mergeConfig = __webpack_require__("4a7b");
var defaults = __webpack_require__("2444");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__("7a77");
axios.CancelToken = __webpack_require__("8df4");
axios.isCancel = __webpack_require__("2e67");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__("0df6");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__("5f02");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "d925":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e683":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "f6b4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("c532");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"117e7e27-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/forms/FormLoader.vue?vue&type=template&id=5b1be418&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-col',{directives:[{name:"show",rawName:"v-show",value:(_vm.form_loaded),expression:"form_loaded"}],staticClass:"pa-0",attrs:{"cols":_vm.cols}},[_c('validation-observer',{ref:"form",attrs:{"tag":"div"}},[_c('form',_vm._b({key:_vm.update_form,ref:_vm.loaded_form_name},'form',_vm.form_props(),false),[_c('v-row',{staticClass:"px-4"},[_c('v-col',{attrs:{"cols":"12","mx-auto":""}},[_c('v-row',_vm._l((_vm.async_field_list),function(field,index_f){return _c('form-input',{key:index_f,attrs:{"form_field":field,"cols":_vm.input_cols(field),"additional_form_data":_vm.loaded_additional_form_data},on:{"field_update":_vm.update_field}})}),1),(_vm.display_button || _vm.cancel_button)?_c('v-row',[(_vm.display_button)?_c('v-col',[_c('v-btn',{staticClass:"p-4",attrs:{"color":_vm.button_colour,"rounded":false,"tile":""},on:{"click":_vm.process_form}},[_vm._v(" "+_vm._s(_vm.button_text)+" ")])],1):_vm._e(),(_vm.cancel_button)?_c('v-col',{staticClass:"text-right"},[_c('v-btn',{staticClass:"p-4",attrs:{"rounded":false,"tile":""},on:{"click":_vm.cancel_form}},[_vm._v(" Cancel ")])],1):_vm._e()],1):_vm._e(),(!_vm.display_icon)?_c('v-tooltip',{attrs:{"top":""},scopedSlots:_vm._u([{key:"activator",fn:function(ref){
var on = ref.on;
return [_c('v-icon',_vm._g(_vm._b({on:{"click":function($event){$event.stopPropagation();return _vm.process_form($event)}}},'v-icon',_vm.prepare_props(),false),on),[_vm._v(" "+_vm._s(_vm.icon_mdi)+" ")])]}}],null,false,3894068156)},[_c('span',[_vm._v(_vm._s(_vm.icon_text))])]):_vm._e()],1)],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/forms/FormLoader.vue?vue&type=template&id=5b1be418&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/vee-validate/dist/vee-validate.esm.js
/**
  * vee-validate v3.4.5
  * (c) 2020 Abdelrahman Awad
  * @license MIT
  */


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function vee_validate_esm_isNaN(value) {
    // NaN is the one value that does not equal itself.
    // eslint-disable-next-line
    return value !== value;
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}
var isObject = function (obj) {
    return obj !== null && obj && typeof obj === 'object' && !Array.isArray(obj);
};
/**
 * A reference comparison function with NaN support
 */
function isRefEqual(lhs, rhs) {
    if (vee_validate_esm_isNaN(lhs) && vee_validate_esm_isNaN(rhs)) {
        return true;
    }
    return lhs === rhs;
}
/**
 * Shallow object comparison.
 */
function isEqual(lhs, rhs) {
    if (lhs instanceof RegExp && rhs instanceof RegExp) {
        return isEqual(lhs.source, rhs.source) && isEqual(lhs.flags, rhs.flags);
    }
    if (Array.isArray(lhs) && Array.isArray(rhs)) {
        if (lhs.length !== rhs.length)
            return false;
        for (var i = 0; i < lhs.length; i++) {
            if (!isEqual(lhs[i], rhs[i])) {
                return false;
            }
        }
        return true;
    }
    // if both are objects, compare each key recursively.
    if (isObject(lhs) && isObject(rhs)) {
        return (Object.keys(lhs).every(function (key) {
            return isEqual(lhs[key], rhs[key]);
        }) &&
            Object.keys(rhs).every(function (key) {
                return isEqual(lhs[key], rhs[key]);
            }));
    }
    return isRefEqual(lhs, rhs);
}
// Checks if a given value is not an empty string or null or undefined.
function isSpecified(val) {
    if (val === '') {
        return false;
    }
    return !isNullOrUndefined(val);
}
function isCallable(fn) {
    return typeof fn === 'function';
}
function isLocator(value) {
    return isCallable(value) && !!value.__locatorRef;
}

function findIndex(arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
    if (isCallable(array.findIndex)) {
        return array.findIndex(predicate);
    }
    /* istanbul ignore next */
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i)) {
            return i;
        }
    }
    /* istanbul ignore next */
    return -1;
}
/**
 * finds the first element that satisfies the predicate callback, polyfills array.find
 */
function find(arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
    var idx = findIndex(array, predicate);
    return idx === -1 ? undefined : array[idx];
}
function includes(collection, item) {
    return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
function toArray(arrayLike) {
    if (isCallable(Array.from)) {
        return Array.from(arrayLike);
    }
    /* istanbul ignore next */
    return _copyArray(arrayLike);
}
/* istanbul ignore next */
function _copyArray(arrayLike) {
    var array = [];
    var length = arrayLike.length;
    for (var i = 0; i < length; i++) {
        array.push(arrayLike[i]);
    }
    return array;
}
function values(obj) {
    if (isCallable(Object.values)) {
        return Object.values(obj);
    }
    // fallback to keys()
    /* istanbul ignore next */
    return Object.keys(obj).map(function (k) { return obj[k]; });
}
function merge(target, source) {
    Object.keys(source).forEach(function (key) {
        if (isObject(source[key])) {
            if (!target[key]) {
                target[key] = {};
            }
            merge(target[key], source[key]);
            return;
        }
        target[key] = source[key];
    });
    return target;
}

function createFlags() {
    return {
        untouched: true,
        touched: false,
        dirty: false,
        pristine: true,
        valid: false,
        invalid: false,
        validated: false,
        pending: false,
        required: false,
        changed: false,
        passed: false,
        failed: false
    };
}

function identity(x) {
    return x;
}
function debounce(fn, wait, token) {
    if (wait === void 0) { wait = 0; }
    if (token === void 0) { token = { cancelled: false }; }
    if (wait === 0) {
        return fn;
    }
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var later = function () {
            timeout = undefined;
            // check if the fn call was cancelled.
            if (!token.cancelled)
                fn.apply(void 0, args);
        };
        // because we might want to use Node.js setTimout for SSR.
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Emits a warning to the console
 */
function warn(message) {
    console.warn("[vee-validate] " + message);
}
/**
 * Replaces placeholder values in a string with their actual values
 */
function interpolate(template, values) {
    return template.replace(/{([^}]+)}/g, function (_, p) {
        return p in values ? values[p] : "{" + p + "}";
    });
}

var RULES = {};
function normalizeSchema(schema) {
    var _a;
    if ((_a = schema.params) === null || _a === void 0 ? void 0 : _a.length) {
        schema.params = schema.params.map(function (param) {
            if (typeof param === 'string') {
                return { name: param };
            }
            return param;
        });
    }
    return schema;
}
var RuleContainer = /** @class */ (function () {
    function RuleContainer() {
    }
    RuleContainer.extend = function (name, schema) {
        // if rule already exists, overwrite it.
        var rule = normalizeSchema(schema);
        if (RULES[name]) {
            RULES[name] = merge(RULES[name], schema);
            return;
        }
        RULES[name] = __assign({ lazy: false, computesRequired: false }, rule);
    };
    RuleContainer.isLazy = function (name) {
        var _a;
        return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.lazy);
    };
    RuleContainer.isRequireRule = function (name) {
        var _a;
        return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.computesRequired);
    };
    RuleContainer.getRuleDefinition = function (ruleName) {
        return RULES[ruleName];
    };
    return RuleContainer;
}());
/**
 * Adds a custom validator to the list of validation rules.
 */
function extend(name, schema) {
    // makes sure new rules are properly formatted.
    guardExtend(name, schema);
    // Full schema object.
    if (typeof schema === 'object') {
        RuleContainer.extend(name, schema);
        return;
    }
    RuleContainer.extend(name, {
        validate: schema
    });
}
/**
 * Guards from extension violations.
 */
function guardExtend(name, validator) {
    if (isCallable(validator)) {
        return;
    }
    if (isCallable(validator.validate)) {
        return;
    }
    if (RuleContainer.getRuleDefinition(name)) {
        return;
    }
    throw new Error("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.");
}

var DEFAULT_CONFIG = {
    defaultMessage: "{_field_} is not valid.",
    skipOptional: true,
    classes: {
        touched: 'touched',
        untouched: 'untouched',
        valid: 'valid',
        invalid: 'invalid',
        pristine: 'pristine',
        dirty: 'dirty' // control has been interacted with
    },
    bails: true,
    mode: 'aggressive',
    useConstraintAttrs: true
};
var currentConfig = __assign({}, DEFAULT_CONFIG);
var getConfig = function () { return currentConfig; };
var setConfig = function (newConf) {
    currentConfig = __assign(__assign({}, currentConfig), newConf);
};
var configure = function (cfg) {
    setConfig(cfg);
};

/**
 * Normalizes the given rules expression.
 */
function normalizeRules(rules) {
    // if falsy value return an empty object.
    var acc = {};
    Object.defineProperty(acc, '_$$isNormalized', {
        value: true,
        writable: false,
        enumerable: false,
        configurable: false
    });
    if (!rules) {
        return acc;
    }
    // Object is already normalized, skip.
    if (isObject(rules) && rules._$$isNormalized) {
        return rules;
    }
    if (isObject(rules)) {
        return Object.keys(rules).reduce(function (prev, curr) {
            var params = [];
            if (rules[curr] === true) {
                params = [];
            }
            else if (Array.isArray(rules[curr])) {
                params = rules[curr];
            }
            else if (isObject(rules[curr])) {
                params = rules[curr];
            }
            else {
                params = [rules[curr]];
            }
            if (rules[curr] !== false) {
                prev[curr] = buildParams(curr, params);
            }
            return prev;
        }, acc);
    }
    /* istanbul ignore if */
    if (typeof rules !== 'string') {
        warn('rules must be either a string or an object.');
        return acc;
    }
    return rules.split('|').reduce(function (prev, rule) {
        var parsedRule = parseRule(rule);
        if (!parsedRule.name) {
            return prev;
        }
        prev[parsedRule.name] = buildParams(parsedRule.name, parsedRule.params);
        return prev;
    }, acc);
}
function buildParams(ruleName, provided) {
    var ruleSchema = RuleContainer.getRuleDefinition(ruleName);
    if (!ruleSchema) {
        return provided;
    }
    var params = {};
    if (!ruleSchema.params && !Array.isArray(provided)) {
        throw new Error('You provided an object params to a rule that has no defined schema.');
    }
    // Rule probably uses an array for their args, keep it as is.
    if (Array.isArray(provided) && !ruleSchema.params) {
        return provided;
    }
    var definedParams;
    // collect the params schema.
    if (!ruleSchema.params || (ruleSchema.params.length < provided.length && Array.isArray(provided))) {
        var lastDefinedParam_1;
        // collect any additional parameters in the last item.
        definedParams = provided.map(function (_, idx) {
            var _a;
            var param = (_a = ruleSchema.params) === null || _a === void 0 ? void 0 : _a[idx];
            lastDefinedParam_1 = param || lastDefinedParam_1;
            if (!param) {
                param = lastDefinedParam_1;
            }
            return param;
        });
    }
    else {
        definedParams = ruleSchema.params;
    }
    // Match the provided array length with a temporary schema.
    for (var i = 0; i < definedParams.length; i++) {
        var options = definedParams[i];
        var value = options.default;
        // if the provided is an array, map element value.
        if (Array.isArray(provided)) {
            if (i in provided) {
                value = provided[i];
            }
        }
        else {
            // If the param exists in the provided object.
            if (options.name in provided) {
                value = provided[options.name];
                // if the provided is the first param value.
            }
            else if (definedParams.length === 1) {
                value = provided;
            }
        }
        // if the param is a target, resolve the target value.
        if (options.isTarget) {
            value = createLocator(value, options.cast);
        }
        // A target param using interpolation
        if (typeof value === 'string' && value[0] === '@') {
            value = createLocator(value.slice(1), options.cast);
        }
        // If there is a transformer defined.
        if (!isLocator(value) && options.cast) {
            value = options.cast(value);
        }
        // already been set, probably multiple values.
        if (params[options.name]) {
            params[options.name] = Array.isArray(params[options.name]) ? params[options.name] : [params[options.name]];
            params[options.name].push(value);
        }
        else {
            // set the value.
            params[options.name] = value;
        }
    }
    return params;
}
/**
 * Parses a rule string expression.
 */
var parseRule = function (rule) {
    var params = [];
    var name = rule.split(':')[0];
    if (includes(rule, ':')) {
        params = rule
            .split(':')
            .slice(1)
            .join(':')
            .split(',');
    }
    return { name: name, params: params };
};
function createLocator(value, castFn) {
    var locator = function (crossTable) {
        var val = crossTable[value];
        return castFn ? castFn(val) : val;
    };
    locator.__locatorRef = value;
    return locator;
}
function extractLocators(params) {
    if (Array.isArray(params)) {
        return params.filter(function (param) {
            return isLocator(param) || (typeof param === 'string' && param[0] === '@');
        });
    }
    return Object.keys(params)
        .filter(function (key) { return isLocator(params[key]); })
        .map(function (key) { return params[key]; });
}

/**
 * Validates a value against the rules.
 */
function validate(value, rules, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var shouldBail, skipIfEmpty, field, result, errors, failedRules, regenerateMap;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    shouldBail = options === null || options === void 0 ? void 0 : options.bails;
                    skipIfEmpty = options === null || options === void 0 ? void 0 : options.skipIfEmpty;
                    field = {
                        name: (options === null || options === void 0 ? void 0 : options.name) || '{field}',
                        rules: normalizeRules(rules),
                        bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
                        skipIfEmpty: skipIfEmpty !== null && skipIfEmpty !== void 0 ? skipIfEmpty : true,
                        forceRequired: false,
                        crossTable: (options === null || options === void 0 ? void 0 : options.values) || {},
                        names: (options === null || options === void 0 ? void 0 : options.names) || {},
                        customMessages: (options === null || options === void 0 ? void 0 : options.customMessages) || {}
                    };
                    return [4 /*yield*/, _validate(field, value, options)];
                case 1:
                    result = _a.sent();
                    errors = [];
                    failedRules = {};
                    regenerateMap = {};
                    result.errors.forEach(function (e) {
                        var msg = e.msg();
                        errors.push(msg);
                        failedRules[e.rule] = msg;
                        regenerateMap[e.rule] = e.msg;
                    });
                    return [2 /*return*/, {
                            valid: result.valid,
                            errors: errors,
                            failedRules: failedRules,
                            regenerateMap: regenerateMap
                        }];
            }
        });
    });
}
/**
 * Starts the validation process.
 */
function _validate(field, value, _a) {
    var _b = (_a === void 0 ? {} : _a).isInitial, isInitial = _b === void 0 ? false : _b;
    return __awaiter(this, void 0, void 0, function () {
        var _c, shouldSkip, errors, rules, length, i, rule, result;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, _shouldSkip(field, value)];
                case 1:
                    _c = _d.sent(), shouldSkip = _c.shouldSkip, errors = _c.errors;
                    if (shouldSkip) {
                        return [2 /*return*/, {
                                valid: !errors.length,
                                errors: errors
                            }];
                    }
                    rules = Object.keys(field.rules).filter(function (rule) { return !RuleContainer.isRequireRule(rule); });
                    length = rules.length;
                    i = 0;
                    _d.label = 2;
                case 2:
                    if (!(i < length)) return [3 /*break*/, 5];
                    if (isInitial && RuleContainer.isLazy(rules[i])) {
                        return [3 /*break*/, 4];
                    }
                    rule = rules[i];
                    return [4 /*yield*/, _test(field, value, {
                            name: rule,
                            params: field.rules[rule]
                        })];
                case 3:
                    result = _d.sent();
                    if (!result.valid && result.error) {
                        errors.push(result.error);
                        if (field.bails) {
                            return [2 /*return*/, {
                                    valid: false,
                                    errors: errors
                                }];
                        }
                    }
                    _d.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, {
                        valid: !errors.length,
                        errors: errors
                    }];
            }
        });
    });
}
function _shouldSkip(field, value) {
    return __awaiter(this, void 0, void 0, function () {
        var requireRules, length, errors, isEmpty, isEmptyAndOptional, isRequired, i, rule, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requireRules = Object.keys(field.rules).filter(RuleContainer.isRequireRule);
                    length = requireRules.length;
                    errors = [];
                    isEmpty = isNullOrUndefined(value) || value === '' || isEmptyArray(value);
                    isEmptyAndOptional = isEmpty && field.skipIfEmpty;
                    isRequired = false;
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < length)) return [3 /*break*/, 4];
                    rule = requireRules[i];
                    return [4 /*yield*/, _test(field, value, {
                            name: rule,
                            params: field.rules[rule]
                        })];
                case 2:
                    result = _a.sent();
                    if (!isObject(result)) {
                        throw new Error('Require rules has to return an object (see docs)');
                    }
                    if (result.required) {
                        isRequired = true;
                    }
                    if (!result.valid && result.error) {
                        errors.push(result.error);
                        // Exit early as the field is required and failed validation.
                        if (field.bails) {
                            return [2 /*return*/, {
                                    shouldSkip: true,
                                    errors: errors
                                }];
                        }
                    }
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    if (isEmpty && !isRequired && !field.skipIfEmpty) {
                        return [2 /*return*/, {
                                shouldSkip: false,
                                errors: errors
                            }];
                    }
                    // field is configured to run through the pipeline regardless
                    if (!field.bails && !isEmptyAndOptional) {
                        return [2 /*return*/, {
                                shouldSkip: false,
                                errors: errors
                            }];
                    }
                    // skip if the field is not required and has an empty value.
                    return [2 /*return*/, {
                            shouldSkip: !isRequired && isEmpty,
                            errors: errors
                        }];
            }
        });
    });
}
/**
 * Tests a single input value against a rule.
 */
function _test(field, value, rule) {
    return __awaiter(this, void 0, void 0, function () {
        var ruleSchema, normalizedValue, params, result, values_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ruleSchema = RuleContainer.getRuleDefinition(rule.name);
                    if (!ruleSchema || !ruleSchema.validate) {
                        throw new Error("No such validator '" + rule.name + "' exists.");
                    }
                    normalizedValue = ruleSchema.castValue ? ruleSchema.castValue(value) : value;
                    params = fillTargetValues(rule.params, field.crossTable);
                    return [4 /*yield*/, ruleSchema.validate(normalizedValue, params)];
                case 1:
                    result = _a.sent();
                    if (typeof result === 'string') {
                        values_1 = __assign(__assign({}, (params || {})), { _field_: field.name, _value_: value, _rule_: rule.name });
                        return [2 /*return*/, {
                                valid: false,
                                error: { rule: rule.name, msg: function () { return interpolate(result, values_1); } }
                            }];
                    }
                    if (!isObject(result)) {
                        result = { valid: result };
                    }
                    return [2 /*return*/, {
                            valid: result.valid,
                            required: result.required,
                            error: result.valid ? undefined : _generateFieldError(field, value, ruleSchema, rule.name, params)
                        }];
            }
        });
    });
}
/**
 * Generates error messages.
 */
function _generateFieldError(field, value, ruleSchema, ruleName, params) {
    var _a;
    var message = (_a = field.customMessages[ruleName]) !== null && _a !== void 0 ? _a : ruleSchema.message;
    var ruleTargets = _getRuleTargets(field, ruleSchema, ruleName);
    var _b = _getUserTargets(field, ruleSchema, ruleName, message), userTargets = _b.userTargets, userMessage = _b.userMessage;
    var values = __assign(__assign(__assign(__assign({}, (params || {})), { _field_: field.name, _value_: value, _rule_: ruleName }), ruleTargets), userTargets);
    return {
        msg: function () { return _normalizeMessage(userMessage || getConfig().defaultMessage, field.name, values); },
        rule: ruleName
    };
}
function _getRuleTargets(field, ruleSchema, ruleName) {
    var params = ruleSchema.params;
    if (!params) {
        return {};
    }
    var numTargets = params.filter(function (param) { return param.isTarget; }).length;
    if (numTargets <= 0) {
        return {};
    }
    var names = {};
    var ruleConfig = field.rules[ruleName];
    if (!Array.isArray(ruleConfig) && isObject(ruleConfig)) {
        ruleConfig = params.map(function (param) {
            return ruleConfig[param.name];
        });
    }
    for (var index = 0; index < params.length; index++) {
        var param = params[index];
        var key = ruleConfig[index];
        if (!isLocator(key)) {
            continue;
        }
        key = key.__locatorRef;
        var name_1 = field.names[key] || key;
        names[param.name] = name_1;
        names["_" + param.name + "_"] = field.crossTable[key];
    }
    return names;
}
function _getUserTargets(field, ruleSchema, ruleName, userMessage) {
    var userTargets = {};
    var rules = field.rules[ruleName];
    var params = ruleSchema.params || [];
    // early return if no rules
    if (!rules) {
        return {};
    }
    // check all rules to convert targets
    Object.keys(rules).forEach(function (key, index) {
        // get the rule
        var rule = rules[key];
        if (!isLocator(rule)) {
            return {};
        }
        // get associated parameter
        var param = params[index];
        if (!param) {
            return {};
        }
        // grab the name of the target
        var name = rule.__locatorRef;
        userTargets[param.name] = field.names[name] || name;
        userTargets["_" + param.name + "_"] = field.crossTable[name];
    });
    return {
        userTargets: userTargets,
        userMessage: userMessage
    };
}
function _normalizeMessage(template, field, values) {
    if (typeof template === 'function') {
        return template(field, values);
    }
    return interpolate(template, __assign(__assign({}, values), { _field_: field }));
}
function fillTargetValues(params, crossTable) {
    if (Array.isArray(params)) {
        return params.map(function (param) {
            var targetPart = typeof param === 'string' && param[0] === '@' ? param.slice(1) : param;
            if (targetPart in crossTable) {
                return crossTable[targetPart];
            }
            return param;
        });
    }
    var values = {};
    var normalize = function (value) {
        if (isLocator(value)) {
            return value(crossTable);
        }
        return value;
    };
    Object.keys(params).forEach(function (param) {
        values[param] = normalize(params[param]);
    });
    return values;
}

var aggressive = function () { return ({
    on: ['input', 'blur']
}); };
var lazy = function () { return ({
    on: ['change', 'blur']
}); };
var eager = function (_a) {
    var errors = _a.errors;
    if (errors.length) {
        return {
            on: ['input', 'change']
        };
    }
    return {
        on: ['change', 'blur']
    };
};
var passive = function () { return ({
    on: []
}); };
var modes = {
    aggressive: aggressive,
    eager: eager,
    passive: passive,
    lazy: lazy
};
var setInteractionMode = function (mode, implementation) {
    setConfig({ mode: mode });
    if (!implementation) {
        return;
    }
    if (!isCallable(implementation)) {
        throw new Error('A mode implementation must be a function');
    }
    modes[mode] = implementation;
};

var EVENT_BUS = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
function localeChanged() {
    EVENT_BUS.$emit('change:locale');
}

var Dictionary = /** @class */ (function () {
    function Dictionary(locale, dictionary) {
        this.container = {};
        this.locale = locale;
        this.merge(dictionary);
    }
    Dictionary.prototype.resolve = function (field, rule, values) {
        return this.format(this.locale, field, rule, values);
    };
    Dictionary.prototype.format = function (locale, field, rule, values) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message;
        // find if specific message for that field was specified.
        var fieldContainer = (_c = (_b = (_a = this.container[locale]) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[field]) === null || _c === void 0 ? void 0 : _c[rule];
        var messageContainer = (_e = (_d = this.container[locale]) === null || _d === void 0 ? void 0 : _d.messages) === null || _e === void 0 ? void 0 : _e[rule];
        message = fieldContainer || messageContainer || '';
        if (!message) {
            message = '{_field_} is not valid';
        }
        field = (_h = (_g = (_f = this.container[locale]) === null || _f === void 0 ? void 0 : _f.names) === null || _g === void 0 ? void 0 : _g[field]) !== null && _h !== void 0 ? _h : field;
        return isCallable(message) ? message(field, values) : interpolate(message, __assign(__assign({}, values), { _field_: field }));
    };
    Dictionary.prototype.merge = function (dictionary) {
        merge(this.container, dictionary);
    };
    Dictionary.prototype.hasRule = function (name) {
        var _a, _b;
        return !!((_b = (_a = this.container[this.locale]) === null || _a === void 0 ? void 0 : _a.messages) === null || _b === void 0 ? void 0 : _b[name]);
    };
    return Dictionary;
}());
var DICTIONARY;
function localize(locale, dictionary) {
    var _a;
    if (!DICTIONARY) {
        DICTIONARY = new Dictionary('en', {});
        setConfig({
            defaultMessage: function (field, values) {
                return DICTIONARY.resolve(field, values === null || values === void 0 ? void 0 : values._rule_, values || {});
            }
        });
    }
    if (typeof locale === 'string') {
        DICTIONARY.locale = locale;
        if (dictionary) {
            DICTIONARY.merge((_a = {}, _a[locale] = dictionary, _a));
        }
        localeChanged();
        return;
    }
    DICTIONARY.merge(locale);
}

var isEvent = function (evt) {
    if (!evt) {
        return false;
    }
    if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
        return true;
    }
    // this is for IE
    /* istanbul ignore next */
    if (evt && evt.srcElement) {
        return true;
    }
    return false;
};
function normalizeEventValue(value) {
    var _a, _b;
    if (!isEvent(value)) {
        return value;
    }
    var input = value.target;
    if (input.type === 'file' && input.files) {
        return toArray(input.files);
    }
    // If the input has a `v-model.number` modifier applied.
    if ((_a = input._vModifiers) === null || _a === void 0 ? void 0 : _a.number) {
        // as per the spec the v-model.number uses parseFloat
        var valueAsNumber = parseFloat(input.value);
        if (vee_validate_esm_isNaN(valueAsNumber)) {
            return input.value;
        }
        return valueAsNumber;
    }
    if ((_b = input._vModifiers) === null || _b === void 0 ? void 0 : _b.trim) {
        var trimmedValue = typeof input.value === 'string' ? input.value.trim() : input.value;
        return trimmedValue;
    }
    return input.value;
}

var isTextInput = function (vnode) {
    var _a;
    var attrs = ((_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs) || vnode.elm;
    // it will fallback to being a text input per browsers spec.
    if (vnode.tag === 'input' && (!attrs || !attrs.type)) {
        return true;
    }
    if (vnode.tag === 'textarea') {
        return true;
    }
    return includes(['text', 'password', 'search', 'email', 'tel', 'url', 'number'], attrs === null || attrs === void 0 ? void 0 : attrs.type);
};
// export const isCheckboxOrRadioInput = (vnode: VNode): boolean => {
//   const attrs = (vnode.data && vnode.data.attrs) || vnode.elm;
//   return includes(['radio', 'checkbox'], attrs && attrs.type);
// };
// Gets the model object on the vnode.
function findModel(vnode) {
    if (!vnode.data) {
        return undefined;
    }
    // Component Model
    // THIS IS NOT TYPED IN OFFICIAL VUE TYPINGS
    // eslint-disable-next-line
    var nonStandardVNodeData = vnode.data;
    if ('model' in nonStandardVNodeData) {
        return nonStandardVNodeData.model;
    }
    if (!vnode.data.directives) {
        return undefined;
    }
    return find(vnode.data.directives, function (d) { return d.name === 'model'; });
}
function findValue(vnode) {
    var _a, _b;
    var model = findModel(vnode);
    if (model) {
        return { value: model.value };
    }
    var config = findModelConfig(vnode);
    var prop = (config === null || config === void 0 ? void 0 : config.prop) || 'value';
    if (((_a = vnode.componentOptions) === null || _a === void 0 ? void 0 : _a.propsData) && prop in vnode.componentOptions.propsData) {
        var propsDataWithValue = vnode.componentOptions.propsData;
        return { value: propsDataWithValue[prop] };
    }
    if (((_b = vnode.data) === null || _b === void 0 ? void 0 : _b.domProps) && 'value' in vnode.data.domProps) {
        return { value: vnode.data.domProps.value };
    }
    return undefined;
}
function extractChildren(vnode) {
    if (Array.isArray(vnode)) {
        return vnode;
    }
    if (Array.isArray(vnode.children)) {
        return vnode.children;
    }
    /* istanbul ignore next */
    if (vnode.componentOptions && Array.isArray(vnode.componentOptions.children)) {
        return vnode.componentOptions.children;
    }
    return [];
}
function findInputNodes(vnode) {
    if (!Array.isArray(vnode) && findValue(vnode) !== undefined) {
        return [vnode];
    }
    var children = extractChildren(vnode);
    return children.reduce(function (nodes, node) {
        var candidates = findInputNodes(node);
        if (candidates.length) {
            nodes.push.apply(nodes, candidates);
        }
        return nodes;
    }, []);
}
// Resolves v-model config if exists.
function findModelConfig(vnode) {
    /* istanbul ignore next */
    if (!vnode.componentOptions)
        return null;
    // This is also not typed in the standard Vue TS.
    return vnode.componentOptions.Ctor.options.model;
}
// Adds a listener to vnode listener object.
function mergeVNodeListeners(obj, eventName, handler) {
    // no listener at all.
    if (isNullOrUndefined(obj[eventName])) {
        obj[eventName] = [handler];
        return;
    }
    // Is an invoker.
    if (isCallable(obj[eventName]) && obj[eventName].fns) {
        var invoker = obj[eventName];
        invoker.fns = Array.isArray(invoker.fns) ? invoker.fns : [invoker.fns];
        if (!includes(invoker.fns, handler)) {
            invoker.fns.push(handler);
        }
        return;
    }
    if (isCallable(obj[eventName])) {
        var prev = obj[eventName];
        obj[eventName] = [prev];
    }
    if (Array.isArray(obj[eventName]) && !includes(obj[eventName], handler)) {
        obj[eventName].push(handler);
    }
}
// Adds a listener to a native HTML vnode.
function addNativeNodeListener(node, eventName, handler) {
    /* istanbul ignore next */
    if (!node.data) {
        node.data = {};
    }
    if (isNullOrUndefined(node.data.on)) {
        node.data.on = {};
    }
    mergeVNodeListeners(node.data.on, eventName, handler);
}
// Adds a listener to a Vue component vnode.
function addComponentNodeListener(node, eventName, handler) {
    /* istanbul ignore next */
    if (!node.componentOptions) {
        return;
    }
    /* istanbul ignore next */
    if (!node.componentOptions.listeners) {
        node.componentOptions.listeners = {};
    }
    mergeVNodeListeners(node.componentOptions.listeners, eventName, handler);
}
function addVNodeListener(vnode, eventName, handler) {
    if (vnode.componentOptions) {
        addComponentNodeListener(vnode, eventName, handler);
        return;
    }
    addNativeNodeListener(vnode, eventName, handler);
}
// Determines if `change` should be used over `input` for listeners.
function getInputEventName(vnode, model) {
    var _a;
    // Is a component.
    if (vnode.componentOptions) {
        var event_1 = (findModelConfig(vnode) || { event: 'input' }).event;
        return event_1;
    }
    // Lazy Models typically use change event
    if ((_a = model === null || model === void 0 ? void 0 : model.modifiers) === null || _a === void 0 ? void 0 : _a.lazy) {
        return 'change';
    }
    // is a textual-type input.
    if (isTextInput(vnode)) {
        return 'input';
    }
    return 'change';
}
function isHTMLNode(node) {
    return includes(['input', 'select', 'textarea'], node.tag);
}
// TODO: Type this one properly.
function normalizeSlots(slots, ctx) {
    var acc = [];
    return Object.keys(slots).reduce(function (arr, key) {
        slots[key].forEach(function (vnode) {
            if (!vnode.context) {
                slots[key].context = ctx;
                if (!vnode.data) {
                    vnode.data = {};
                }
                vnode.data.slot = key;
            }
        });
        return arr.concat(slots[key]);
    }, acc);
}
function resolveTextualRules(vnode) {
    var _a;
    var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
    var rules = {};
    if (!attrs)
        return rules;
    if (attrs.type === 'email' && RuleContainer.getRuleDefinition('email')) {
        rules.email = ['multiple' in attrs];
    }
    if (attrs.pattern && RuleContainer.getRuleDefinition('regex')) {
        rules.regex = attrs.pattern;
    }
    if (attrs.maxlength >= 0 && RuleContainer.getRuleDefinition('max')) {
        rules.max = attrs.maxlength;
    }
    if (attrs.minlength >= 0 && RuleContainer.getRuleDefinition('min')) {
        rules.min = attrs.minlength;
    }
    if (attrs.type === 'number') {
        if (isSpecified(attrs.min) && RuleContainer.getRuleDefinition('min_value')) {
            rules.min_value = Number(attrs.min);
        }
        if (isSpecified(attrs.max) && RuleContainer.getRuleDefinition('max_value')) {
            rules.max_value = Number(attrs.max);
        }
    }
    return rules;
}
function resolveRules(vnode) {
    var _a;
    var htmlTags = ['input', 'select', 'textarea'];
    var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
    if (!includes(htmlTags, vnode.tag) || !attrs) {
        return {};
    }
    var rules = {};
    if ('required' in attrs && attrs.required !== false && RuleContainer.getRuleDefinition('required')) {
        rules.required = attrs.type === 'checkbox' ? [true] : true;
    }
    if (isTextInput(vnode)) {
        return normalizeRules(__assign(__assign({}, rules), resolveTextualRules(vnode)));
    }
    return normalizeRules(rules);
}
function normalizeChildren(context, slotProps) {
    if (context.$scopedSlots.default) {
        return context.$scopedSlots.default(slotProps) || [];
    }
    return context.$slots.default || [];
}

/**
 * Determines if a provider needs to run validation.
 */
function shouldValidate(ctx, value) {
    // when an immediate/initial validation is needed and wasn't done before.
    if (!ctx._ignoreImmediate && ctx.immediate) {
        return true;
    }
    // when the value changes for whatever reason.
    if (!isRefEqual(ctx.value, value) && ctx.normalizedEvents.length) {
        return true;
    }
    // when it needs validation due to props/cross-fields changes.
    if (ctx._needsValidation) {
        return true;
    }
    // when the initial value is undefined and the field wasn't rendered yet.
    if (!ctx.initialized && value === undefined) {
        return true;
    }
    return false;
}
function createValidationCtx(ctx) {
    return __assign(__assign({}, ctx.flags), { errors: ctx.errors, classes: ctx.classes, failedRules: ctx.failedRules, reset: function () { return ctx.reset(); }, validate: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return ctx.validate.apply(ctx, args);
        }, ariaInput: {
            'aria-invalid': ctx.flags.invalid ? 'true' : 'false',
            'aria-required': ctx.isRequired ? 'true' : 'false',
            'aria-errormessage': "vee_" + ctx.id
        }, ariaMsg: {
            id: "vee_" + ctx.id,
            'aria-live': ctx.errors.length ? 'assertive' : 'off'
        } });
}
function onRenderUpdate(vm, value) {
    if (!vm.initialized) {
        vm.initialValue = value;
    }
    var validateNow = shouldValidate(vm, value);
    vm._needsValidation = false;
    vm.value = value;
    vm._ignoreImmediate = true;
    if (!validateNow) {
        return;
    }
    var validate = function () {
        if (vm.immediate || vm.flags.validated) {
            return triggerThreadSafeValidation(vm);
        }
        vm.validateSilent();
    };
    if (vm.initialized) {
        validate();
        return;
    }
    vm.$once('hook:mounted', function () { return validate(); });
}
function computeModeSetting(ctx) {
    var compute = (isCallable(ctx.mode) ? ctx.mode : modes[ctx.mode]);
    return compute(ctx);
}
function triggerThreadSafeValidation(vm) {
    var pendingPromise = vm.validateSilent();
    // avoids race conditions between successive validations.
    vm._pendingValidation = pendingPromise;
    return pendingPromise.then(function (result) {
        if (pendingPromise === vm._pendingValidation) {
            vm.applyResult(result);
            vm._pendingValidation = undefined;
        }
        return result;
    });
}
// Creates the common handlers for a validatable context.
function createCommonHandlers(vm) {
    if (!vm.$veeOnInput) {
        vm.$veeOnInput = function (e) {
            vm.syncValue(e); // track and keep the value updated.
            vm.setFlags({ dirty: true, pristine: false });
        };
    }
    var onInput = vm.$veeOnInput;
    if (!vm.$veeOnBlur) {
        vm.$veeOnBlur = function () {
            vm.setFlags({ touched: true, untouched: false });
        };
    }
    // Blur event listener.
    var onBlur = vm.$veeOnBlur;
    var onValidate = vm.$veeHandler;
    var mode = computeModeSetting(vm);
    // Handle debounce changes.
    if (!onValidate || vm.$veeDebounce !== vm.debounce) {
        onValidate = debounce(function () {
            vm.$nextTick(function () {
                if (!vm._pendingReset) {
                    triggerThreadSafeValidation(vm);
                }
                vm._pendingReset = false;
            });
        }, mode.debounce || vm.debounce);
        // Cache the handler so we don't create it each time.
        vm.$veeHandler = onValidate;
        // cache the debounce value so we detect if it was changed.
        vm.$veeDebounce = vm.debounce;
    }
    return { onInput: onInput, onBlur: onBlur, onValidate: onValidate };
}
// Adds all plugin listeners to the vnode.
function addListeners(vm, node) {
    var value = findValue(node);
    // cache the input eventName.
    vm._inputEventName = vm._inputEventName || getInputEventName(node, findModel(node));
    onRenderUpdate(vm, value === null || value === void 0 ? void 0 : value.value);
    var _a = createCommonHandlers(vm), onInput = _a.onInput, onBlur = _a.onBlur, onValidate = _a.onValidate;
    addVNodeListener(node, vm._inputEventName, onInput);
    addVNodeListener(node, 'blur', onBlur);
    // add the validation listeners.
    vm.normalizedEvents.forEach(function (evt) {
        addVNodeListener(node, evt, onValidate);
    });
    vm.initialized = true;
}

var PROVIDER_COUNTER = 0;
function vee_validate_esm_data() {
    var errors = [];
    var fieldName = '';
    var defaultValues = {
        errors: errors,
        value: undefined,
        initialized: false,
        initialValue: undefined,
        flags: createFlags(),
        failedRules: {},
        isActive: true,
        fieldName: fieldName,
        id: ''
    };
    return defaultValues;
}
var ValidationProvider = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    inject: {
        $_veeObserver: {
            from: '$_veeObserver',
            default: function () {
                if (!this.$vnode.context.$_veeObserver) {
                    this.$vnode.context.$_veeObserver = createObserver();
                }
                return this.$vnode.context.$_veeObserver;
            }
        }
    },
    props: {
        vid: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: null
        },
        mode: {
            type: [String, Function],
            default: function () {
                return getConfig().mode;
            }
        },
        rules: {
            type: [Object, String],
            default: null
        },
        immediate: {
            type: Boolean,
            default: false
        },
        bails: {
            type: Boolean,
            default: function () { return getConfig().bails; }
        },
        skipIfEmpty: {
            type: Boolean,
            default: function () { return getConfig().skipOptional; }
        },
        debounce: {
            type: Number,
            default: 0
        },
        tag: {
            type: String,
            default: 'span'
        },
        slim: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        customMessages: {
            type: Object,
            default: function () {
                return {};
            }
        },
        detectInput: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        rules: {
            deep: true,
            handler: function (val, oldVal) {
                this._needsValidation = !isEqual(val, oldVal);
            }
        }
    },
    data: vee_validate_esm_data,
    computed: {
        fieldDeps: function () {
            var _this = this;
            return Object.keys(this.normalizedRules).reduce(function (acc, rule) {
                var deps = extractLocators(_this.normalizedRules[rule]).map(function (dep) {
                    return isLocator(dep) ? dep.__locatorRef : dep.slice(1);
                });
                acc.push.apply(acc, deps);
                deps.forEach(function (depName) {
                    watchCrossFieldDep(_this, depName);
                });
                return acc;
            }, []);
        },
        normalizedEvents: function () {
            var _this = this;
            var on = computeModeSetting(this).on;
            return (on || []).map(function (e) {
                if (e === 'input') {
                    return _this._inputEventName;
                }
                return e;
            });
        },
        isRequired: function () {
            var rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
            var isRequired = Object.keys(rules).some(RuleContainer.isRequireRule);
            this.flags.required = !!isRequired;
            return isRequired;
        },
        classes: function () {
            var names = getConfig().classes;
            return computeClassObj(names, this.flags);
        },
        normalizedRules: function () {
            return normalizeRules(this.rules);
        }
    },
    mounted: function () {
        var _this = this;
        var onLocaleChanged = function () {
            if (!_this.flags.validated) {
                return;
            }
            var regenerateMap = _this._regenerateMap;
            if (regenerateMap) {
                var errors_1 = [];
                var failedRules_1 = {};
                Object.keys(regenerateMap).forEach(function (rule) {
                    var msg = regenerateMap[rule]();
                    errors_1.push(msg);
                    failedRules_1[rule] = msg;
                });
                _this.applyResult({ errors: errors_1, failedRules: failedRules_1, regenerateMap: regenerateMap });
                return;
            }
            _this.validate();
        };
        EVENT_BUS.$on('change:locale', onLocaleChanged);
        this.$on('hook:beforeDestroy', function () {
            EVENT_BUS.$off('change:locale', onLocaleChanged);
        });
    },
    render: function (h) {
        var _this = this;
        this.registerField();
        var ctx = createValidationCtx(this);
        var children = normalizeChildren(this, ctx);
        // Automatic v-model detection
        if (this.detectInput) {
            var inputs = findInputNodes(children);
            if (inputs.length) {
                inputs.forEach(function (input, idx) {
                    var _a, _b, _c, _d, _e, _f;
                    // If the elements are not checkboxes and there are more input nodes
                    if (!includes(['checkbox', 'radio'], (_b = (_a = input.data) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b.type) && idx > 0) {
                        return;
                    }
                    var resolved = getConfig().useConstraintAttrs ? resolveRules(input) : {};
                    if (!isEqual(_this._resolvedRules, resolved)) {
                        _this._needsValidation = true;
                    }
                    if (isHTMLNode(input)) {
                        _this.fieldName = ((_d = (_c = input.data) === null || _c === void 0 ? void 0 : _c.attrs) === null || _d === void 0 ? void 0 : _d.name) || ((_f = (_e = input.data) === null || _e === void 0 ? void 0 : _e.attrs) === null || _f === void 0 ? void 0 : _f.id);
                    }
                    _this._resolvedRules = resolved;
                    addListeners(_this, input);
                });
            }
        }
        return this.slim && children.length <= 1 ? children[0] : h(this.tag, children);
    },
    beforeDestroy: function () {
        // cleanup reference.
        this.$_veeObserver.unobserve(this.id);
    },
    activated: function () {
        this.isActive = true;
    },
    deactivated: function () {
        this.isActive = false;
    },
    methods: {
        setFlags: function (flags) {
            var _this = this;
            Object.keys(flags).forEach(function (flag) {
                _this.flags[flag] = flags[flag];
            });
        },
        syncValue: function (v) {
            var value = normalizeEventValue(v);
            this.value = value;
            this.flags.changed = this.initialValue !== value;
        },
        reset: function () {
            var _this = this;
            this.errors = [];
            this.initialValue = this.value;
            var flags = createFlags();
            flags.required = this.isRequired;
            this.setFlags(flags);
            this.failedRules = {};
            this.validateSilent();
            this._pendingValidation = undefined;
            this._pendingReset = true;
            setTimeout(function () {
                _this._pendingReset = false;
            }, this.debounce);
        },
        validate: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (args.length > 0) {
                        this.syncValue(args[0]);
                    }
                    return [2 /*return*/, triggerThreadSafeValidation(this)];
                });
            });
        },
        validateSilent: function () {
            return __awaiter(this, void 0, void 0, function () {
                var rules, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.setFlags({ pending: true });
                            rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
                            Object.defineProperty(rules, '_$$isNormalized', {
                                value: true,
                                writable: false,
                                enumerable: false,
                                configurable: false
                            });
                            return [4 /*yield*/, validate(this.value, rules, __assign(__assign({ name: this.name || this.fieldName }, createLookup(this)), { bails: this.bails, skipIfEmpty: this.skipIfEmpty, isInitial: !this.initialized, customMessages: this.customMessages }))];
                        case 1:
                            result = _a.sent();
                            this.setFlags({
                                pending: false,
                                valid: result.valid,
                                invalid: !result.valid
                            });
                            return [2 /*return*/, result];
                    }
                });
            });
        },
        setErrors: function (errors) {
            this.applyResult({ errors: errors, failedRules: {} });
        },
        applyResult: function (_a) {
            var errors = _a.errors, failedRules = _a.failedRules, regenerateMap = _a.regenerateMap;
            this.errors = errors;
            this._regenerateMap = regenerateMap;
            this.failedRules = __assign({}, (failedRules || {}));
            this.setFlags({
                valid: !errors.length,
                passed: !errors.length,
                invalid: !!errors.length,
                failed: !!errors.length,
                validated: true,
                changed: this.value !== this.initialValue
            });
        },
        registerField: function () {
            updateRenderingContextRefs(this);
        }
    }
});
function computeClassObj(names, flags) {
    var acc = {};
    var keys = Object.keys(flags);
    var length = keys.length;
    var _loop_1 = function (i) {
        var flag = keys[i];
        var className = (names && names[flag]) || flag;
        var value = flags[flag];
        if (isNullOrUndefined(value)) {
            return "continue";
        }
        if ((flag === 'valid' || flag === 'invalid') && !flags.validated) {
            return "continue";
        }
        if (typeof className === 'string') {
            acc[className] = value;
        }
        else if (Array.isArray(className)) {
            className.forEach(function (cls) {
                acc[cls] = value;
            });
        }
    };
    for (var i = 0; i < length; i++) {
        _loop_1(i);
    }
    return acc;
}
function createLookup(vm) {
    var providers = vm.$_veeObserver.refs;
    var reduced = {
        names: {},
        values: {}
    };
    return vm.fieldDeps.reduce(function (acc, depName) {
        if (!providers[depName]) {
            return acc;
        }
        acc.values[depName] = providers[depName].value;
        acc.names[depName] = providers[depName].name;
        return acc;
    }, reduced);
}
function extractId(vm) {
    if (vm.vid) {
        return vm.vid;
    }
    if (vm.name) {
        return vm.name;
    }
    if (vm.id) {
        return vm.id;
    }
    if (vm.fieldName) {
        return vm.fieldName;
    }
    PROVIDER_COUNTER++;
    return "_vee_" + PROVIDER_COUNTER;
}
function updateRenderingContextRefs(vm) {
    var providedId = extractId(vm);
    var id = vm.id;
    // Nothing has changed.
    if (!vm.isActive || (id === providedId && vm.$_veeObserver.refs[id])) {
        return;
    }
    // vid was changed.
    if (id !== providedId && vm.$_veeObserver.refs[id] === vm) {
        vm.$_veeObserver.unobserve(id);
    }
    vm.id = providedId;
    vm.$_veeObserver.observe(vm);
}
function createObserver() {
    return {
        refs: {},
        observe: function (vm) {
            this.refs[vm.id] = vm;
        },
        unobserve: function (id) {
            delete this.refs[id];
        }
    };
}
function watchCrossFieldDep(ctx, depName, withHooks) {
    if (withHooks === void 0) { withHooks = true; }
    var providers = ctx.$_veeObserver.refs;
    if (!ctx._veeWatchers) {
        ctx._veeWatchers = {};
    }
    if (!providers[depName] && withHooks) {
        return ctx.$once('hook:mounted', function () {
            watchCrossFieldDep(ctx, depName, false);
        });
    }
    if (!isCallable(ctx._veeWatchers[depName]) && providers[depName]) {
        ctx._veeWatchers[depName] = providers[depName].$watch('value', function () {
            if (ctx.flags.validated) {
                ctx._needsValidation = true;
                ctx.validate();
            }
        });
    }
}

var FLAGS_STRATEGIES = [
    ['pristine', 'every'],
    ['dirty', 'some'],
    ['touched', 'some'],
    ['untouched', 'every'],
    ['valid', 'every'],
    ['invalid', 'some'],
    ['pending', 'some'],
    ['validated', 'every'],
    ['changed', 'some'],
    ['passed', 'every'],
    ['failed', 'some']
];
var OBSERVER_COUNTER = 0;
function data$1() {
    var refs = {};
    var errors = {};
    var flags = createObserverFlags();
    var fields = {};
    // FIXME: Not sure of this one can be typed, circular type reference.
    var observers = [];
    return {
        id: '',
        refs: refs,
        observers: observers,
        errors: errors,
        flags: flags,
        fields: fields
    };
}
function provideSelf() {
    return {
        $_veeObserver: this
    };
}
var ValidationObserver = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
    name: 'ValidationObserver',
    provide: provideSelf,
    inject: {
        $_veeObserver: {
            from: '$_veeObserver',
            default: function () {
                if (!this.$vnode.context.$_veeObserver) {
                    return null;
                }
                return this.$vnode.context.$_veeObserver;
            }
        }
    },
    props: {
        tag: {
            type: String,
            default: 'span'
        },
        vid: {
            type: String,
            default: function () {
                return "obs_" + OBSERVER_COUNTER++;
            }
        },
        slim: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data: data$1,
    created: function () {
        var _this = this;
        this.id = this.vid;
        register(this);
        var onChange = debounce(function (_a) {
            var errors = _a.errors, flags = _a.flags, fields = _a.fields;
            _this.errors = errors;
            _this.flags = flags;
            _this.fields = fields;
        }, 16);
        this.$watch(computeObserverState, onChange);
    },
    activated: function () {
        register(this);
    },
    deactivated: function () {
        unregister(this);
    },
    beforeDestroy: function () {
        unregister(this);
    },
    render: function (h) {
        var children = normalizeChildren(this, prepareSlotProps(this));
        return this.slim && children.length <= 1 ? children[0] : h(this.tag, { on: this.$listeners }, children);
    },
    methods: {
        observe: function (subscriber, kind) {
            var _a;
            if (kind === void 0) { kind = 'provider'; }
            if (kind === 'observer') {
                this.observers.push(subscriber);
                return;
            }
            this.refs = __assign(__assign({}, this.refs), (_a = {}, _a[subscriber.id] = subscriber, _a));
        },
        unobserve: function (id, kind) {
            if (kind === void 0) { kind = 'provider'; }
            if (kind === 'provider') {
                var provider = this.refs[id];
                if (!provider) {
                    return;
                }
                this.$delete(this.refs, id);
                return;
            }
            var idx = findIndex(this.observers, function (o) { return o.id === id; });
            if (idx !== -1) {
                this.observers.splice(idx, 1);
            }
        },
        validateWithInfo: function (_a) {
            var _b = (_a === void 0 ? {} : _a).silent, silent = _b === void 0 ? false : _b;
            return __awaiter(this, void 0, void 0, function () {
                var results, isValid, _c, errors, flags, fields;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, Promise.all(__spreadArrays(values(this.refs)
                                .filter(function (r) { return !r.disabled; })
                                .map(function (ref) { return ref[silent ? 'validateSilent' : 'validate']().then(function (r) { return r.valid; }); }), this.observers.filter(function (o) { return !o.disabled; }).map(function (obs) { return obs.validate({ silent: silent }); })))];
                        case 1:
                            results = _d.sent();
                            isValid = results.every(function (r) { return r; });
                            _c = computeObserverState.call(this), errors = _c.errors, flags = _c.flags, fields = _c.fields;
                            this.errors = errors;
                            this.flags = flags;
                            this.fields = fields;
                            return [2 /*return*/, {
                                    errors: errors,
                                    flags: flags,
                                    fields: fields,
                                    isValid: isValid
                                }];
                    }
                });
            });
        },
        validate: function (_a) {
            var _b = (_a === void 0 ? {} : _a).silent, silent = _b === void 0 ? false : _b;
            return __awaiter(this, void 0, void 0, function () {
                var isValid;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.validateWithInfo({ silent: silent })];
                        case 1:
                            isValid = (_c.sent()).isValid;
                            return [2 /*return*/, isValid];
                    }
                });
            });
        },
        handleSubmit: function (cb) {
            return __awaiter(this, void 0, void 0, function () {
                var isValid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validate()];
                        case 1:
                            isValid = _a.sent();
                            if (!isValid || !cb) {
                                return [2 /*return*/];
                            }
                            return [2 /*return*/, cb()];
                    }
                });
            });
        },
        reset: function () {
            return __spreadArrays(values(this.refs), this.observers).forEach(function (ref) { return ref.reset(); });
        },
        setErrors: function (errors) {
            var _this = this;
            Object.keys(errors).forEach(function (key) {
                var provider = _this.refs[key];
                if (!provider)
                    return;
                var errorArr = errors[key] || [];
                errorArr = typeof errorArr === 'string' ? [errorArr] : errorArr;
                provider.setErrors(errorArr);
            });
            this.observers.forEach(function (observer) {
                observer.setErrors(errors);
            });
        }
    }
});
function unregister(vm) {
    if (vm.$_veeObserver) {
        vm.$_veeObserver.unobserve(vm.id, 'observer');
    }
}
function register(vm) {
    if (vm.$_veeObserver) {
        vm.$_veeObserver.observe(vm, 'observer');
    }
}
function prepareSlotProps(vm) {
    return __assign(__assign({}, vm.flags), { errors: vm.errors, fields: vm.fields, validate: vm.validate, validateWithInfo: vm.validateWithInfo, passes: vm.handleSubmit, handleSubmit: vm.handleSubmit, reset: vm.reset });
}
// Creates a modified version of validation flags
function createObserverFlags() {
    return __assign(__assign({}, createFlags()), { valid: true, invalid: false });
}
function computeObserverState() {
    var vms = __spreadArrays(values(this.refs), this.observers.filter(function (o) { return !o.disabled; }));
    var errors = {};
    var flags = createObserverFlags();
    var fields = {};
    var length = vms.length;
    for (var i = 0; i < length; i++) {
        var vm = vms[i];
        // validation provider
        if (Array.isArray(vm.errors)) {
            errors[vm.id] = vm.errors;
            fields[vm.id] = __assign({ id: vm.id, name: vm.name, failedRules: vm.failedRules }, vm.flags);
            continue;
        }
        // Nested observer, merge errors and fields
        errors = __assign(__assign({}, errors), vm.errors);
        fields = __assign(__assign({}, fields), vm.fields);
    }
    FLAGS_STRATEGIES.forEach(function (_a) {
        var flag = _a[0], method = _a[1];
        flags[flag] = vms[method](function (vm) { return vm.flags[flag]; });
    });
    return { errors: errors, flags: flags, fields: fields };
}

function withValidation(component, mapProps) {
    var _a;
    if (mapProps === void 0) { mapProps = identity; }
    var options = 'options' in component ? component.options : component;
    var providerOpts = ValidationProvider.options;
    var hoc = {
        name: (options.name || 'AnonymousHoc') + "WithValidation",
        props: __assign({}, providerOpts.props),
        data: providerOpts.data,
        computed: __assign({}, providerOpts.computed),
        methods: __assign({}, providerOpts.methods),
        beforeDestroy: providerOpts.beforeDestroy,
        inject: providerOpts.inject
    };
    var eventName = ((_a = options === null || options === void 0 ? void 0 : options.model) === null || _a === void 0 ? void 0 : _a.event) || 'input';
    hoc.render = function (h) {
        var _a;
        this.registerField();
        var vctx = createValidationCtx(this);
        var listeners = __assign({}, this.$listeners);
        var model = findModel(this.$vnode);
        this._inputEventName = this._inputEventName || getInputEventName(this.$vnode, model);
        var value = findValue(this.$vnode);
        onRenderUpdate(this, value === null || value === void 0 ? void 0 : value.value);
        var _b = createCommonHandlers(this), onInput = _b.onInput, onBlur = _b.onBlur, onValidate = _b.onValidate;
        mergeVNodeListeners(listeners, eventName, onInput);
        mergeVNodeListeners(listeners, 'blur', onBlur);
        this.normalizedEvents.forEach(function (evt) {
            mergeVNodeListeners(listeners, evt, onValidate);
        });
        // Props are any attrs not associated with ValidationProvider Plus the model prop.
        // WARNING: Accidental prop overwrite will probably happen.
        var prop = (findModelConfig(this.$vnode) || { prop: 'value' }).prop;
        var props = __assign(__assign(__assign({}, this.$attrs), (_a = {}, _a[prop] = model === null || model === void 0 ? void 0 : model.value, _a)), mapProps(vctx));
        return h(options, {
            attrs: this.$attrs,
            props: props,
            on: listeners,
            scopedSlots: this.$scopedSlots
        }, normalizeSlots(this.$slots, this.$vnode.context));
    };
    return hoc;
}

var version = '3.4.5';



// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/forms/FormLoader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var FormLoadervue_type_script_lang_js_ = ({
  components: {
    ValidationObserver: ValidationObserver
  },
  props: {
    identifier: {
      type: [Array, String, Object],
      default: function () {
        return null;
      }
    },
    additional_form_data: {
      type: Object,
      default: () => ({})
    },
    additional_load_form_data: {
      type: Object,
      default: () => ({})
    },
    cols: {
      type: Number,
      default: 12
    },
    load_form: String,
    load_area: String,
    populate: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      field_list: {},
      form_loaded: true,
      loaded_area: "",
      loaded_form_name: "",
      loaded_form_data: false,
      update_form: 0
    };
  },

  asyncComputed: {
    async_field_list() {
      let new_field_list = {};
      let self = this;
      Object.keys(this.field_list).forEach(field => {
        let this_field = self.field_list[field];

        if (!self.is_undefined(this_field.rules.hide)) {
          if (!self.is_undefined(this_field.rules.show) && self.is_object(this_field.rules.show)) {
            Object.keys(this_field.rules.show).forEach(value => {
              if (!self.is_undefined(self.field_list[value].rules.value) && self.field_list[value].rules.value === this_field.rules.show[value]) {
                new_field_list[field] = this_field;
              }
            });
          }
        } else {
          new_field_list[field] = this_field;
        }
      });
      return new_field_list;
    }

  },
  computed: {
    loaded_additional_form_data: function () {
      return this.additional_form_data;
    },
    loaded_additional_load_form_data: function () {
      return this.additional_load_form_data;
    },
    loaded_identifier: function () {
      return this.identifier;
    },
    form_data: function () {
      var self = this;
      var inputs = {};
      var form_data = new FormData();
      let multi_part = !this.is_undefined(this.loaded_form_data.custom_data.axios) && !this.is_undefined(this.loaded_form_data.custom_data.axios.multi_part) && this.loaded_form_data.custom_data.axios.multi_part ? true : false;
      let identifier = !this.is_undefined(this.loaded_identifier) && this.loaded_identifier !== null && this.loaded_identifier !== 0 ? true : false;
      Object.keys(this.async_field_list).forEach(item => {
        if (multi_part) {
          //prep formdata
          if (form_data.has(self.async_field_list[item].validation)) {
            form_data.set(self.async_field_list[item].validation, this.is_object(self.async_field_list[item]["rules"].value) || this.is_array(self.async_field_list[item]["rules"].value) ? JSON.stringify(self.async_field_list[item]["rules"].value) : self.async_field_list[item]["rules"].value);
          } else {
            form_data.append(self.async_field_list[item].validation, this.is_object(self.async_field_list[item]["rules"].value) || this.is_array(self.async_field_list[item]["rules"].value) ? JSON.stringify(self.async_field_list[item]["rules"].value) : self.async_field_list[item]["rules"].value);
          }
        } else {
          //prep inputs
          inputs[self.async_field_list[item].validation] = self.async_field_list[item]["rules"].value;
        }
      });

      if (multi_part) {
        //prep formdata
        form_data.append("form_name", this.loaded_form_name);
        form_data.append("area", this.loaded_area);

        if (identifier) {
          if (form_data.has("id")) {
            form_data.set("id", this.is_object(this.loaded_identifier) || this.is_array(this.loaded_identifier) ? JSON.stringify(this.loaded_identifier) : this.loaded_identifier);
          } else {
            form_data.append("id", this.is_object(this.loaded_identifier) || this.is_array(this.loaded_identifier) ? JSON.stringify(this.loaded_identifier) : this.loaded_identifier);
          }
        }

        return form_data;
      } else {
        inputs["area"] = this.loaded_form_data.area;
        inputs["form_name"] = this.loaded_form_data.name;

        if (identifier) {
          inputs["id"] = this.loaded_identifier;
        }

        return inputs;
      }
    },
    display_icon: function () {
      if (!this.form_loaded || !this.loaded_form_data) return false;
      return this.is_undefined(this.loaded_form_data.custom_data.button.icon) || this.loaded_form_data.custom_data.button.button === false ? false : true;
    },
    icon_text: function () {
      if (!this.form_loaded || !this.loaded_form_data) return "Loading...";
      return this.is_undefined(this.loaded_form_data.custom_data.button.icon) ? "Submit" : this.loaded_form_data.custom_data.button.icon.tooltip;
    },
    icon_mdi: function () {
      if (!this.form_loaded || !this.loaded_form_data) return "primary";
      return this.is_undefined(this.loaded_form_data.custom_data.button.icon) ? "" : this.loaded_form_data.custom_data.button.icon.mdi;
    },
    display_button: function () {
      if (!this.form_loaded || !this.loaded_form_data) return false;
      return this.is_undefined(this.loaded_form_data.custom_data.button) || this.loaded_form_data.custom_data.button.button === false ? false : true;
    },
    cancel_button: function () {
      if (!this.form_loaded || !this.loaded_form_data) return false;
      if (this.is_undefined(this.loaded_form_data.custom_data.button)) return false;
      if (this.is_undefined(this.loaded_form_data.custom_data.button.cancel)) return false;
      return this.loaded_form_data.custom_data.button.cancel;
    },
    button_text: function () {
      if (!this.form_loaded || !this.loaded_form_data) return "Loading...";
      return this.is_undefined(this.loaded_form_data.custom_data.button.text) ? "Submit" : this.loaded_form_data.custom_data.button.text;
    },
    button_colour: function () {
      if (!this.form_loaded || !this.loaded_form_data) return "primary";
      return this.is_undefined(this.loaded_form_data.custom_data.button.colour) ? "primary" : this.loaded_form_data.custom_data.button.colour;
    }
  },
  watch: {
    field_list: {
      handler: function () {
        this.$asyncComputed.async_field_list.update();
      },
      deep: true
    },
    loaded_form_name: function () {},
    form_loaded: function (val) {
      this.$emit("loaded", val);
    },
    loaded_additional_form_data: function () {}
  },

  async mounted() {
    this.loaded_form_name = this.load_form;
    this.loaded_area = this.load_area;
    await this.load_form_fields(this.loaded_identifier, this.loaded_area);
  },

  methods: {
    loaded_computed_field_list() {
      if (this.field_list.length !== 0) {
        let new_field_list = {};
        let self = this;
        Object.keys(this.field_list).forEach(field => {
          let this_field = self.field_list[field];

          if (!self.is_undefined(this_field.rules.hide)) {
            if (!self.is_undefined(this_field.rules.show) && self.is_array(this_field.rules.show)) {
              this_field.rules.show.forEach((value, x) => {
                if (!self.is_undefined(self.field_list[x].rules.value) && self.field_list[x].rules.value === value) {
                  new_field_list[field] = this_field;
                }
              });
            }
          } else {
            new_field_list[field] = this_field;
          }
        });
        return new_field_list;
      }

      return {};
    },

    update_field(event) {
      this.field_list[this.snake_to_camel(event.validation)] = event;
    },

    cancel_form() {
      this.$emit("cancelled", true);
    },

    form_props: function () {
      let result = {};
      if (!this.loaded_form_data) return result;

      if (!this.is_undefined(this.loaded_form_data.custom_data.axios) && !this.is_undefined(this.loaded_form_data.custom_data.axios.multi_part) && this.loaded_form_data.custom_data.axios.multi_part) {
        result["enctype"] = "application/x-www-form-urlencoded";
      }

      return result;
    },
    prepare_props: function () {
      let result = {};

      if (this.display_icon) {
        result.color = !this.is_undefined(this.loaded_form_data.custom_data.button.colour) ? this.loaded_form_data.custom_data.button.colour : "primary";
        result.class = !this.is_undefined(this.loaded_form_data.custom_data.button.icon.class) ? this.loaded_form_data.custom_data.button.icon.class : "";

        if (this.is_undefined(this.loaded_form_data.custom_data.button.icon.size)) {
          result[this.loaded_form_data.custom_data.button.icon.size] = true;
        }
      }

      return result;
    },
    input_cols: function (field) {
      return this.is_undefined(field.cols) ? 12 : field.cols;
    },
    merge_addition_data: function (form_data, additional_data) {
      let multi_part = !this.is_undefined(this.loaded_form_data.custom_data.axios) && !this.is_undefined(this.loaded_form_data.custom_data.axios.multi_part) && this.loaded_form_data.custom_data.axios.multi_part ? true : false;
      Object.keys(additional_data).forEach(function (key) {
        if (multi_part) {
          if (form_data.has(key)) {
            form_data.set(key, this.is_object(additional_data[key]) || this.is_array(additional_data[key]) ? JSON.stringify(additional_data[key]) : additional_data[key]);
          } else {
            form_data.append(key, this.is_object(additional_data[key]) || this.is_array(additional_data[key]) ? JSON.stringify(additional_data[key]) : additional_data[key]);
          }
        } else {
          form_data[key] = additional_data[key];
        }
      });
      return form_data;
    },
    merge_additional_load_form_data: function (form_data, additional_data) {
      Object.keys(additional_data).forEach(function (key) {
        form_data[key] = additional_data[key];
      });
      return form_data;
    },

    async load_form_fields(id, section) {
      var self = this;
      self.form_loaded = false;
      await this.request("post", "/axios/forms/load", this.merge_additional_load_form_data({
        form_name: this.loaded_form_name,
        populate: this.populate,
        area: section,
        id: id
      }, this.loaded_additional_load_form_data), true, false).then(response => {
        console.log(response);
        self.form_loaded = true;
        self.field_list = response.data.fields;
        self.loaded_form_data = response.data.form;
      });
      return true;
    },

    process_form: function () {
      var self = this;
      self.form_loaded = false;
      this.request("post", "/axios/forms/process/" + this.loaded_form_data.area + "/" + this.loaded_form_data.name, this.merge_addition_data(this.form_data, this.loaded_additional_form_data), this.loaded_form_data.custom_data.axios.expecting_results, this.loaded_form_data.custom_data.axios.display_notification, this.loaded_form_data.custom_data.axios.headers).then(response => {
        self.form_loaded = true;

        if (!response.success) {
          self.$refs.form.setErrors(self.validate_response(response.data));
          return false;
        }

        self.$refs.form.reset();

        if (self.loaded_form_data.custom_data.axios.expecting_results) {
          self[self.loaded_form_data.custom_data.axios.result_variable] = response.data;
          self.$emit("results", response.data);
        }

        if (!self.is_undefined(response.redirect_override) && response.redirect_override !== false) {
          self.redirect(response.redirect_override);
        } else if (self.loaded_form_data.custom_data.axios.redirect !== false) {
          self.redirect(self.loaded_form_data.custom_data.axios.redirect);
        }
      });
    },
    is_object_empty: function (o) {
      for (var p in o) {
        if (Object.prototype.hasOwnProperty.call(o, p)) {
          return false;
        }
      }

      return true;
    },
    is_object: function (o) {
      return typeof o === "object";
    },
    is_array: function (o) {
      return Array.isArray(o);
    },
    is_file: function (o) {
      return 'File' in window && o instanceof File ? true : false;
    },
    is_undefined: function (o) {
      return typeof o === 'undefined';
    },
    snake_to_camel: function (s) {
      return s.toLowerCase().replace(/[-_][a-z0-9]/g, group => group.slice(-1).toUpperCase());
    },
    request: async function (type, url, data = null, expecting_results = false, showalert = true, parameters = {}, loader = true) {
      var _this = this;

      let default_parameters = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      let send_parameters = {
        headers: { ...default_parameters,
          ...parameters
        }
      };
      let return_reponse = {};
      return await axios_default.a[type](url, data, send_parameters).then(response => {
        var request_response = response.data;

        if (this.is_object(request_response)) {
          if (!request_response.success) {
            if (!this.is_object(request_response.data)) {
              if (showalert) return_reponse.alert = {
                text: request_response.data,
                colour: 'error'
              };
            } else {
              if (showalert) return_reponse.alert = {
                text: 'Please correct your form errors',
                colour: 'error'
              };
            }

            return_reponse.reposne = request_response;
          } else {
            if (showalert) return_reponse.alert = {
              text: 'Connection Error - Please try again',
              colour: 'error'
            };
          }
        } else {
          if (showalert) return_reponse.alert = {
            text: 'Connection Error - Please try again',
            colour: 'error'
          };
        }

        return_reponse.reposne = request_response;
      }).finally(() => {
        if (loader) return_reponse.loader = false;
        console.log(return_reponse);
        return return_reponse;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/forms/FormLoader.vue?vue&type=script&lang=js&
 /* harmony default export */ var forms_FormLoadervue_type_script_lang_js_ = (FormLoadervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/forms/FormLoader.vue





/* normalize component */

var component = normalizeComponent(
  forms_FormLoadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormLoader = (component.exports);
// CONCATENATED MODULE: ./src/install.js

const LaravelEasyForms = {
  install(Vue) {
    Vue.component("form-loader", FormLoader);
  }

};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(LaravelEasyForms);
}

/* harmony default export */ var install = (LaravelEasyForms);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (install);



/***/ })

/******/ });
});
//# sourceMappingURL=laravel-vue-easyforms.umd.js.map