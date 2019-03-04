[cost_of_creation](../README.md) > ["scenes/PaintingScene"](../modules/_scenes_paintingscene_.md) > [PaintingScene](../classes/_scenes_paintingscene_.paintingscene.md)

# Class: PaintingScene

PaintingScene class

## Hierarchy

 [Scene](_lib_scenes_scene_.scene.md)

**↳ PaintingScene**

## Index

### Constructors

* [constructor](_scenes_paintingscene_.paintingscene.md#constructor)

### Properties

* [actorTypes](_scenes_paintingscene_.paintingscene.md#actortypes)
* [actors](_scenes_paintingscene_.paintingscene.md#actors)
* [actorsByName](_scenes_paintingscene_.paintingscene.md#actorsbyname)
* [actorsByType](_scenes_paintingscene_.paintingscene.md#actorsbytype)
* [backgroundColor](_scenes_paintingscene_.paintingscene.md#backgroundcolor)
* [boundCamera](_scenes_paintingscene_.paintingscene.md#boundcamera)
* [camera](_scenes_paintingscene_.paintingscene.md#camera)
* [cameraRotation](_scenes_paintingscene_.paintingscene.md#camerarotation)
* [collab](_scenes_paintingscene_.paintingscene.md#collab)
* [game](_scenes_paintingscene_.paintingscene.md#game)
* [gravity](_scenes_paintingscene_.paintingscene.md#gravity)
* [mapData](_scenes_paintingscene_.paintingscene.md#mapdata)
* [mapUrl](_scenes_paintingscene_.paintingscene.md#mapurl)
* [mouse](_scenes_paintingscene_.paintingscene.md#mouse)
* [mouseJustPressed](_scenes_paintingscene_.paintingscene.md#mousejustpressed)
* [mousePressed](_scenes_paintingscene_.paintingscene.md#mousepressed)
* [size](_scenes_paintingscene_.paintingscene.md#size)
* [spritesByFirstGid](_scenes_paintingscene_.paintingscene.md#spritesbyfirstgid)
* [spritesByName](_scenes_paintingscene_.paintingscene.md#spritesbyname)

### Methods

* [addActor](_scenes_paintingscene_.paintingscene.md#addactor)
* [addSprite](_scenes_paintingscene_.paintingscene.md#addsprite)
* [applyPatch](_scenes_paintingscene_.paintingscene.md#applypatch)
* [bringActorToBack](_scenes_paintingscene_.paintingscene.md#bringactortoback)
* [bringActorToFront](_scenes_paintingscene_.paintingscene.md#bringactortofront)
* [clearAlarm](_scenes_paintingscene_.paintingscene.md#clearalarm)
* [clearAllAlarms](_scenes_paintingscene_.paintingscene.md#clearallalarms)
* [createActor](_scenes_paintingscene_.paintingscene.md#createactor)
* [enter](_scenes_paintingscene_.paintingscene.md#enter)
* [exit](_scenes_paintingscene_.paintingscene.md#exit)
* [getSpriteByGid](_scenes_paintingscene_.paintingscene.md#getspritebygid)
* [getSpriteByName](_scenes_paintingscene_.paintingscene.md#getspritebyname)
* [loadMap](_scenes_paintingscene_.paintingscene.md#loadmap)
* [mouseDown](_scenes_paintingscene_.paintingscene.md#mousedown)
* [mouseMove](_scenes_paintingscene_.paintingscene.md#mousemove)
* [mouseUp](_scenes_paintingscene_.paintingscene.md#mouseup)
* [onOverlap](_scenes_paintingscene_.paintingscene.md#onoverlap)
* [removeActor](_scenes_paintingscene_.paintingscene.md#removeactor)
* [render](_scenes_paintingscene_.paintingscene.md#render)
* [reset](_scenes_paintingscene_.paintingscene.md#reset)
* [sendPatch](_scenes_paintingscene_.paintingscene.md#sendpatch)
* [setAlarm](_scenes_paintingscene_.paintingscene.md#setalarm)
* [update](_scenes_paintingscene_.paintingscene.md#update)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PaintingScene**(game: *[MyGame](_mygame_.mygame.md)*, map: *`string`*): [PaintingScene](_scenes_paintingscene_.paintingscene.md)

*Overrides [Scene](_lib_scenes_scene_.scene.md).[constructor](_lib_scenes_scene_.scene.md#constructor)*

*Defined in [scenes/PaintingScene.ts:19](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/PaintingScene.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| game | [MyGame](_mygame_.mygame.md) |
| map | `string` |

**Returns:** [PaintingScene](_scenes_paintingscene_.paintingscene.md)

___

## Properties

<a id="actortypes"></a>

###  actorTypes

**● actorTypes**: *`object`*

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[actorTypes](_lib_scenes_scene_.scene.md#actortypes)*

*Defined in [lib/scenes/Scene.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L21)*

#### Type declaration

[index: `string`]: [Actor](_lib_scenes_actors_actor_.actor.md)

___
<a id="actors"></a>

###  actors

**● actors**: *[Actor](_lib_scenes_actors_actor_.actor.md)[]* =  []

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[actors](_lib_scenes_scene_.scene.md#actors)*

*Defined in [lib/scenes/Scene.ts:22](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L22)*

___
<a id="actorsbyname"></a>

###  actorsByName

**● actorsByName**: *`object`*

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[actorsByName](_lib_scenes_scene_.scene.md#actorsbyname)*

*Defined in [lib/scenes/Scene.ts:24](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L24)*

#### Type declaration

[index: `string`]: [Actor](_lib_scenes_actors_actor_.actor.md)

___
<a id="actorsbytype"></a>

###  actorsByType

**● actorsByType**: *`object`*

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[actorsByType](_lib_scenes_scene_.scene.md#actorsbytype)*

*Defined in [lib/scenes/Scene.ts:23](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L23)*

#### Type declaration

[index: `string`]: [Actor](_lib_scenes_actors_actor_.actor.md)[]

___
<a id="backgroundcolor"></a>

###  backgroundColor

**● backgroundColor**: *`string`* = ""

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[backgroundColor](_lib_scenes_scene_.scene.md#backgroundcolor)*

*Defined in [lib/scenes/Scene.ts:36](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L36)*

___
<a id="boundcamera"></a>

###  boundCamera

**● boundCamera**: *`boolean`* = true

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[boundCamera](_lib_scenes_scene_.scene.md#boundcamera)*

*Defined in [lib/scenes/Scene.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L31)*

___
<a id="camera"></a>

###  camera

**● camera**: *[Vector2](_lib_utils_vector2_.vector2.md)* =  new Vector2()

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[camera](_lib_scenes_scene_.scene.md#camera)*

*Defined in [lib/scenes/Scene.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L29)*

___
<a id="camerarotation"></a>

###  cameraRotation

**● cameraRotation**: *[Angle](_lib_utils_angle_.angle.md)* =  new Angle()

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[cameraRotation](_lib_scenes_scene_.scene.md#camerarotation)*

*Defined in [lib/scenes/Scene.ts:30](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L30)*

___
<a id="collab"></a>

###  collab

**● collab**: *[Collab](_lib_utils_collab_.collab.md)*

*Defined in [scenes/PaintingScene.ts:19](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/PaintingScene.ts#L19)*

___
<a id="game"></a>

###  game

**● game**: *[MyGame](_mygame_.mygame.md)*

*Overrides [Scene](_lib_scenes_scene_.scene.md).[game](_lib_scenes_scene_.scene.md#game)*

*Defined in [scenes/PaintingScene.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/PaintingScene.ts#L21)*

___
<a id="gravity"></a>

###  gravity

**● gravity**: *[Vector2](_lib_utils_vector2_.vector2.md)* =  new Vector2()

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[gravity](_lib_scenes_scene_.scene.md#gravity)*

*Defined in [lib/scenes/Scene.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L28)*

___
<a id="mapdata"></a>

###  mapData

**● mapData**: *`any`*

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[mapData](_lib_scenes_scene_.scene.md#mapdata)*

*Defined in [lib/scenes/Scene.ts:35](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L35)*

___
<a id="mapurl"></a>

### `<Optional>` mapUrl

**● mapUrl**: *`string`*

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[mapUrl](_lib_scenes_scene_.scene.md#mapurl)*

*Defined in [lib/scenes/Scene.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L38)*

___
<a id="mouse"></a>

###  mouse

**● mouse**: *[Vector2](_lib_utils_vector2_.vector2.md)* =  new Vector2()

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[mouse](_lib_scenes_scene_.scene.md#mouse)*

*Defined in [lib/scenes/Scene.ts:32](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L32)*

___
<a id="mousejustpressed"></a>

###  mouseJustPressed

**● mouseJustPressed**: *`number`* = 0

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[mouseJustPressed](_lib_scenes_scene_.scene.md#mousejustpressed)*

*Defined in [lib/scenes/Scene.ts:34](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L34)*

___
<a id="mousepressed"></a>

###  mousePressed

**● mousePressed**: *`boolean`* = false

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[mousePressed](_lib_scenes_scene_.scene.md#mousepressed)*

*Defined in [lib/scenes/Scene.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L33)*

___
<a id="size"></a>

###  size

**● size**: *[Vector2](_lib_utils_vector2_.vector2.md)* =  new Vector2()

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[size](_lib_scenes_scene_.scene.md#size)*

*Defined in [lib/scenes/Scene.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L27)*

___
<a id="spritesbyfirstgid"></a>

###  spritesByFirstGid

**● spritesByFirstGid**: *[Sprite](_lib_scenes_actors_sprite_.sprite.md)[]* =  []

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[spritesByFirstGid](_lib_scenes_scene_.scene.md#spritesbyfirstgid)*

*Defined in [lib/scenes/Scene.ts:25](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L25)*

___
<a id="spritesbyname"></a>

###  spritesByName

**● spritesByName**: *`object`*

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[spritesByName](_lib_scenes_scene_.scene.md#spritesbyname)*

*Defined in [lib/scenes/Scene.ts:26](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L26)*

#### Type declaration

[index: `string`]: [Sprite](_lib_scenes_actors_sprite_.sprite.md)

___

## Methods

<a id="addactor"></a>

###  addActor

▸ **addActor**(actor: *[Actor](_lib_scenes_actors_actor_.actor.md)*, ...toGroup: *`Array`<[Actor](_lib_scenes_actors_actor_.actor.md)>[]*): [Actor](_lib_scenes_actors_actor_.actor.md)

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[addActor](_lib_scenes_scene_.scene.md#addactor)*

*Defined in [lib/scenes/Scene.ts:163](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L163)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| actor | [Actor](_lib_scenes_actors_actor_.actor.md) |
| `Rest` toGroup | `Array`<[Actor](_lib_scenes_actors_actor_.actor.md)>[] |

**Returns:** [Actor](_lib_scenes_actors_actor_.actor.md)

___
<a id="addsprite"></a>

###  addSprite

▸ **addSprite**(sprite: *[Sprite](_lib_scenes_actors_sprite_.sprite.md)*): `void`

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[addSprite](_lib_scenes_scene_.scene.md#addsprite)*

*Defined in [lib/scenes/Scene.ts:219](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L219)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sprite | [Sprite](_lib_scenes_actors_sprite_.sprite.md) |

**Returns:** `void`

___
<a id="applypatch"></a>

###  applyPatch

▸ **applyPatch**(patch: *`any`*): `void`

*Defined in [scenes/PaintingScene.ts:63](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/PaintingScene.ts#L63)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| patch | `any` |

**Returns:** `void`

___
<a id="bringactortoback"></a>

###  bringActorToBack

▸ **bringActorToBack**(actor: *[Actor](_lib_scenes_actors_actor_.actor.md)*, ...fromGroup: *`Array`<[Actor](_lib_scenes_actors_actor_.actor.md)>[]*): `void`

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[bringActorToBack](_lib_scenes_scene_.scene.md#bringactortoback)*

*Defined in [lib/scenes/Scene.ts:205](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L205)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| actor | [Actor](_lib_scenes_actors_actor_.actor.md) |
| `Rest` fromGroup | `Array`<[Actor](_lib_scenes_actors_actor_.actor.md)>[] |

**Returns:** `void`

___
<a id="bringactortofront"></a>

###  bringActorToFront

▸ **bringActorToFront**(actor: *[Actor](_lib_scenes_actors_actor_.actor.md)*, ...fromGroup: *`Array`<[Actor](_lib_scenes_actors_actor_.actor.md)>[]*): `void`

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[bringActorToFront](_lib_scenes_scene_.scene.md#bringactortofront)*

*Defined in [lib/scenes/Scene.ts:191](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L191)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| actor | [Actor](_lib_scenes_actors_actor_.actor.md) |
| `Rest` fromGroup | `Array`<[Actor](_lib_scenes_actors_actor_.actor.md)>[] |

**Returns:** `void`

___
<a id="clearalarm"></a>

###  clearAlarm

▸ **clearAlarm**(alarm: *`any`*): `void`

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[clearAlarm](_lib_scenes_scene_.scene.md#clearalarm)*

*Defined in [lib/scenes/Scene.ts:266](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L266)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| alarm | `any` |

**Returns:** `void`

___
<a id="clearallalarms"></a>

###  clearAllAlarms

▸ **clearAllAlarms**(): `void`

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[clearAllAlarms](_lib_scenes_scene_.scene.md#clearallalarms)*

*Defined in [lib/scenes/Scene.ts:253](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L253)*

**Returns:** `void`

___
<a id="createactor"></a>

###  createActor

▸ **createActor**(obj: *`any`*): [Actor](_lib_scenes_actors_actor_.actor.md)

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[createActor](_lib_scenes_scene_.scene.md#createactor)*

*Defined in [lib/scenes/Scene.ts:153](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L153)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| obj | `any` |

**Returns:** [Actor](_lib_scenes_actors_actor_.actor.md)

___
<a id="enter"></a>

###  enter

▸ **enter**(): `void`

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[enter](_lib_scenes_scene_.scene.md#enter)*

*Defined in [lib/scenes/Scene.ts:58](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L58)*

**Returns:** `void`

___
<a id="exit"></a>

###  exit

▸ **exit**(): `void`

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[exit](_lib_scenes_scene_.scene.md#exit)*

*Defined in [lib/scenes/Scene.ts:60](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L60)*

**Returns:** `void`

___
<a id="getspritebygid"></a>

###  getSpriteByGid

▸ **getSpriteByGid**(gid: *`number`*): [Sprite](_lib_scenes_actors_sprite_.sprite.md)

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[getSpriteByGid](_lib_scenes_scene_.scene.md#getspritebygid)*

*Defined in [lib/scenes/Scene.ts:230](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L230)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| gid | `number` |

**Returns:** [Sprite](_lib_scenes_actors_sprite_.sprite.md)

___
<a id="getspritebyname"></a>

###  getSpriteByName

▸ **getSpriteByName**(name: *`string`*): [Sprite](_lib_scenes_actors_sprite_.sprite.md)

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[getSpriteByName](_lib_scenes_scene_.scene.md#getspritebyname)*

*Defined in [lib/scenes/Scene.ts:236](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L236)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [Sprite](_lib_scenes_actors_sprite_.sprite.md)

___
<a id="loadmap"></a>

###  loadMap

▸ **loadMap**(): `void`

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[loadMap](_lib_scenes_scene_.scene.md#loadmap)*

*Defined in [lib/scenes/Scene.ts:63](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L63)*

**Returns:** `void`

___
<a id="mousedown"></a>

###  mouseDown

▸ **mouseDown**(x: *`number`*, y: *`number`*): `void`

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[mouseDown](_lib_scenes_scene_.scene.md#mousedown)*

*Defined in [lib/scenes/Scene.ts:273](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L273)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `void`

___
<a id="mousemove"></a>

###  mouseMove

▸ **mouseMove**(x: *`number`*, y: *`number`*): `void`

*Overrides [Scene](_lib_scenes_scene_.scene.md).[mouseMove](_lib_scenes_scene_.scene.md#mousemove)*

*Defined in [scenes/PaintingScene.ts:56](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/PaintingScene.ts#L56)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `void`

___
<a id="mouseup"></a>

###  mouseUp

▸ **mouseUp**(x: *`number`*, y: *`number`*): `void`

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[mouseUp](_lib_scenes_scene_.scene.md#mouseup)*

*Defined in [lib/scenes/Scene.ts:290](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L290)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `void`

___
<a id="onoverlap"></a>

###  onOverlap

▸ **onOverlap**(a: *[Actor](_lib_scenes_actors_actor_.actor.md) \| `Array`<[Actor](_lib_scenes_actors_actor_.actor.md)>*, b: *[Actor](_lib_scenes_actors_actor_.actor.md) \| `Array`<[Actor](_lib_scenes_actors_actor_.actor.md)>*, resolver: *`Function`*, context?: *`Object`*): `void`

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[onOverlap](_lib_scenes_scene_.scene.md#onoverlap)*

*Defined in [lib/scenes/Scene.ts:240](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L240)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| a | [Actor](_lib_scenes_actors_actor_.actor.md) \| `Array`<[Actor](_lib_scenes_actors_actor_.actor.md)> | - |
| b | [Actor](_lib_scenes_actors_actor_.actor.md) \| `Array`<[Actor](_lib_scenes_actors_actor_.actor.md)> | - |
| resolver | `Function` | - |
| `Default value` context | `Object` |  this |

**Returns:** `void`

___
<a id="removeactor"></a>

###  removeActor

▸ **removeActor**(actor: *[Actor](_lib_scenes_actors_actor_.actor.md)*, ...fromGroup: *`Array`<[Actor](_lib_scenes_actors_actor_.actor.md) \| `null`>[]*): [Actor](_lib_scenes_actors_actor_.actor.md)

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[removeActor](_lib_scenes_scene_.scene.md#removeactor)*

*Defined in [lib/scenes/Scene.ts:177](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L177)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| actor | [Actor](_lib_scenes_actors_actor_.actor.md) |
| `Rest` fromGroup | `Array`<[Actor](_lib_scenes_actors_actor_.actor.md) \| `null`>[] |

**Returns:** [Actor](_lib_scenes_actors_actor_.actor.md)

___
<a id="render"></a>

###  render

▸ **render**(): `boolean`

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[render](_lib_scenes_scene_.scene.md#render)*

*Defined in [lib/scenes/Scene.ts:115](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L115)*

**Returns:** `boolean`

___
<a id="reset"></a>

###  reset

▸ **reset**(): `void`

*Overrides [Scene](_lib_scenes_scene_.scene.md).[reset](_lib_scenes_scene_.scene.md#reset)*

*Defined in [scenes/PaintingScene.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/PaintingScene.ts#L33)*

**Returns:** `void`

___
<a id="sendpatch"></a>

###  sendPatch

▸ **sendPatch**(patch: *`any`*): `void`

*Defined in [scenes/PaintingScene.ts:111](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/PaintingScene.ts#L111)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| patch | `any` |

**Returns:** `void`

___
<a id="setalarm"></a>

###  setAlarm

▸ **setAlarm**(frames: *`number`*, cb: *`Function`*): `object`

*Inherited from [Scene](_lib_scenes_scene_.scene.md).[setAlarm](_lib_scenes_scene_.scene.md#setalarm)*

*Defined in [lib/scenes/Scene.ts:257](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L257)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| frames | `number` |
| cb | `Function` |

**Returns:** `object`

___
<a id="update"></a>

###  update

▸ **update**(): `void`

*Overrides [Scene](_lib_scenes_scene_.scene.md).[update](_lib_scenes_scene_.scene.md#update)*

*Defined in [scenes/PaintingScene.ts:40](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/PaintingScene.ts#L40)*

**Returns:** `void`

___

