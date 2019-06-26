




/**
 *
 *
 * cookie-manager.js
 * simple, easy and lightweight cookie management library
 * {26/06/2019} - version 1.0
 * {https://github.com/Autonomoustic/cookies-manager}
 *
 * Copyright 2018 Ali <ali.aziz4627@gmail.com>
 * Released under MIT License
 * {LICENSE URL}
 *
 *
 */


(function(window, document) {
  'use strict';

  var CookieManager = {

    /**
     *
     * @param {String} name - key of cookie
     * @param {String} value - value of cookie
     * @param {Number} [expires] - when the cookie expires in days
     * @param {String} [domain] - cookie domain
     * @param {String} [path] - cookie path
     * @param {Boolean} [secure] - set HTTP only or HTTPS
     */
    set: function (name, value, expires, domain, path, secure) {
      var cookieStr = name + '=' + value;

      if (expires) {
        var now = new Date();
        now.setTime(now.getTime() + expires * 24 * 60 * 60 * 1000);
        cookieStr += ';' + 'expires=' + now.toUTCString();
      }
      ;

      if (domain) {
        cookieStr += ';' + 'domain=' + domain;
      }
      ;

      if (path) {
        cookieStr += ';' + 'path=' + path;
      }
      ;

      if (secure) {
        cookieStr += ';' + 'secure';
      }
      ;

      //Create Cookie
      document.cookie = cookieStr
    },

    /**
     *
     * Retrieve the cookie value with given cookie name
     * @param {String} name - cookie name
     * @returns {String} - cookie value
     */
    get: function (name) {
      const cookies = document.cookie.split(';').map(function (cookie) {
        return cookie.trim();
      });

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        const key = cookie[0];
        const value = cookie[1];

        if (key === name) {
          return value
        }
      }
      return undefined
    },

    /**
     *
     * update cookie with given params
     * @param {String} name - key of cookie
     * @param {String} value - value of cookie
     * @param {Number} [expires] - when the cookie expires in days
     * @param {String} [domain] - cookie domain
     * @param {String} [path] - cookie path
     * @param {Boolean} [secure] - set HTTP only or HTTPS
     */
    update: function (name, value, expires, domain, path, secure) {
      this.set(name, value, expires, domain, path, secure);
    },

    /**
     * Removes the cookie with given name
     * @param {String} name - cookie name
     */
    remove: function(name){
      this.set(name, '', -1)
    },

    /**
     * Retrieve all cookies
     */
    getAll: function() {
      const cookies = document.cookie.split(';').map(function(cookie) {
        return cookie.trim()
      });

      let cookiesList = [];;

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        const key = cookie[0];
        const value = cookie[1];

        cookiesList.push({ key, value})
      }

      return cookiesList
    },

    /**
     * Remove all cookies
     */
    clear: function() {
      const cookies = document.cookie.split(';').map(function (cookie) {
        return cookie.trim()
      });

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=');
        const key = cookie[0];

        this.remove(key)
      }
    }
  };

  // AMD support
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return CookieManager;
    });
    // CommonJS and Node.js module support.
  } else if (typeof exports !== 'undefined') {
    // Support Node.js specific `module.exports` (which can be a function)
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = CookieManager;
    }
    // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
    exports.CookieManager = CookieManager;
  } else {
    window.CookieManager = CookieManager;
  }

})(window, document);
