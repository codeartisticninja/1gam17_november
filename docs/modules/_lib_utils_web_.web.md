[cost_of_creation](../README.md) > ["lib/utils/web"](../modules/_lib_utils_web_.md) > [web](../modules/_lib_utils_web_.web.md)

# Module: web

web module

*__date__*: 07-mar-2018

## Index

### Functions

* [basename](_lib_utils_web_.web.md#basename)
* [dirname](_lib_utils_web_.web.md#dirname)
* [get](_lib_utils_web_.web.md#get)
* [parseUrl](_lib_utils_web_.web.md#parseurl)
* [post](_lib_utils_web_.web.md#post)
* [resolveUrl](_lib_utils_web_.web.md#resolveurl)
* [stringifyUrl](_lib_utils_web_.web.md#stringifyurl)

---

## Functions

<a id="basename"></a>

###  basename

▸ **basename**(path: *`string`*): `string`

*Defined in [lib/utils/web.ts:45](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/web.ts#L45)*

Get basename of path.

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `string`

___
<a id="dirname"></a>

###  dirname

▸ **dirname**(path: *`string`*): `string`

*Defined in [lib/utils/web.ts:49](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/web.ts#L49)*

Get directory name of path.

**Parameters:**

| Name | Type |
| ------ | ------ |
| path | `string` |

**Returns:** `string`

___
<a id="get"></a>

###  get

▸ **get**(url: *`string`*, options?: *`any`*, cb?: *`Function`*): `XMLHttpRequest`

*Defined in [lib/utils/web.ts:11](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/web.ts#L11)*

Do a HTTP GET request.

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| `Optional` options | `any` |
| `Optional` cb | `Function` |

**Returns:** `XMLHttpRequest`

___
<a id="parseurl"></a>

###  parseUrl

▸ **parseUrl**(url: *`string`*): `object`

*Defined in [lib/utils/web.ts:56](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/web.ts#L56)*

Parse a URL into seperate components.

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `object`

___
<a id="post"></a>

###  post

▸ **post**(url: *`string`*, data: *`string`*, options?: *`any`*, cb?: *`Function`*): `XMLHttpRequest`

*Defined in [lib/utils/web.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/web.ts#L28)*

Do a HTTP POST request.

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |
| data | `string` |
| `Optional` options | `any` |
| `Optional` cb | `Function` |

**Returns:** `XMLHttpRequest`

___
<a id="resolveurl"></a>

###  resolveUrl

▸ **resolveUrl**(abs: *`string`*, rel: *`string`*): `string`

*Defined in [lib/utils/web.ts:128](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/web.ts#L128)*

Resolve relative URL to absolute URL.

**Parameters:**

| Name | Type |
| ------ | ------ |
| abs | `string` |
| rel | `string` |

**Returns:** `string`

___
<a id="stringifyurl"></a>

###  stringifyUrl

▸ **stringifyUrl**(url: *`object`*): `string`

*Defined in [lib/utils/web.ts:109](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/web.ts#L109)*

Serialize URL object to string.

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `object` |

**Returns:** `string`

___

