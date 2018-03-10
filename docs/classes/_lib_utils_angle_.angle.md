[cost_of_creation](../README.md) > ["lib/utils/Angle"](../modules/_lib_utils_angle_.md) > [Angle](../classes/_lib_utils_angle_.angle.md)



# Class: Angle

## Index

### Constructors

* [constructor](_lib_utils_angle_.angle.md#constructor)


### Properties

* [rad](_lib_utils_angle_.angle.md#rad)


### Accessors

* [deg](_lib_utils_angle_.angle.md#deg)


### Methods

* [add](_lib_utils_angle_.angle.md#add)
* [addRad](_lib_utils_angle_.angle.md#addrad)
* [copyFrom](_lib_utils_angle_.angle.md#copyfrom)
* [copyTo](_lib_utils_angle_.angle.md#copyto)
* [multiply](_lib_utils_angle_.angle.md#multiply)
* [normalize](_lib_utils_angle_.angle.md#normalize)
* [perp](_lib_utils_angle_.angle.md#perp)
* [recycle](_lib_utils_angle_.angle.md#recycle)
* [set](_lib_utils_angle_.angle.md#set)
* [subtract](_lib_utils_angle_.angle.md#subtract)
* [subtractRad](_lib_utils_angle_.angle.md#subtractrad)
* [dispense](_lib_utils_angle_.angle.md#dispense)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Angle**(rad?: *`number`*): [Angle](_lib_utils_angle_.angle.md)


*Defined in [lib/utils/Angle.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L20)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| rad | `number`  | 0 |   - |





**Returns:** [Angle](_lib_utils_angle_.angle.md)

---


## Properties
<a id="rad"></a>

###  rad

**●  rad**:  *`number`* 

*Defined in [lib/utils/Angle.ts:22](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L22)*





___


## Accessors
<a id="deg"></a>

###  deg


getdeg(): `number`setdeg(deg: *`number`*): `void`

*Defined in [lib/utils/Angle.ts:26](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L26)*





**Returns:** `number`

*Defined in [lib/utils/Angle.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L29)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| deg | `number`   |  - |





**Returns:** `void`



___


## Methods
<a id="add"></a>

###  add

► **add**(a: *[Angle](_lib_utils_angle_.angle.md)*, result?: *`this`*): `this`



*Defined in [lib/utils/Angle.ts:51](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L51)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| a | [Angle](_lib_utils_angle_.angle.md)  | - |   - |
| result | `this`  | this |   - |





**Returns:** `this`





___

<a id="addrad"></a>

###  addRad

► **addRad**(rad: *`number`*, result?: *`this`*): `this`



*Defined in [lib/utils/Angle.ts:46](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L46)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| rad | `number`  | - |   - |
| result | `this`  | this |   - |





**Returns:** `this`





___

<a id="copyfrom"></a>

###  copyFrom

► **copyFrom**(a: *[Angle](_lib_utils_angle_.angle.md)*): `this`



*Defined in [lib/utils/Angle.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L38)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| a | [Angle](_lib_utils_angle_.angle.md)   |  - |





**Returns:** `this`





___

<a id="copyto"></a>

###  copyTo

► **copyTo**(a: *[Angle](_lib_utils_angle_.angle.md)*): [Angle](_lib_utils_angle_.angle.md)



*Defined in [lib/utils/Angle.ts:42](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L42)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| a | [Angle](_lib_utils_angle_.angle.md)   |  - |





**Returns:** [Angle](_lib_utils_angle_.angle.md)





___

<a id="multiply"></a>

###  multiply

► **multiply**(rad: *`number`*, result?: *`this`*): `this`



*Defined in [lib/utils/Angle.ts:63](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L63)*



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



*Defined in [lib/utils/Angle.ts:68](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L68)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| result | `this`  | this |   - |





**Returns:** `this`





___

<a id="perp"></a>

###  perp

► **perp**(result?: *`this`*): `this`



*Defined in [lib/utils/Angle.ts:75](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L75)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| result | `this`  | this |   - |





**Returns:** `this`





___

<a id="recycle"></a>

###  recycle

► **recycle**(): `void`



*Defined in [lib/utils/Angle.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L17)*





**Returns:** `void`





___

<a id="set"></a>

###  set

► **set**(rad: *`number`*): `this`



*Defined in [lib/utils/Angle.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L33)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| rad | `number`   |  - |





**Returns:** `this`





___

<a id="subtract"></a>

###  subtract

► **subtract**(a: *[Angle](_lib_utils_angle_.angle.md)*, result?: *`this`*): `this`



*Defined in [lib/utils/Angle.ts:59](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L59)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| a | [Angle](_lib_utils_angle_.angle.md)  | - |   - |
| result | `this`  | this |   - |





**Returns:** `this`





___

<a id="subtractrad"></a>

###  subtractRad

► **subtractRad**(rad: *`number`*, result?: *`this`*): `this`



*Defined in [lib/utils/Angle.ts:55](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L55)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| rad | `number`  | - |   - |
| result | `this`  | this |   - |





**Returns:** `this`





___

<a id="dispense"></a>

### «Static» dispense

► **dispense**(): [Angle](_lib_utils_angle_.angle.md)



*Defined in [lib/utils/Angle.ts:13](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Angle.ts#L13)*





**Returns:** [Angle](_lib_utils_angle_.angle.md)





___


