[cost_of_creation](../README.md) > ["scenes/actors/Puddle"](../modules/_scenes_actors_puddle_.md) > [Puddle](../classes/_scenes_actors_puddle_.puddle.md)



# Class: Puddle


Puddle class

## Hierarchy


 [Actor](_lib_scenes_actors_actor_.actor.md)

**↳ Puddle**







## Index

### Constructors

* [constructor](_scenes_actors_puddle_.puddle.md#constructor)


### Properties

* [angularFriction](_scenes_actors_puddle_.puddle.md#angularfriction)
* [angularMomentum](_scenes_actors_puddle_.puddle.md#angularmomentum)
* [angularVelocity](_scenes_actors_puddle_.puddle.md#angularvelocity)
* [animation](_scenes_actors_puddle_.puddle.md#animation)
* [animationFrame](_scenes_actors_puddle_.puddle.md#animationframe)
* [animations](_scenes_actors_puddle_.puddle.md#animations)
* [dna](_scenes_actors_puddle_.puddle.md#dna)
* [frame](_scenes_actors_puddle_.puddle.md#frame)
* [friction](_scenes_actors_puddle_.puddle.md#friction)
* [gravity](_scenes_actors_puddle_.puddle.md#gravity)
* [inkColor](_scenes_actors_puddle_.puddle.md#inkcolor)
* [inkLeft](_scenes_actors_puddle_.puddle.md#inkleft)
* [momentum](_scenes_actors_puddle_.puddle.md#momentum)
* [name](_scenes_actors_puddle_.puddle.md#name)
* [nextAnimation](_scenes_actors_puddle_.puddle.md#nextanimation)
* [offset](_scenes_actors_puddle_.puddle.md#offset)
* [opacity](_scenes_actors_puddle_.puddle.md#opacity)
* [order](_scenes_actors_puddle_.puddle.md#order)
* [parallax](_scenes_actors_puddle_.puddle.md#parallax)
* [position](_scenes_actors_puddle_.puddle.md#position)
* [rotation](_scenes_actors_puddle_.puddle.md#rotation)
* [scale](_scenes_actors_puddle_.puddle.md#scale)
* [scene](_scenes_actors_puddle_.puddle.md#scene)
* [shape](_scenes_actors_puddle_.puddle.md#shape)
* [size](_scenes_actors_puddle_.puddle.md#size)
* [sprite](_scenes_actors_puddle_.puddle.md#sprite)
* [timeToSync](_scenes_actors_puddle_.puddle.md#timetosync)
* [type](_scenes_actors_puddle_.puddle.md#type)
* [velocity](_scenes_actors_puddle_.puddle.md#velocity)
* [visible](_scenes_actors_puddle_.puddle.md#visible)


### Accessors

* [bottom](_scenes_actors_puddle_.puddle.md#bottom)
* [circumference](_scenes_actors_puddle_.puddle.md#circumference)
* [left](_scenes_actors_puddle_.puddle.md#left)
* [radius](_scenes_actors_puddle_.puddle.md#radius)
* [right](_scenes_actors_puddle_.puddle.md#right)
* [top](_scenes_actors_puddle_.puddle.md#top)


### Methods

* [addAnimation](_scenes_actors_puddle_.puddle.md#addanimation)
* [click](_scenes_actors_puddle_.puddle.md#click)
* [overlapsWith](_scenes_actors_puddle_.puddle.md#overlapswith)
* [overlapsWithPoint](_scenes_actors_puddle_.puddle.md#overlapswithpoint)
* [playAnimation](_scenes_actors_puddle_.puddle.md#playanimation)
* [render](_scenes_actors_puddle_.puddle.md#render)
* [renderDebug](_scenes_actors_puddle_.puddle.md#renderdebug)
* [sendPatch](_scenes_actors_puddle_.puddle.md#sendpatch)
* [setAnchor](_scenes_actors_puddle_.puddle.md#setanchor)
* [snapToEdge](_scenes_actors_puddle_.puddle.md#snaptoedge)
* [stopAnimation](_scenes_actors_puddle_.puddle.md#stopanimation)
* [sync](_scenes_actors_puddle_.puddle.md#sync)
* [toObj](_scenes_actors_puddle_.puddle.md#toobj)
* [update](_scenes_actors_puddle_.puddle.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Puddle**(scene: *[PaintingScene](_scenes_paintingscene_.paintingscene.md)*, obj: *`any`*): [Puddle](_scenes_actors_puddle_.puddle.md)


*Overrides [Actor](_lib_scenes_actors_actor_.actor.md).[constructor](_lib_scenes_actors_actor_.actor.md#constructor)*

*Defined in [scenes/actors/Puddle.ts:18](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/scenes/actors/Puddle.ts#L18)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | [PaintingScene](_scenes_paintingscene_.paintingscene.md)   |  - |
| obj | `any`   |  - |





**Returns:** [Puddle](_scenes_actors_puddle_.puddle.md)

---


## Properties
<a id="angularfriction"></a>

###  angularFriction

**●  angularFriction**:  *[Angle](_lib_utils_angle_.angle.md)*  =  new Angle()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[angularFriction](_lib_scenes_actors_actor_.actor.md#angularfriction)*

*Defined in [lib/scenes/actors/Actor.ts:42](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L42)*





___

<a id="angularmomentum"></a>

###  angularMomentum

**●  angularMomentum**:  *`number`*  = 1

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[angularMomentum](_lib_scenes_actors_actor_.actor.md#angularmomentum)*

*Defined in [lib/scenes/actors/Actor.ts:41](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L41)*





___

<a id="angularvelocity"></a>

###  angularVelocity

**●  angularVelocity**:  *[Angle](_lib_utils_angle_.angle.md)*  =  new Angle()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[angularVelocity](_lib_scenes_actors_actor_.actor.md#angularvelocity)*

*Defined in [lib/scenes/actors/Actor.ts:40](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L40)*





___

<a id="animation"></a>

### «Optional» animation

**●  animation**:  *[Animation](../interfaces/_lib_scenes_actors_actor_.animation.md)* 

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[animation](_lib_scenes_actors_actor_.actor.md#animation)*

*Defined in [lib/scenes/actors/Actor.ts:45](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L45)*





___

<a id="animationframe"></a>

###  animationFrame

**●  animationFrame**:  *`number`*  = 0

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[animationFrame](_lib_scenes_actors_actor_.actor.md#animationframe)*

*Defined in [lib/scenes/actors/Actor.ts:46](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L46)*





___

<a id="animations"></a>

###  animations

**●  animations**:  *`object`* 

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[animations](_lib_scenes_actors_actor_.actor.md#animations)*

*Defined in [lib/scenes/actors/Actor.ts:44](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L44)*


#### Type declaration


[index: `string`]: [Animation](../interfaces/_lib_scenes_actors_actor_.animation.md)






___

<a id="dna"></a>

###  dna

**●  dna**:  *`any`* 

*Defined in [scenes/actors/Puddle.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/scenes/actors/Puddle.ts#L17)*





___

<a id="frame"></a>

###  frame

**●  frame**:  *`number`*  =  -1

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[frame](_lib_scenes_actors_actor_.actor.md#frame)*

*Defined in [lib/scenes/actors/Actor.ts:24](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L24)*





___

<a id="friction"></a>

###  friction

**●  friction**:  *`number`*  = 0

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[friction](_lib_scenes_actors_actor_.actor.md#friction)*

*Defined in [lib/scenes/actors/Actor.ts:39](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L39)*





___

<a id="gravity"></a>

### «Optional» gravity

**●  gravity**:  *[Vector2](_lib_utils_vector2_.vector2.md)* 

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[gravity](_lib_scenes_actors_actor_.actor.md#gravity)*

*Defined in [lib/scenes/actors/Actor.ts:37](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L37)*





___

<a id="inkcolor"></a>

###  inkColor

**●  inkColor**:  *[HSL](_hsl_.hsl.md)*  =  new HSL()

*Defined in [scenes/actors/Puddle.ts:15](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/scenes/actors/Puddle.ts#L15)*





___

<a id="inkleft"></a>

###  inkLeft

**●  inkLeft**:  *`number`*  = 0

*Defined in [scenes/actors/Puddle.ts:16](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/scenes/actors/Puddle.ts#L16)*





___

<a id="momentum"></a>

###  momentum

**●  momentum**:  *`number`*  = 1

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[momentum](_lib_scenes_actors_actor_.actor.md#momentum)*

*Defined in [lib/scenes/actors/Actor.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L38)*





___

<a id="name"></a>

###  name

**●  name**:  *`string`*  = "_"

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[name](_lib_scenes_actors_actor_.actor.md#name)*

*Defined in [lib/scenes/actors/Actor.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L21)*





___

<a id="nextanimation"></a>

### «Optional» nextAnimation

**●  nextAnimation**:  *[Animation](../interfaces/_lib_scenes_actors_actor_.animation.md)* 

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[nextAnimation](_lib_scenes_actors_actor_.actor.md#nextanimation)*

*Defined in [lib/scenes/actors/Actor.ts:47](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L47)*





___

<a id="offset"></a>

###  offset

**●  offset**:  *[Vector2](_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[offset](_lib_scenes_actors_actor_.actor.md#offset)*

*Defined in [lib/scenes/actors/Actor.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L27)*





___

<a id="opacity"></a>

###  opacity

**●  opacity**:  *`number`*  = 1

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[opacity](_lib_scenes_actors_actor_.actor.md#opacity)*

*Defined in [lib/scenes/actors/Actor.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L31)*





___

<a id="order"></a>

###  order

**●  order**:  *`number`*  = 0

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[order](_lib_scenes_actors_actor_.actor.md#order)*

*Defined in [lib/scenes/actors/Actor.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L33)*





___

<a id="parallax"></a>

###  parallax

**●  parallax**:  *`number`*  = 1

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[parallax](_lib_scenes_actors_actor_.actor.md#parallax)*

*Defined in [lib/scenes/actors/Actor.ts:32](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L32)*





___

<a id="position"></a>

###  position

**●  position**:  *[Vector2](_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[position](_lib_scenes_actors_actor_.actor.md#position)*

*Defined in [lib/scenes/actors/Actor.ts:25](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L25)*





___

<a id="rotation"></a>

###  rotation

**●  rotation**:  *[Angle](_lib_utils_angle_.angle.md)*  =  new Angle()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[rotation](_lib_scenes_actors_actor_.actor.md#rotation)*

*Defined in [lib/scenes/actors/Actor.ts:30](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L30)*





___

<a id="scale"></a>

###  scale

**●  scale**:  *[Vector2](_lib_utils_vector2_.vector2.md)*  =  new Vector2(1)

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[scale](_lib_scenes_actors_actor_.actor.md#scale)*

*Defined in [lib/scenes/actors/Actor.ts:26](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L26)*





___

<a id="scene"></a>

###  scene

**●  scene**:  *[PaintingScene](_scenes_paintingscene_.paintingscene.md)* 

*Overrides [Actor](_lib_scenes_actors_actor_.actor.md).[scene](_lib_scenes_actors_actor_.actor.md#scene)*

*Defined in [scenes/actors/Puddle.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/scenes/actors/Puddle.ts#L20)*





___

<a id="shape"></a>

###  shape

**●  shape**:  *`string`*  = "aabb"

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[shape](_lib_scenes_actors_actor_.actor.md#shape)*

*Defined in [lib/scenes/actors/Actor.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L29)*





___

<a id="size"></a>

###  size

**●  size**:  *[Vector2](_lib_utils_vector2_.vector2.md)*  =  new Vector2(32)

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[size](_lib_scenes_actors_actor_.actor.md#size)*

*Defined in [lib/scenes/actors/Actor.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L28)*





___

<a id="sprite"></a>

### «Optional» sprite

**●  sprite**:  *[Sprite](_lib_scenes_actors_sprite_.sprite.md)* 

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[sprite](_lib_scenes_actors_actor_.actor.md#sprite)*

*Defined in [lib/scenes/actors/Actor.ts:23](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L23)*





___

<a id="timetosync"></a>

###  timeToSync

**●  timeToSync**:  *`number`*  =  -1

*Defined in [scenes/actors/Puddle.ts:18](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/scenes/actors/Puddle.ts#L18)*





___

<a id="type"></a>

###  type

**●  type**:  *`string`*  = "Actor"

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[type](_lib_scenes_actors_actor_.actor.md#type)*

*Defined in [lib/scenes/actors/Actor.ts:22](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L22)*





___

<a id="velocity"></a>

###  velocity

**●  velocity**:  *[Vector2](_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[velocity](_lib_scenes_actors_actor_.actor.md#velocity)*

*Defined in [lib/scenes/actors/Actor.ts:36](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L36)*





___

<a id="visible"></a>

###  visible

**●  visible**:  *`boolean`*  = true

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[visible](_lib_scenes_actors_actor_.actor.md#visible)*

*Defined in [lib/scenes/actors/Actor.ts:34](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L34)*





___


## Accessors
<a id="bottom"></a>

###  bottom


getbottom(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[bottom](_lib_scenes_actors_actor_.actor.md#bottom)*

*Defined in [lib/scenes/actors/Actor.ts:81](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L81)*





**Returns:** `number`



___

<a id="circumference"></a>

###  circumference


getcircumference(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[circumference](_lib_scenes_actors_actor_.actor.md#circumference)*

*Defined in [lib/scenes/actors/Actor.ts:87](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L87)*





**Returns:** `number`



___

<a id="left"></a>

###  left


getleft(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[left](_lib_scenes_actors_actor_.actor.md#left)*

*Defined in [lib/scenes/actors/Actor.ts:72](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L72)*





**Returns:** `number`



___

<a id="radius"></a>

###  radius


getradius(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[radius](_lib_scenes_actors_actor_.actor.md#radius)*

*Defined in [lib/scenes/actors/Actor.ts:84](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L84)*





**Returns:** `number`



___

<a id="right"></a>

###  right


getright(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[right](_lib_scenes_actors_actor_.actor.md#right)*

*Defined in [lib/scenes/actors/Actor.ts:78](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L78)*





**Returns:** `number`



___

<a id="top"></a>

###  top


gettop(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[top](_lib_scenes_actors_actor_.actor.md#top)*

*Defined in [lib/scenes/actors/Actor.ts:75](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L75)*





**Returns:** `number`



___


## Methods
<a id="addanimation"></a>

###  addAnimation

► **addAnimation**(name: *`string`*, frames: *`number`[]*, speed?: *`number`*): `void`



*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[addAnimation](_lib_scenes_actors_actor_.actor.md#addanimation)*

*Defined in [lib/scenes/actors/Actor.ts:235](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L235)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| name | `string`  | - |   - |
| frames | `number`[]  | - |   - |
| speed | `number`  | 1 |   - |





**Returns:** `void`





___

<a id="click"></a>

###  click

► **click**(): `void`



*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[click](_lib_scenes_actors_actor_.actor.md#click)*

*Defined in [lib/scenes/actors/Actor.ts:256](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L256)*





**Returns:** `void`





___

<a id="overlapswith"></a>

###  overlapsWith

► **overlapsWith**(actor: *[Actor](_lib_scenes_actors_actor_.actor.md)*): `boolean`



*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[overlapsWith](_lib_scenes_actors_actor_.actor.md#overlapswith)*

*Defined in [lib/scenes/actors/Actor.ts:186](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L186)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| actor | [Actor](_lib_scenes_actors_actor_.actor.md)   |  - |





**Returns:** `boolean`





___

<a id="overlapswithpoint"></a>

###  overlapsWithPoint

► **overlapsWithPoint**(v: *[Vector2](_lib_utils_vector2_.vector2.md)*): `boolean`



*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[overlapsWithPoint](_lib_scenes_actors_actor_.actor.md#overlapswithpoint)*

*Defined in [lib/scenes/actors/Actor.ts:175](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L175)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v | [Vector2](_lib_utils_vector2_.vector2.md)   |  - |





**Returns:** `boolean`





___

<a id="playanimation"></a>

###  playAnimation

► **playAnimation**(name: *`string`*, queue?: *`boolean`*): `void`



*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[playAnimation](_lib_scenes_actors_actor_.actor.md#playanimation)*

*Defined in [lib/scenes/actors/Actor.ts:242](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L242)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| name | `string`  | - |   - |
| queue | `boolean`  | false |   - |





**Returns:** `void`





___

<a id="render"></a>

###  render

► **render**(): `void`



*Overrides [Actor](_lib_scenes_actors_actor_.actor.md).[render](_lib_scenes_actors_actor_.actor.md#render)*

*Defined in [scenes/actors/Puddle.ts:37](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/scenes/actors/Puddle.ts#L37)*





**Returns:** `void`





___

<a id="renderdebug"></a>

###  renderDebug

► **renderDebug**(): `void`



*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[renderDebug](_lib_scenes_actors_actor_.actor.md#renderdebug)*

*Defined in [lib/scenes/actors/Actor.ts:142](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L142)*





**Returns:** `void`





___

<a id="sendpatch"></a>

###  sendPatch

► **sendPatch**(): `void`



*Defined in [scenes/actors/Puddle.ts:47](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/scenes/actors/Puddle.ts#L47)*





**Returns:** `void`





___

<a id="setanchor"></a>

###  setAnchor

► **setAnchor**(x: *`number`*, y?: *`number`*): `void`



*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[setAnchor](_lib_scenes_actors_actor_.actor.md#setanchor)*

*Defined in [lib/scenes/actors/Actor.ts:229](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L229)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| x | `number`  | - |   - |
| y | `number`  |  x |   - |





**Returns:** `void`





___

<a id="snaptoedge"></a>

###  snapToEdge

► **snapToEdge**(obstruction: *[Actor](_lib_scenes_actors_actor_.actor.md)*, overlap?: *`number`*): `void`



*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[snapToEdge](_lib_scenes_actors_actor_.actor.md#snaptoedge)*

*Defined in [lib/scenes/actors/Actor.ts:199](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L199)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| obstruction | [Actor](_lib_scenes_actors_actor_.actor.md)  | - |   - |
| overlap | `number`  | 0 |   - |





**Returns:** `void`





___

<a id="stopanimation"></a>

###  stopAnimation

► **stopAnimation**(): `void`



*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[stopAnimation](_lib_scenes_actors_actor_.actor.md#stopanimation)*

*Defined in [lib/scenes/actors/Actor.ts:252](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/lib/scenes/actors/Actor.ts#L252)*





**Returns:** `void`





___

<a id="sync"></a>

###  sync

► **sync**(): `void`



*Defined in [scenes/actors/Puddle.ts:55](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/scenes/actors/Puddle.ts#L55)*





**Returns:** `void`





___

<a id="toobj"></a>

###  toObj

► **toObj**(): `any`



*Defined in [scenes/actors/Puddle.ts:68](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/scenes/actors/Puddle.ts#L68)*





**Returns:** `any`





___

<a id="update"></a>

###  update

► **update**(): `void`



*Overrides [Actor](_lib_scenes_actors_actor_.actor.md).[update](_lib_scenes_actors_actor_.actor.md#update)*

*Defined in [scenes/actors/Puddle.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/a194b56/src/script/_classes/scenes/actors/Puddle.ts#L27)*





**Returns:** `void`





___


