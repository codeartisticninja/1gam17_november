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






___

<a id="file"></a>

###  file

**●  file**:  *`string`*  = ""






___

<a id="gainnode"></a>

###  gainNode

**●  gainNode**:  *`GainNode`* 






___

<a id="mainnode"></a>

###  mainNode

**●  mainNode**:  *`AudioNode`* 






___

<a id="marks"></a>

###  marks

**●  marks**:  *`object`* 



#### Type declaration


[index: `string`]: [Mark](../interfaces/__classes_lib_utils_sound_.mark.md)






___

<a id="oneinstance"></a>

###  oneInstance

**●  oneInstance**:  *`boolean`*  = false






___

<a id="source"></a>

###  source

**●  source**:  *`AudioBufferSourceNode`⎮`null`*  =  null






___

<a id="ctx"></a>

### «Static» ctx

**●  ctx**:  *`AudioContext`* 






___

<a id="enabled"></a>

### «Static» enabled

**●  enabled**:  *`boolean`*  = true






___

<a id="volume"></a>

### «Static» volume

**●  volume**:  *`number`*  = 1






___


## Methods
<a id="load"></a>

###  load

► **load**(src?: *`string`*, cb?: *`Function`*): `void`






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








**Returns:** `void`





___


