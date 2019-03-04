[cost_of_creation](../README.md) > ["scenes/actors/Canvas"](../modules/_scenes_actors_canvas_.md) > [Canvas](../classes/_scenes_actors_canvas_.canvas.md)

# Class: Canvas

Canvas class

## Hierarchy

 [Actor](_lib_scenes_actors_actor_.actor.md)

**↳ Canvas**

## Index

### Constructors

* [constructor](_scenes_actors_canvas_.canvas.md#constructor)

### Properties

* [angularFriction](_scenes_actors_canvas_.canvas.md#angularfriction)
* [angularMomentum](_scenes_actors_canvas_.canvas.md#angularmomentum)
* [angularVelocity](_scenes_actors_canvas_.canvas.md#angularvelocity)
* [animation](_scenes_actors_canvas_.canvas.md#animation)
* [animationFrame](_scenes_actors_canvas_.canvas.md#animationframe)
* [animations](_scenes_actors_canvas_.canvas.md#animations)
* [aye](_scenes_actors_canvas_.canvas.md#aye)
* [brushPos](_scenes_actors_canvas_.canvas.md#brushpos)
* [brushSize](_scenes_actors_canvas_.canvas.md#brushsize)
* [canvasCtx](_scenes_actors_canvas_.canvas.md#canvasctx)
* [canvasEl](_scenes_actors_canvas_.canvas.md#canvasel)
* [frame](_scenes_actors_canvas_.canvas.md#frame)
* [friction](_scenes_actors_canvas_.canvas.md#friction)
* [gravity](_scenes_actors_canvas_.canvas.md#gravity)
* [momentum](_scenes_actors_canvas_.canvas.md#momentum)
* [name](_scenes_actors_canvas_.canvas.md#name)
* [nextAnimation](_scenes_actors_canvas_.canvas.md#nextanimation)
* [offset](_scenes_actors_canvas_.canvas.md#offset)
* [opacity](_scenes_actors_canvas_.canvas.md#opacity)
* [order](_scenes_actors_canvas_.canvas.md#order)
* [parallax](_scenes_actors_canvas_.canvas.md#parallax)
* [position](_scenes_actors_canvas_.canvas.md#position)
* [rotation](_scenes_actors_canvas_.canvas.md#rotation)
* [scale](_scenes_actors_canvas_.canvas.md#scale)
* [scene](_scenes_actors_canvas_.canvas.md#scene)
* [shape](_scenes_actors_canvas_.canvas.md#shape)
* [size](_scenes_actors_canvas_.canvas.md#size)
* [sprite](_scenes_actors_canvas_.canvas.md#sprite)
* [type](_scenes_actors_canvas_.canvas.md#type)
* [velocity](_scenes_actors_canvas_.canvas.md#velocity)
* [visible](_scenes_actors_canvas_.canvas.md#visible)

### Accessors

* [bottom](_scenes_actors_canvas_.canvas.md#bottom)
* [circumference](_scenes_actors_canvas_.canvas.md#circumference)
* [left](_scenes_actors_canvas_.canvas.md#left)
* [radius](_scenes_actors_canvas_.canvas.md#radius)
* [right](_scenes_actors_canvas_.canvas.md#right)
* [top](_scenes_actors_canvas_.canvas.md#top)

### Methods

* [addAnimation](_scenes_actors_canvas_.canvas.md#addanimation)
* [click](_scenes_actors_canvas_.canvas.md#click)
* [overlapsWith](_scenes_actors_canvas_.canvas.md#overlapswith)
* [overlapsWithPoint](_scenes_actors_canvas_.canvas.md#overlapswithpoint)
* [playAnimation](_scenes_actors_canvas_.canvas.md#playanimation)
* [render](_scenes_actors_canvas_.canvas.md#render)
* [renderDebug](_scenes_actors_canvas_.canvas.md#renderdebug)
* [sendPatch](_scenes_actors_canvas_.canvas.md#sendpatch)
* [setAnchor](_scenes_actors_canvas_.canvas.md#setanchor)
* [snapToEdge](_scenes_actors_canvas_.canvas.md#snaptoedge)
* [stopAnimation](_scenes_actors_canvas_.canvas.md#stopanimation)
* [submit](_scenes_actors_canvas_.canvas.md#submit)
* [update](_scenes_actors_canvas_.canvas.md#update)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Canvas**(scene: *[PaintingScene](_scenes_paintingscene_.paintingscene.md)*, obj: *`any`*): [Canvas](_scenes_actors_canvas_.canvas.md)

*Overrides [Actor](_lib_scenes_actors_actor_.actor.md).[constructor](_lib_scenes_actors_actor_.actor.md#constructor)*

*Defined in [scenes/actors/Canvas.ts:19](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Canvas.ts#L19)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| scene | [PaintingScene](_scenes_paintingscene_.paintingscene.md) |
| obj | `any` |

**Returns:** [Canvas](_scenes_actors_canvas_.canvas.md)

___

## Properties

<a id="angularfriction"></a>

###  angularFriction

**● angularFriction**: *[Angle](_lib_utils_angle_.angle.md)* =  new Angle()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[angularFriction](_lib_scenes_actors_actor_.actor.md#angularfriction)*

*Defined in [lib/scenes/actors/Actor.ts:42](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L42)*

___
<a id="angularmomentum"></a>

###  angularMomentum

**● angularMomentum**: *`number`* = 1

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[angularMomentum](_lib_scenes_actors_actor_.actor.md#angularmomentum)*

*Defined in [lib/scenes/actors/Actor.ts:41](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L41)*

___
<a id="angularvelocity"></a>

###  angularVelocity

**● angularVelocity**: *[Angle](_lib_utils_angle_.angle.md)* =  new Angle()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[angularVelocity](_lib_scenes_actors_actor_.actor.md#angularvelocity)*

*Defined in [lib/scenes/actors/Actor.ts:40](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L40)*

___
<a id="animation"></a>

### `<Optional>` animation

**● animation**: *[Animation](../interfaces/_lib_scenes_actors_actor_.animation.md)*

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[animation](_lib_scenes_actors_actor_.actor.md#animation)*

*Defined in [lib/scenes/actors/Actor.ts:45](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L45)*

___
<a id="animationframe"></a>

###  animationFrame

**● animationFrame**: *`number`* = 0

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[animationFrame](_lib_scenes_actors_actor_.actor.md#animationframe)*

*Defined in [lib/scenes/actors/Actor.ts:46](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L46)*

___
<a id="animations"></a>

###  animations

**● animations**: *`object`*

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[animations](_lib_scenes_actors_actor_.actor.md#animations)*

*Defined in [lib/scenes/actors/Actor.ts:44](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L44)*

#### Type declaration

[index: `string`]: [Animation](../interfaces/_lib_scenes_actors_actor_.animation.md)

___
<a id="aye"></a>

### `<Optional>` aye

**● aye**: *[Aye](_scenes_actors_aye_.aye.md)*

*Defined in [scenes/actors/Canvas.ts:19](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Canvas.ts#L19)*

___
<a id="brushpos"></a>

###  brushPos

**● brushPos**: *[Vector2](_lib_utils_vector2_.vector2.md)* =  new Vector2()

*Defined in [scenes/actors/Canvas.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Canvas.ts#L17)*

___
<a id="brushsize"></a>

###  brushSize

**● brushSize**: *`number`* = 4

*Defined in [scenes/actors/Canvas.ts:18](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Canvas.ts#L18)*

___
<a id="canvasctx"></a>

###  canvasCtx

**● canvasCtx**: *`CanvasRenderingContext2D`*

*Defined in [scenes/actors/Canvas.ts:16](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Canvas.ts#L16)*

___
<a id="canvasel"></a>

###  canvasEl

**● canvasEl**: *`HTMLCanvasElement`*

*Defined in [scenes/actors/Canvas.ts:15](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Canvas.ts#L15)*

___
<a id="frame"></a>

###  frame

**● frame**: *`number`* =  -1

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[frame](_lib_scenes_actors_actor_.actor.md#frame)*

*Defined in [lib/scenes/actors/Actor.ts:24](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L24)*

___
<a id="friction"></a>

###  friction

**● friction**: *`number`* = 0

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[friction](_lib_scenes_actors_actor_.actor.md#friction)*

*Defined in [lib/scenes/actors/Actor.ts:39](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L39)*

___
<a id="gravity"></a>

### `<Optional>` gravity

**● gravity**: *[Vector2](_lib_utils_vector2_.vector2.md)*

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[gravity](_lib_scenes_actors_actor_.actor.md#gravity)*

*Defined in [lib/scenes/actors/Actor.ts:37](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L37)*

___
<a id="momentum"></a>

###  momentum

**● momentum**: *`number`* = 1

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[momentum](_lib_scenes_actors_actor_.actor.md#momentum)*

*Defined in [lib/scenes/actors/Actor.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L38)*

___
<a id="name"></a>

###  name

**● name**: *`string`* = "_"

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[name](_lib_scenes_actors_actor_.actor.md#name)*

*Defined in [lib/scenes/actors/Actor.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L21)*

___
<a id="nextanimation"></a>

### `<Optional>` nextAnimation

**● nextAnimation**: *[Animation](../interfaces/_lib_scenes_actors_actor_.animation.md)*

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[nextAnimation](_lib_scenes_actors_actor_.actor.md#nextanimation)*

*Defined in [lib/scenes/actors/Actor.ts:47](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L47)*

___
<a id="offset"></a>

###  offset

**● offset**: *[Vector2](_lib_utils_vector2_.vector2.md)* =  new Vector2()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[offset](_lib_scenes_actors_actor_.actor.md#offset)*

*Defined in [lib/scenes/actors/Actor.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L27)*

___
<a id="opacity"></a>

###  opacity

**● opacity**: *`number`* = 1

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[opacity](_lib_scenes_actors_actor_.actor.md#opacity)*

*Defined in [lib/scenes/actors/Actor.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L31)*

___
<a id="order"></a>

###  order

**● order**: *`number`* = 0

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[order](_lib_scenes_actors_actor_.actor.md#order)*

*Defined in [lib/scenes/actors/Actor.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L33)*

___
<a id="parallax"></a>

###  parallax

**● parallax**: *`number`* = 1

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[parallax](_lib_scenes_actors_actor_.actor.md#parallax)*

*Defined in [lib/scenes/actors/Actor.ts:32](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L32)*

___
<a id="position"></a>

###  position

**● position**: *[Vector2](_lib_utils_vector2_.vector2.md)* =  new Vector2()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[position](_lib_scenes_actors_actor_.actor.md#position)*

*Defined in [lib/scenes/actors/Actor.ts:25](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L25)*

___
<a id="rotation"></a>

###  rotation

**● rotation**: *[Angle](_lib_utils_angle_.angle.md)* =  new Angle()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[rotation](_lib_scenes_actors_actor_.actor.md#rotation)*

*Defined in [lib/scenes/actors/Actor.ts:30](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L30)*

___
<a id="scale"></a>

###  scale

**● scale**: *[Vector2](_lib_utils_vector2_.vector2.md)* =  new Vector2(1)

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[scale](_lib_scenes_actors_actor_.actor.md#scale)*

*Defined in [lib/scenes/actors/Actor.ts:26](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L26)*

___
<a id="scene"></a>

###  scene

**● scene**: *[PaintingScene](_scenes_paintingscene_.paintingscene.md)*

*Overrides [Actor](_lib_scenes_actors_actor_.actor.md).[scene](_lib_scenes_actors_actor_.actor.md#scene)*

*Defined in [scenes/actors/Canvas.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Canvas.ts#L21)*

___
<a id="shape"></a>

###  shape

**● shape**: *`string`* = "aabb"

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[shape](_lib_scenes_actors_actor_.actor.md#shape)*

*Defined in [lib/scenes/actors/Actor.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L29)*

___
<a id="size"></a>

###  size

**● size**: *[Vector2](_lib_utils_vector2_.vector2.md)* =  new Vector2(32)

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[size](_lib_scenes_actors_actor_.actor.md#size)*

*Defined in [lib/scenes/actors/Actor.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L28)*

___
<a id="sprite"></a>

### `<Optional>` sprite

**● sprite**: *[Sprite](_lib_scenes_actors_sprite_.sprite.md)*

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[sprite](_lib_scenes_actors_actor_.actor.md#sprite)*

*Defined in [lib/scenes/actors/Actor.ts:23](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L23)*

___
<a id="type"></a>

###  type

**● type**: *`string`* = "Actor"

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[type](_lib_scenes_actors_actor_.actor.md#type)*

*Defined in [lib/scenes/actors/Actor.ts:22](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L22)*

___
<a id="velocity"></a>

###  velocity

**● velocity**: *[Vector2](_lib_utils_vector2_.vector2.md)* =  new Vector2()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[velocity](_lib_scenes_actors_actor_.actor.md#velocity)*

*Defined in [lib/scenes/actors/Actor.ts:36](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L36)*

___
<a id="visible"></a>

###  visible

**● visible**: *`boolean`* = true

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[visible](_lib_scenes_actors_actor_.actor.md#visible)*

*Defined in [lib/scenes/actors/Actor.ts:34](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L34)*

___

## Accessors

<a id="bottom"></a>

###  bottom

**get bottom**(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[bottom](_lib_scenes_actors_actor_.actor.md#bottom)*

*Defined in [lib/scenes/actors/Actor.ts:81](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L81)*

**Returns:** `number`

___
<a id="circumference"></a>

###  circumference

**get circumference**(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[circumference](_lib_scenes_actors_actor_.actor.md#circumference)*

*Defined in [lib/scenes/actors/Actor.ts:87](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L87)*

**Returns:** `number`

___
<a id="left"></a>

###  left

**get left**(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[left](_lib_scenes_actors_actor_.actor.md#left)*

*Defined in [lib/scenes/actors/Actor.ts:72](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L72)*

**Returns:** `number`

___
<a id="radius"></a>

###  radius

**get radius**(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[radius](_lib_scenes_actors_actor_.actor.md#radius)*

*Defined in [lib/scenes/actors/Actor.ts:84](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L84)*

**Returns:** `number`

___
<a id="right"></a>

###  right

**get right**(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[right](_lib_scenes_actors_actor_.actor.md#right)*

*Defined in [lib/scenes/actors/Actor.ts:78](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L78)*

**Returns:** `number`

___
<a id="top"></a>

###  top

**get top**(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[top](_lib_scenes_actors_actor_.actor.md#top)*

*Defined in [lib/scenes/actors/Actor.ts:75](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L75)*

**Returns:** `number`

___

## Methods

<a id="addanimation"></a>

###  addAnimation

▸ **addAnimation**(name: *`string`*, frames: *`number`[]*, speed?: *`number`*): `void`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[addAnimation](_lib_scenes_actors_actor_.actor.md#addanimation)*

*Defined in [lib/scenes/actors/Actor.ts:235](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L235)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| name | `string` | - |
| frames | `number`[] | - |
| `Default value` speed | `number` | 1 |

**Returns:** `void`

___
<a id="click"></a>

###  click

▸ **click**(): `void`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[click](_lib_scenes_actors_actor_.actor.md#click)*

*Defined in [lib/scenes/actors/Actor.ts:256](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L256)*

**Returns:** `void`

___
<a id="overlapswith"></a>

###  overlapsWith

▸ **overlapsWith**(actor: *[Actor](_lib_scenes_actors_actor_.actor.md)*): `boolean`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[overlapsWith](_lib_scenes_actors_actor_.actor.md#overlapswith)*

*Defined in [lib/scenes/actors/Actor.ts:186](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L186)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| actor | [Actor](_lib_scenes_actors_actor_.actor.md) |

**Returns:** `boolean`

___
<a id="overlapswithpoint"></a>

###  overlapsWithPoint

▸ **overlapsWithPoint**(v: *[Vector2](_lib_utils_vector2_.vector2.md)*): `boolean`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[overlapsWithPoint](_lib_scenes_actors_actor_.actor.md#overlapswithpoint)*

*Defined in [lib/scenes/actors/Actor.ts:175](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L175)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| v | [Vector2](_lib_utils_vector2_.vector2.md) |

**Returns:** `boolean`

___
<a id="playanimation"></a>

###  playAnimation

▸ **playAnimation**(name: *`string`*, queue?: *`boolean`*): `void`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[playAnimation](_lib_scenes_actors_actor_.actor.md#playanimation)*

*Defined in [lib/scenes/actors/Actor.ts:242](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L242)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| name | `string` | - |
| `Default value` queue | `boolean` | false |

**Returns:** `void`

___
<a id="render"></a>

###  render

▸ **render**(): `void`

*Overrides [Actor](_lib_scenes_actors_actor_.actor.md).[render](_lib_scenes_actors_actor_.actor.md#render)*

*Defined in [scenes/actors/Canvas.ts:77](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Canvas.ts#L77)*

**Returns:** `void`

___
<a id="renderdebug"></a>

###  renderDebug

▸ **renderDebug**(): `void`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[renderDebug](_lib_scenes_actors_actor_.actor.md#renderdebug)*

*Defined in [lib/scenes/actors/Actor.ts:142](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L142)*

**Returns:** `void`

___
<a id="sendpatch"></a>

###  sendPatch

▸ **sendPatch**(req?: *`XMLHttpRequest`*): `void`

*Defined in [scenes/actors/Canvas.ts:96](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Canvas.ts#L96)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` req | `XMLHttpRequest` |

**Returns:** `void`

___
<a id="setanchor"></a>

###  setAnchor

▸ **setAnchor**(x: *`number`*, y?: *`number`*): `void`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[setAnchor](_lib_scenes_actors_actor_.actor.md#setanchor)*

*Defined in [lib/scenes/actors/Actor.ts:229](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L229)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| x | `number` | - |
| `Default value` y | `number` |  x |

**Returns:** `void`

___
<a id="snaptoedge"></a>

###  snapToEdge

▸ **snapToEdge**(obstruction: *[Actor](_lib_scenes_actors_actor_.actor.md)*, overlap?: *`number`*): `void`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[snapToEdge](_lib_scenes_actors_actor_.actor.md#snaptoedge)*

*Defined in [lib/scenes/actors/Actor.ts:199](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L199)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| obstruction | [Actor](_lib_scenes_actors_actor_.actor.md) | - |
| `Default value` overlap | `number` | 0 |

**Returns:** `void`

___
<a id="stopanimation"></a>

###  stopAnimation

▸ **stopAnimation**(): `void`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[stopAnimation](_lib_scenes_actors_actor_.actor.md#stopanimation)*

*Defined in [lib/scenes/actors/Actor.ts:252](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L252)*

**Returns:** `void`

___
<a id="submit"></a>

###  submit

▸ **submit**(): `void`

*Defined in [scenes/actors/Canvas.ts:83](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Canvas.ts#L83)*

**Returns:** `void`

___
<a id="update"></a>

###  update

▸ **update**(): `void`

*Overrides [Actor](_lib_scenes_actors_actor_.actor.md).[update](_lib_scenes_actors_actor_.actor.md#update)*

*Defined in [scenes/actors/Canvas.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Canvas.ts#L29)*

**Returns:** `void`

___

