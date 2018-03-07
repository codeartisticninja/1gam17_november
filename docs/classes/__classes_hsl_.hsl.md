[cost_of_creation](../README.md) > ["_classes/HSL"](../modules/__classes_hsl_.md) > [HSL](../classes/__classes_hsl_.hsl.md)



# Class: HSL

## Index

### Constructors

* [constructor](__classes_hsl_.hsl.md#constructor)


### Properties

* [hue](__classes_hsl_.hsl.md#hue)
* [lightness](__classes_hsl_.hsl.md#lightness)
* [saturation](__classes_hsl_.hsl.md#saturation)


### Methods

* [blend](__classes_hsl_.hsl.md#blend)
* [copyFrom](__classes_hsl_.hsl.md#copyfrom)
* [copyTo](__classes_hsl_.hsl.md#copyto)
* [normalize](__classes_hsl_.hsl.md#normalize)
* [recycle](__classes_hsl_.hsl.md#recycle)
* [set](__classes_hsl_.hsl.md#set)
* [toString](__classes_hsl_.hsl.md#tostring)
* [dispense](__classes_hsl_.hsl.md#dispense)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new HSL**(hue?: *`number`*, saturation?: *`number`*, lightness?: *`number`*): [HSL](__classes_hsl_.hsl.md)





**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| hue | `number`  | 0 |   - |
| saturation | `number`  | 0 |   - |
| lightness | `number`  | 0 |   - |





**Returns:** [HSL](__classes_hsl_.hsl.md)

---


## Properties
<a id="hue"></a>

###  hue

**●  hue**:  *`number`* 






___

<a id="lightness"></a>

###  lightness

**●  lightness**:  *`number`* 






___

<a id="saturation"></a>

###  saturation

**●  saturation**:  *`number`* 






___


## Methods
<a id="blend"></a>

###  blend

► **blend**(a: *[HSL](__classes_hsl_.hsl.md)*, b?: *[HSL](__classes_hsl_.hsl.md)*, bias?: *`number`*, result?: *`this`*): `this`






**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| a | [HSL](__classes_hsl_.hsl.md)  | - |   - |
| b | [HSL](__classes_hsl_.hsl.md)  |  this |   - |
| bias | `number`  | 0.5 |   - |
| result | `this`  |  this |   - |





**Returns:** `this`





___

<a id="copyfrom"></a>

###  copyFrom

► **copyFrom**(a: *[HSL](__classes_hsl_.hsl.md)*): `this`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| a | [HSL](__classes_hsl_.hsl.md)   |  - |





**Returns:** `this`





___

<a id="copyto"></a>

###  copyTo

► **copyTo**(a: *[HSL](__classes_hsl_.hsl.md)*): [HSL](__classes_hsl_.hsl.md)






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| a | [HSL](__classes_hsl_.hsl.md)   |  - |





**Returns:** [HSL](__classes_hsl_.hsl.md)





___

<a id="normalize"></a>

###  normalize

► **normalize**(result?: *`this`*): `this`






**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| result | `this`  |  this |   - |





**Returns:** `this`





___

<a id="recycle"></a>

###  recycle

► **recycle**(): `void`








**Returns:** `void`





___

<a id="set"></a>

###  set

► **set**(hue?: *`number`*, saturation?: *`number`*, lightness?: *`number`*): `this`






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








**Returns:** `string`





___

<a id="dispense"></a>

### «Static» dispense

► **dispense**(): [HSL](__classes_hsl_.hsl.md)








**Returns:** [HSL](__classes_hsl_.hsl.md)





___


