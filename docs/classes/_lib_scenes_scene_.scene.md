[cost_of_creation](../README.md) > ["lib/scenes/Scene"](../modules/_lib_scenes_scene_.md) > [Scene](../classes/_lib_scenes_scene_.scene.md)

# Class: Scene

Scene class

*__date__*: 07-mar-2018

## Hierarchy

**Scene**

↳  [PaintingScene](_scenes_paintingscene_.paintingscene.md)

## Index

### Constructors

* [constructor](_lib_scenes_scene_.scene.md#constructor)

### Properties

* [actorTypes](_lib_scenes_scene_.scene.md#actortypes)
* [actors](_lib_scenes_scene_.scene.md#actors)
* [actorsByName](_lib_scenes_scene_.scene.md#actorsbyname)
* [actorsByType](_lib_scenes_scene_.scene.md#actorsbytype)
* [backgroundColor](_lib_scenes_scene_.scene.md#backgroundcolor)
* [boundCamera](_lib_scenes_scene_.scene.md#boundcamera)
* [camera](_lib_scenes_scene_.scene.md#camera)
* [cameraRotation](_lib_scenes_scene_.scene.md#camerarotation)
* [game](_lib_scenes_scene_.scene.md#game)
* [gravity](_lib_scenes_scene_.scene.md#gravity)
* [mapData](_lib_scenes_scene_.scene.md#mapdata)
* [mapUrl](_lib_scenes_scene_.scene.md#mapurl)
* [mouse](_lib_scenes_scene_.scene.md#mouse)
* [mouseJustPressed](_lib_scenes_scene_.scene.md#mousejustpressed)
* [mousePressed](_lib_scenes_scene_.scene.md#mousepressed)
* [size](_lib_scenes_scene_.scene.md#size)
* [spritesByFirstGid](_lib_scenes_scene_.scene.md#spritesbyfirstgid)
* [spritesByName](_lib_scenes_scene_.scene.md#spritesbyname)

### Methods

* [addActor](_lib_scenes_scene_.scene.md#addactor)
* [addSprite](_lib_scenes_scene_.scene.md#addsprite)
* [bringActorToBack](_lib_scenes_scene_.scene.md#bringactortoback)
* [bringActorToFront](_lib_scenes_scene_.scene.md#bringactortofront)
* [clearAlarm](_lib_scenes_scene_.scene.md#clearalarm)
* [clearAllAlarms](_lib_scenes_scene_.scene.md#clearallalarms)
* [createActor](_lib_scenes_scene_.scene.md#createactor)
* [enter](_lib_scenes_scene_.scene.md#enter)
* [exit](_lib_scenes_scene_.scene.md#exit)
* [getSpriteByGid](_lib_scenes_scene_.scene.md#getspritebygid)
* [getSpriteByName](_lib_scenes_scene_.scene.md#getspritebyname)
* [loadMap](_lib_scenes_scene_.scene.md#loadmap)
* [mouseDown](_lib_scenes_scene_.scene.md#mousedown)
* [mouseMove](_lib_scenes_scene_.scene.md#mousemove)
* [mouseUp](_lib_scenes_scene_.scene.md#mouseup)
* [onOverlap](_lib_scenes_scene_.scene.md#onoverlap)
* [removeActor](_lib_scenes_scene_.scene.md#removeactor)
* [render](_lib_scenes_scene_.scene.md#render)
* [reset](_lib_scenes_scene_.scene.md#reset)
* [setAlarm](_lib_scenes_scene_.scene.md#setalarm)
* [update](_lib_scenes_scene_.scene.md#update)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Scene**(game: *[Game](_lib_game_.game.md)*, mapUrl?: *`string`*): [Scene](_lib_scenes_scene_.scene.md)

*Defined in [lib/scenes/Scene.ts:36](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| game | [Game](_lib_game_.game.md) |
| `Optional` mapUrl | `string` |

**Returns:** [Scene](_lib_scenes_scene_.scene.md)

___

## Properties

<a id="actortypes"></a>

###  actorTypes

**● actorTypes**: *`object`*

*Defined in [lib/scenes/Scene.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L21)*

#### Type declaration

[index: `string`]: [Actor](_lib_scenes_actors_actor_.actor.md)

___
<a id="actors"></a>

###  actors

**● actors**: *[Actor](_lib_scenes_actors_actor_.actor.md)[]* =  []

*Defined in [lib/scenes/Scene.ts:22](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L22)*

___
<a id="actorsbyname"></a>

###  actorsByName

**● actorsByName**: *`object`*

*Defined in [lib/scenes/Scene.ts:24](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L24)*

#### Type declaration

[index: `string`]: [Actor](_lib_scenes_actors_actor_.actor.md)

___
<a id="actorsbytype"></a>

###  actorsByType

**● actorsByType**: *`object`*

*Defined in [lib/scenes/Scene.ts:23](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L23)*

#### Type declaration

[index: `string`]: [Actor](_lib_scenes_actors_actor_.actor.md)[]

___
<a id="backgroundcolor"></a>

###  backgroundColor

**● backgroundColor**: *`string`* = ""

*Defined in [lib/scenes/Scene.ts:36](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L36)*

___
<a id="boundcamera"></a>

###  boundCamera

**● boundCamera**: *`boolean`* = true

*Defined in [lib/scenes/Scene.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L31)*

___
<a id="camera"></a>

###  camera

**● camera**: *[Vector2](_lib_utils_vector2_.vector2.md)* =  new Vector2()

*Defined in [lib/scenes/Scene.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L29)*

___
<a id="camerarotation"></a>

###  cameraRotation

**● cameraRotation**: *[Angle](_lib_utils_angle_.angle.md)* =  new Angle()

*Defined in [lib/scenes/Scene.ts:30](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L30)*

___
<a id="game"></a>

###  game

**● game**: *[Game](_lib_game_.game.md)*

*Defined in [lib/scenes/Scene.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L38)*

___
<a id="gravity"></a>

###  gravity

**● gravity**: *[Vector2](_lib_utils_vector2_.vector2.md)* =  new Vector2()

*Defined in [lib/scenes/Scene.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L28)*

___
<a id="mapdata"></a>

###  mapData

**● mapData**: *`any`*

*Defined in [lib/scenes/Scene.ts:35](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L35)*

___
<a id="mapurl"></a>

### `<Optional>` mapUrl

**● mapUrl**: *`string`*

*Defined in [lib/scenes/Scene.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L38)*

___
<a id="mouse"></a>

###  mouse

**● mouse**: *[Vector2](_lib_utils_vector2_.vector2.md)* =  new Vector2()

*Defined in [lib/scenes/Scene.ts:32](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L32)*

___
<a id="mousejustpressed"></a>

###  mouseJustPressed

**● mouseJustPressed**: *`number`* = 0

*Defined in [lib/scenes/Scene.ts:34](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L34)*

___
<a id="mousepressed"></a>

###  mousePressed

**● mousePressed**: *`boolean`* = false

*Defined in [lib/scenes/Scene.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L33)*

___
<a id="size"></a>

###  size

**● size**: *[Vector2](_lib_utils_vector2_.vector2.md)* =  new Vector2()

*Defined in [lib/scenes/Scene.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L27)*

___
<a id="spritesbyfirstgid"></a>

###  spritesByFirstGid

**● spritesByFirstGid**: *[Sprite](_lib_scenes_actors_sprite_.sprite.md)[]* =  []

*Defined in [lib/scenes/Scene.ts:25](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L25)*

___
<a id="spritesbyname"></a>

###  spritesByName

**● spritesByName**: *`object`*

*Defined in [lib/scenes/Scene.ts:26](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L26)*

#### Type declaration

[index: `string`]: [Sprite](_lib_scenes_actors_sprite_.sprite.md)

___

## Methods

<a id="addactor"></a>

###  addActor

▸ **addActor**(actor: *[Actor](_lib_scenes_actors_actor_.actor.md)*, ...toGroup: *`Array`<[Actor](_lib_scenes_actors_actor_.actor.md)>[]*): [Actor](_lib_scenes_actors_actor_.actor.md)

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

*Defined in [lib/scenes/Scene.ts:219](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L219)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| sprite | [Sprite](_lib_scenes_actors_sprite_.sprite.md) |

**Returns:** `void`

___
<a id="bringactortoback"></a>

###  bringActorToBack

▸ **bringActorToBack**(actor: *[Actor](_lib_scenes_actors_actor_.actor.md)*, ...fromGroup: *`Array`<[Actor](_lib_scenes_actors_actor_.actor.md)>[]*): `void`

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

*Defined in [lib/scenes/Scene.ts:253](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L253)*

**Returns:** `void`

___
<a id="createactor"></a>

###  createActor

▸ **createActor**(obj: *`any`*): [Actor](_lib_scenes_actors_actor_.actor.md)

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

*Defined in [lib/scenes/Scene.ts:58](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L58)*

**Returns:** `void`

___
<a id="exit"></a>

###  exit

▸ **exit**(): `void`

*Defined in [lib/scenes/Scene.ts:60](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L60)*

**Returns:** `void`

___
<a id="getspritebygid"></a>

###  getSpriteByGid

▸ **getSpriteByGid**(gid: *`number`*): [Sprite](_lib_scenes_actors_sprite_.sprite.md)

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

*Defined in [lib/scenes/Scene.ts:63](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L63)*

**Returns:** `void`

___
<a id="mousedown"></a>

###  mouseDown

▸ **mouseDown**(x: *`number`*, y: *`number`*): `void`

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

*Defined in [lib/scenes/Scene.ts:286](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L286)*

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

*Defined in [lib/scenes/Scene.ts:115](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L115)*

**Returns:** `boolean`

___
<a id="reset"></a>

###  reset

▸ **reset**(): `void`

*Defined in [lib/scenes/Scene.ts:42](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L42)*

**Returns:** `void`

___
<a id="setalarm"></a>

###  setAlarm

▸ **setAlarm**(frames: *`number`*, cb: *`Function`*): `object`

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

*Defined in [lib/scenes/Scene.ts:86](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/Scene.ts#L86)*

**Returns:** `void`

___

