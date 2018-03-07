[cost_of_creation](../README.md) > ["_classes/lib/utils/Vector2"](../modules/__classes_lib_utils_vector2_.md) > [Vector2](../classes/__classes_lib_utils_vector2_.vector2.md)



# Class: Vector2

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


*Defined in [_classes/lib/utils/Vector2.ts:26](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L26)*



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

*Defined in [_classes/lib/utils/Vector2.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L28)*





___

<a id="y"></a>

###  y

**●  y**:  *`number`* 

*Defined in [_classes/lib/utils/Vector2.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L28)*





___


## Accessors
<a id="angle"></a>

###  angle


getangle(): `number`setangle(ang: *`number`*): `void`

*Defined in [_classes/lib/utils/Vector2.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L31)*





**Returns:** `number`

*Defined in [_classes/lib/utils/Vector2.ts:35](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L35)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ang | `number`   |  - |





**Returns:** `void`



___

<a id="magnitude"></a>

###  magnitude


getmagnitude(): `number`setmagnitude(mag: *`number`*): `void`

*Defined in [_classes/lib/utils/Vector2.ts:41](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L41)*





**Returns:** `number`

*Defined in [_classes/lib/utils/Vector2.ts:44](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L44)*



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



*Defined in [_classes/lib/utils/Vector2.ts:69](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L69)*



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



*Defined in [_classes/lib/utils/Vector2.ts:63](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L63)*



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



*Defined in [_classes/lib/utils/Vector2.ts:55](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L55)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v | [Vector2](__classes_lib_utils_vector2_.vector2.md)   |  - |





**Returns:** `this`





___

<a id="copyto"></a>

###  copyTo

► **copyTo**(v: *[Vector2](__classes_lib_utils_vector2_.vector2.md)*): [Vector2](__classes_lib_utils_vector2_.vector2.md)



*Defined in [_classes/lib/utils/Vector2.ts:59](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L59)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v | [Vector2](__classes_lib_utils_vector2_.vector2.md)   |  - |





**Returns:** [Vector2](__classes_lib_utils_vector2_.vector2.md)





___

<a id="multiply"></a>

###  multiply

► **multiply**(v: *[Vector2](__classes_lib_utils_vector2_.vector2.md)*, result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Vector2.ts:87](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L87)*



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



*Defined in [_classes/lib/utils/Vector2.ts:81](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L81)*



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



*Defined in [_classes/lib/utils/Vector2.ts:91](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L91)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| result | `this`  |  this |   - |





**Returns:** `this`





___

<a id="perp"></a>

###  perp

► **perp**(result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Vector2.ts:102](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L102)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| result | `this`  |  this |   - |





**Returns:** `this`





___

<a id="recycle"></a>

###  recycle

► **recycle**(): `void`



*Defined in [_classes/lib/utils/Vector2.ts:23](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L23)*



Dispose unused vector to the pool.
*__requires__*: Make sure the object is not referenced anywhere!





**Returns:** `void`





___

<a id="set"></a>

###  set

► **set**(x: *`number`*, y?: *`number`*): `this`



*Defined in [_classes/lib/utils/Vector2.ts:49](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L49)*



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



*Defined in [_classes/lib/utils/Vector2.ts:77](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L77)*



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



*Defined in [_classes/lib/utils/Vector2.ts:73](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L73)*



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



*Defined in [_classes/lib/utils/Vector2.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/utils/Vector2.ts#L17)*



Dispense a vector from the pool or create a new one.




**Returns:** [Vector2](__classes_lib_utils_vector2_.vector2.md)
new or used vector






___


