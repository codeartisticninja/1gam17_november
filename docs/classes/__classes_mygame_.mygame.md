[cost_of_creation](../README.md) > ["_classes/MyGame"](../modules/__classes_mygame_.md) > [MyGame](../classes/__classes_mygame_.mygame.md)



# Class: MyGame


MyGame class

## Hierarchy


 [Game](__classes_lib_game_.game.md)

**↳ MyGame**







## Index

### Constructors

* [constructor](__classes_mygame_.mygame.md#constructor)


### Properties

* [canvas](__classes_mygame_.mygame.md#canvas)
* [container](__classes_mygame_.mygame.md#container)
* [ctx](__classes_mygame_.mygame.md#ctx)
* [debug](__classes_mygame_.mygame.md#debug)
* [joypad](__classes_mygame_.mygame.md#joypad)
* [loaded](__classes_mygame_.mygame.md#loaded)
* [loading](__classes_mygame_.mygame.md#loading)
* [prefs](__classes_mygame_.mygame.md#prefs)
* [saveFile](__classes_mygame_.mygame.md#savefile)
* [scene](__classes_mygame_.mygame.md#scene)
* [scenes](__classes_mygame_.mygame.md#scenes)


### Accessors

* [frameRate](__classes_mygame_.mygame.md#framerate)


### Methods

* [addScene](__classes_mygame_.mygame.md#addscene)
* [applySoundPrefs](__classes_mygame_.mygame.md#applysoundprefs)
* [goFullscreen](__classes_mygame_.mygame.md#gofullscreen)
* [pause](__classes_mygame_.mygame.md#pause)
* [removeScene](__classes_mygame_.mygame.md#removescene)
* [render](__classes_mygame_.mygame.md#render)
* [resume](__classes_mygame_.mygame.md#resume)
* [startScene](__classes_mygame_.mygame.md#startscene)
* [trackEvent](__classes_mygame_.mygame.md#trackevent)
* [update](__classes_mygame_.mygame.md#update)


### Object literals

* [mediaChannels](__classes_mygame_.mygame.md#mediachannels)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new MyGame**(container: *`string`⎮`HTMLElement`*): [MyGame](__classes_mygame_.mygame.md)


*Overrides [Game](__classes_lib_game_.game.md).[constructor](__classes_lib_game_.game.md#constructor)*

*Defined in [_classes/MyGame.ts:11](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/MyGame.ts#L11)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| container | `string`⎮`HTMLElement`   |  - |





**Returns:** [MyGame](__classes_mygame_.mygame.md)

---


## Properties
<a id="canvas"></a>

###  canvas

**●  canvas**:  *`HTMLCanvasElement`*  =  document.createElement("canvas")

*Inherited from [Game](__classes_lib_game_.game.md).[canvas](__classes_lib_game_.game.md#canvas)*

*Defined in [_classes/lib/Game.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L28)*





___

<a id="container"></a>

###  container

**●  container**:  *`HTMLElement`* 

*Inherited from [Game](__classes_lib_game_.game.md).[container](__classes_lib_game_.game.md#container)*

*Defined in [_classes/lib/Game.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L27)*





___

<a id="ctx"></a>

###  ctx

**●  ctx**:  *`CanvasRenderingContext2D`*  =  <CanvasRenderingContext2D>this.canvas.getContext("2d")

*Inherited from [Game](__classes_lib_game_.game.md).[ctx](__classes_lib_game_.game.md#ctx)*

*Defined in [_classes/lib/Game.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L29)*





___

<a id="debug"></a>

###  debug

**●  debug**:  *`boolean`*  = false

*Inherited from [Game](__classes_lib_game_.game.md).[debug](__classes_lib_game_.game.md#debug)*

*Defined in [_classes/lib/Game.ts:30](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L30)*





___

<a id="joypad"></a>

###  joypad

**●  joypad**:  *[joypad](../modules/__classes_lib_utils_webjoypad_.joypad.md)*  =  joypad

*Inherited from [Game](__classes_lib_game_.game.md).[joypad](__classes_lib_game_.game.md#joypad)*

*Defined in [_classes/lib/Game.ts:35](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L35)*





___

<a id="loaded"></a>

###  loaded

**●  loaded**:  *`number`*  = 0

*Inherited from [Game](__classes_lib_game_.game.md).[loaded](__classes_lib_game_.game.md#loaded)*

*Defined in [_classes/lib/Game.ts:32](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L32)*





___

<a id="loading"></a>

###  loading

**●  loading**:  *`number`*  = 0

*Inherited from [Game](__classes_lib_game_.game.md).[loading](__classes_lib_game_.game.md#loading)*

*Defined in [_classes/lib/Game.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L31)*





___

<a id="prefs"></a>

###  prefs

**●  prefs**:  *[StorageFile](__classes_lib_utils_storagefile_.storagefile.md)*  =  new StorageFile("/prefs.json")

*Inherited from [Game](__classes_lib_game_.game.md).[prefs](__classes_lib_game_.game.md#prefs)*

*Defined in [_classes/lib/Game.ts:34](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L34)*





___

<a id="savefile"></a>

###  saveFile

**●  saveFile**:  *[StorageFile](__classes_lib_utils_storagefile_.storagefile.md)*  =  new StorageFile("save.json")

*Inherited from [Game](__classes_lib_game_.game.md).[saveFile](__classes_lib_game_.game.md#savefile)*

*Defined in [_classes/lib/Game.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L33)*





___

<a id="scene"></a>

###  scene

**●  scene**:  *[Scene](__classes_lib_scenes_scene_.scene.md)⎮`undefined`* 

*Inherited from [Game](__classes_lib_game_.game.md).[scene](__classes_lib_game_.game.md#scene)*

*Defined in [_classes/lib/Game.ts:37](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L37)*





___

<a id="scenes"></a>

###  scenes

**●  scenes**:  *`object`* 

*Inherited from [Game](__classes_lib_game_.game.md).[scenes](__classes_lib_game_.game.md#scenes)*

*Defined in [_classes/lib/Game.ts:36](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L36)*


#### Type declaration


[index: `string`]: [Scene](__classes_lib_scenes_scene_.scene.md)






___


## Accessors
<a id="framerate"></a>

###  frameRate


getframeRate(): `number`setframeRate(val: *`number`*): `void`

*Inherited from [Game](__classes_lib_game_.game.md).[frameRate](__classes_lib_game_.game.md#framerate)*

*Defined in [_classes/lib/Game.ts:44](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L44)*





**Returns:** `number`

*Inherited from [Game](__classes_lib_game_.game.md).[frameRate](__classes_lib_game_.game.md#framerate)*

*Defined in [_classes/lib/Game.ts:47](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L47)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| val | `number`   |  - |





**Returns:** `void`



___


## Methods
<a id="addscene"></a>

###  addScene

► **addScene**(sceneName: *`string`*, scene: *[Scene](__classes_lib_scenes_scene_.scene.md)*): `void`



*Inherited from [Game](__classes_lib_game_.game.md).[addScene](__classes_lib_game_.game.md#addscene)*

*Defined in [_classes/lib/Game.ts:92](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L92)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sceneName | `string`   |  - |
| scene | [Scene](__classes_lib_scenes_scene_.scene.md)   |  - |





**Returns:** `void`





___

<a id="applysoundprefs"></a>

###  applySoundPrefs

► **applySoundPrefs**(): `void`



*Inherited from [Game](__classes_lib_game_.game.md).[applySoundPrefs](__classes_lib_game_.game.md#applysoundprefs)*

*Defined in [_classes/lib/Game.ts:83](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L83)*





**Returns:** `void`





___

<a id="gofullscreen"></a>

###  goFullscreen

► **goFullscreen**(): `void`



*Inherited from [Game](__classes_lib_game_.game.md).[goFullscreen](__classes_lib_game_.game.md#gofullscreen)*

*Defined in [_classes/lib/Game.ts:79](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L79)*





**Returns:** `void`





___

<a id="pause"></a>

###  pause

► **pause**(): `void`



*Inherited from [Game](__classes_lib_game_.game.md).[pause](__classes_lib_game_.game.md#pause)*

*Defined in [_classes/lib/Game.ts:110](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L110)*





**Returns:** `void`





___

<a id="removescene"></a>

###  removeScene

► **removeScene**(sceneName: *`string`*): `void`



*Inherited from [Game](__classes_lib_game_.game.md).[removeScene](__classes_lib_game_.game.md#removescene)*

*Defined in [_classes/lib/Game.ts:98](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L98)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sceneName | `string`   |  - |





**Returns:** `void`





___

<a id="render"></a>

###  render

► **render**(): `void`



*Inherited from [Game](__classes_lib_game_.game.md).[render](__classes_lib_game_.game.md#render)*

*Defined in [_classes/lib/Game.ts:67](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L67)*





**Returns:** `void`





___

<a id="resume"></a>

###  resume

► **resume**(): `void`



*Inherited from [Game](__classes_lib_game_.game.md).[resume](__classes_lib_game_.game.md#resume)*

*Defined in [_classes/lib/Game.ts:113](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L113)*





**Returns:** `void`





___

<a id="startscene"></a>

###  startScene

► **startScene**(sceneName: *`string`*): `void`



*Inherited from [Game](__classes_lib_game_.game.md).[startScene](__classes_lib_game_.game.md#startscene)*

*Defined in [_classes/lib/Game.ts:104](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L104)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sceneName | `string`   |  - |





**Returns:** `void`





___

<a id="trackevent"></a>

###  trackEvent

► **trackEvent**(event: *`string`*): `void`



*Inherited from [Game](__classes_lib_game_.game.md).[trackEvent](__classes_lib_game_.game.md#trackevent)*

*Defined in [_classes/lib/Game.ts:117](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L117)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string`   |  - |





**Returns:** `void`





___

<a id="update"></a>

###  update

► **update**(): `void`



*Inherited from [Game](__classes_lib_game_.game.md).[update](__classes_lib_game_.game.md#update)*

*Defined in [_classes/lib/Game.ts:62](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L62)*





**Returns:** `void`





___


<a id="mediachannels"></a>

## Object literal: mediaChannels


<a id="mediachannels.ambiance"></a>

###  ambiance

**●  ambiance**:  *[MediaPlayer](__classes_lib_utils_mediaplayer_.mediaplayer.md)*  =  new MediaPlayer()

*Defined in [_classes/lib/Game.ts:41](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L41)*





___
<a id="mediachannels.music"></a>

###  music

**●  music**:  *[MediaPlayer](__classes_lib_utils_mediaplayer_.mediaplayer.md)*  =  new MediaPlayer()

*Defined in [_classes/lib/Game.ts:40](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L40)*





___
<a id="mediachannels.sfx"></a>

###  sfx

**●  sfx**:  *[MediaPlayer](__classes_lib_utils_mediaplayer_.mediaplayer.md)*  =  new MediaPlayer()

*Defined in [_classes/lib/Game.ts:39](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/Game.ts#L39)*





___


