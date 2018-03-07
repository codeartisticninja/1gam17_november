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


*Defined in [_classes/lib/scenes/Scene.ts:36](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L36)*



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

*Defined in [_classes/lib/scenes/Scene.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L21)*


#### Type declaration


[index: `string`]: [Actor](__classes_lib_scenes_actors_actor_.actor.md)






___

<a id="actors"></a>

###  actors

**●  actors**:  *[Actor](__classes_lib_scenes_actors_actor_.actor.md)[]*  =  []

*Defined in [_classes/lib/scenes/Scene.ts:22](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L22)*





___

<a id="actorsbyname"></a>

###  actorsByName

**●  actorsByName**:  *`object`* 

*Defined in [_classes/lib/scenes/Scene.ts:24](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L24)*


#### Type declaration


[index: `string`]: [Actor](__classes_lib_scenes_actors_actor_.actor.md)






___

<a id="actorsbytype"></a>

###  actorsByType

**●  actorsByType**:  *`object`* 

*Defined in [_classes/lib/scenes/Scene.ts:23](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L23)*


#### Type declaration


[index: `string`]: [Actor](__classes_lib_scenes_actors_actor_.actor.md)[]






___

<a id="backgroundcolor"></a>

###  backgroundColor

**●  backgroundColor**:  *`string`*  = ""

*Defined in [_classes/lib/scenes/Scene.ts:36](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L36)*





___

<a id="boundcamera"></a>

###  boundCamera

**●  boundCamera**:  *`boolean`*  = true

*Defined in [_classes/lib/scenes/Scene.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L31)*





___

<a id="camera"></a>

###  camera

**●  camera**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Defined in [_classes/lib/scenes/Scene.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L29)*





___

<a id="camerarotation"></a>

###  cameraRotation

**●  cameraRotation**:  *[Angle](__classes_lib_utils_angle_.angle.md)*  =  new Angle()

*Defined in [_classes/lib/scenes/Scene.ts:30](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L30)*





___

<a id="game"></a>

###  game

**●  game**:  *[Game](__classes_lib_game_.game.md)* 

*Defined in [_classes/lib/scenes/Scene.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L38)*





___

<a id="gravity"></a>

###  gravity

**●  gravity**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Defined in [_classes/lib/scenes/Scene.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L28)*





___

<a id="mapdata"></a>

###  mapData

**●  mapData**:  *`any`* 

*Defined in [_classes/lib/scenes/Scene.ts:35](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L35)*





___

<a id="mapurl"></a>

### «Optional» mapUrl

**●  mapUrl**:  *`undefined`⎮`string`* 

*Defined in [_classes/lib/scenes/Scene.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L38)*





___

<a id="mouse"></a>

###  mouse

**●  mouse**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Defined in [_classes/lib/scenes/Scene.ts:32](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L32)*





___

<a id="mousejustpressed"></a>

###  mouseJustPressed

**●  mouseJustPressed**:  *`number`*  = 0

*Defined in [_classes/lib/scenes/Scene.ts:34](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L34)*





___

<a id="mousepressed"></a>

###  mousePressed

**●  mousePressed**:  *`boolean`*  = false

*Defined in [_classes/lib/scenes/Scene.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L33)*





___

<a id="size"></a>

###  size

**●  size**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Defined in [_classes/lib/scenes/Scene.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L27)*





___

<a id="spritesbyfirstgid"></a>

###  spritesByFirstGid

**●  spritesByFirstGid**:  *[Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)[]*  =  []

*Defined in [_classes/lib/scenes/Scene.ts:25](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L25)*





___

<a id="spritesbyname"></a>

###  spritesByName

**●  spritesByName**:  *`object`* 

*Defined in [_classes/lib/scenes/Scene.ts:26](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L26)*


#### Type declaration


[index: `string`]: [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)






___


## Methods
<a id="addactor"></a>

###  addActor

► **addActor**(actor: *[Actor](__classes_lib_scenes_actors_actor_.actor.md)*, ...toGroup: *`Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)>[]*): [Actor](__classes_lib_scenes_actors_actor_.actor.md)



*Defined in [_classes/lib/scenes/Scene.ts:163](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L163)*



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



*Defined in [_classes/lib/scenes/Scene.ts:219](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L219)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sprite | [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)   |  - |





**Returns:** `void`





___

<a id="bringactortoback"></a>

###  bringActorToBack

► **bringActorToBack**(actor: *[Actor](__classes_lib_scenes_actors_actor_.actor.md)*, ...fromGroup: *`Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)>[]*): `void`



*Defined in [_classes/lib/scenes/Scene.ts:205](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L205)*



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



*Defined in [_classes/lib/scenes/Scene.ts:191](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L191)*



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



*Defined in [_classes/lib/scenes/Scene.ts:266](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L266)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| alarm | `any`   |  - |





**Returns:** `void`





___

<a id="clearallalarms"></a>

###  clearAllAlarms

► **clearAllAlarms**(): `void`



*Defined in [_classes/lib/scenes/Scene.ts:253](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L253)*





**Returns:** `void`





___

<a id="createactor"></a>

###  createActor

► **createActor**(obj: *`any`*): [Actor](__classes_lib_scenes_actors_actor_.actor.md)



*Defined in [_classes/lib/scenes/Scene.ts:153](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L153)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  - |





**Returns:** [Actor](__classes_lib_scenes_actors_actor_.actor.md)





___

<a id="enter"></a>

###  enter

► **enter**(): `void`



*Defined in [_classes/lib/scenes/Scene.ts:58](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L58)*





**Returns:** `void`





___

<a id="exit"></a>

###  exit

► **exit**(): `void`



*Defined in [_classes/lib/scenes/Scene.ts:60](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L60)*





**Returns:** `void`





___

<a id="getspritebygid"></a>

###  getSpriteByGid

► **getSpriteByGid**(gid: *`number`*): [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)



*Defined in [_classes/lib/scenes/Scene.ts:230](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L230)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gid | `number`   |  - |





**Returns:** [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)





___

<a id="getspritebyname"></a>

###  getSpriteByName

► **getSpriteByName**(name: *`string`*): [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)



*Defined in [_classes/lib/scenes/Scene.ts:236](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L236)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |





**Returns:** [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)





___

<a id="loadmap"></a>

###  loadMap

► **loadMap**(): `void`



*Defined in [_classes/lib/scenes/Scene.ts:63](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L63)*





**Returns:** `void`





___

<a id="mousedown"></a>

###  mouseDown

► **mouseDown**(x: *`number`*, y: *`number`*): `void`



*Defined in [_classes/lib/scenes/Scene.ts:273](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L273)*



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



*Defined in [_classes/lib/scenes/Scene.ts:286](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L286)*



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



*Defined in [_classes/lib/scenes/Scene.ts:290](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L290)*



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



*Defined in [_classes/lib/scenes/Scene.ts:240](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L240)*



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



*Defined in [_classes/lib/scenes/Scene.ts:177](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L177)*



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



*Defined in [_classes/lib/scenes/Scene.ts:115](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L115)*





**Returns:** `undefined`⎮`false`





___

<a id="reset"></a>

###  reset

► **reset**(): `void`



*Defined in [_classes/lib/scenes/Scene.ts:42](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L42)*





**Returns:** `void`





___

<a id="setalarm"></a>

###  setAlarm

► **setAlarm**(frames: *`number`*, cb: *`Function`*): `object`



*Defined in [_classes/lib/scenes/Scene.ts:257](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L257)*



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



*Defined in [_classes/lib/scenes/Scene.ts:86](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/Scene.ts#L86)*





**Returns:** `void`





___


