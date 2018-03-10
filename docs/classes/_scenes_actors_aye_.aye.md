[cost_of_creation](../README.md) > ["scenes/actors/Aye"](../modules/_scenes_actors_aye_.md) > [Aye](../classes/_scenes_actors_aye_.aye.md)



# Class: Aye


Aye class

## Hierarchy


 [Actor](_lib_scenes_actors_actor_.actor.md)

**↳ Aye**







## Index

### Constructors

* [constructor](_scenes_actors_aye_.aye.md#constructor)


### Properties

* [angularFriction](_scenes_actors_aye_.aye.md#angularfriction)
* [angularMomentum](_scenes_actors_aye_.aye.md#angularmomentum)
* [angularVelocity](_scenes_actors_aye_.aye.md#angularvelocity)
* [animation](_scenes_actors_aye_.aye.md#animation)
* [animationFrame](_scenes_actors_aye_.aye.md#animationframe)
* [animations](_scenes_actors_aye_.aye.md#animations)
* [dna](_scenes_actors_aye_.aye.md#dna)
* [frame](_scenes_actors_aye_.aye.md#frame)
* [friction](_scenes_actors_aye_.aye.md#friction)
* [gravity](_scenes_actors_aye_.aye.md#gravity)
* [inPuddle](_scenes_actors_aye_.aye.md#inpuddle)
* [inkColor](_scenes_actors_aye_.aye.md#inkcolor)
* [inkLeft](_scenes_actors_aye_.aye.md#inkleft)
* [momentum](_scenes_actors_aye_.aye.md#momentum)
* [name](_scenes_actors_aye_.aye.md#name)
* [nextAnimation](_scenes_actors_aye_.aye.md#nextanimation)
* [offset](_scenes_actors_aye_.aye.md#offset)
* [opacity](_scenes_actors_aye_.aye.md#opacity)
* [order](_scenes_actors_aye_.aye.md#order)
* [parallax](_scenes_actors_aye_.aye.md#parallax)
* [position](_scenes_actors_aye_.aye.md#position)
* [rotation](_scenes_actors_aye_.aye.md#rotation)
* [scale](_scenes_actors_aye_.aye.md#scale)
* [scene](_scenes_actors_aye_.aye.md#scene)
* [shape](_scenes_actors_aye_.aye.md#shape)
* [size](_scenes_actors_aye_.aye.md#size)
* [sprite](_scenes_actors_aye_.aye.md#sprite)
* [suck](_scenes_actors_aye_.aye.md#suck)
* [target](_scenes_actors_aye_.aye.md#target)
* [type](_scenes_actors_aye_.aye.md#type)
* [velocity](_scenes_actors_aye_.aye.md#velocity)
* [visible](_scenes_actors_aye_.aye.md#visible)


### Accessors

* [bottom](_scenes_actors_aye_.aye.md#bottom)
* [circumference](_scenes_actors_aye_.aye.md#circumference)
* [left](_scenes_actors_aye_.aye.md#left)
* [radius](_scenes_actors_aye_.aye.md#radius)
* [right](_scenes_actors_aye_.aye.md#right)
* [top](_scenes_actors_aye_.aye.md#top)


### Methods

* [addAnimation](_scenes_actors_aye_.aye.md#addanimation)
* [click](_scenes_actors_aye_.aye.md#click)
* [die](_scenes_actors_aye_.aye.md#die)
* [goTo](_scenes_actors_aye_.aye.md#goto)
* [overlapsWith](_scenes_actors_aye_.aye.md#overlapswith)
* [overlapsWithPoint](_scenes_actors_aye_.aye.md#overlapswithpoint)
* [playAnimation](_scenes_actors_aye_.aye.md#playanimation)
* [render](_scenes_actors_aye_.aye.md#render)
* [renderDebug](_scenes_actors_aye_.aye.md#renderdebug)
* [sendPatch](_scenes_actors_aye_.aye.md#sendpatch)
* [setAnchor](_scenes_actors_aye_.aye.md#setanchor)
* [snapToEdge](_scenes_actors_aye_.aye.md#snaptoedge)
* [stop](_scenes_actors_aye_.aye.md#stop)
* [stopAnimation](_scenes_actors_aye_.aye.md#stopanimation)
* [toObj](_scenes_actors_aye_.aye.md#toobj)
* [update](_scenes_actors_aye_.aye.md#update)
* [wakeUp](_scenes_actors_aye_.aye.md#wakeup)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Aye**(scene: *[PaintingScene](_scenes_paintingscene_.paintingscene.md)*, obj: *`any`*): [Aye](_scenes_actors_aye_.aye.md)


*Overrides [Actor](_lib_scenes_actors_actor_.actor.md).[constructor](_lib_scenes_actors_actor_.actor.md#constructor)*

*Defined in [scenes/actors/Aye.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L20)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | [PaintingScene](_scenes_paintingscene_.paintingscene.md)   |  - |
| obj | `any`   |  - |





**Returns:** [Aye](_scenes_actors_aye_.aye.md)

---


## Properties
<a id="angularfriction"></a>

###  angularFriction

**●  angularFriction**:  *[Angle](_lib_utils_angle_.angle.md)*  =  new Angle()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[angularFriction](_lib_scenes_actors_actor_.actor.md#angularfriction)*

*Defined in [lib/scenes/actors/Actor.ts:42](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L42)*





___

<a id="angularmomentum"></a>

###  angularMomentum

**●  angularMomentum**:  *`number`*  = 1

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[angularMomentum](_lib_scenes_actors_actor_.actor.md#angularmomentum)*

*Defined in [lib/scenes/actors/Actor.ts:41](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L41)*





___

<a id="angularvelocity"></a>

###  angularVelocity

**●  angularVelocity**:  *[Angle](_lib_utils_angle_.angle.md)*  =  new Angle()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[angularVelocity](_lib_scenes_actors_actor_.actor.md#angularvelocity)*

*Defined in [lib/scenes/actors/Actor.ts:40](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L40)*





___

<a id="animation"></a>

### «Optional» animation

**●  animation**:  *[Animation](../interfaces/_lib_scenes_actors_actor_.animation.md)* 

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[animation](_lib_scenes_actors_actor_.actor.md#animation)*

*Defined in [lib/scenes/actors/Actor.ts:45](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L45)*





___

<a id="animationframe"></a>

###  animationFrame

**●  animationFrame**:  *`number`*  = 0

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[animationFrame](_lib_scenes_actors_actor_.actor.md#animationframe)*

*Defined in [lib/scenes/actors/Actor.ts:46](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L46)*





___

<a id="animations"></a>

###  animations

**●  animations**:  *`object`* 

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[animations](_lib_scenes_actors_actor_.actor.md#animations)*

*Defined in [lib/scenes/actors/Actor.ts:44](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L44)*


#### Type declaration


[index: `string`]: [Animation](../interfaces/_lib_scenes_actors_actor_.animation.md)






___

<a id="dna"></a>

###  dna

**●  dna**:  *`any`* 

*Defined in [scenes/actors/Aye.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L20)*





___

<a id="frame"></a>

###  frame

**●  frame**:  *`number`*  =  -1

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[frame](_lib_scenes_actors_actor_.actor.md#frame)*

*Defined in [lib/scenes/actors/Actor.ts:24](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L24)*





___

<a id="friction"></a>

###  friction

**●  friction**:  *`number`*  = 0

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[friction](_lib_scenes_actors_actor_.actor.md#friction)*

*Defined in [lib/scenes/actors/Actor.ts:39](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L39)*





___

<a id="gravity"></a>

### «Optional» gravity

**●  gravity**:  *[Vector2](_lib_utils_vector2_.vector2.md)* 

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[gravity](_lib_scenes_actors_actor_.actor.md#gravity)*

*Defined in [lib/scenes/actors/Actor.ts:37](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L37)*





___

<a id="inpuddle"></a>

###  inPuddle

**●  inPuddle**:  *`number`*  = 0

*Defined in [scenes/actors/Aye.ts:19](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L19)*





___

<a id="inkcolor"></a>

###  inkColor

**●  inkColor**:  *[HSL](_hsl_.hsl.md)*  =  new HSL()

*Defined in [scenes/actors/Aye.ts:16](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L16)*





___

<a id="inkleft"></a>

###  inkLeft

**●  inkLeft**:  *`number`*  = 0.25

*Defined in [scenes/actors/Aye.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L17)*





___

<a id="momentum"></a>

###  momentum

**●  momentum**:  *`number`*  = 1

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[momentum](_lib_scenes_actors_actor_.actor.md#momentum)*

*Defined in [lib/scenes/actors/Actor.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L38)*





___

<a id="name"></a>

###  name

**●  name**:  *`string`*  = "_"

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[name](_lib_scenes_actors_actor_.actor.md#name)*

*Defined in [lib/scenes/actors/Actor.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L21)*





___

<a id="nextanimation"></a>

### «Optional» nextAnimation

**●  nextAnimation**:  *[Animation](../interfaces/_lib_scenes_actors_actor_.animation.md)* 

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[nextAnimation](_lib_scenes_actors_actor_.actor.md#nextanimation)*

*Defined in [lib/scenes/actors/Actor.ts:47](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L47)*





___

<a id="offset"></a>

###  offset

**●  offset**:  *[Vector2](_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[offset](_lib_scenes_actors_actor_.actor.md#offset)*

*Defined in [lib/scenes/actors/Actor.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L27)*





___

<a id="opacity"></a>

###  opacity

**●  opacity**:  *`number`*  = 1

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[opacity](_lib_scenes_actors_actor_.actor.md#opacity)*

*Defined in [lib/scenes/actors/Actor.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L31)*





___

<a id="order"></a>

###  order

**●  order**:  *`number`*  = 0

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[order](_lib_scenes_actors_actor_.actor.md#order)*

*Defined in [lib/scenes/actors/Actor.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L33)*





___

<a id="parallax"></a>

###  parallax

**●  parallax**:  *`number`*  = 1

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[parallax](_lib_scenes_actors_actor_.actor.md#parallax)*

*Defined in [lib/scenes/actors/Actor.ts:32](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L32)*





___

<a id="position"></a>

###  position

**●  position**:  *[Vector2](_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[position](_lib_scenes_actors_actor_.actor.md#position)*

*Defined in [lib/scenes/actors/Actor.ts:25](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L25)*





___

<a id="rotation"></a>

###  rotation

**●  rotation**:  *[Angle](_lib_utils_angle_.angle.md)*  =  new Angle()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[rotation](_lib_scenes_actors_actor_.actor.md#rotation)*

*Defined in [lib/scenes/actors/Actor.ts:30](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L30)*





___

<a id="scale"></a>

###  scale

**●  scale**:  *[Vector2](_lib_utils_vector2_.vector2.md)*  =  new Vector2(1)

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[scale](_lib_scenes_actors_actor_.actor.md#scale)*

*Defined in [lib/scenes/actors/Actor.ts:26](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L26)*





___

<a id="scene"></a>

###  scene

**●  scene**:  *[PaintingScene](_scenes_paintingscene_.paintingscene.md)* 

*Overrides [Actor](_lib_scenes_actors_actor_.actor.md).[scene](_lib_scenes_actors_actor_.actor.md#scene)*

*Defined in [scenes/actors/Aye.ts:22](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L22)*





___

<a id="shape"></a>

###  shape

**●  shape**:  *`string`*  = "aabb"

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[shape](_lib_scenes_actors_actor_.actor.md#shape)*

*Defined in [lib/scenes/actors/Actor.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L29)*





___

<a id="size"></a>

###  size

**●  size**:  *[Vector2](_lib_utils_vector2_.vector2.md)*  =  new Vector2(32)

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[size](_lib_scenes_actors_actor_.actor.md#size)*

*Defined in [lib/scenes/actors/Actor.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L28)*





___

<a id="sprite"></a>

### «Optional» sprite

**●  sprite**:  *[Sprite](_lib_scenes_actors_sprite_.sprite.md)* 

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[sprite](_lib_scenes_actors_actor_.actor.md#sprite)*

*Defined in [lib/scenes/actors/Actor.ts:23](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L23)*





___

<a id="suck"></a>

###  suck

**●  suck**:  *`boolean`*  = true

*Defined in [scenes/actors/Aye.ts:18](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L18)*





___

<a id="target"></a>

### «Optional» target

**●  target**:  *[Vector2](_lib_utils_vector2_.vector2.md)* 

*Defined in [scenes/actors/Aye.ts:15](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L15)*





___

<a id="type"></a>

###  type

**●  type**:  *`string`*  = "Actor"

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[type](_lib_scenes_actors_actor_.actor.md#type)*

*Defined in [lib/scenes/actors/Actor.ts:22](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L22)*





___

<a id="velocity"></a>

###  velocity

**●  velocity**:  *[Vector2](_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[velocity](_lib_scenes_actors_actor_.actor.md#velocity)*

*Defined in [lib/scenes/actors/Actor.ts:36](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L36)*





___

<a id="visible"></a>

###  visible

**●  visible**:  *`boolean`*  = true

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[visible](_lib_scenes_actors_actor_.actor.md#visible)*

*Defined in [lib/scenes/actors/Actor.ts:34](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L34)*





___


## Accessors
<a id="bottom"></a>

###  bottom


getbottom(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[bottom](_lib_scenes_actors_actor_.actor.md#bottom)*

*Defined in [lib/scenes/actors/Actor.ts:81](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L81)*





**Returns:** `number`



___

<a id="circumference"></a>

###  circumference


getcircumference(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[circumference](_lib_scenes_actors_actor_.actor.md#circumference)*

*Defined in [lib/scenes/actors/Actor.ts:87](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L87)*





**Returns:** `number`



___

<a id="left"></a>

###  left


getleft(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[left](_lib_scenes_actors_actor_.actor.md#left)*

*Defined in [lib/scenes/actors/Actor.ts:72](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L72)*





**Returns:** `number`



___

<a id="radius"></a>

###  radius


getradius(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[radius](_lib_scenes_actors_actor_.actor.md#radius)*

*Defined in [lib/scenes/actors/Actor.ts:84](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L84)*





**Returns:** `number`



___

<a id="right"></a>

###  right


getright(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[right](_lib_scenes_actors_actor_.actor.md#right)*

*Defined in [lib/scenes/actors/Actor.ts:78](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L78)*





**Returns:** `number`



___

<a id="top"></a>

###  top


gettop(): `number`

*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[top](_lib_scenes_actors_actor_.actor.md#top)*

*Defined in [lib/scenes/actors/Actor.ts:75](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L75)*





**Returns:** `number`



___


## Methods
<a id="addanimation"></a>

###  addAnimation

► **addAnimation**(name: *`string`*, frames: *`number`[]*, speed?: *`number`*): `void`



*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[addAnimation](_lib_scenes_actors_actor_.actor.md#addanimation)*

*Defined in [lib/scenes/actors/Actor.ts:235](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L235)*



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

*Defined in [lib/scenes/actors/Actor.ts:256](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L256)*





**Returns:** `void`





___

<a id="die"></a>

###  die

► **die**(): `void`



*Defined in [scenes/actors/Aye.ts:140](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L140)*





**Returns:** `void`





___

<a id="goto"></a>

###  goTo

► **goTo**(pos: *[Vector2](_lib_utils_vector2_.vector2.md)*): `void`



*Defined in [scenes/actors/Aye.ts:91](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L91)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pos | [Vector2](_lib_utils_vector2_.vector2.md)   |  - |





**Returns:** `void`





___

<a id="overlapswith"></a>

###  overlapsWith

► **overlapsWith**(actor: *[Actor](_lib_scenes_actors_actor_.actor.md)*): `boolean`



*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[overlapsWith](_lib_scenes_actors_actor_.actor.md#overlapswith)*

*Defined in [lib/scenes/actors/Actor.ts:186](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L186)*



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

*Defined in [lib/scenes/actors/Actor.ts:175](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L175)*



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

*Defined in [lib/scenes/actors/Actor.ts:242](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L242)*



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

*Defined in [scenes/actors/Aye.ts:80](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L80)*





**Returns:** `void`





___

<a id="renderdebug"></a>

###  renderDebug

► **renderDebug**(): `void`



*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[renderDebug](_lib_scenes_actors_actor_.actor.md#renderdebug)*

*Defined in [lib/scenes/actors/Actor.ts:142](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L142)*





**Returns:** `void`





___

<a id="sendpatch"></a>

###  sendPatch

► **sendPatch**(): `void`



*Defined in [scenes/actors/Aye.ts:112](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L112)*





**Returns:** `void`





___

<a id="setanchor"></a>

###  setAnchor

► **setAnchor**(x: *`number`*, y?: *`number`*): `void`



*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[setAnchor](_lib_scenes_actors_actor_.actor.md#setanchor)*

*Defined in [lib/scenes/actors/Actor.ts:229](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L229)*



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

*Defined in [lib/scenes/actors/Actor.ts:199](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L199)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| obstruction | [Actor](_lib_scenes_actors_actor_.actor.md)  | - |   - |
| overlap | `number`  | 0 |   - |





**Returns:** `void`





___

<a id="stop"></a>

###  stop

► **stop**(): `void`



*Defined in [scenes/actors/Aye.ts:98](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L98)*





**Returns:** `void`





___

<a id="stopanimation"></a>

###  stopAnimation

► **stopAnimation**(): `void`



*Inherited from [Actor](_lib_scenes_actors_actor_.actor.md).[stopAnimation](_lib_scenes_actors_actor_.actor.md#stopanimation)*

*Defined in [lib/scenes/actors/Actor.ts:252](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Actor.ts#L252)*





**Returns:** `void`





___

<a id="toobj"></a>

###  toObj

► **toObj**(): `object`



*Defined in [scenes/actors/Aye.ts:120](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L120)*





**Returns:** `object`





___

<a id="update"></a>

###  update

► **update**(): `void`



*Overrides [Actor](_lib_scenes_actors_actor_.actor.md).[update](_lib_scenes_actors_actor_.actor.md#update)*

*Defined in [scenes/actors/Aye.ts:41](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L41)*





**Returns:** `void`





___

<a id="wakeup"></a>

###  wakeUp

► **wakeUp**(): `void`



*Defined in [scenes/actors/Aye.ts:107](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/scenes/actors/Aye.ts#L107)*





**Returns:** `void`





___


