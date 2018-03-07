[cost_of_creation](../README.md) > ["_classes/lib/scenes/actors/ParticleEmitter"](../modules/__classes_lib_scenes_actors_particleemitter_.md) > [ParticleEmitter](../classes/__classes_lib_scenes_actors_particleemitter_.particleemitter.md)



# Class: ParticleEmitter


ParticleEmitter class
*__date__*: 04-oct-2017


## Hierarchy


 [Actor](__classes_lib_scenes_actors_actor_.actor.md)

**↳ ParticleEmitter**







## Index

### Constructors

* [constructor](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#constructor)


### Properties

* [angularFriction](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#angularfriction)
* [angularMomentum](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#angularmomentum)
* [angularVelocity](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#angularvelocity)
* [animation](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#animation)
* [animationFrame](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#animationframe)
* [animations](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#animations)
* [duration](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#duration)
* [frame](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#frame)
* [friction](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#friction)
* [gravity](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#gravity)
* [momentum](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#momentum)
* [name](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#name)
* [nextAnimation](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#nextanimation)
* [obj](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#obj)
* [offset](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#offset)
* [opacity](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#opacity)
* [order](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#order)
* [parallax](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#parallax)
* [pool](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#pool)
* [position](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#position)
* [rotation](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#rotation)
* [scale](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#scale)
* [scene](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#scene)
* [shape](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#shape)
* [size](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#size)
* [sprite](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#sprite)
* [type](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#type)
* [velocity](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#velocity)
* [visible](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#visible)


### Accessors

* [bottom](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#bottom)
* [circumference](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#circumference)
* [left](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#left)
* [radius](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#radius)
* [right](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#right)
* [top](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#top)


### Methods

* [addAnimation](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#addanimation)
* [click](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#click)
* [emit](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#emit)
* [overlapsWith](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#overlapswith)
* [overlapsWithPoint](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#overlapswithpoint)
* [playAnimation](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#playanimation)
* [render](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#render)
* [renderDebug](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#renderdebug)
* [setAnchor](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#setanchor)
* [snapToEdge](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#snaptoedge)
* [start](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#start)
* [stop](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#stop)
* [stopAnimation](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#stopanimation)
* [update](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#update)


### Object literals

* [endProps](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#endprops)
* [startProps](__classes_lib_scenes_actors_particleemitter_.particleemitter.md#startprops)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ParticleEmitter**(scene: *[Scene](__classes_lib_scenes_scene_.scene.md)*, obj?: *`any`*): [ParticleEmitter](__classes_lib_scenes_actors_particleemitter_.particleemitter.md)


*Overrides [Actor](__classes_lib_scenes_actors_actor_.actor.md).[constructor](__classes_lib_scenes_actors_actor_.actor.md#constructor)*

*Defined in [_classes/lib/scenes/actors/ParticleEmitter.ts:19](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/ParticleEmitter.ts#L19)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | [Scene](__classes_lib_scenes_scene_.scene.md)   |  - |
| obj | `any`   |  - |





**Returns:** [ParticleEmitter](__classes_lib_scenes_actors_particleemitter_.particleemitter.md)

---


## Properties
<a id="angularfriction"></a>

###  angularFriction

**●  angularFriction**:  *[Angle](__classes_lib_utils_angle_.angle.md)*  =  new Angle()

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[angularFriction](__classes_lib_scenes_actors_actor_.actor.md#angularfriction)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:42](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L42)*





___

<a id="angularmomentum"></a>

###  angularMomentum

**●  angularMomentum**:  *`number`*  = 1

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[angularMomentum](__classes_lib_scenes_actors_actor_.actor.md#angularmomentum)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:41](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L41)*





___

<a id="angularvelocity"></a>

###  angularVelocity

**●  angularVelocity**:  *[Angle](__classes_lib_utils_angle_.angle.md)*  =  new Angle()

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[angularVelocity](__classes_lib_scenes_actors_actor_.actor.md#angularvelocity)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:40](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L40)*





___

<a id="animation"></a>

### «Optional» animation

**●  animation**:  *[Animation](../interfaces/__classes_lib_scenes_actors_actor_.animation.md)* 

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[animation](__classes_lib_scenes_actors_actor_.actor.md#animation)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:45](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L45)*





___

<a id="animationframe"></a>

###  animationFrame

**●  animationFrame**:  *`number`*  = 0

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[animationFrame](__classes_lib_scenes_actors_actor_.actor.md#animationframe)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:46](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L46)*





___

<a id="animations"></a>

###  animations

**●  animations**:  *`object`* 

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[animations](__classes_lib_scenes_actors_actor_.actor.md#animations)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:44](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L44)*


#### Type declaration


[index: `string`]: [Animation](../interfaces/__classes_lib_scenes_actors_actor_.animation.md)






___

<a id="duration"></a>

###  duration

**●  duration**:  *`number`*  = 1024

*Defined in [_classes/lib/scenes/actors/ParticleEmitter.ts:19](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/ParticleEmitter.ts#L19)*





___

<a id="frame"></a>

###  frame

**●  frame**:  *`number`*  =  -1

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[frame](__classes_lib_scenes_actors_actor_.actor.md#frame)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:24](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L24)*





___

<a id="friction"></a>

###  friction

**●  friction**:  *`number`*  = 0

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[friction](__classes_lib_scenes_actors_actor_.actor.md#friction)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:39](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L39)*





___

<a id="gravity"></a>

### «Optional» gravity

**●  gravity**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)* 

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[gravity](__classes_lib_scenes_actors_actor_.actor.md#gravity)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:37](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L37)*





___

<a id="momentum"></a>

###  momentum

**●  momentum**:  *`number`*  = 1

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[momentum](__classes_lib_scenes_actors_actor_.actor.md#momentum)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:38](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L38)*





___

<a id="name"></a>

###  name

**●  name**:  *`string`*  = "_"

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[name](__classes_lib_scenes_actors_actor_.actor.md#name)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L21)*





___

<a id="nextanimation"></a>

### «Optional» nextAnimation

**●  nextAnimation**:  *[Animation](../interfaces/__classes_lib_scenes_actors_actor_.animation.md)* 

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[nextAnimation](__classes_lib_scenes_actors_actor_.actor.md#nextanimation)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:47](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L47)*





___

<a id="obj"></a>

###  obj

**●  obj**:  *`any`* 

*Defined in [_classes/lib/scenes/actors/ParticleEmitter.ts:16](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/ParticleEmitter.ts#L16)*





___

<a id="offset"></a>

###  offset

**●  offset**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[offset](__classes_lib_scenes_actors_actor_.actor.md#offset)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L27)*





___

<a id="opacity"></a>

###  opacity

**●  opacity**:  *`number`*  = 1

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[opacity](__classes_lib_scenes_actors_actor_.actor.md#opacity)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L31)*





___

<a id="order"></a>

###  order

**●  order**:  *`number`*  = 0

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[order](__classes_lib_scenes_actors_actor_.actor.md#order)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:33](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L33)*





___

<a id="parallax"></a>

###  parallax

**●  parallax**:  *`number`*  = 1

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[parallax](__classes_lib_scenes_actors_actor_.actor.md#parallax)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:32](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L32)*





___

<a id="pool"></a>

###  pool

**●  pool**:  *[Tween](__classes_lib_utils_tween_.tween.md)[]*  = []

*Defined in [_classes/lib/scenes/actors/ParticleEmitter.ts:15](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/ParticleEmitter.ts#L15)*





___

<a id="position"></a>

###  position

**●  position**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[position](__classes_lib_scenes_actors_actor_.actor.md#position)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:25](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L25)*





___

<a id="rotation"></a>

###  rotation

**●  rotation**:  *[Angle](__classes_lib_utils_angle_.angle.md)*  =  new Angle()

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[rotation](__classes_lib_scenes_actors_actor_.actor.md#rotation)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:30](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L30)*





___

<a id="scale"></a>

###  scale

**●  scale**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2(1)

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[scale](__classes_lib_scenes_actors_actor_.actor.md#scale)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:26](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L26)*





___

<a id="scene"></a>

###  scene

**●  scene**:  *[Scene](__classes_lib_scenes_scene_.scene.md)* 

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[scene](__classes_lib_scenes_actors_actor_.actor.md#scene)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:49](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L49)*





___

<a id="shape"></a>

###  shape

**●  shape**:  *`string`*  = "aabb"

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[shape](__classes_lib_scenes_actors_actor_.actor.md#shape)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L29)*





___

<a id="size"></a>

###  size

**●  size**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2(32)

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[size](__classes_lib_scenes_actors_actor_.actor.md#size)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L28)*





___

<a id="sprite"></a>

### «Optional» sprite

**●  sprite**:  *[Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)* 

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[sprite](__classes_lib_scenes_actors_actor_.actor.md#sprite)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:23](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L23)*





___

<a id="type"></a>

###  type

**●  type**:  *`string`*  = "Actor"

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[type](__classes_lib_scenes_actors_actor_.actor.md#type)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:22](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L22)*





___

<a id="velocity"></a>

###  velocity

**●  velocity**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[velocity](__classes_lib_scenes_actors_actor_.actor.md#velocity)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:36](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L36)*





___

<a id="visible"></a>

###  visible

**●  visible**:  *`boolean`*  = true

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[visible](__classes_lib_scenes_actors_actor_.actor.md#visible)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:34](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L34)*





___


## Accessors
<a id="bottom"></a>

###  bottom


getbottom(): `number`

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[bottom](__classes_lib_scenes_actors_actor_.actor.md#bottom)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:81](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L81)*





**Returns:** `number`



___

<a id="circumference"></a>

###  circumference


getcircumference(): `number`

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[circumference](__classes_lib_scenes_actors_actor_.actor.md#circumference)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:87](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L87)*





**Returns:** `number`



___

<a id="left"></a>

###  left


getleft(): `number`

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[left](__classes_lib_scenes_actors_actor_.actor.md#left)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:72](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L72)*





**Returns:** `number`



___

<a id="radius"></a>

###  radius


getradius(): `number`

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[radius](__classes_lib_scenes_actors_actor_.actor.md#radius)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:84](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L84)*





**Returns:** `number`



___

<a id="right"></a>

###  right


getright(): `number`

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[right](__classes_lib_scenes_actors_actor_.actor.md#right)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:78](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L78)*





**Returns:** `number`



___

<a id="top"></a>

###  top


gettop(): `number`

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[top](__classes_lib_scenes_actors_actor_.actor.md#top)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:75](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L75)*





**Returns:** `number`



___


## Methods
<a id="addanimation"></a>

###  addAnimation

► **addAnimation**(name: *`string`*, frames: *`number`[]*, speed?: *`number`*): `void`



*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[addAnimation](__classes_lib_scenes_actors_actor_.actor.md#addanimation)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:235](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L235)*



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



*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[click](__classes_lib_scenes_actors_actor_.actor.md#click)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:256](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L256)*





**Returns:** `void`





___

<a id="emit"></a>

###  emit

► **emit**(v?: *[Vector2](__classes_lib_utils_vector2_.vector2.md)*): `void`



*Defined in [_classes/lib/scenes/actors/ParticleEmitter.ts:30](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/ParticleEmitter.ts#L30)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| v | [Vector2](__classes_lib_utils_vector2_.vector2.md)  | this.position |   - |





**Returns:** `void`





___

<a id="overlapswith"></a>

###  overlapsWith

► **overlapsWith**(actor: *[Actor](__classes_lib_scenes_actors_actor_.actor.md)*): `boolean`



*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[overlapsWith](__classes_lib_scenes_actors_actor_.actor.md#overlapswith)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:186](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L186)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| actor | [Actor](__classes_lib_scenes_actors_actor_.actor.md)   |  - |





**Returns:** `boolean`





___

<a id="overlapswithpoint"></a>

###  overlapsWithPoint

► **overlapsWithPoint**(v: *[Vector2](__classes_lib_utils_vector2_.vector2.md)*): `boolean`



*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[overlapsWithPoint](__classes_lib_scenes_actors_actor_.actor.md#overlapswithpoint)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:175](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L175)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v | [Vector2](__classes_lib_utils_vector2_.vector2.md)   |  - |





**Returns:** `boolean`





___

<a id="playanimation"></a>

###  playAnimation

► **playAnimation**(name: *`string`*, queue?: *`boolean`*): `void`



*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[playAnimation](__classes_lib_scenes_actors_actor_.actor.md#playanimation)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:242](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L242)*



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



*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[render](__classes_lib_scenes_actors_actor_.actor.md#render)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:137](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L137)*





**Returns:** `void`





___

<a id="renderdebug"></a>

###  renderDebug

► **renderDebug**(): `void`



*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[renderDebug](__classes_lib_scenes_actors_actor_.actor.md#renderdebug)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:142](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L142)*





**Returns:** `void`





___

<a id="setanchor"></a>

###  setAnchor

► **setAnchor**(x: *`number`*, y?: *`number`*): `void`



*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[setAnchor](__classes_lib_scenes_actors_actor_.actor.md#setanchor)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:229](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L229)*



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



*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[snapToEdge](__classes_lib_scenes_actors_actor_.actor.md#snaptoedge)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:199](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L199)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| obstruction | [Actor](__classes_lib_scenes_actors_actor_.actor.md)  | - |   - |
| overlap | `number`  | 0 |   - |





**Returns:** `void`





___

<a id="start"></a>

###  start

► **start**(interval: *`number`*): `void`



*Defined in [_classes/lib/scenes/actors/ParticleEmitter.ts:43](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/ParticleEmitter.ts#L43)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| interval | `number`   |  - |





**Returns:** `void`





___

<a id="stop"></a>

###  stop

► **stop**(): `void`



*Defined in [_classes/lib/scenes/actors/ParticleEmitter.ts:53](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/ParticleEmitter.ts#L53)*





**Returns:** `void`





___

<a id="stopanimation"></a>

###  stopAnimation

► **stopAnimation**(): `void`



*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[stopAnimation](__classes_lib_scenes_actors_actor_.actor.md#stopanimation)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:252](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L252)*





**Returns:** `void`





___

<a id="update"></a>

###  update

► **update**(): `void`



*Overrides [Actor](__classes_lib_scenes_actors_actor_.actor.md).[update](__classes_lib_scenes_actors_actor_.actor.md#update)*

*Defined in [_classes/lib/scenes/actors/ParticleEmitter.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/ParticleEmitter.ts#L28)*





**Returns:** `void`





___


<a id="endprops"></a>

## Object literal: endProps


<a id="endprops.opacity-1"></a>

###  opacity

**●  opacity**:  *`number`*  = 0

*Defined in [_classes/lib/scenes/actors/ParticleEmitter.ts:18](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/ParticleEmitter.ts#L18)*





___

<a id="startprops"></a>

## Object literal: startProps


<a id="startprops.opacity-2"></a>

###  opacity

**●  opacity**:  *`number`*  = 1

*Defined in [_classes/lib/scenes/actors/ParticleEmitter.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/ParticleEmitter.ts#L17)*





___
<a id="startprops.velocity-1"></a>

###  velocity

** velocity**:  *`object`* 

*Defined in [_classes/lib/scenes/actors/ParticleEmitter.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/ParticleEmitter.ts#L17)*




<a id="startprops.velocity-1.angle"></a>

###  angle

**●  angle**:  *`number`[]*  = [-Math.PI,Math.PI]

*Defined in [_classes/lib/scenes/actors/ParticleEmitter.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/ParticleEmitter.ts#L17)*





___
<a id="startprops.velocity-1.magnitude"></a>

###  magnitude

**●  magnitude**:  *`number`[]*  =  [1,8]

*Defined in [_classes/lib/scenes/actors/ParticleEmitter.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/ParticleEmitter.ts#L17)*





___

___


