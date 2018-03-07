[cost_of_creation](../README.md) > ["_classes/lib/scenes/Scene"](../modules/__classes_lib_scenes_scene_.md) > [Scene](../classes/__classes_lib_scenes_scene_.scene.md)



# Class: Scene


Scene class
*__date__*: 07-mar-2018


## Hierarchy

**Scene**

↳  [PaintingScene](__classes_scenes_paintingscene_.paintingscene.md)








## Index

### Constructors

* [constructor](__classes_lib_scenes_scene_.scene.md#constructor)


### Properties

* [actorTypes](__classes_lib_scenes_scene_.scene.md#actortypes)
* [actors](__classes_lib_scenes_scene_.scene.md#actors)
* [actorsByName](__classes_lib_scenes_scene_.scene.md#actorsbyname)
* [actorsByType](__classes_lib_scenes_scene_.scene.md#actorsbytype)
* [backgroundColor](__classes_lib_scenes_scene_.scene.md#backgroundcolor)
* [boundCamera](__classes_lib_scenes_scene_.scene.md#boundcamera)
* [camera](__classes_lib_scenes_scene_.scene.md#camera)
* [cameraRotation](__classes_lib_scenes_scene_.scene.md#camerarotation)
* [game](__classes_lib_scenes_scene_.scene.md#game)
* [gravity](__classes_lib_scenes_scene_.scene.md#gravity)
* [mapData](__classes_lib_scenes_scene_.scene.md#mapdata)
* [mapUrl](__classes_lib_scenes_scene_.scene.md#mapurl)
* [mouse](__classes_lib_scenes_scene_.scene.md#mouse)
* [mouseJustPressed](__classes_lib_scenes_scene_.scene.md#mousejustpressed)
* [mousePressed](__classes_lib_scenes_scene_.scene.md#mousepressed)
* [size](__classes_lib_scenes_scene_.scene.md#size)
* [spritesByFirstGid](__classes_lib_scenes_scene_.scene.md#spritesbyfirstgid)
* [spritesByName](__classes_lib_scenes_scene_.scene.md#spritesbyname)


### Methods

* [addActor](__classes_lib_scenes_scene_.scene.md#addactor)
* [addSprite](__classes_lib_scenes_scene_.scene.md#addsprite)
* [bringActorToBack](__classes_lib_scenes_scene_.scene.md#bringactortoback)
* [bringActorToFront](__classes_lib_scenes_scene_.scene.md#bringactortofront)
* [clearAlarm](__classes_lib_scenes_scene_.scene.md#clearalarm)
* [clearAllAlarms](__classes_lib_scenes_scene_.scene.md#clearallalarms)
* [createActor](__classes_lib_scenes_scene_.scene.md#createactor)
* [enter](__classes_lib_scenes_scene_.scene.md#enter)
* [exit](__classes_lib_scenes_scene_.scene.md#exit)
* [getSpriteByGid](__classes_lib_scenes_scene_.scene.md#getspritebygid)
* [getSpriteByName](__classes_lib_scenes_scene_.scene.md#getspritebyname)
* [loadMap](__classes_lib_scenes_scene_.scene.md#loadmap)
* [mouseDown](__classes_lib_scenes_scene_.scene.md#mousedown)
* [mouseMove](__classes_lib_scenes_scene_.scene.md#mousemove)
* [mouseUp](__classes_lib_scenes_scene_.scene.md#mouseup)
* [onOverlap](__classes_lib_scenes_scene_.scene.md#onoverlap)
* [removeActor](__classes_lib_scenes_scene_.scene.md#removeactor)
* [render](__classes_lib_scenes_scene_.scene.md#render)
* [reset](__classes_lib_scenes_scene_.scene.md#reset)
* [setAlarm](__classes_lib_scenes_scene_.scene.md#setalarm)
* [update](__classes_lib_scenes_scene_.scene.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Scene**(game: *[Game](__classes_lib_game_.game.md)*, mapUrl?: *`undefined`⎮`string`*): [Scene](__classes_lib_scenes_scene_.scene.md)





**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| game | [Game](__classes_lib_game_.game.md)   |  - |
| mapUrl | `undefined`⎮`string`   |  - |





**Returns:** [Scene](__classes_lib_scenes_scene_.scene.md)

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

<a id="game"></a>

###  game

**●  game**:  *[Game](__classes_lib_game_.game.md)* 






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


