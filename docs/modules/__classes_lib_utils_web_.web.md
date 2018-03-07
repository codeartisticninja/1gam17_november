[cost_of_creation](../README.md) > ["_classes/lib/utils/web"](../modules/__classes_lib_utils_web_.md) > [web](../modules/__classes_lib_utils_web_.web.md)



# Module: web


web module
*__date__*: 07-mar-2018


## Index

### Functions

* [basename](__classes_lib_utils_web_.web.md#basename)
* [dirname](__classes_lib_utils_web_.web.md#dirname)
* [get](__classes_lib_utils_web_.web.md#get)
* [parseUrl](__classes_lib_utils_web_.web.md#parseurl)
* [post](__classes_lib_utils_web_.web.md#post)
* [resolveUrl](__classes_lib_utils_web_.web.md#resolveurl)
* [stringifyUrl](__classes_lib_utils_web_.web.md#stringifyurl)



---
## Functions
<a id="basename"></a>

###  basename

► **basename**(path: *`string`*): `string`






Get basename of path.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| path | `string`   |  - |





**Returns:** `string`





___

<a id="dirname"></a>

###  dirname

► **dirname**(path: *`string`*): `string`






Get directory name of path.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| path | `string`   |  - |





**Returns:** `string`





___

<a id="get"></a>

###  get

► **get**(url: *`string`*, options?: *`any`*, cb?: *`Function`*): `XMLHttpRequest`






Do a HTTP GET request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |
| options | `any`   |  - |
| cb | `Function`   |  - |





**Returns:** `XMLHttpRequest`





___

<a id="parseurl"></a>

###  parseUrl

► **parseUrl**(url: *`string`*): `object`






Parse a URL into seperate components.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |





**Returns:** `object`





___

<a id="post"></a>

###  post

► **post**(url: *`string`*, data: *`string`*, options?: *`any`*, cb?: *`Function`*): `XMLHttpRequest`






Do a HTTP POST request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |
| data | `string`   |  - |
| options | `any`   |  - |
| cb | `Function`   |  - |





**Returns:** `XMLHttpRequest`





___

<a id="resolveurl"></a>

###  resolveUrl

► **resolveUrl**(abs: *`string`*, rel: *`string`*): `string`






Resolve relative URL to absolute URL.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| abs | `string`   |  - |
| rel | `string`   |  - |





**Returns:** `string`





___

<a id="stringifyurl"></a>

###  stringifyUrl

► **stringifyUrl**(url: *`object`*): `string`






Serialize URL object to string.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `object`   |  - |





**Returns:** `string`





___


