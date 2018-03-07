[cost_of_creation](../README.md) > ["_classes/lib/utils/StorageFile"](../modules/__classes_lib_utils_storagefile_.md) > [StorageFile](../classes/__classes_lib_utils_storagefile_.storagefile.md)



# Class: StorageFile

## Index

### Constructors

* [constructor](__classes_lib_utils_storagefile_.storagefile.md#constructor)


### Properties

* [data](__classes_lib_utils_storagefile_.storagefile.md#data)
* [storage](__classes_lib_utils_storagefile_.storagefile.md#storage)
* [url](__classes_lib_utils_storagefile_.storagefile.md#url)


### Methods

* [_runListeners](__classes_lib_utils_storagefile_.storagefile.md#_runlisteners)
* [delete](__classes_lib_utils_storagefile_.storagefile.md#delete)
* [get](__classes_lib_utils_storagefile_.storagefile.md#get)
* [list](__classes_lib_utils_storagefile_.storagefile.md#list)
* [load](__classes_lib_utils_storagefile_.storagefile.md#load)
* [onSet](__classes_lib_utils_storagefile_.storagefile.md#onset)
* [open](__classes_lib_utils_storagefile_.storagefile.md#open)
* [save](__classes_lib_utils_storagefile_.storagefile.md#save)
* [set](__classes_lib_utils_storagefile_.storagefile.md#set)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new StorageFile**(uri: *`string`*, data?: *`any`*): [StorageFile](__classes_lib_utils_storagefile_.storagefile.md)





**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| uri | `string`  | - |   - |
| data | `any`  |  {} |   - |





**Returns:** [StorageFile](__classes_lib_utils_storagefile_.storagefile.md)

---


## Properties
<a id="data"></a>

###  data

**●  data**:  *`any`* 






___

<a id="storage"></a>

###  storage

**●  storage**:  *`Storage`*  =  localStorage






___

<a id="url"></a>

###  url

**●  url**:  *`string`* 






___


## Methods
<a id="_runlisteners"></a>

###  _runListeners

► **_runListeners**(): `void`








**Returns:** `void`





___

<a id="delete"></a>

###  delete

► **delete**(data?: *`object`*): `void`






**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| data | `object`  |  {} |   - |





**Returns:** `void`





___

<a id="get"></a>

###  get

► **get**(key: *`string`*): `any`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `string`   |  - |





**Returns:** `any`





___

<a id="list"></a>

###  list

► **list**(): `string`[]








**Returns:** `string`[]





___

<a id="load"></a>

###  load

► **load**(): `any`








**Returns:** `any`





___

<a id="onset"></a>

###  onSet

► **onSet**(key: *`string`*, callback: *`Function`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `string`   |  - |
| callback | `Function`   |  - |





**Returns:** `void`





___

<a id="open"></a>

###  open

► **open**(uri: *`string`*): [StorageFile](__classes_lib_utils_storagefile_.storagefile.md)






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| uri | `string`   |  - |





**Returns:** [StorageFile](__classes_lib_utils_storagefile_.storagefile.md)





___

<a id="save"></a>

###  save

► **save**(data?: *`any`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  - |





**Returns:** `void`





___

<a id="set"></a>

###  set

► **set**(key: *`string`*, value: *`any`*, ifUndefined?: *`boolean`*): `void`






**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| key | `string`  | - |   - |
| value | `any`  | - |   - |
| ifUndefined | `boolean`  | false |   - |





**Returns:** `void`





___


