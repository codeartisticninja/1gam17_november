[cost_of_creation](../README.md) > ["HSL"](../modules/_hsl_.md) > [HSL](../classes/_hsl_.hsl.md)

# Class: HSL

## Hierarchy

**HSL**

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

###  constructor

⊕ **new HSL**(hue?: *`number`*, saturation?: *`number`*, lightness?: *`number`*): [HSL](_hsl_.hsl.md)

*Defined in [HSL.ts:18](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/HSL.ts#L18)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` hue | `number` | 0 |
| `Default value` saturation | `number` | 0 |
| `Default value` lightness | `number` | 0 |

**Returns:** [HSL](_hsl_.hsl.md)

___

## Properties

<a id="hue"></a>

###  hue

**● hue**: *`number`*

*Defined in [HSL.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/HSL.ts#L20)*

___
<a id="lightness"></a>

###  lightness

**● lightness**: *`number`*

*Defined in [HSL.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/HSL.ts#L20)*

___
<a id="saturation"></a>

###  saturation

**● saturation**: *`number`*

*Defined in [HSL.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/HSL.ts#L20)*

___

## Methods

<a id="blend"></a>

###  blend

▸ **blend**(a: *[HSL](_hsl_.hsl.md)*, b?: *[HSL](_hsl_.hsl.md)*, bias?: *`number`*, result?: *`this`*): `this`

*Defined in [HSL.ts:39](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/HSL.ts#L39)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| a | [HSL](_hsl_.hsl.md) | - |
| `Default value` b | [HSL](_hsl_.hsl.md) |  this |
| `Default value` bias | `number` | 0.5 |
| `Default value` result | `this` |  this |

**Returns:** `this`

___
<a id="copyfrom"></a>

###  copyFrom

▸ **copyFrom**(a: *[HSL](_hsl_.hsl.md)*): `this`

*Defined in [HSL.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/HSL.ts#L31)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [HSL](_hsl_.hsl.md) |

**Returns:** `this`

___
<a id="copyto"></a>

###  copyTo

▸ **copyTo**(a: *[HSL](_hsl_.hsl.md)*): [HSL](_hsl_.hsl.md)

*Defined in [HSL.ts:35](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/HSL.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [HSL](_hsl_.hsl.md) |

**Returns:** [HSL](_hsl_.hsl.md)

___
<a id="normalize"></a>

###  normalize

▸ **normalize**(result?: *`this`*): `this`

*Defined in [HSL.ts:63](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/HSL.ts#L63)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` result | `this` |  this |

**Returns:** `this`

___
<a id="recycle"></a>

###  recycle

▸ **recycle**(): `void`

*Defined in [HSL.ts:15](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/HSL.ts#L15)*

**Returns:** `void`

___
<a id="set"></a>

###  set

▸ **set**(hue?: *`number`*, saturation?: *`number`*, lightness?: *`number`*): `this`

*Defined in [HSL.ts:24](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/HSL.ts#L24)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` hue | `number` |  this.hue |
| `Default value` saturation | `number` |  this.saturation |
| `Default value` lightness | `number` |  this.lightness |

**Returns:** `this`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [HSL.ts:77](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/HSL.ts#L77)*

**Returns:** `string`

___
<a id="dispense"></a>

### `<Static>` dispense

▸ **dispense**(): [HSL](_hsl_.hsl.md)

*Defined in [HSL.ts:11](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/HSL.ts#L11)*

**Returns:** [HSL](_hsl_.hsl.md)

___

