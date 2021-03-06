[cost_of_creation](../README.md) > ["lib/utils/MediaPlayer"](../modules/_lib_utils_mediaplayer_.md) > [MediaPlayer](../classes/_lib_utils_mediaplayer_.mediaplayer.md)

# Class: MediaPlayer

MediaPlayer class

*__date__*: 04-oct-2017

## Hierarchy

**MediaPlayer**

## Index

### Constructors

* [constructor](_lib_utils_mediaplayer_.mediaplayer.md#constructor)

### Properties

* [players](_lib_utils_mediaplayer_.mediaplayer.md#players)

### Accessors

* [enabled](_lib_utils_mediaplayer_.mediaplayer.md#enabled)
* [volume](_lib_utils_mediaplayer_.mediaplayer.md#volume)

### Methods

* [applyVolume](_lib_utils_mediaplayer_.mediaplayer.md#applyvolume)
* [pause](_lib_utils_mediaplayer_.mediaplayer.md#pause)
* [play](_lib_utils_mediaplayer_.mediaplayer.md#play)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MediaPlayer**(url?: *`string`*): [MediaPlayer](_lib_utils_mediaplayer_.mediaplayer.md)

*Defined in [lib/utils/MediaPlayer.ts:30](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/MediaPlayer.ts#L30)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` url | `string` |

**Returns:** [MediaPlayer](_lib_utils_mediaplayer_.mediaplayer.md)

___

## Properties

<a id="players"></a>

###  players

**● players**: *`HTMLAudioElement`[]* = []

*Defined in [lib/utils/MediaPlayer.ts:11](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/MediaPlayer.ts#L11)*

___

## Accessors

<a id="enabled"></a>

###  enabled

**get enabled**(): `boolean`

**set enabled**(val: *`boolean`*): `void`

*Defined in [lib/utils/MediaPlayer.ts:13](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/MediaPlayer.ts#L13)*

**Returns:** `boolean`

*Defined in [lib/utils/MediaPlayer.ts:16](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/MediaPlayer.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `boolean` |

**Returns:** `void`

___
<a id="volume"></a>

###  volume

**get volume**(): `number`

**set volume**(val: *`number`*): `void`

*Defined in [lib/utils/MediaPlayer.ts:24](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/MediaPlayer.ts#L24)*

**Returns:** `number`

*Defined in [lib/utils/MediaPlayer.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/MediaPlayer.ts#L27)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `number` |

**Returns:** `void`

___

## Methods

<a id="applyvolume"></a>

###  applyVolume

▸ **applyVolume**(): `void`

*Defined in [lib/utils/MediaPlayer.ts:67](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/MediaPlayer.ts#L67)*

**Returns:** `void`

___
<a id="pause"></a>

###  pause

▸ **pause**(fadeDuration?: *`number`*): `void`

*Defined in [lib/utils/MediaPlayer.ts:58](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/MediaPlayer.ts#L58)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| `Default value` fadeDuration | `number` | 1024 |

**Returns:** `void`

___
<a id="play"></a>

###  play

▸ **play**(url: *`string`*, loop?: *`boolean`*, fadeDuration?: *`number`*): `boolean`

*Defined in [lib/utils/MediaPlayer.ts:43](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/MediaPlayer.ts#L43)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| url | `string` | - |
| `Default value` loop | `boolean` | false |
| `Default value` fadeDuration | `number` | 1024 |

**Returns:** `boolean`

___

