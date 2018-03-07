[cost_of_creation](../README.md) > ["_classes/lib/utils/Script"](../modules/__classes_lib_utils_script_.md) > [Script](../classes/__classes_lib_utils_script_.script.md)



# Class: Script


Script class
*__date__*: 07-mar-2018


## Index

### Constructors

* [constructor](__classes_lib_utils_script_.script.md#constructor)


### Properties

* [commands](__classes_lib_utils_script_.script.md#commands)
* [current](__classes_lib_utils_script_.script.md#current)
* [storyTree](__classes_lib_utils_script_.script.md#storytree)
* [url](__classes_lib_utils_script_.script.md#url)
* [variables](__classes_lib_utils_script_.script.md#variables)


### Methods

* [continue](__classes_lib_utils_script_.script.md#continue)
* [getElement](__classes_lib_utils_script_.script.md#getelement)
* [getVisits](__classes_lib_utils_script_.script.md#getvisits)
* [goto](__classes_lib_utils_script_.script.md#goto)
* [load](__classes_lib_utils_script_.script.md#load)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Script**(url?: *`undefined`⎮`string`*, variables?: *`any`*): [Script](__classes_lib_utils_script_.script.md)


*Defined in [_classes/lib/utils/Script.ts:14](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Script.ts#L14)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `undefined`⎮`string`  | - |   - |
| variables | `any`  |  {} |   - |





**Returns:** [Script](__classes_lib_utils_script_.script.md)

---


## Properties
<a id="commands"></a>

###  commands

**●  commands**:  *`object`* 

*Defined in [_classes/lib/utils/Script.ts:13](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Script.ts#L13)*


#### Type declaration


[key: `string`]: `Function`






___

<a id="current"></a>

###  current

**●  current**:  *`Element`⎮`null`*  =  null

*Defined in [_classes/lib/utils/Script.ts:14](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Script.ts#L14)*





___

<a id="storytree"></a>

###  storyTree

**●  storyTree**:  *`XMLDocument`*  =  <XMLDocument>{}

*Defined in [_classes/lib/utils/Script.ts:12](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Script.ts#L12)*





___

<a id="url"></a>

###  url

**●  url**:  *`string`*  = ""

*Defined in [_classes/lib/utils/Script.ts:11](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Script.ts#L11)*





___

<a id="variables"></a>

###  variables

**●  variables**:  *`any`* 

*Defined in [_classes/lib/utils/Script.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Script.ts#L17)*





___


## Methods
<a id="continue"></a>

###  continue

► **continue**(current: *`Element`⎮`null`*): `void`



*Defined in [_classes/lib/utils/Script.ts:37](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Script.ts#L37)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| current | `Element`⎮`null`   |  - |





**Returns:** `void`





___

<a id="getelement"></a>

###  getElement

► **getElement**(path: *`string`*, el?: *`null`⎮`Element`*): `null`⎮`Element`



*Defined in [_classes/lib/utils/Script.ts:71](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Script.ts#L71)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| path | `string`  | - |   - |
| el | `null`⎮`Element`  |  this.current |   - |





**Returns:** `null`⎮`Element`





___

<a id="getvisits"></a>

###  getVisits

► **getVisits**(path?: *`string`*, el?: *`null`⎮`Element`*): `any`



*Defined in [_classes/lib/utils/Script.ts:67](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Script.ts#L67)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| path | `string`  | &quot;.&quot; |   - |
| el | `null`⎮`Element`  |  this.current |   - |





**Returns:** `any`





___

<a id="goto"></a>

###  goto

► **goto**(path: *`string`*): `void`



*Defined in [_classes/lib/utils/Script.ts:62](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Script.ts#L62)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| path | `string`   |  - |





**Returns:** `void`





___

<a id="load"></a>

###  load

► **load**(url: *`string`*, cb?: *`Function`*): `void`



*Defined in [_classes/lib/utils/Script.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Script.ts#L28)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |
| cb | `Function`   |  - |





**Returns:** `void`





___


