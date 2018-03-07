[cost_of_creation](../README.md) > ["_classes/lib/utils/Sound"](../modules/__classes_lib_utils_sound_.md) > [Sound](../classes/__classes_lib_utils_sound_.sound.md)



# Class: Sound

## Index

### Constructors

* [constructor](__classes_lib_utils_sound_.sound.md#constructor)


### Properties

* [buffer](__classes_lib_utils_sound_.sound.md#buffer)
* [file](__classes_lib_utils_sound_.sound.md#file)
* [gainNode](__classes_lib_utils_sound_.sound.md#gainnode)
* [mainNode](__classes_lib_utils_sound_.sound.md#mainnode)
* [marks](__classes_lib_utils_sound_.sound.md#marks)
* [oneInstance](__classes_lib_utils_sound_.sound.md#oneinstance)
* [source](__classes_lib_utils_sound_.sound.md#source)
* [ctx](__classes_lib_utils_sound_.sound.md#ctx)
* [enabled](__classes_lib_utils_sound_.sound.md#enabled)
* [volume](__classes_lib_utils_sound_.sound.md#volume)


### Methods

* [load](__classes_lib_utils_sound_.sound.md#load)
* [play](__classes_lib_utils_sound_.sound.md#play)
* [setMark](__classes_lib_utils_sound_.sound.md#setmark)
* [stop](__classes_lib_utils_sound_.sound.md#stop)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Sound**(src: *`string`*, cb?: *`Function`*): [Sound](__classes_lib_utils_sound_.sound.md)


*Defined in [_classes/lib/utils/Sound.ts:25](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Sound.ts#L25)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| src | `string`   |  - |
| cb | `Function`   |  - |





**Returns:** [Sound](__classes_lib_utils_sound_.sound.md)

---


## Properties
<a id="buffer"></a>

### «Optional» buffer

**●  buffer**:  *`AudioBuffer`* 

*Defined in [_classes/lib/utils/Sound.ts:23](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Sound.ts#L23)*





___

<a id="file"></a>

###  file

**●  file**:  *`string`*  = ""

*Defined in [_classes/lib/utils/Sound.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Sound.ts#L21)*





___

<a id="gainnode"></a>

###  gainNode

**●  gainNode**:  *`GainNode`* 

*Defined in [_classes/lib/utils/Sound.ts:19](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Sound.ts#L19)*





___

<a id="mainnode"></a>

###  mainNode

**●  mainNode**:  *`AudioNode`* 

*Defined in [_classes/lib/utils/Sound.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Sound.ts#L20)*





___

<a id="marks"></a>

###  marks

**●  marks**:  *`object`* 

*Defined in [_classes/lib/utils/Sound.ts:24](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Sound.ts#L24)*


#### Type declaration


[index: `string`]: [Mark](../interfaces/__classes_lib_utils_sound_.mark.md)






___

<a id="oneinstance"></a>

###  oneInstance

**●  oneInstance**:  *`boolean`*  = false

*Defined in [_classes/lib/utils/Sound.ts:25](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Sound.ts#L25)*





___

<a id="source"></a>

###  source

**●  source**:  *`AudioBufferSourceNode`⎮`null`*  =  null

*Defined in [_classes/lib/utils/Sound.ts:22](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Sound.ts#L22)*





___

<a id="ctx"></a>

### «Static» ctx

**●  ctx**:  *`AudioContext`* 

*Defined in [_classes/lib/utils/Sound.ts:18](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Sound.ts#L18)*





___

<a id="enabled"></a>

### «Static» enabled

**●  enabled**:  *`boolean`*  = true

*Defined in [_classes/lib/utils/Sound.ts:16](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Sound.ts#L16)*





___

<a id="volume"></a>

### «Static» volume

**●  volume**:  *`number`*  = 1

*Defined in [_classes/lib/utils/Sound.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Sound.ts#L17)*





___


## Methods
<a id="load"></a>

###  load

► **load**(src?: *`string`*, cb?: *`Function`*): `void`



*Defined in [_classes/lib/utils/Sound.ts:45](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Sound.ts#L45)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| src | `string`  |  this.file |   - |
| cb | `Function`  | - |   - |





**Returns:** `void`





___

<a id="play"></a>

###  play

► **play**(mark?: *`string`*, loop?: *`boolean`*): `void`



*Defined in [_classes/lib/utils/Sound.ts:57](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Sound.ts#L57)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| mark | `string`  | &quot;_all&quot; |   - |
| loop | `boolean`  | false |   - |





**Returns:** `void`





___

<a id="setmark"></a>

###  setMark

► **setMark**(name: *`string`*, start: *`number`*, duration?: *`undefined`⎮`number`*): `void`



*Defined in [_classes/lib/utils/Sound.ts:88](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Sound.ts#L88)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |
| start | `number`   |  - |
| duration | `undefined`⎮`number`   |  - |





**Returns:** `void`





___

<a id="stop"></a>

###  stop

► **stop**(): `void`



*Defined in [_classes/lib/utils/Sound.ts:77](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/Sound.ts#L77)*





**Returns:** `void`





___


