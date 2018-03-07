[cost_of_creation](../README.md) > ["_classes/lib/utils/MediaPlayer"](../modules/__classes_lib_utils_mediaplayer_.md) > [MediaPlayer](../classes/__classes_lib_utils_mediaplayer_.mediaplayer.md)



# Class: MediaPlayer


MediaPlayer class
*__date__*: 04-oct-2017


## Index

### Constructors

* [constructor](__classes_lib_utils_mediaplayer_.mediaplayer.md#constructor)


### Properties

* [players](__classes_lib_utils_mediaplayer_.mediaplayer.md#players)


### Accessors

* [enabled](__classes_lib_utils_mediaplayer_.mediaplayer.md#enabled)
* [volume](__classes_lib_utils_mediaplayer_.mediaplayer.md#volume)


### Methods

* [applyVolume](__classes_lib_utils_mediaplayer_.mediaplayer.md#applyvolume)
* [pause](__classes_lib_utils_mediaplayer_.mediaplayer.md#pause)
* [play](__classes_lib_utils_mediaplayer_.mediaplayer.md#play)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new MediaPlayer**(url?: *`undefined`⎮`string`*): [MediaPlayer](__classes_lib_utils_mediaplayer_.mediaplayer.md)


*Defined in [_classes/lib/utils/MediaPlayer.ts:30](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/MediaPlayer.ts#L30)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `undefined`⎮`string`   |  - |





**Returns:** [MediaPlayer](__classes_lib_utils_mediaplayer_.mediaplayer.md)

---


## Properties
<a id="players"></a>

###  players

**●  players**:  *`HTMLAudioElement`[]*  = []

*Defined in [_classes/lib/utils/MediaPlayer.ts:11](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/MediaPlayer.ts#L11)*





___


## Accessors
<a id="enabled"></a>

###  enabled


getenabled(): `boolean`setenabled(val: *`boolean`*): `void`

*Defined in [_classes/lib/utils/MediaPlayer.ts:13](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/MediaPlayer.ts#L13)*





**Returns:** `boolean`

*Defined in [_classes/lib/utils/MediaPlayer.ts:16](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/MediaPlayer.ts#L16)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| val | `boolean`   |  - |





**Returns:** `void`



___

<a id="volume"></a>

###  volume


getvolume(): `number`setvolume(val: *`number`*): `void`

*Defined in [_classes/lib/utils/MediaPlayer.ts:24](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/MediaPlayer.ts#L24)*





**Returns:** `number`

*Defined in [_classes/lib/utils/MediaPlayer.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/MediaPlayer.ts#L27)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| val | `number`   |  - |





**Returns:** `void`



___


## Methods
<a id="applyvolume"></a>

###  applyVolume

► **applyVolume**(): `void`



*Defined in [_classes/lib/utils/MediaPlayer.ts:67](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/MediaPlayer.ts#L67)*





**Returns:** `void`





___

<a id="pause"></a>

###  pause

► **pause**(fadeDuration?: *`number`*): `void`



*Defined in [_classes/lib/utils/MediaPlayer.ts:58](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/MediaPlayer.ts#L58)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| fadeDuration | `number`  | 1024 |   - |





**Returns:** `void`





___

<a id="play"></a>

###  play

► **play**(url: *`string`*, loop?: *`boolean`*, fadeDuration?: *`number`*): `undefined`⎮`false`



*Defined in [_classes/lib/utils/MediaPlayer.ts:43](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/utils/MediaPlayer.ts#L43)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  | - |   - |
| loop | `boolean`  | false |   - |
| fadeDuration | `number`  | 1024 |   - |





**Returns:** `undefined`⎮`false`





___


