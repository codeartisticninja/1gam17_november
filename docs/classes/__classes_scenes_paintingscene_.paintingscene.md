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


*Overrides [Scene](__classes_lib_scenes_scene_.scene.md).[constructor](__classes_lib_scenes_scene_.scene.md#constructor)*

*Defined in [_classes/scenes/PaintingScene.ts:19](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/scenes/PaintingScene.ts#L19)*



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

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[actorTypes](__classes_lib_scenes_scene_.scene.md#actortypes)*

*Defined in [_classes/lib/scenes/Scene.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L21)*


#### Type declaration


[index: `string`]: [Actor](__classes_lib_scenes_actors_actor_.actor.md)






___

<a id="actors"></a>

###  actors

**●  actors**:  *[Actor](__classes_lib_scenes_actors_actor_.actor.md)[]*  =  []

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[actors](__classes_lib_scenes_scene_.scene.md#actors)*

*Defined in [_classes/lib/scenes/Scene.ts:22](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L22)*





___

<a id="actorsbyname"></a>

###  actorsByName

**●  actorsByName**:  *`object`* 

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[actorsByName](__classes_lib_scenes_scene_.scene.md#actorsbyname)*

*Defined in [_classes/lib/scenes/Scene.ts:24](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L24)*


#### Type declaration


[index: `string`]: [Actor](__classes_lib_scenes_actors_actor_.actor.md)






___

<a id="actorsbytype"></a>

###  actorsByType

**●  actorsByType**:  *`object`* 

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[actorsByType](__classes_lib_scenes_scene_.scene.md#actorsbytype)*

*Defined in [_classes/lib/scenes/Scene.ts:23](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L23)*


#### Type declaration


[index: `string`]: [Actor](__classes_lib_scenes_actors_actor_.actor.md)[]






___

<a id="backgroundcolor"></a>

###  backgroundColor

**●  backgroundColor**:  *`string`*  = ""

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[backgroundColor](__classes_lib_scenes_scene_.scene.md#backgroundcolor)*

*Defined in [_classes/lib/scenes/Scene.ts:36](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L36)*





___

<a id="boundcamera"></a>

###  boundCamera

**●  boundCamera**:  *`boolean`*  = true

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[boundCamera](__classes_lib_scenes_scene_.scene.md#boundcamera)*

*Defined in [_classes/lib/scenes/Scene.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L31)*





___

<a id="camera"></a>

###  camera

**●  camera**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[camera](__classes_lib_scenes_scene_.scene.md#camera)*

*Defined in [_classes/lib/scenes/Scene.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L29)*





___

<a id="camerarotation"></a>

###  cameraRotation

**●  cameraRotation**:  *[Angle](__classes_lib_utils_angle_.angle.md)*  =  new Angle()

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[cameraRotation](__classes_lib_scenes_scene_.scene.md#camerarotation)*

*Defined in [_classes/lib/scenes/Scene.ts:30](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L30)*





___

<a id="collab"></a>

###  collab

**●  collab**:  *[Collab](__classes_lib_utils_collab_.collab.md)* 

*Defined in [_classes/scenes/PaintingScene.ts:19](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/scenes/PaintingScene.ts#L19)*





___

<a id="game"></a>

###  game

**●  game**:  *[MyGame](__classes_mygame_.mygame.md)* 

*Overrides [Scene](__classes_lib_scenes_scene_.scene.md).[game](__classes_lib_scenes_scene_.scene.md#game)*

*Defined in [_classes/scenes/PaintingScene.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/scenes/PaintingScene.ts#L21)*





___

<a id="gravity"></a>

###  gravity

**●  gravity**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[gravity](__classes_lib_scenes_scene_.scene.md#gravity)*

*Defined in [_classes/lib/scenes/Scene.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L28)*





___

<a id="mapdata"></a>

###  mapData

**●  mapData**:  *`any`* 

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[mapData](__classes_lib_scenes_scene_.scene.md#mapdata)*

*Defined in [_classes/lib/scenes/Scene.ts:35](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L35)*





___

<a id="mapurl"></a>

### «Optional» mapUrl

**●  mapUrl**:  *`undefined`⎮`string`* 

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[mapUrl](__classes_lib_scenes_scene_.scene.md#mapurl)*

*Defined in [_classes/lib/scenes/Scene.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L38)*





___

<a id="mouse"></a>

###  mouse

**●  mouse**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[mouse](__classes_lib_scenes_scene_.scene.md#mouse)*

*Defined in [_classes/lib/scenes/Scene.ts:32](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L32)*





___

<a id="mousejustpressed"></a>

###  mouseJustPressed

**●  mouseJustPressed**:  *`number`*  = 0

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[mouseJustPressed](__classes_lib_scenes_scene_.scene.md#mousejustpressed)*

*Defined in [_classes/lib/scenes/Scene.ts:34](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L34)*





___

<a id="mousepressed"></a>

###  mousePressed

**●  mousePressed**:  *`boolean`*  = false

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[mousePressed](__classes_lib_scenes_scene_.scene.md#mousepressed)*

*Defined in [_classes/lib/scenes/Scene.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L33)*





___

<a id="size"></a>

###  size

**●  size**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[size](__classes_lib_scenes_scene_.scene.md#size)*

*Defined in [_classes/lib/scenes/Scene.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L27)*





___

<a id="spritesbyfirstgid"></a>

###  spritesByFirstGid

**●  spritesByFirstGid**:  *[Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)[]*  =  []

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[spritesByFirstGid](__classes_lib_scenes_scene_.scene.md#spritesbyfirstgid)*

*Defined in [_classes/lib/scenes/Scene.ts:25](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L25)*





___

<a id="spritesbyname"></a>

###  spritesByName

**●  spritesByName**:  *`object`* 

*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[spritesByName](__classes_lib_scenes_scene_.scene.md#spritesbyname)*

*Defined in [_classes/lib/scenes/Scene.ts:26](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L26)*


#### Type declaration


[index: `string`]: [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)






___


## Methods
<a id="addactor"></a>

###  addActor

► **addActor**(actor: *[Actor](__classes_lib_scenes_actors_actor_.actor.md)*, ...toGroup: *`Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)>[]*): [Actor](__classes_lib_scenes_actors_actor_.actor.md)



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[addActor](__classes_lib_scenes_scene_.scene.md#addactor)*

*Defined in [_classes/lib/scenes/Scene.ts:163](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L163)*



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



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[addSprite](__classes_lib_scenes_scene_.scene.md#addsprite)*

*Defined in [_classes/lib/scenes/Scene.ts:219](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L219)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| sprite | [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)   |  - |





**Returns:** `void`





___

<a id="applypatch"></a>

###  applyPatch

► **applyPatch**(patch: *`any`*): `void`



*Defined in [_classes/scenes/PaintingScene.ts:63](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/scenes/PaintingScene.ts#L63)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| patch | `any`   |  - |





**Returns:** `void`





___

<a id="bringactortoback"></a>

###  bringActorToBack

► **bringActorToBack**(actor: *[Actor](__classes_lib_scenes_actors_actor_.actor.md)*, ...fromGroup: *`Array`.<[Actor](__classes_lib_scenes_actors_actor_.actor.md)>[]*): `void`



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[bringActorToBack](__classes_lib_scenes_scene_.scene.md#bringactortoback)*

*Defined in [_classes/lib/scenes/Scene.ts:205](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L205)*



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



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[bringActorToFront](__classes_lib_scenes_scene_.scene.md#bringactortofront)*

*Defined in [_classes/lib/scenes/Scene.ts:191](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L191)*



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



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[clearAlarm](__classes_lib_scenes_scene_.scene.md#clearalarm)*

*Defined in [_classes/lib/scenes/Scene.ts:266](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L266)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| alarm | `any`   |  - |





**Returns:** `void`





___

<a id="clearallalarms"></a>

###  clearAllAlarms

► **clearAllAlarms**(): `void`



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[clearAllAlarms](__classes_lib_scenes_scene_.scene.md#clearallalarms)*

*Defined in [_classes/lib/scenes/Scene.ts:253](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L253)*





**Returns:** `void`





___

<a id="createactor"></a>

###  createActor

► **createActor**(obj: *`any`*): [Actor](__classes_lib_scenes_actors_actor_.actor.md)



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[createActor](__classes_lib_scenes_scene_.scene.md#createactor)*

*Defined in [_classes/lib/scenes/Scene.ts:153](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L153)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  - |





**Returns:** [Actor](__classes_lib_scenes_actors_actor_.actor.md)





___

<a id="enter"></a>

###  enter

► **enter**(): `void`



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[enter](__classes_lib_scenes_scene_.scene.md#enter)*

*Defined in [_classes/lib/scenes/Scene.ts:58](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L58)*





**Returns:** `void`





___

<a id="exit"></a>

###  exit

► **exit**(): `void`



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[exit](__classes_lib_scenes_scene_.scene.md#exit)*

*Defined in [_classes/lib/scenes/Scene.ts:60](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L60)*





**Returns:** `void`





___

<a id="getspritebygid"></a>

###  getSpriteByGid

► **getSpriteByGid**(gid: *`number`*): [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[getSpriteByGid](__classes_lib_scenes_scene_.scene.md#getspritebygid)*

*Defined in [_classes/lib/scenes/Scene.ts:230](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L230)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| gid | `number`   |  - |





**Returns:** [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)





___

<a id="getspritebyname"></a>

###  getSpriteByName

► **getSpriteByName**(name: *`string`*): [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[getSpriteByName](__classes_lib_scenes_scene_.scene.md#getspritebyname)*

*Defined in [_classes/lib/scenes/Scene.ts:236](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L236)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  - |





**Returns:** [Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)





___

<a id="loadmap"></a>

###  loadMap

► **loadMap**(): `void`



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[loadMap](__classes_lib_scenes_scene_.scene.md#loadmap)*

*Defined in [_classes/lib/scenes/Scene.ts:63](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L63)*





**Returns:** `void`





___

<a id="mousedown"></a>

###  mouseDown

► **mouseDown**(x: *`number`*, y: *`number`*): `void`



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[mouseDown](__classes_lib_scenes_scene_.scene.md#mousedown)*

*Defined in [_classes/lib/scenes/Scene.ts:273](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L273)*



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



*Overrides [Scene](__classes_lib_scenes_scene_.scene.md).[mouseMove](__classes_lib_scenes_scene_.scene.md#mousemove)*

*Defined in [_classes/scenes/PaintingScene.ts:56](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/scenes/PaintingScene.ts#L56)*



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



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[mouseUp](__classes_lib_scenes_scene_.scene.md#mouseup)*

*Defined in [_classes/lib/scenes/Scene.ts:290](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L290)*



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



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[onOverlap](__classes_lib_scenes_scene_.scene.md#onoverlap)*

*Defined in [_classes/lib/scenes/Scene.ts:240](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L240)*



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



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[removeActor](__classes_lib_scenes_scene_.scene.md#removeactor)*

*Defined in [_classes/lib/scenes/Scene.ts:177](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L177)*



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



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[render](__classes_lib_scenes_scene_.scene.md#render)*

*Defined in [_classes/lib/scenes/Scene.ts:115](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L115)*





**Returns:** `undefined`⎮`false`





___

<a id="reset"></a>

###  reset

► **reset**(): `void`



*Overrides [Scene](__classes_lib_scenes_scene_.scene.md).[reset](__classes_lib_scenes_scene_.scene.md#reset)*

*Defined in [_classes/scenes/PaintingScene.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/scenes/PaintingScene.ts#L33)*





**Returns:** `void`





___

<a id="sendpatch"></a>

###  sendPatch

► **sendPatch**(patch: *`any`*): `void`



*Defined in [_classes/scenes/PaintingScene.ts:111](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/scenes/PaintingScene.ts#L111)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| patch | `any`   |  - |





**Returns:** `void`





___

<a id="setalarm"></a>

###  setAlarm

► **setAlarm**(frames: *`number`*, cb: *`Function`*): `object`



*Inherited from [Scene](__classes_lib_scenes_scene_.scene.md).[setAlarm](__classes_lib_scenes_scene_.scene.md#setalarm)*

*Defined in [_classes/lib/scenes/Scene.ts:257](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/Scene.ts#L257)*



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



*Overrides [Scene](__classes_lib_scenes_scene_.scene.md).[update](__classes_lib_scenes_scene_.scene.md#update)*

*Defined in [_classes/scenes/PaintingScene.ts:40](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/scenes/PaintingScene.ts#L40)*





**Returns:** `void`





___


