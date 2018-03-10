[cost_of_creation](../README.md) > ["HSL"](../modules/_hsl_.md) > [HSL](../classes/_hsl_.hsl.md)



# Class: HSL

## Index

### Constructors

* [constructor](_hsl_.hsl.md#constructor)


### Properties

* [hue](_hsl_.hsl.md#hue)
* [lightness](_hsl_.hsl.md#lightness)
* [saturation](_hsl_.hsl.md#saturation)


### Methods

* [blend](_hsl_.hsl.md#blend)
* [copyFrom](_hsl_.hsl.md#copyfrom)
* [copyTo](_hsl_.hsl.md#copyto)
* [normalize](_hsl_.hsl.md#normalize)
* [recycle](_hsl_.hsl.md#recycle)
* [set](_hsl_.hsl.md#set)
* [toString](_hsl_.hsl.md#tostring)
* [dispense](_hsl_.hsl.md#dispense)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new HSL**(hue?: *`number`*, saturation?: *`number`*, lightness?: *`number`*): [HSL](_hsl_.hsl.md)


*Defined in [HSL.ts:18](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/HSL.ts#L18)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| hue | `number`  | 0 |   - |
| saturation | `number`  | 0 |   - |
| lightness | `number`  | 0 |   - |





**Returns:** [HSL](_hsl_.hsl.md)

---


## Properties
<a id="hue"></a>

###  hue

**●  hue**:  *`number`* 

*Defined in [HSL.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/HSL.ts#L20)*





___

<a id="lightness"></a>

###  lightness

**●  lightness**:  *`number`* 

*Defined in [HSL.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/HSL.ts#L20)*





___

<a id="saturation"></a>

###  saturation

**●  saturation**:  *`number`* 

*Defined in [HSL.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/HSL.ts#L20)*





___


## Methods
<a id="blend"></a>

###  blend

► **blend**(a: *[HSL](_hsl_.hsl.md)*, b?: *[HSL](_hsl_.hsl.md)*, bias?: *`number`*, result?: *`this`*): `this`



*Defined in [HSL.ts:39](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/HSL.ts#L39)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| a | [HSL](_hsl_.hsl.md)  | - |   - |
| b | [HSL](_hsl_.hsl.md)  |  this |   - |
| bias | `number`  | 0.5 |   - |
| result | `this`  |  this |   - |





**Returns:** `this`





___

<a id="copyfrom"></a>

###  copyFrom

► **copyFrom**(a: *[HSL](_hsl_.hsl.md)*): `this`



*Defined in [HSL.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/HSL.ts#L31)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| a | [HSL](_hsl_.hsl.md)   |  - |





**Returns:** `this`





___

<a id="copyto"></a>

###  copyTo

► **copyTo**(a: *[HSL](_hsl_.hsl.md)*): [HSL](_hsl_.hsl.md)



*Defined in [HSL.ts:35](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/HSL.ts#L35)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| a | [HSL](_hsl_.hsl.md)   |  - |





**Returns:** [HSL](_hsl_.hsl.md)





___

<a id="normalize"></a>

###  normalize

► **normalize**(result?: *`this`*): `this`



*Defined in [HSL.ts:63](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/HSL.ts#L63)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| result | `this`  |  this |   - |





**Returns:** `this`





___

<a id="recycle"></a>

###  recycle

► **recycle**(): `void`



*Defined in [HSL.ts:15](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/HSL.ts#L15)*





**Returns:** `void`





___

<a id="set"></a>

###  set

► **set**(hue?: *`number`*, saturation?: *`number`*, lightness?: *`number`*): `this`



*Defined in [HSL.ts:24](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/HSL.ts#L24)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| hue | `number`  |  this.hue |   - |
| saturation | `number`  |  this.saturation |   - |
| lightness | `number`  |  this.lightness |   - |





**Returns:** `this`





___

<a id="tostring"></a>

###  toString

► **toString**(): `string`



*Defined in [HSL.ts:77](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/HSL.ts#L77)*





**Returns:** `string`





___

<a id="dispense"></a>

### «Static» dispense

► **dispense**(): [HSL](_hsl_.hsl.md)



*Defined in [HSL.ts:11](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/HSL.ts#L11)*





**Returns:** [HSL](_hsl_.hsl.md)





___


