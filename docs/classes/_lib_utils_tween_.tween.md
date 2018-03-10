[cost_of_creation](../README.md) > ["lib/utils/Tween"](../modules/_lib_utils_tween_.md) > [Tween](../classes/_lib_utils_tween_.tween.md)



# Class: Tween


Tween class
*__date__*: 07-mar-2018


## Index

### Constructors

* [constructor](_lib_utils_tween_.tween.md#constructor)


### Properties

* [duration](_lib_utils_tween_.tween.md#duration)
* [endProps](_lib_utils_tween_.tween.md#endprops)
* [object](_lib_utils_tween_.tween.md#object)


### Methods

* [onEnd](_lib_utils_tween_.tween.md#onend)
* [reverse](_lib_utils_tween_.tween.md#reverse)
* [start](_lib_utils_tween_.tween.md#start)
* [stop](_lib_utils_tween_.tween.md#stop)
* [update](_lib_utils_tween_.tween.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Tween**(object: *`any`*, endProps: *`any`*, duration: *`number`*, autostart?: *`boolean`*): [Tween](_lib_utils_tween_.tween.md)


*Defined in [lib/utils/Tween.ts:9](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Tween.ts#L9)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| object | `any`  | - |   - |
| endProps | `any`  | - |   - |
| duration | `number`  | - |   - |
| autostart | `boolean`  | true |   - |





**Returns:** [Tween](_lib_utils_tween_.tween.md)

---


## Properties
<a id="duration"></a>

###  duration

**●  duration**:  *`number`* 

*Defined in [lib/utils/Tween.ts:10](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Tween.ts#L10)*





___

<a id="endprops"></a>

###  endProps

**●  endProps**:  *`any`* 

*Defined in [lib/utils/Tween.ts:10](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Tween.ts#L10)*





___

<a id="object"></a>

###  object

**●  object**:  *`any`* 

*Defined in [lib/utils/Tween.ts:10](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Tween.ts#L10)*





___


## Methods
<a id="onend"></a>

###  onEnd

► **onEnd**(cb: *`Function`*, forget?: *`boolean`*): `void`



*Defined in [lib/utils/Tween.ts:49](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Tween.ts#L49)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| cb | `Function`  | - |   - |
| forget | `boolean`  | false |   - |





**Returns:** `void`





___

<a id="reverse"></a>

###  reverse

► **reverse**(): `void`



*Defined in [lib/utils/Tween.ts:43](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Tween.ts#L43)*





**Returns:** `void`





___

<a id="start"></a>

###  start

► **start**(endProps?: *`any`*, duration?: *`number`*): `void`



*Defined in [lib/utils/Tween.ts:15](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Tween.ts#L15)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| endProps | `any`  |  this.endProps |   - |
| duration | `number`  |  this.duration |   - |





**Returns:** `void`





___

<a id="stop"></a>

###  stop

► **stop**(): `void`



*Defined in [lib/utils/Tween.ts:39](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Tween.ts#L39)*





**Returns:** `void`





___

<a id="update"></a>

###  update

► **update**(): `void`



*Defined in [lib/utils/Tween.ts:26](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/utils/Tween.ts#L26)*





**Returns:** `void`





___


