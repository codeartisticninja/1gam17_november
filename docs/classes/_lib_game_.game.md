[cost_of_creation](../README.md) > ["lib/Game"](../modules/_lib_game_.md) > [Game](../classes/_lib_game_.game.md)



# Class: Game


BaseGameApp class
*__date__*: 07-mar-2018


## Hierarchy

**Game**

↳  [MyGame](_mygame_.mygame.md)








## Index

### Constructors

* [constructor](_lib_game_.game.md#constructor)


### Properties

* [canvas](_lib_game_.game.md#canvas)
* [container](_lib_game_.game.md#container)
* [ctx](_lib_game_.game.md#ctx)
* [debug](_lib_game_.game.md#debug)
* [joypad](_lib_game_.game.md#joypad)
* [loaded](_lib_game_.game.md#loaded)
* [loading](_lib_game_.game.md#loading)
* [prefs](_lib_game_.game.md#prefs)
* [saveFile](_lib_game_.game.md#savefile)
* [scene](_lib_game_.game.md#scene)
* [scenes](_lib_game_.game.md#scenes)


### Accessors

* [frameRate](_lib_game_.game.md#framerate)


### Methods

* [addScene](_lib_game_.game.md#addscene)
* [applySoundPrefs](_lib_game_.game.md#applysoundprefs)
* [goFullscreen](_lib_game_.game.md#gofullscreen)
* [pause](_lib_game_.game.md#pause)
* [removeScene](_lib_game_.game.md#removescene)
* [render](_lib_game_.game.md#render)
* [resume](_lib_game_.game.md#resume)
* [startScene](_lib_game_.game.md#startscene)
* [trackEvent](_lib_game_.game.md#trackevent)
* [update](_lib_game_.game.md#update)


### Object literals

* [mediaChannels](_lib_game_.game.md#mediachannels)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Game**(container: *`string`⎮`HTMLElement`*, width: *`number`*, height?: *`number`*): [Game](_lib_game_.game.md)


*Defined in [lib/Game.ts:49](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L49)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| container | `string`⎮`HTMLElement`  | - |   - |
| width | `number`  | - |   - |
| height | `number`  |  width / 16 * 9 |   - |





**Returns:** [Game](_lib_game_.game.md)

---


## Properties
<a id="canvas"></a>

###  canvas

**●  canvas**:  *`HTMLCanvasElement`*  =  document.createElement("canvas")

*Defined in [lib/Game.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L28)*





___

<a id="container"></a>

###  container

**●  container**:  *`HTMLElement`* 

*Defined in [lib/Game.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L27)*





___

<a id="ctx"></a>

###  ctx

**●  ctx**:  *`CanvasRenderingContext2D`*  =  <CanvasRenderingContext2D>this.canvas.getContext("2d")

*Defined in [lib/Game.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L29)*





___

<a id="debug"></a>

###  debug

**●  debug**:  *`boolean`*  = false

*Defined in [lib/Game.ts:30](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L30)*





___

<a id="joypad"></a>

###  joypad

**●  joypad**:  *[joypad](../modules/_lib_utils_webjoypad_.joypad.md)*  =  joypad

*Defined in [lib/Game.ts:35](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L35)*





___

<a id="loaded"></a>

###  loaded

**●  loaded**:  *`number`*  = 0

*Defined in [lib/Game.ts:32](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L32)*





___

<a id="loading"></a>

###  loading

**●  loading**:  *`number`*  = 0

*Defined in [lib/Game.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L31)*





___

<a id="prefs"></a>

###  prefs

**●  prefs**:  *[StorageFile](_lib_utils_storagefile_.storagefile.md)*  =  new StorageFile("/prefs.json")

*Defined in [lib/Game.ts:34](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L34)*





___

<a id="savefile"></a>

###  saveFile

**●  saveFile**:  *[StorageFile](_lib_utils_storagefile_.storagefile.md)*  =  new StorageFile("save.json")

*Defined in [lib/Game.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L33)*





___

<a id="scene"></a>

###  scene

**●  scene**:  *[Scene](_lib_scenes_scene_.scene.md)⎮`undefined`* 

*Defined in [lib/Game.ts:37](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L37)*





___

<a id="scenes"></a>

###  scenes

**●  scenes**:  *`object`* 

*Defined in [lib/Game.ts:36](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L36)*


#### Type declaration


[index: `string`]: [Scene](_lib_scenes_scene_.scene.md)






___


## Accessors
<a id="framerate"></a>

###  frameRate


getframeRate(): `number`setframeRate(val: *`number`*): `void`

*Defined in [lib/Game.ts:44](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L44)*





**Returns:** `number`

*Defined in [lib/Game.ts:47](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L47)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| val | `number`   |  - |





**Returns:** `void`



___


## Methods
<a id="addscene"></a>

###  addScene

► **addScene**(sceneName: *`string`*, scene: *[Scene](_lib_scenes_scene_.scene.md)*): `void`



*Defined in [lib/Game.ts:92](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L92)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sceneName | `string`   |  - |
| scene | [Scene](_lib_scenes_scene_.scene.md)   |  - |





**Returns:** `void`





___

<a id="applysoundprefs"></a>

###  applySoundPrefs

► **applySoundPrefs**(): `void`



*Defined in [lib/Game.ts:83](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L83)*





**Returns:** `void`





___

<a id="gofullscreen"></a>

###  goFullscreen

► **goFullscreen**(): `void`



*Defined in [lib/Game.ts:79](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L79)*





**Returns:** `void`





___

<a id="pause"></a>

###  pause

► **pause**(): `void`



*Defined in [lib/Game.ts:110](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L110)*





**Returns:** `void`





___

<a id="removescene"></a>

###  removeScene

► **removeScene**(sceneName: *`string`*): `void`



*Defined in [lib/Game.ts:98](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L98)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sceneName | `string`   |  - |





**Returns:** `void`





___

<a id="render"></a>

###  render

► **render**(): `void`



*Defined in [lib/Game.ts:67](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L67)*





**Returns:** `void`





___

<a id="resume"></a>

###  resume

► **resume**(): `void`



*Defined in [lib/Game.ts:113](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L113)*





**Returns:** `void`





___

<a id="startscene"></a>

###  startScene

► **startScene**(sceneName: *`string`*): `void`



*Defined in [lib/Game.ts:104](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L104)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sceneName | `string`   |  - |





**Returns:** `void`





___

<a id="trackevent"></a>

###  trackEvent

► **trackEvent**(event: *`string`*): `void`



*Defined in [lib/Game.ts:117](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L117)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string`   |  - |





**Returns:** `void`





___

<a id="update"></a>

###  update

► **update**(): `void`



*Defined in [lib/Game.ts:62](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L62)*





**Returns:** `void`





___


<a id="mediachannels"></a>

## Object literal: mediaChannels


<a id="mediachannels.ambiance"></a>

###  ambiance

**●  ambiance**:  *[MediaPlayer](_lib_utils_mediaplayer_.mediaplayer.md)*  =  new MediaPlayer()

*Defined in [lib/Game.ts:41](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L41)*





___
<a id="mediachannels.music"></a>

###  music

**●  music**:  *[MediaPlayer](_lib_utils_mediaplayer_.mediaplayer.md)*  =  new MediaPlayer()

*Defined in [lib/Game.ts:40](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L40)*





___
<a id="mediachannels.sfx"></a>

###  sfx

**●  sfx**:  *[MediaPlayer](_lib_utils_mediaplayer_.mediaplayer.md)*  =  new MediaPlayer()

*Defined in [lib/Game.ts:39](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/Game.ts#L39)*





___


