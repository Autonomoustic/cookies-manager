# cookies-manager

![Licence](https://img.shields.io/github/license/autonomoustic/cookies-manager.svg)

This library provides more useful interface to manage your cookies.

- No dependencies
- Supports AMD, CommonJS and Node modules
- light 1kb
- supported by all browsers

## Installation
Download the `Cookies-manager` and include in your project.

```html
    <script src='cookies-manager.min.js'></script>
```

## Usage
 after include the `cookies-manager.min.js`, you will be able to use `CookieManger` object.

 You can also load `CookieManager` object as an AMD, CommonJS or node module.

## Functionalities

### Creating a Cookie

 Creating a new cookie
```js
   CookieManager.set(name, value, expires, domain, path, secure);
```

 - `name (String)` cookie name
 - `value (String)` cookie value
 - `expires (Optional) (Number)` cookie expiration in days
 - `domain (Optional) (String)` cookie domain
 - `path (Optional) (String)` cookie path
 - `secure (Optional) (Boolean)` cookie ssl support flag

 ### Retrieving a Cookie

Getting a cookie with given cookie name

```js
   CookieManager.get(name);
 ```
 - `name (String)` cookie name

 ### Updating a Cookie

 Updating an existing cookie

```js
   CookieManager.update(name, value, expires, domain, path, secure);
```
- `name (String)` cookie name
- `value (String)` cookie value
- `expires (Optional) (Number)` cookie expiration in days
- `domain (Optional) (String)` cookie domain
- `path (Optional) (String)` cookie path
- `secure (Optional) (Boolean)` cookie ssl support flag

### Deleting a Cookie
 Deleting a cookie with given cookie name

```js
   CookieManager.remove(name);
 ```
-  `name (String)` cookie name

 ### Listing All Cookies
 Returns all of the existing cookies
```js
   CookieManager.getAll();
```
 ### Clearing All Cookies
 Clears all of the existing cookies
```js
   CookieManager.clear();
```

## Author and License
 Created and maintained by [Ali](https://github.com/Autonomoustic) under [MIT](LICENCE.md) licence.