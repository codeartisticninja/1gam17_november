[cost_of_creation](../README.md) > ["_classes/lib/utils/Vector2"](../modules/__classes_lib_utils_vector2_.md) > [Vector2](../classes/__classes_lib_utils_vector2_.vector2.md)



# Class: Vector2


Class for storing and computing 2D vectors
*__date__*: 07-mar-2018


## Index

### Constructors

* [constructor](__classes_lib_utils_vector2_.vector2.md#constructor)


### Properties

* [x](__classes_lib_utils_vector2_.vector2.md#x)
* [y](__classes_lib_utils_vector2_.vector2.md#y)


### Accessors

* [angle](__classes_lib_utils_vector2_.vector2.md#angle)
* [magnitude](__classes_lib_utils_vector2_.vector2.md#magnitude)


### Methods

* [add](__classes_lib_utils_vector2_.vector2.md#add)
* [addXY](__classes_lib_utils_vector2_.vector2.md#addxy)
* [copyFrom](__classes_lib_utils_vector2_.vector2.md#copyfrom)
* [copyTo](__classes_lib_utils_vector2_.vector2.md#copyto)
* [multiply](__classes_lib_utils_vector2_.vector2.md#multiply)
* [multiplyXY](__classes_lib_utils_vector2_.vector2.md#multiplyxy)
* [normalize](__classes_lib_utils_vector2_.vector2.md#normalize)
* [perp](__classes_lib_utils_vector2_.vector2.md#perp)
* [recycle](__classes_lib_utils_vector2_.vector2.md#recycle)
* [set](__classes_lib_utils_vector2_.vector2.md#set)
* [subtract](__classes_lib_utils_vector2_.vector2.md#subtract)
* [subtractXY](__classes_lib_utils_vector2_.vector2.md#subtractxy)
* [dispense](__classes_lib_utils_vector2_.vector2.md#dispense)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Vector2**(x?: *`number`*, y?: *`number`*): [Vector2](__classes_lib_utils_vector2_.vector2.md)


*Defined in [_classes/lib/utils/Vector2.ts:23](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L23)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| x | `number`  | 0 |   - |
| y | `number`  |  x |   - |





**Returns:** [Vector2](__classes_lib_utils_vector2_.vector2.md)

---


## Properties
<a id="x"></a>

###  x

**●  x**:  *`number`* 

*Defined in [_classes/lib/utils/Vector2.ts:25](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L25)*





___

<a id="y"></a>

###  y

**●  y**:  *`number`* 

*Defined in [_classes/lib/utils/Vector2.ts:25](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L25)*





___


## Accessors
<a id="angle"></a>

###  angle


getangle(): `number`setangle(ang: *`number`*): `void`

*Defined in [_classes/lib/utils/Vector2.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L28)*





**Returns:** `number`

*Defined in [_classes/lib/utils/Vector2.ts:32](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L32)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ang | `number`   |  - |





**Returns:** `void`



___

<a id="magnitude"></a>

###  magnitude


getmagnitude(): `number`setmagnitude(mag: *`number`*): `void`

*Defined in [_classes/lib/utils/Vector2.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L38)*





**Returns:** `number`

*Defined in [_classes/lib/utils/Vector2.ts:41](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L41)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mag | `number`   |  - |





**Returns:** `void`



___


## Methods
<a id="add"></a>

###  add

► **add**(v: *[Vector2](__classes_lib_utils_vector2_.vector2.md)*, result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Vector2.ts:66](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L66)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| v | [Vector2](__classes_lib_utils_vector2_.vector2.md)  | - |   - |
| result | `this`  |  this |   - |





**Returns:** `this`





___

<a id="addxy"></a>

###  addXY

► **addXY**(x: *`number`*, y?: *`number`*, result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Vector2.ts:60](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L60)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| x | `number`  | - |   - |
| y | `number`  |  x |   - |
| result | `this`  |  this |   - |





**Returns:** `this`





___

<a id="copyfrom"></a>

###  copyFrom

► **copyFrom**(v: *[Vector2](__classes_lib_utils_vector2_.vector2.md)*): `this`



*Defined in [_classes/lib/utils/Vector2.ts:52](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L52)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v | [Vector2](__classes_lib_utils_vector2_.vector2.md)   |  - |





**Returns:** `this`





___

<a id="copyto"></a>

###  copyTo

► **copyTo**(v: *[Vector2](__classes_lib_utils_vector2_.vector2.md)*): [Vector2](__classes_lib_utils_vector2_.vector2.md)



*Defined in [_classes/lib/utils/Vector2.ts:56](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L56)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v | [Vector2](__classes_lib_utils_vector2_.vector2.md)   |  - |





**Returns:** [Vector2](__classes_lib_utils_vector2_.vector2.md)





___

<a id="multiply"></a>

###  multiply

► **multiply**(v: *[Vector2](__classes_lib_utils_vector2_.vector2.md)*, result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Vector2.ts:84](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L84)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| v | [Vector2](__classes_lib_utils_vector2_.vector2.md)  | - |   - |
| result | `this`  |  this |   - |





**Returns:** `this`





___

<a id="multiplyxy"></a>

###  multiplyXY

► **multiplyXY**(x: *`number`*, y?: *`number`*, result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Vector2.ts:78](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L78)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| x | `number`  | - |   - |
| y | `number`  |  x |   - |
| result | `this`  |  this |   - |





**Returns:** `this`





___

<a id="normalize"></a>

###  normalize

► **normalize**(result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Vector2.ts:88](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L88)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| result | `this`  |  this |   - |





**Returns:** `this`





___

<a id="perp"></a>

###  perp

► **perp**(result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Vector2.ts:99](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L99)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| result | `this`  |  this |   - |





**Returns:** `this`





___

<a id="recycle"></a>

###  recycle

► **recycle**(): `void`



*Defined in [_classes/lib/utils/Vector2.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L20)*



Dispose unused vector to the pool.
*__requires__*: Make sure the object is not referenced anywhere!





**Returns:** `void`





___

<a id="set"></a>

###  set

► **set**(x: *`number`*, y?: *`number`*): `this`



*Defined in [_classes/lib/utils/Vector2.ts:46](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L46)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| x | `number`  | - |   - |
| y | `number`  |  x |   - |





**Returns:** `this`





___

<a id="subtract"></a>

###  subtract

► **subtract**(v: *[Vector2](__classes_lib_utils_vector2_.vector2.md)*, result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Vector2.ts:74](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L74)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| v | [Vector2](__classes_lib_utils_vector2_.vector2.md)  | - |   - |
| result | `this`  |  this |   - |





**Returns:** `this`





___

<a id="subtractxy"></a>

###  subtractXY

► **subtractXY**(x: *`number`*, y?: *`number`*, result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Vector2.ts:70](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L70)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| x | `number`  | - |   - |
| y | `number`  |  x |   - |
| result | `this`  |  this |   - |





**Returns:** `this`





___

<a id="dispense"></a>

### «Static» dispense

► **dispense**(): [Vector2](__classes_lib_utils_vector2_.vector2.md)



*Defined in [_classes/lib/utils/Vector2.ts:14](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Vector2.ts#L14)*



Dispense a vector from the pool or create a new one.




**Returns:** [Vector2](__classes_lib_utils_vector2_.vector2.md)
new or used vector






___


