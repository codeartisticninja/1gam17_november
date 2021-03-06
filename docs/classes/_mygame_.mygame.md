[cost_of_creation](../README.md) > ["MyGame"](../modules/_mygame_.md) > [MyGame](../classes/_mygame_.mygame.md)

# Class: MyGame

MyGame class

## Hierarchy

 [Game](_lib_game_.game.md)

**↳ MyGame**

## Index

### Constructors

* [constructor](_mygame_.mygame.md#constructor)

### Properties

* [canvas](_mygame_.mygame.md#canvas)
* [container](_mygame_.mygame.md#container)
* [ctx](_mygame_.mygame.md#ctx)
* [debug](_mygame_.mygame.md#debug)
* [joypad](_mygame_.mygame.md#joypad)
* [loaded](_mygame_.mygame.md#loaded)
* [loading](_mygame_.mygame.md#loading)
* [prefs](_mygame_.mygame.md#prefs)
* [saveFile](_mygame_.mygame.md#savefile)
* [scene](_mygame_.mygame.md#scene)
* [scenes](_mygame_.mygame.md#scenes)

### Accessors

* [frameRate](_mygame_.mygame.md#framerate)

### Methods

* [addScene](_mygame_.mygame.md#addscene)
* [applySoundPrefs](_mygame_.mygame.md#applysoundprefs)
* [goFullscreen](_mygame_.mygame.md#gofullscreen)
* [pause](_mygame_.mygame.md#pause)
* [removeScene](_mygame_.mygame.md#removescene)
* [render](_mygame_.mygame.md#render)
* [resume](_mygame_.mygame.md#resume)
* [startScene](_mygame_.mygame.md#startscene)
* [trackEvent](_mygame_.mygame.md#trackevent)
* [update](_mygame_.mygame.md#update)

### Object literals

* [mediaChannels](_mygame_.mygame.md#mediachannels)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MyGame**(container: *`string` \| `HTMLElement`*): [MyGame](_mygame_.mygame.md)

*Overrides [Game](_lib_game_.game.md).[constructor](_lib_game_.game.md#constructor)*

*Defined in [MyGame.ts:11](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/MyGame.ts#L11)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| container | `string` \| `HTMLElement` |

**Returns:** [MyGame](_mygame_.mygame.md)

___

## Properties

<a id="canvas"></a>

###  canvas

**● canvas**: *`HTMLCanvasElement`* =  document.createElement("canvas")

*Inherited from [Game](_lib_game_.game.md).[canvas](_lib_game_.game.md#canvas)*

*Defined in [lib/Game.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L28)*

___
<a id="container"></a>

###  container

**● container**: *`HTMLElement`*

*Inherited from [Game](_lib_game_.game.md).[container](_lib_game_.game.md#container)*

*Defined in [lib/Game.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L27)*

___
<a id="ctx"></a>

###  ctx

**● ctx**: *`CanvasRenderingContext2D`* =  <CanvasRenderingContext2D>this.canvas.getContext("2d")

*Inherited from [Game](_lib_game_.game.md).[ctx](_lib_game_.game.md#ctx)*

*Defined in [lib/Game.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L29)*

___
<a id="debug"></a>

###  debug

**● debug**: *`boolean`* = false

*Inherited from [Game](_lib_game_.game.md).[debug](_lib_game_.game.md#debug)*

*Defined in [lib/Game.ts:30](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L30)*

___
<a id="joypad"></a>

###  joypad

**● joypad**: *[joypad](../modules/_lib_utils_webjoypad_.joypad.md)* =  joypad

*Inherited from [Game](_lib_game_.game.md).[joypad](_lib_game_.game.md#joypad)*

*Defined in [lib/Game.ts:35](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L35)*

___
<a id="loaded"></a>

###  loaded

**● loaded**: *`number`* = 0

*Inherited from [Game](_lib_game_.game.md).[loaded](_lib_game_.game.md#loaded)*

*Defined in [lib/Game.ts:32](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L32)*

___
<a id="loading"></a>

###  loading

**● loading**: *`number`* = 0

*Inherited from [Game](_lib_game_.game.md).[loading](_lib_game_.game.md#loading)*

*Defined in [lib/Game.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L31)*

___
<a id="prefs"></a>

###  prefs

**● prefs**: *[StorageFile](_lib_utils_storagefile_.storagefile.md)* =  new StorageFile("/prefs.json")

*Inherited from [Game](_lib_game_.game.md).[prefs](_lib_game_.game.md#prefs)*

*Defined in [lib/Game.ts:34](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L34)*

___
<a id="savefile"></a>

###  saveFile

**● saveFile**: *[StorageFile](_lib_utils_storagefile_.storagefile.md)* =  new StorageFile("save.json")

*Inherited from [Game](_lib_game_.game.md).[saveFile](_lib_game_.game.md#savefile)*

*Defined in [lib/Game.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L33)*

___
<a id="scene"></a>

###  scene

**● scene**: *[Scene](_lib_scenes_scene_.scene.md) \| `undefined`*

*Inherited from [Game](_lib_game_.game.md).[scene](_lib_game_.game.md#scene)*

*Defined in [lib/Game.ts:37](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L37)*

___
<a id="scenes"></a>

###  scenes

**● scenes**: *`object`*

*Inherited from [Game](_lib_game_.game.md).[scenes](_lib_game_.game.md#scenes)*

*Defined in [lib/Game.ts:36](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L36)*

#### Type declaration

[index: `string`]: [Scene](_lib_scenes_scene_.scene.md)

___

## Accessors

<a id="framerate"></a>

###  frameRate

**get frameRate**(): `number`

**set frameRate**(val: *`number`*): `void`

*Inherited from [Game](_lib_game_.game.md).[frameRate](_lib_game_.game.md#framerate)*

*Defined in [lib/Game.ts:44](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L44)*

**Returns:** `number`

*Inherited from [Game](_lib_game_.game.md).[frameRate](_lib_game_.game.md#framerate)*

*Defined in [lib/Game.ts:47](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `number` |

**Returns:** `void`

___

## Methods

<a id="addscene"></a>

###  addScene

▸ **addScene**(sceneName: *`string`*, scene: *[Scene](_lib_scenes_scene_.scene.md)*): `void`

*Inherited from [Game](_lib_game_.game.md).[addScene](_lib_game_.game.md#addscene)*

*Defined in [lib/Game.ts:92](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L92)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sceneName | `string` |
| scene | [Scene](_lib_scenes_scene_.scene.md) |

**Returns:** `void`

___
<a id="applysoundprefs"></a>

###  applySoundPrefs

▸ **applySoundPrefs**(): `void`

*Inherited from [Game](_lib_game_.game.md).[applySoundPrefs](_lib_game_.game.md#applysoundprefs)*

*Defined in [lib/Game.ts:83](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L83)*

**Returns:** `void`

___
<a id="gofullscreen"></a>

###  goFullscreen

▸ **goFullscreen**(): `void`

*Inherited from [Game](_lib_game_.game.md).[goFullscreen](_lib_game_.game.md#gofullscreen)*

*Defined in [lib/Game.ts:79](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L79)*

**Returns:** `void`

___
<a id="pause"></a>

###  pause

▸ **pause**(): `void`

*Inherited from [Game](_lib_game_.game.md).[pause](_lib_game_.game.md#pause)*

*Defined in [lib/Game.ts:110](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L110)*

**Returns:** `void`

___
<a id="removescene"></a>

###  removeScene

▸ **removeScene**(sceneName: *`string`*): `void`

*Inherited from [Game](_lib_game_.game.md).[removeScene](_lib_game_.game.md#removescene)*

*Defined in [lib/Game.ts:98](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L98)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sceneName | `string` |

**Returns:** `void`

___
<a id="render"></a>

###  render

▸ **render**(): `void`

*Inherited from [Game](_lib_game_.game.md).[render](_lib_game_.game.md#render)*

*Defined in [lib/Game.ts:67](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L67)*

**Returns:** `void`

___
<a id="resume"></a>

###  resume

▸ **resume**(): `void`

*Inherited from [Game](_lib_game_.game.md).[resume](_lib_game_.game.md#resume)*

*Defined in [lib/Game.ts:113](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L113)*

**Returns:** `void`

___
<a id="startscene"></a>

###  startScene

▸ **startScene**(sceneName: *`string`*): `void`

*Inherited from [Game](_lib_game_.game.md).[startScene](_lib_game_.game.md#startscene)*

*Defined in [lib/Game.ts:104](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L104)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sceneName | `string` |

**Returns:** `void`

___
<a id="trackevent"></a>

###  trackEvent

▸ **trackEvent**(event: *`string`*): `void`

*Inherited from [Game](_lib_game_.game.md).[trackEvent](_lib_game_.game.md#trackevent)*

*Defined in [lib/Game.ts:117](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L117)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` |

**Returns:** `void`

___
<a id="update"></a>

###  update

▸ **update**(): `void`

*Inherited from [Game](_lib_game_.game.md).[update](_lib_game_.game.md#update)*

*Defined in [lib/Game.ts:62](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L62)*

**Returns:** `void`

___

## Object literals

<a id="mediachannels"></a>

###  mediaChannels

**mediaChannels**: *`object`*

*Inherited from [Game](_lib_game_.game.md).[mediaChannels](_lib_game_.game.md#mediachannels)*

*Defined in [lib/Game.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L38)*

<a id="mediachannels.ambiance"></a>

####  ambiance

**● ambiance**: *[MediaPlayer](_lib_utils_mediaplayer_.mediaplayer.md)* =  new MediaPlayer()

*Defined in [lib/Game.ts:41](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L41)*

___
<a id="mediachannels.music"></a>

####  music

**● music**: *[MediaPlayer](_lib_utils_mediaplayer_.mediaplayer.md)* =  new MediaPlayer()

*Defined in [lib/Game.ts:40](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L40)*

___
<a id="mediachannels.sfx"></a>

####  sfx

**● sfx**: *[MediaPlayer](_lib_utils_mediaplayer_.mediaplayer.md)* =  new MediaPlayer()

*Defined in [lib/Game.ts:39](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/Game.ts#L39)*

___

___

