[cost_of_creation](../README.md) > ["_classes/lib/scenes/actors/Actor"](../modules/__classes_lib_scenes_actors_actor_.md) > [Actor](../classes/__classes_lib_scenes_actors_actor_.actor.md)



# Class: Actor

## Hierarchy

**Actor**

↳  [Scenery](__classes_lib_scenes_actors_scenery_.scenery.md)




↳  [Text](__classes_lib_scenes_actors_text_.text.md)




↳  [Puddle](__classes_scenes_actors_puddle_.puddle.md)




↳  [Aye](__classes_scenes_actors_aye_.aye.md)




↳  [Tile](__classes_scenes_actors_tile_.tile.md)




↳  [Canvas](__classes_scenes_actors_canvas_.canvas.md)




↳  [SuckBtn](__classes_scenes_actors_suckbtn_.suckbtn.md)




↳  [ParticleEmitter](__classes_lib_scenes_actors_particleemitter_.particleemitter.md)








## Index

### Constructors

* [constructor](__classes_lib_scenes_actors_actor_.actor.md#constructor)


### Properties

* [angularFriction](__classes_lib_scenes_actors_actor_.actor.md#angularfriction)
* [angularMomentum](__classes_lib_scenes_actors_actor_.actor.md#angularmomentum)
* [angularVelocity](__classes_lib_scenes_actors_actor_.actor.md#angularvelocity)
* [animation](__classes_lib_scenes_actors_actor_.actor.md#animation)
* [animationFrame](__classes_lib_scenes_actors_actor_.actor.md#animationframe)
* [animations](__classes_lib_scenes_actors_actor_.actor.md#animations)
* [frame](__classes_lib_scenes_actors_actor_.actor.md#frame)
* [friction](__classes_lib_scenes_actors_actor_.actor.md#friction)
* [gravity](__classes_lib_scenes_actors_actor_.actor.md#gravity)
* [momentum](__classes_lib_scenes_actors_actor_.actor.md#momentum)
* [name](__classes_lib_scenes_actors_actor_.actor.md#name)
* [nextAnimation](__classes_lib_scenes_actors_actor_.actor.md#nextanimation)
* [offset](__classes_lib_scenes_actors_actor_.actor.md#offset)
* [opacity](__classes_lib_scenes_actors_actor_.actor.md#opacity)
* [order](__classes_lib_scenes_actors_actor_.actor.md#order)
* [parallax](__classes_lib_scenes_actors_actor_.actor.md#parallax)
* [position](__classes_lib_scenes_actors_actor_.actor.md#position)
* [rotation](__classes_lib_scenes_actors_actor_.actor.md#rotation)
* [scale](__classes_lib_scenes_actors_actor_.actor.md#scale)
* [scene](__classes_lib_scenes_actors_actor_.actor.md#scene)
* [shape](__classes_lib_scenes_actors_actor_.actor.md#shape)
* [size](__classes_lib_scenes_actors_actor_.actor.md#size)
* [sprite](__classes_lib_scenes_actors_actor_.actor.md#sprite)
* [type](__classes_lib_scenes_actors_actor_.actor.md#type)
* [velocity](__classes_lib_scenes_actors_actor_.actor.md#velocity)
* [visible](__classes_lib_scenes_actors_actor_.actor.md#visible)


### Accessors

* [bottom](__classes_lib_scenes_actors_actor_.actor.md#bottom)
* [circumference](__classes_lib_scenes_actors_actor_.actor.md#circumference)
* [left](__classes_lib_scenes_actors_actor_.actor.md#left)
* [radius](__classes_lib_scenes_actors_actor_.actor.md#radius)
* [right](__classes_lib_scenes_actors_actor_.actor.md#right)
* [top](__classes_lib_scenes_actors_actor_.actor.md#top)


### Methods

* [addAnimation](__classes_lib_scenes_actors_actor_.actor.md#addanimation)
* [click](__classes_lib_scenes_actors_actor_.actor.md#click)
* [overlapsWith](__classes_lib_scenes_actors_actor_.actor.md#overlapswith)
* [overlapsWithPoint](__classes_lib_scenes_actors_actor_.actor.md#overlapswithpoint)
* [playAnimation](__classes_lib_scenes_actors_actor_.actor.md#playanimation)
* [render](__classes_lib_scenes_actors_actor_.actor.md#render)
* [renderDebug](__classes_lib_scenes_actors_actor_.actor.md#renderdebug)
* [setAnchor](__classes_lib_scenes_actors_actor_.actor.md#setanchor)
* [snapToEdge](__classes_lib_scenes_actors_actor_.actor.md#snaptoedge)
* [stopAnimation](__classes_lib_scenes_actors_actor_.actor.md#stopanimation)
* [update](__classes_lib_scenes_actors_actor_.actor.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Actor**(scene: *[Scene](__classes_lib_scenes_scene_.scene.md)*, obj?: *`any`*): [Actor](__classes_lib_scenes_actors_actor_.actor.md)


*Defined in [_classes/lib/scenes/actors/Actor.ts:47](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L47)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | [Scene](__classes_lib_scenes_scene_.scene.md)   |  - |
| obj | `any`   |  - |





**Returns:** [Actor](__classes_lib_scenes_actors_actor_.actor.md)

---


## Properties
<a id="angularfriction"></a>

###  angularFriction

**●  angularFriction**:  *[Angle](__classes_lib_utils_angle_.angle.md)*  =  new Angle()

*Defined in [_classes/lib/scenes/actors/Actor.ts:42](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L42)*





___

<a id="angularmomentum"></a>

###  angularMomentum

**●  angularMomentum**:  *`number`*  = 1

*Defined in [_classes/lib/scenes/actors/Actor.ts:41](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L41)*





___

<a id="angularvelocity"></a>

###  angularVelocity

**●  angularVelocity**:  *[Angle](__classes_lib_utils_angle_.angle.md)*  =  new Angle()

*Defined in [_classes/lib/scenes/actors/Actor.ts:40](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L40)*





___

<a id="animation"></a>

### «Optional» animation

**●  animation**:  *[Animation](../interfaces/__classes_lib_scenes_actors_actor_.animation.md)* 

*Defined in [_classes/lib/scenes/actors/Actor.ts:45](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L45)*





___

<a id="animationframe"></a>

###  animationFrame

**●  animationFrame**:  *`number`*  = 0

*Defined in [_classes/lib/scenes/actors/Actor.ts:46](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L46)*





___

<a id="animations"></a>

###  animations

**●  animations**:  *`object`* 

*Defined in [_classes/lib/scenes/actors/Actor.ts:44](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L44)*


#### Type declaration


[index: `string`]: [Animation](../interfaces/__classes_lib_scenes_actors_actor_.animation.md)






___

<a id="frame"></a>

###  frame

**●  frame**:  *`number`*  =  -1

*Defined in [_classes/lib/scenes/actors/Actor.ts:24](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L24)*





___

<a id="friction"></a>

###  friction

**●  friction**:  *`number`*  = 0

*Defined in [_classes/lib/scenes/actors/Actor.ts:39](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L39)*





___

<a id="gravity"></a>

### «Optional» gravity

**●  gravity**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)* 

*Defined in [_classes/lib/scenes/actors/Actor.ts:37](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L37)*





___

<a id="momentum"></a>

###  momentum

**●  momentum**:  *`number`*  = 1

*Defined in [_classes/lib/scenes/actors/Actor.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L38)*





___

<a id="name"></a>

###  name

**●  name**:  *`string`*  = "_"

*Defined in [_classes/lib/scenes/actors/Actor.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L21)*





___

<a id="nextanimation"></a>

### «Optional» nextAnimation

**●  nextAnimation**:  *[Animation](../interfaces/__classes_lib_scenes_actors_actor_.animation.md)* 

*Defined in [_classes/lib/scenes/actors/Actor.ts:47](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L47)*





___

<a id="offset"></a>

###  offset

**●  offset**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Defined in [_classes/lib/scenes/actors/Actor.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L27)*





___

<a id="opacity"></a>

###  opacity

**●  opacity**:  *`number`*  = 1

*Defined in [_classes/lib/scenes/actors/Actor.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L31)*





___

<a id="order"></a>

###  order

**●  order**:  *`number`*  = 0

*Defined in [_classes/lib/scenes/actors/Actor.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L33)*





___

<a id="parallax"></a>

###  parallax

**●  parallax**:  *`number`*  = 1

*Defined in [_classes/lib/scenes/actors/Actor.ts:32](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L32)*





___

<a id="position"></a>

###  position

**●  position**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Defined in [_classes/lib/scenes/actors/Actor.ts:25](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L25)*





___

<a id="rotation"></a>

###  rotation

**●  rotation**:  *[Angle](__classes_lib_utils_angle_.angle.md)*  =  new Angle()

*Defined in [_classes/lib/scenes/actors/Actor.ts:30](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L30)*





___

<a id="scale"></a>

###  scale

**●  scale**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2(1)

*Defined in [_classes/lib/scenes/actors/Actor.ts:26](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L26)*





___

<a id="scene"></a>

###  scene

**●  scene**:  *[Scene](__classes_lib_scenes_scene_.scene.md)* 

*Defined in [_classes/lib/scenes/actors/Actor.ts:49](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L49)*





___

<a id="shape"></a>

###  shape

**●  shape**:  *`string`*  = "aabb"

*Defined in [_classes/lib/scenes/actors/Actor.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L29)*





___

<a id="size"></a>

###  size

**●  size**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2(32)

*Defined in [_classes/lib/scenes/actors/Actor.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L28)*





___

<a id="sprite"></a>

### «Optional» sprite

**●  sprite**:  *[Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)* 

*Defined in [_classes/lib/scenes/actors/Actor.ts:23](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L23)*





___

<a id="type"></a>

###  type

**●  type**:  *`string`*  = "Actor"

*Defined in [_classes/lib/scenes/actors/Actor.ts:22](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L22)*





___

<a id="velocity"></a>

###  velocity

**●  velocity**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Defined in [_classes/lib/scenes/actors/Actor.ts:36](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L36)*





___

<a id="visible"></a>

###  visible

**●  visible**:  *`boolean`*  = true

*Defined in [_classes/lib/scenes/actors/Actor.ts:34](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L34)*





___


## Accessors
<a id="bottom"></a>

###  bottom


getbottom(): `number`

*Defined in [_classes/lib/scenes/actors/Actor.ts:81](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L81)*





**Returns:** `number`



___

<a id="circumference"></a>

###  circumference


getcircumference(): `number`

*Defined in [_classes/lib/scenes/actors/Actor.ts:87](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L87)*





**Returns:** `number`



___

<a id="left"></a>

###  left


getleft(): `number`

*Defined in [_classes/lib/scenes/actors/Actor.ts:72](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L72)*





**Returns:** `number`



___

<a id="radius"></a>

###  radius


getradius(): `number`

*Defined in [_classes/lib/scenes/actors/Actor.ts:84](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L84)*





**Returns:** `number`



___

<a id="right"></a>

###  right


getright(): `number`

*Defined in [_classes/lib/scenes/actors/Actor.ts:78](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L78)*





**Returns:** `number`



___

<a id="top"></a>

###  top


gettop(): `number`

*Defined in [_classes/lib/scenes/actors/Actor.ts:75](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L75)*





**Returns:** `number`



___


## Methods
<a id="addanimation"></a>

###  addAnimation

► **addAnimation**(name: *`string`*, frames: *`number`[]*, speed?: *`number`*): `void`



*Defined in [_classes/lib/scenes/actors/Actor.ts:235](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L235)*



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



*Defined in [_classes/lib/scenes/actors/Actor.ts:256](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L256)*





**Returns:** `void`





___

<a id="overlapswith"></a>

###  overlapsWith

► **overlapsWith**(actor: *[Actor](__classes_lib_scenes_actors_actor_.actor.md)*): `boolean`



*Defined in [_classes/lib/scenes/actors/Actor.ts:186](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L186)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| actor | [Actor](__classes_lib_scenes_actors_actor_.actor.md)   |  - |





**Returns:** `boolean`





___

<a id="overlapswithpoint"></a>

###  overlapsWithPoint

► **overlapsWithPoint**(v: *[Vector2](__classes_lib_utils_vector2_.vector2.md)*): `boolean`



*Defined in [_classes/lib/scenes/actors/Actor.ts:175](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L175)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v | [Vector2](__classes_lib_utils_vector2_.vector2.md)   |  - |





**Returns:** `boolean`





___

<a id="playanimation"></a>

###  playAnimation

► **playAnimation**(name: *`string`*, queue?: *`boolean`*): `void`



*Defined in [_classes/lib/scenes/actors/Actor.ts:242](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L242)*



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



*Defined in [_classes/lib/scenes/actors/Actor.ts:137](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L137)*





**Returns:** `void`





___

<a id="renderdebug"></a>

###  renderDebug

► **renderDebug**(): `void`



*Defined in [_classes/lib/scenes/actors/Actor.ts:142](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L142)*





**Returns:** `void`





___

<a id="setanchor"></a>

###  setAnchor

► **setAnchor**(x: *`number`*, y?: *`number`*): `void`



*Defined in [_classes/lib/scenes/actors/Actor.ts:229](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L229)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| x | `number`  | - |   - |
| y | `number`  |  x |   - |





**Returns:** `void`





___

<a id="snaptoedge"></a>

###  snapToEdge

► **snapToEdge**(obstruction: *[Actor](__classes_lib_scenes_actors_actor_.actor.md)*, overlap?: *`number`*): `void`



*Defined in [_classes/lib/scenes/actors/Actor.ts:199](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L199)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| obstruction | [Actor](__classes_lib_scenes_actors_actor_.actor.md)  | - |   - |
| overlap | `number`  | 0 |   - |





**Returns:** `void`





___

<a id="stopanimation"></a>

###  stopAnimation

► **stopAnimation**(): `void`



*Defined in [_classes/lib/scenes/actors/Actor.ts:252](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L252)*





**Returns:** `void`





___

<a id="update"></a>

###  update

► **update**(): `void`



*Defined in [_classes/lib/scenes/actors/Actor.ts:91](https://github.com/codeartisticninja/cost_of_creation/blob/6562fe6/src/script/_classes/lib/scenes/actors/Actor.ts#L91)*





**Returns:** `void`





___


