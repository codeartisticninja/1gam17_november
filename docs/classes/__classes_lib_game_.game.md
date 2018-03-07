[cost_of_creation](../README.md) > ["_classes/lib/Game"](../modules/__classes_lib_game_.md) > [Game](../classes/__classes_lib_game_.game.md)



# Class: Game


BaseGameApp class
*__date__*: 07-mar-2018


## Hierarchy

**Game**

↳  [MyGame](__classes_mygame_.mygame.md)








## Index

### Constructors

* [constructor](__classes_lib_game_.game.md#constructor)


### Properties

* [canvas](__classes_lib_game_.game.md#canvas)
* [container](__classes_lib_game_.game.md#container)
* [ctx](__classes_lib_game_.game.md#ctx)
* [debug](__classes_lib_game_.game.md#debug)
* [joypad](__classes_lib_game_.game.md#joypad)
* [loaded](__classes_lib_game_.game.md#loaded)
* [loading](__classes_lib_game_.game.md#loading)
* [prefs](__classes_lib_game_.game.md#prefs)
* [saveFile](__classes_lib_game_.game.md#savefile)
* [scene](__classes_lib_game_.game.md#scene)
* [scenes](__classes_lib_game_.game.md#scenes)


### Accessors

* [frameRate](__classes_lib_game_.game.md#framerate)


### Methods

* [addScene](__classes_lib_game_.game.md#addscene)
* [applySoundPrefs](__classes_lib_game_.game.md#applysoundprefs)
* [goFullscreen](__classes_lib_game_.game.md#gofullscreen)
* [pause](__classes_lib_game_.game.md#pause)
* [removeScene](__classes_lib_game_.game.md#removescene)
* [render](__classes_lib_game_.game.md#render)
* [resume](__classes_lib_game_.game.md#resume)
* [startScene](__classes_lib_game_.game.md#startscene)
* [trackEvent](__classes_lib_game_.game.md#trackevent)
* [update](__classes_lib_game_.game.md#update)


### Object literals

* [mediaChannels](__classes_lib_game_.game.md#mediachannels)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Game**(container: *`string`⎮`HTMLElement`*, width: *`number`*, height?: *`number`*): [Game](__classes_lib_game_.game.md)





**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| container | `string`⎮`HTMLElement`  | - |   - |
| width | `number`  | - |   - |
| height | `number`  |  width / 16 * 9 |   - |





**Returns:** [Game](__classes_lib_game_.game.md)

---


## Properties
<a id="canvas"></a>

###  canvas

**●  canvas**:  *`HTMLCanvasElement`*  =  document.createElement("canvas")






___

<a id="container"></a>

###  container

**●  container**:  *`HTMLElement`* 






___

<a id="ctx"></a>

###  ctx

**●  ctx**:  *`CanvasRenderingContext2D`*  =  <CanvasRenderingContext2D>this.canvas.getContext("2d")






___

<a id="debug"></a>

###  debug

**●  debug**:  *`boolean`*  = false






___

<a id="joypad"></a>

###  joypad

**●  joypad**:  *[joypad](../modules/__classes_lib_utils_webjoypad_.joypad.md)*  =  joypad






___

<a id="loaded"></a>

###  loaded

**●  loaded**:  *`number`*  = 0






___

<a id="loading"></a>

###  loading

**●  loading**:  *`number`*  = 0






___

<a id="prefs"></a>

###  prefs

**●  prefs**:  *[StorageFile](__classes_lib_utils_storagefile_.storagefile.md)*  =  new StorageFile("/prefs.json")






___

<a id="savefile"></a>

###  saveFile

**●  saveFile**:  *[StorageFile](__classes_lib_utils_storagefile_.storagefile.md)*  =  new StorageFile("save.json")






___

<a id="scene"></a>

###  scene

**●  scene**:  *[Scene](__classes_lib_scenes_scene_.scene.md)⎮`undefined`* 






___

<a id="scenes"></a>

###  scenes

**●  scenes**:  *`object`* 



#### Type declaration


[index: `string`]: [Scene](__classes_lib_scenes_scene_.scene.md)






___


## Accessors
<a id="framerate"></a>

###  frameRate


getframeRate(): `number`setframeRate(val: *`number`*): `void`






**Returns:** `number`




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








**Returns:** `void`





___

<a id="gofullscreen"></a>

###  goFullscreen

► **goFullscreen**(): `void`








**Returns:** `void`





___

<a id="pause"></a>

###  pause

► **pause**(): `void`








**Returns:** `void`





___

<a id="removescene"></a>

###  removeScene

► **removeScene**(sceneName: *`string`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sceneName | `string`   |  - |





**Returns:** `void`





___

<a id="render"></a>

###  render

► **render**(): `void`








**Returns:** `void`





___

<a id="resume"></a>

###  resume

► **resume**(): `void`








**Returns:** `void`





___

<a id="startscene"></a>

###  startScene

► **startScene**(sceneName: *`string`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sceneName | `string`   |  - |





**Returns:** `void`





___

<a id="trackevent"></a>

###  trackEvent

► **trackEvent**(event: *`string`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| event | `string`   |  - |





**Returns:** `void`





___

<a id="update"></a>

###  update

► **update**(): `void`








**Returns:** `void`





___


<a id="mediachannels"></a>

## Object literal: mediaChannels


<a id="mediachannels.ambiance"></a>

###  ambiance

**●  ambiance**:  *[MediaPlayer](__classes_lib_utils_mediaplayer_.mediaplayer.md)*  =  new MediaPlayer()






___
<a id="mediachannels.music"></a>

###  music

**●  music**:  *[MediaPlayer](__classes_lib_utils_mediaplayer_.mediaplayer.md)*  =  new MediaPlayer()






___
<a id="mediachannels.sfx"></a>

###  sfx

**●  sfx**:  *[MediaPlayer](__classes_lib_utils_mediaplayer_.mediaplayer.md)*  =  new MediaPlayer()






___


