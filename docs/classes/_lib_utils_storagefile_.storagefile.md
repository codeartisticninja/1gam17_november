[cost_of_creation](../README.md) > ["lib/utils/StorageFile"](../modules/_lib_utils_storagefile_.md) > [StorageFile](../classes/_lib_utils_storagefile_.storagefile.md)

# Class: StorageFile

## Hierarchy

**StorageFile**

## Index

### Constructors

* [constructor](_lib_utils_storagefile_.storagefile.md#constructor)

### Properties

* [data](_lib_utils_storagefile_.storagefile.md#data)
* [storage](_lib_utils_storagefile_.storagefile.md#storage)
* [url](_lib_utils_storagefile_.storagefile.md#url)

### Methods

* [_runListeners](_lib_utils_storagefile_.storagefile.md#_runlisteners)
* [delete](_lib_utils_storagefile_.storagefile.md#delete)
* [get](_lib_utils_storagefile_.storagefile.md#get)
* [list](_lib_utils_storagefile_.storagefile.md#list)
* [load](_lib_utils_storagefile_.storagefile.md#load)
* [onSet](_lib_utils_storagefile_.storagefile.md#onset)
* [open](_lib_utils_storagefile_.storagefile.md#open)
* [save](_lib_utils_storagefile_.storagefile.md#save)
* [set](_lib_utils_storagefile_.storagefile.md#set)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new StorageFile**(uri: *`string`*, data?: *`any`*): [StorageFile](_lib_utils_storagefile_.storagefile.md)

*Defined in [lib/utils/StorageFile.ts:16](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/StorageFile.ts#L16)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| uri | `string` | - |
| `Default value` data | `any` |  {} |

**Returns:** [StorageFile](_lib_utils_storagefile_.storagefile.md)

___

## Properties

<a id="data"></a>

###  data

**● data**: *`any`*

*Defined in [lib/utils/StorageFile.ts:18](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/StorageFile.ts#L18)*

___
<a id="storage"></a>

###  storage

**● storage**: *`Storage`* =  localStorage

*Defined in [lib/utils/StorageFile.ts:14](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/StorageFile.ts#L14)*

___
<a id="url"></a>

###  url

**● url**: *`string`*

*Defined in [lib/utils/StorageFile.ts:13](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/StorageFile.ts#L13)*

___

## Methods

<a id="_runlisteners"></a>

###  _runListeners

▸ **_runListeners**(): `void`

*Defined in [lib/utils/StorageFile.ts:109](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/StorageFile.ts#L109)*

**Returns:** `void`

___
<a id="delete"></a>

###  delete

▸ **delete**(data?: *`object`*): `void`

*Defined in [lib/utils/StorageFile.ts:50](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/StorageFile.ts#L50)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` data | `object` |  {} |

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**(key: *`string`*): `any`

*Defined in [lib/utils/StorageFile.ts:55](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/StorageFile.ts#L55)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `any`

___
<a id="list"></a>

###  list

▸ **list**(): `string`[]

*Defined in [lib/utils/StorageFile.ts:85](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/StorageFile.ts#L85)*

**Returns:** `string`[]

___
<a id="load"></a>

###  load

▸ **load**(): `any`

*Defined in [lib/utils/StorageFile.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/StorageFile.ts#L31)*

**Returns:** `any`

___
<a id="onset"></a>

###  onSet

▸ **onSet**(key: *`string`*, callback: *`Function`*): `void`

*Defined in [lib/utils/StorageFile.ts:79](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/StorageFile.ts#L79)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| callback | `Function` |

**Returns:** `void`

___
<a id="open"></a>

###  open

▸ **open**(uri: *`string`*): [StorageFile](_lib_utils_storagefile_.storagefile.md)

*Defined in [lib/utils/StorageFile.ts:105](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/StorageFile.ts#L105)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| uri | `string` |

**Returns:** [StorageFile](_lib_utils_storagefile_.storagefile.md)

___
<a id="save"></a>

###  save

▸ **save**(data?: *`any`*): `void`

*Defined in [lib/utils/StorageFile.ts:42](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/StorageFile.ts#L42)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` data | `any` |

**Returns:** `void`

___
<a id="set"></a>

###  set

▸ **set**(key: *`string`*, value: *`any`*, ifUndefined?: *`boolean`*): `void`

*Defined in [lib/utils/StorageFile.ts:66](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/StorageFile.ts#L66)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| key | `string` | - |
| value | `any` | - |
| `Default value` ifUndefined | `boolean` | false |

**Returns:** `void`

___

