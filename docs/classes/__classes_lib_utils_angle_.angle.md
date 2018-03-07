[cost_of_creation](../README.md) > ["_classes/lib/utils/Angle"](../modules/__classes_lib_utils_angle_.md) > [Angle](../classes/__classes_lib_utils_angle_.angle.md)



# Class: Angle

## Index

### Constructors

* [constructor](__classes_lib_utils_angle_.angle.md#constructor)


### Properties

* [rad](__classes_lib_utils_angle_.angle.md#rad)


### Accessors

* [deg](__classes_lib_utils_angle_.angle.md#deg)


### Methods

* [add](__classes_lib_utils_angle_.angle.md#add)
* [addRad](__classes_lib_utils_angle_.angle.md#addrad)
* [copyFrom](__classes_lib_utils_angle_.angle.md#copyfrom)
* [copyTo](__classes_lib_utils_angle_.angle.md#copyto)
* [multiply](__classes_lib_utils_angle_.angle.md#multiply)
* [normalize](__classes_lib_utils_angle_.angle.md#normalize)
* [perp](__classes_lib_utils_angle_.angle.md#perp)
* [recycle](__classes_lib_utils_angle_.angle.md#recycle)
* [set](__classes_lib_utils_angle_.angle.md#set)
* [subtract](__classes_lib_utils_angle_.angle.md#subtract)
* [subtractRad](__classes_lib_utils_angle_.angle.md#subtractrad)
* [dispense](__classes_lib_utils_angle_.angle.md#dispense)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Angle**(rad?: *`number`*): [Angle](__classes_lib_utils_angle_.angle.md)


*Defined in [_classes/lib/utils/Angle.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L20)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| rad | `number`  | 0 |   - |





**Returns:** [Angle](__classes_lib_utils_angle_.angle.md)

---


## Properties
<a id="rad"></a>

###  rad

**●  rad**:  *`number`* 

*Defined in [_classes/lib/utils/Angle.ts:22](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L22)*





___


## Accessors
<a id="deg"></a>

###  deg


getdeg(): `number`setdeg(deg: *`number`*): `void`

*Defined in [_classes/lib/utils/Angle.ts:26](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L26)*





**Returns:** `number`

*Defined in [_classes/lib/utils/Angle.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L29)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| deg | `number`   |  - |





**Returns:** `void`



___


## Methods
<a id="add"></a>

###  add

► **add**(a: *[Angle](__classes_lib_utils_angle_.angle.md)*, result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Angle.ts:51](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L51)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| a | [Angle](__classes_lib_utils_angle_.angle.md)  | - |   - |
| result | `this`  | this |   - |





**Returns:** `this`





___

<a id="addrad"></a>

###  addRad

► **addRad**(rad: *`number`*, result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Angle.ts:46](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L46)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| rad | `number`  | - |   - |
| result | `this`  | this |   - |





**Returns:** `this`





___

<a id="copyfrom"></a>

###  copyFrom

► **copyFrom**(a: *[Angle](__classes_lib_utils_angle_.angle.md)*): `this`



*Defined in [_classes/lib/utils/Angle.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L38)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| a | [Angle](__classes_lib_utils_angle_.angle.md)   |  - |





**Returns:** `this`





___

<a id="copyto"></a>

###  copyTo

► **copyTo**(a: *[Angle](__classes_lib_utils_angle_.angle.md)*): [Angle](__classes_lib_utils_angle_.angle.md)



*Defined in [_classes/lib/utils/Angle.ts:42](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L42)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| a | [Angle](__classes_lib_utils_angle_.angle.md)   |  - |





**Returns:** [Angle](__classes_lib_utils_angle_.angle.md)





___

<a id="multiply"></a>

###  multiply

► **multiply**(rad: *`number`*, result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Angle.ts:63](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L63)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| rad | `number`  | - |   - |
| result | `this`  | this |   - |





**Returns:** `this`





___

<a id="normalize"></a>

###  normalize

► **normalize**(result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Angle.ts:68](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L68)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| result | `this`  | this |   - |





**Returns:** `this`





___

<a id="perp"></a>

###  perp

► **perp**(result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Angle.ts:75](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L75)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| result | `this`  | this |   - |





**Returns:** `this`





___

<a id="recycle"></a>

###  recycle

► **recycle**(): `void`



*Defined in [_classes/lib/utils/Angle.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L17)*





**Returns:** `void`





___

<a id="set"></a>

###  set

► **set**(rad: *`number`*): `this`



*Defined in [_classes/lib/utils/Angle.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L33)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rad | `number`   |  - |





**Returns:** `this`





___

<a id="subtract"></a>

###  subtract

► **subtract**(a: *[Angle](__classes_lib_utils_angle_.angle.md)*, result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Angle.ts:59](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L59)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| a | [Angle](__classes_lib_utils_angle_.angle.md)  | - |   - |
| result | `this`  | this |   - |





**Returns:** `this`





___

<a id="subtractrad"></a>

###  subtractRad

► **subtractRad**(rad: *`number`*, result?: *`this`*): `this`



*Defined in [_classes/lib/utils/Angle.ts:55](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L55)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| rad | `number`  | - |   - |
| result | `this`  | this |   - |





**Returns:** `this`





___

<a id="dispense"></a>

### «Static» dispense

► **dispense**(): [Angle](__classes_lib_utils_angle_.angle.md)



*Defined in [_classes/lib/utils/Angle.ts:13](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/Angle.ts#L13)*





**Returns:** [Angle](__classes_lib_utils_angle_.angle.md)





___


