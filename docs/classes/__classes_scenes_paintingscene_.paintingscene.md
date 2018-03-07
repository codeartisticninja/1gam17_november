[cost_of_creation](../README.md) > ["_classes/scenes/PaintingScene"](../modules/__classes_scenes_paintingscene_.md) > [PaintingScene](../classes/__classes_scenes_paintingscene_.paintingscene.md)



# Class: PaintingScene


PaintingScene class

## Hierarchy


 [Scene](__classes_lib_scenes_scene_.scene.md)

**↳ PaintingScene**







## Index

### Constructors

* [constructor](__classes_scenes_paintingscene_.paintingscene.md#constructor)


### Properties

* [actorTypes](__classes_scenes_paintingscene_.paintingscene.md#actortypes)
* [actors](__classes_scenes_paintingscene_.paintingscene.md#actors)
* [actorsByName](__classes_scenes_paintingscene_.paintingscene.md#actorsbyname)
* [actorsByType](__classes_scenes_paintingscene_.paintingscene.md#actorsbytype)
* [backgroundColor](__classes_scenes_paintingscene_.paintingscene.md#backgroundcolor)
* [boundCamera](__classes_scenes_paintingscene_.paintingscene.md#boundcamera)
* [camera](__classes_scenes_paintingscene_.paintingscene.md#camera)
* [cameraRotation](__classes_scenes_paintingscene_.paintingscene.md#camerarotation)
* [collab](__classes_scenes_paintingscene_.paintingscene.md#collab)
* [game](__classes_scenes_paintingscene_.paintingscene.md#game)
* [gravity](__classes_scenes_paintingscene_.paintingscene.md#gravity)
* [mapData](__classes_scenes_paintingscene_.paintingscene.md#mapdata)
* [mapUrl](__classes_scenes_paintingscene_.paintingscene.md#mapurl)
* [mouse](__classes_scenes_paintingscene_.paintingscene.md#mouse)
* [mouseJustPressed](__classes_scenes_paintingscene_.paintingscene.md#mousejustpressed)
* [mousePressed](__classes_scenes_paintingscene_.paintingscene.md#mousepressed)
* [size](__classes_scenes_paintingscene_.paintingscene.md#size)
* [spritesByFirstGid](__classes_scenes_paintingscene_.paintingscene.md#spritesbyfirstgid)
* [spritesByName](__classes_scenes_paintingscene_.paintingscene.md#spritesbyname)


### Methods

* [addActor](__classes_scenes_paintingscene_.paintingscene.md#addactor)
* [addSprite](__classes_scenes_paintingscene_.paintingscene.md#addsprite)
* [applyPatch](__classes_scenes_paintingscene_.paintingscene.md#applypatch)
* [bringActorToBack](__classes_scenes_paintingscene_.paintingscene.md#bringactortoback)
* [bringActorToFront](__classes_scenes_paintingscene_.paintingscene.md#bringactortofront)
* [clearAlarm](__classes_scenes_paintingscene_.paintingscene.md#clearalarm)
* [clearAllAlarms](__classes_scenes_paintingscene_.paintingscene.md#clearallalarms)
* [createActor](__classes_scenes_paintingscene_.paintingscene.md#createactor)
* [enter](__classes_scenes_paintingscene_.paintingscene.md#enter)
* [exit](__classes_scenes_paintingscene_.paintingscene.md#exit)
* [getSpriteByGid](__classes_scenes_paintingscene_.paintingscene.md#getspritebygid)
* [getSpriteByName](__classes_scenes_paintingscene_.paintingscene.md#getspritebyname)
* [loadMap](__classes_scenes_paintingscene_.paintingscene.md#loadmap)
* [mouseDown](__classes_scenes_paintingscene_.paintingscene.md#mousedown)
* [mouseMove](__classes_scenes_paintingscene_.paintingscene.md#mousemove)
* [mouseUp](__classes_scenes_paintingscene_.paintingscene.md#mouseup)
* [onOverlap](__classes_scenes_paintingscene_.paintingscene.md#onoverlap)
* [removeActor](__classes_scenes_paintingscene_.paintingscene.md#removeactor)
* [render](__classes_scenes_paintingscene_.paintingscene.md#render)
* [reset](__classes_scenes_paintingscene_.paintingscene.md#reset)
* [sendPatch](__classes_scenes_paintingscene_.paintingscene.md#sendpatch)
* [setAlarm](__classes_scenes_paintingscene_.paintingscene.md#setalarm)
* [update](__classes_scenes_paintingscene_.paintingscene.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new PaintingScene**(game: *[MyGame](__classes_mygame_.mygame.md)*, map: *`string`*): [PaintingScene](__classes_scenes_paintingscene_.paintingscene.md)





**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| game | [MyGame](__classes_mygame_.mygame.md)   |  - |
| map | `string`   |  - |





**Returns:** [PaintingScene](__classes_scenes_paintingscene_.paintingscene.md)

---


## Properties
<a id="actortypes"></a>

###  actorTypes

**●  actorTypes**:  *`object`* 



#### Type declaration


[index: `string`]: [Actor](__classes_lib_scenes_actors_actor_.actor.md)






___

<a id="actors"></a>

###  actors

**●  actors**:  *[Actor](__classes_lib_scenes_actors_actor_.actor.md)[]*  =  []






___

<a id="actorsbyname"></a>

###  actorsByName

**●  actorsByName**:  *`object`* 



#### Type declaration


[index: `string`]: [Actor](__classes_lib_scenes_actors_actor_.actor.md)






___

<a id="actorsbytype"></a>

###  actorsByType

**●  actorsByType**:  *`object`* 



#### Type declaration


[index: `string`]: [Actor](__classes_lib_scenes_actors_actor_.actor.md)[]






___

<a id="backgroundcolor"></a>

###  backgroundColor

**●  backgroundColor**:  *`string`*  = ""






___

<a id="boundcamera"></a>

###  boundCamera

**●  boundCamera**:  *`boolean`*  = true






___

<a id="camera"></a>

###  camera

**●  camera**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()






___

<a id="camerarotation"></a>

###  cameraRotation

**●  cameraRotation**:  *[Angle](__classes_lib_utils_angle_.angle.md)*  =  new Angle()






___

<a id="collab"></a>

###  collab

**●  collab**:  *[Collab](__classes_lib_utils_collab_.collab.md)* 






___

<a id="game"></a>

###  game

**●  game**:  *[MyGame](__classes_mygame_.mygame.md)* 






___

<a id="gravity"></a>

###  gravity

**●  gravity**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()






___

<a id="mapdata"></a>

###  mapData

**●  mapData**:  *`any`* 






___

<a id="mapurl"></a>

### «Optional» mapUrl

**●  mapUrl**:  *`undefined`⎮`string`* 






___

<a id="mouse"></a>

###  mouse

**●  mouse**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()






___

<a id="mousejustpressed"></a>

###  mouseJustPressed

**●  mouseJustPressed**:  *`number`*  = 0






___

<a id="mousepressed"></a>

###  mousePressed

**●  mousePressed**:  *`boolean`*  = false






___

<a id="size"></a>

###  size

**●  size**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()






___

<a id="spritesbyfirstgid"></a>

###  spritesByFirstGid

**●  spritesByFirstGid**:  *[Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)[]*  =  []






___

<a id="spritesbyname"></a>

###  spritesByName

**●  spritesByName**:  *`object`* 



#### Type declaration


[index: `string`]: [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)






___


## Methods
<a id="addactor"></a>

###  addActor

► **addActor**(actor: *[Actor](__classes_lib_scenes_actors_actor_.actor.md)*, ...toGroup: *`Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)>[]*): [Actor](__classes_lib_scenes_actors_actor_.actor.md)






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| actor | [Actor](__classes_lib_scenes_actors_actor_.actor.md)   |  - |
| toGroup | `Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)>[]   |  - |





**Returns:** [Actor](__classes_lib_scenes_actors_actor_.actor.md)





___

<a id="addsprite"></a>

###  addSprite

► **addSprite**(sprite: *[Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sprite | [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)   |  - |





**Returns:** `void`





___

<a id="applypatch"></a>

###  applyPatch

► **applyPatch**(patch: *`any`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| patch | `any`   |  - |





**Returns:** `void`





___

<a id="bringactortoback"></a>

###  bringActorToBack

► **bringActorToBack**(actor: *[Actor](__classes_lib_scenes_actors_actor_.actor.md)*, ...fromGroup: *`Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)>[]*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| actor | [Actor](__classes_lib_scenes_actors_actor_.actor.md)   |  - |
| fromGroup | `Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)>[]   |  - |





**Returns:** `void`





___

<a id="bringactortofront"></a>

###  bringActorToFront

► **bringActorToFront**(actor: *[Actor](__classes_lib_scenes_actors_actor_.actor.md)*, ...fromGroup: *`Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)>[]*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| actor | [Actor](__classes_lib_scenes_actors_actor_.actor.md)   |  - |
| fromGroup | `Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)>[]   |  - |





**Returns:** `void`





___

<a id="clearalarm"></a>

###  clearAlarm

► **clearAlarm**(alarm: *`any`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| alarm | `any`   |  - |





**Returns:** `void`





___

<a id="clearallalarms"></a>

###  clearAllAlarms

► **clearAllAlarms**(): `void`








**Returns:** `void`





___

<a id="createactor"></a>

###  createActor

► **createActor**(obj: *`any`*): [Actor](__classes_lib_scenes_actors_actor_.actor.md)






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  - |





**Returns:** [Actor](__classes_lib_scenes_actors_actor_.actor.md)





___

<a id="enter"></a>

###  enter

► **enter**(): `void`








**Returns:** `void`





___

<a id="exit"></a>

###  exit

► **exit**(): `void`








**Returns:** `void`





___

<a id="getspritebygid"></a>

###  getSpriteByGid

► **getSpriteByGid**(gid: *`number`*): [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gid | `number`   |  - |





**Returns:** [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)





___

<a id="getspritebyname"></a>

###  getSpriteByName

► **getSpriteByName**(name: *`string`*): [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |





**Returns:** [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)





___

<a id="loadmap"></a>

###  loadMap

► **loadMap**(): `void`








**Returns:** `void`





___

<a id="mousedown"></a>

###  mouseDown

► **mouseDown**(x: *`number`*, y: *`number`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| x | `number`   |  - |
| y | `number`   |  - |





**Returns:** `void`





___

<a id="mousemove"></a>

###  mouseMove

► **mouseMove**(x: *`number`*, y: *`number`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| x | `number`   |  - |
| y | `number`   |  - |





**Returns:** `void`





___

<a id="mouseup"></a>

###  mouseUp

► **mouseUp**(x: *`number`*, y: *`number`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| x | `number`   |  - |
| y | `number`   |  - |





**Returns:** `void`





___

<a id="onoverlap"></a>

###  onOverlap

► **onOverlap**(a: *[Actor](__classes_lib_scenes_actors_actor_.actor.md)⎮`Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)>*, b: *[Actor](__classes_lib_scenes_actors_actor_.actor.md)⎮`Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)>*, resolver: *`Function`*, context?: *`Object`*): `void`






**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| a | [Actor](__classes_lib_scenes_actors_actor_.actor.md)⎮`Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)>  | - |   - |
| b | [Actor](__classes_lib_scenes_actors_actor_.actor.md)⎮`Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)>  | - |   - |
| resolver | `Function`  | - |   - |
| context | `Object`  |  this |   - |





**Returns:** `void`





___

<a id="removeactor"></a>

###  removeActor

► **removeActor**(actor: *[Actor](__classes_lib_scenes_actors_actor_.actor.md)*, ...fromGroup: *`Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)⎮`null`>[]*): [Actor](__classes_lib_scenes_actors_actor_.actor.md)






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| actor | [Actor](__classes_lib_scenes_actors_actor_.actor.md)   |  - |
| fromGroup | `Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)⎮`null`>[]   |  - |





**Returns:** [Actor](__classes_lib_scenes_actors_actor_.actor.md)





___

<a id="render"></a>

###  render

► **render**(): `undefined`⎮`false`








**Returns:** `undefined`⎮`false`





___

<a id="reset"></a>

###  reset

► **reset**(): `void`








**Returns:** `void`





___

<a id="sendpatch"></a>

###  sendPatch

► **sendPatch**(patch: *`any`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| patch | `any`   |  - |





**Returns:** `void`





___

<a id="setalarm"></a>

###  setAlarm

► **setAlarm**(frames: *`number`*, cb: *`Function`*): `object`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| frames | `number`   |  - |
| cb | `Function`   |  - |





**Returns:** `object`





___

<a id="update"></a>

###  update

► **update**(): `void`








**Returns:** `void`





___


