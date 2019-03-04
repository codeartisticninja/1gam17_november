[cost_of_creation](../README.md) > ["lib/utils/Angle"](../modules/_lib_utils_angle_.md) > [Angle](../classes/_lib_utils_angle_.angle.md)

# Class: Angle

## Hierarchy

**Angle**

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

###  constructor

⊕ **new Angle**(rad?: *`number`*): [Angle](_lib_utils_angle_.angle.md)

*Defined in [lib/utils/Angle.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L20)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` rad | `number` | 0 |

**Returns:** [Angle](_lib_utils_angle_.angle.md)

___

## Properties

<a id="rad"></a>

###  rad

**● rad**: *`number`*

*Defined in [lib/utils/Angle.ts:22](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L22)*

___

## Accessors

<a id="deg"></a>

###  deg

**get deg**(): `number`

**set deg**(deg: *`number`*): `void`

*Defined in [lib/utils/Angle.ts:26](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L26)*

**Returns:** `number`

*Defined in [lib/utils/Angle.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L29)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| deg | `number` |

**Returns:** `void`

___

## Methods

<a id="add"></a>

###  add

▸ **add**(a: *[Angle](_lib_utils_angle_.angle.md)*, result?: *`this`*): `this`

*Defined in [lib/utils/Angle.ts:51](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L51)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| a | [Angle](_lib_utils_angle_.angle.md) | - |
| `Default value` result | `this` | this |

**Returns:** `this`

___
<a id="addrad"></a>

###  addRad

▸ **addRad**(rad: *`number`*, result?: *`this`*): `this`

*Defined in [lib/utils/Angle.ts:46](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L46)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| rad | `number` | - |
| `Default value` result | `this` | this |

**Returns:** `this`

___
<a id="copyfrom"></a>

###  copyFrom

▸ **copyFrom**(a: *[Angle](_lib_utils_angle_.angle.md)*): `this`

*Defined in [lib/utils/Angle.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L38)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [Angle](_lib_utils_angle_.angle.md) |

**Returns:** `this`

___
<a id="copyto"></a>

###  copyTo

▸ **copyTo**(a: *[Angle](_lib_utils_angle_.angle.md)*): [Angle](_lib_utils_angle_.angle.md)

*Defined in [lib/utils/Angle.ts:42](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L42)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | [Angle](_lib_utils_angle_.angle.md) |

**Returns:** [Angle](_lib_utils_angle_.angle.md)

___
<a id="multiply"></a>

###  multiply

▸ **multiply**(rad: *`number`*, result?: *`this`*): `this`

*Defined in [lib/utils/Angle.ts:63](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L63)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| rad | `number` | - |
| `Default value` result | `this` | this |

**Returns:** `this`

___
<a id="normalize"></a>

###  normalize

▸ **normalize**(result?: *`this`*): `this`

*Defined in [lib/utils/Angle.ts:68](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L68)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` result | `this` | this |

**Returns:** `this`

___
<a id="perp"></a>

###  perp

▸ **perp**(result?: *`this`*): `this`

*Defined in [lib/utils/Angle.ts:75](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L75)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` result | `this` | this |

**Returns:** `this`

___
<a id="recycle"></a>

###  recycle

▸ **recycle**(): `void`

*Defined in [lib/utils/Angle.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L17)*

**Returns:** `void`

___
<a id="set"></a>

###  set

▸ **set**(rad: *`number`*): `this`

*Defined in [lib/utils/Angle.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L33)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| rad | `number` |

**Returns:** `this`

___
<a id="subtract"></a>

###  subtract

▸ **subtract**(a: *[Angle](_lib_utils_angle_.angle.md)*, result?: *`this`*): `this`

*Defined in [lib/utils/Angle.ts:59](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L59)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| a | [Angle](_lib_utils_angle_.angle.md) | - |
| `Default value` result | `this` | this |

**Returns:** `this`

___
<a id="subtractrad"></a>

###  subtractRad

▸ **subtractRad**(rad: *`number`*, result?: *`this`*): `this`

*Defined in [lib/utils/Angle.ts:55](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L55)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| rad | `number` | - |
| `Default value` result | `this` | this |

**Returns:** `this`

___
<a id="dispense"></a>

### `<Static>` dispense

▸ **dispense**(): [Angle](_lib_utils_angle_.angle.md)

*Defined in [lib/utils/Angle.ts:13](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Angle.ts#L13)*

**Returns:** [Angle](_lib_utils_angle_.angle.md)

___

