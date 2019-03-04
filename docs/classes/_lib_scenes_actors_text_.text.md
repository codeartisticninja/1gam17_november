[cost_of_creation](../README.md) > ["lib/scenes/actors/Text"](../modules/_lib_scenes_actors_text_.md) > [Text](../classes/_lib_scenes_actors_text_.text.md)

# Class: Text

Text class

*__date__*: 04-mar-2019

## Hierarchy

 [Actor](_lib_scenes_actors_actor_.actor.md)

**↳ Text**

## Index

### Constructors

* [constructor](_lib_scenes_actors_text_.text.md#constructor)

### Properties

* [_textAlign](_lib_scenes_actors_text_.text.md#_textalign)
* [angularFriction](_lib_scenes_actors_text_.text.md#angularfriction)
* [angularMomentum](_lib_scenes_actors_text_.text.md#angularmomentum)
* [angularVelocity](_lib_scenes_actors_text_.text.md#angularvelocity)
* [animation](_lib_scenes_actors_text_.text.md#animation)
* [animationFrame](_lib_scenes_actors_text_.text.md#animationframe)
* [animations](_lib_scenes_actors_text_.text.md#animations)
* [color](_lib_scenes_actors_text_.text.md#color)
* [fontFamily](_lib_scenes_actors_text_.text.md#fontfamily)
* [fontSize](_lib_scenes_actors_text_.text.md#fontsize)
* [fontStyle](_lib_scenes_actors_text_.text.md#fontstyle)
* [frame](_lib_scenes_actors_text_.text.md#frame)
* [friction](_lib_scenes_actors_text_.text.md#friction)
* [gravity](_lib_scenes_actors_text_.text.md#gravity)
* [lineHeight](_lib_scenes_actors_text_.text.md#lineheight)
* [lines](_lib_scenes_actors_text_.text.md#lines)
* [momentum](_lib_scenes_actors_text_.text.md#momentum)
* [name](_lib_scenes_actors_text_.text.md#name)
* [nextAnimation](_lib_scenes_actors_text_.text.md#nextanimation)
* [offset](_lib_scenes_actors_text_.text.md#offset)
* [opacity](_lib_scenes_actors_text_.text.md#opacity)
* [order](_lib_scenes_actors_text_.text.md#order)
* [outline](_lib_scenes_actors_text_.text.md#outline)
* [parallax](_lib_scenes_actors_text_.text.md#parallax)
* [position](_lib_scenes_actors_text_.text.md#position)
* [rotation](_lib_scenes_actors_text_.text.md#rotation)
* [scale](_lib_scenes_actors_text_.text.md#scale)
* [scene](_lib_scenes_actors_text_.text.md#scene)
* [shape](_lib_scenes_actors_text_.text.md#shape)
* [size](_lib_scenes_actors_text_.text.md#size)
* [sprite](_lib_scenes_actors_text_.text.md#sprite)
* [textBaseline](_lib_scenes_actors_text_.text.md#textbaseline)
* [type](_lib_scenes_actors_text_.text.md#type)
* [velocity](_lib_scenes_actors_text_.text.md#velocity)
* [visible](_lib_scenes_actors_text_.text.md#visible)

### Accessors

* [bottom](_lib_scenes_actors_text_.text.md#bottom)
* [circumference](_lib_scenes_actors_text_.text.md#circumference)
* [left](_lib_scenes_actors_text_.text.md#left)
* [radius](_lib_scenes_actors_text_.text.md#radius)
* [right](_lib_scenes_actors_text_.text.md#right)
* [text](_lib_scenes_actors_text_.text.md#text)
* [textAlign](_lib_scenes_actors_text_.text.md#textalign)
* [top](_lib_scenes_actors_text_.text.md#top)

### Methods

* [addAnimation](_lib_scenes_actors_text_.text.md#addanimation)
* [click](_lib_scenes_actors_text_.text.md#click)
* [overlapsWith](_lib_scenes_actors_text_.text.md#overlapswith)
* [overlapsWithPoint](_lib_scenes_actors_text_.text.md#overlapswithpoint)
* [playAnimation](_lib_scenes_actors_text_.text.md#playanimation)
* [render](_lib_scenes_actors_text_.text.md#render)
* [renderDebug](_lib_scenes_actors_text_.text.md#renderdebug)
* [setAnchor](_lib_scenes_actors_text_.text.md#setanchor)
* [snapToEdge](_lib_scenes_actors_text_.text.md#snaptoedge)
* [stopAnimation](_lib_scenes_actors_text_.text.md#stopanimation)
* [update](_lib_scenes_actors_text_.text.md#update)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Text**(scene: *[Scene](_lib_scenes_scene_.scene.md)*, obj?: *`any`*): [Text](_lib_scenes_actors_text_.text.md)

*Overrides [Actor](_lib_scenes_actors_actor_.actor.md).[constructor](_lib_scenes_actors_actor_.actor.md#constructor)*

*Defined in [lib/scenes/actors/Text.ts:47](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Text.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| scene | [Scene](_lib_scenes_scene_.scene.md) |
| `Optional` obj | `any` |

**Returns:** [Text](_lib_scenes_actors_text_.text.md)

___

## Properties

<a id="_textalign"></a>

###  _textAlign

**● _textAlign**: *`string`* = "left"

*Defined in [lib/scenes/actors/Text.ts:90](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Text.ts#L90)*

___
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
<a id="color"></a>

###  color

**● color**: *`string`* = ""

*Defined in [lib/scenes/actors/Text.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Text.ts#L17)*

___
<a id="fontfamily"></a>

###  fontFamily

**● fontFamily**: *`string`* = ""

*Defined in [lib/scenes/actors/Text.ts:15](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Text.ts#L15)*

___
<a id="fontsize"></a>

###  fontSize

**● fontSize**: *`number`* = 20

*Defined in [lib/scenes/actors/Text.ts:12](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Text.ts#L12)*

___
<a id="fontstyle"></a>

###  fontStyle

**● fontStyle**: *`string`* = ""

*Defined in [lib/scenes/actors/Text.ts:14](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Text.ts#L14)*

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
<a id="lineheight"></a>

###  lineHeight

**● lineHeight**: *`number`* = 1

*Defined in [lib/scenes/actors/Text.ts:13](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Text.ts#L13)*

___
<a id="lines"></a>

###  lines

**● lines**: *`string`[]* =  []

*Defined in [lib/scenes/actors/Text.ts:19](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Text.ts#L19)*

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
<a id="outline"></a>

###  outline

**● outline**: *`string`* = ""

*Defined in [lib/scenes/actors/Text.ts:18](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Text.ts#L18)*

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

**● scene**: *[Scene](_lib_scenes_scene_.scene.md)*

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[scene](_lib_scenes_actors_actor_.actor.md#scene)*

*Defined in [lib/scenes/actors/Actor.ts:49](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L49)*

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
<a id="textbaseline"></a>

###  textBaseline

**● textBaseline**: *`string`* = "top"

*Defined in [lib/scenes/actors/Text.ts:16](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Text.ts#L16)*

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
<a id="text"></a>

###  text

**get text**(): `string`

**set text**(txt: *`string`*): `void`

*Defined in [lib/scenes/actors/Text.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Text.ts#L27)*

**Returns:** `string`

*Defined in [lib/scenes/actors/Text.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Text.ts#L21)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| txt | `string` |

**Returns:** `void`

___
<a id="textalign"></a>

###  textAlign

**get textAlign**(): `string`

**set textAlign**(val: *`string`*): `void`

*Defined in [lib/scenes/actors/Text.ts:45](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Text.ts#L45)*

**Returns:** `string`

*Defined in [lib/scenes/actors/Text.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Text.ts#L31)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `string` |

**Returns:** `void`

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

*Defined in [lib/scenes/actors/Text.ts:63](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Text.ts#L63)*

**Returns:** `void`

___
<a id="renderdebug"></a>

###  renderDebug

▸ **renderDebug**(): `void`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[renderDebug](_lib_scenes_actors_actor_.actor.md#renderdebug)*

*Defined in [lib/scenes/actors/Actor.ts:142](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L142)*

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
<a id="update"></a>

###  update

▸ **update**(): `void`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[update](_lib_scenes_actors_actor_.actor.md#update)*

*Defined in [lib/scenes/actors/Actor.ts:91](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L91)*

**Returns:** `void`

___

