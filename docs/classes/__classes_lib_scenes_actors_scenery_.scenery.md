[cost_of_creation](../README.md) > ["_classes/lib/scenes/actors/Scenery"](../modules/__classes_lib_scenes_actors_scenery_.md) > [Scenery](../classes/__classes_lib_scenes_actors_scenery_.scenery.md)



# Class: Scenery


Scenery class
*__date__*: 10-oct-2017


## Hierarchy


 [Actor](__classes_lib_scenes_actors_actor_.actor.md)

**↳ Scenery**







## Index

### Constructors

* [constructor](__classes_lib_scenes_actors_scenery_.scenery.md#constructor)


### Properties

* [angularFriction](__classes_lib_scenes_actors_scenery_.scenery.md#angularfriction)
* [angularMomentum](__classes_lib_scenes_actors_scenery_.scenery.md#angularmomentum)
* [angularVelocity](__classes_lib_scenes_actors_scenery_.scenery.md#angularvelocity)
* [animation](__classes_lib_scenes_actors_scenery_.scenery.md#animation)
* [animationFrame](__classes_lib_scenes_actors_scenery_.scenery.md#animationframe)
* [animations](__classes_lib_scenes_actors_scenery_.scenery.md#animations)
* [frame](__classes_lib_scenes_actors_scenery_.scenery.md#frame)
* [friction](__classes_lib_scenes_actors_scenery_.scenery.md#friction)
* [gravity](__classes_lib_scenes_actors_scenery_.scenery.md#gravity)
* [img](__classes_lib_scenes_actors_scenery_.scenery.md#img)
* [momentum](__classes_lib_scenes_actors_scenery_.scenery.md#momentum)
* [name](__classes_lib_scenes_actors_scenery_.scenery.md#name)
* [nextAnimation](__classes_lib_scenes_actors_scenery_.scenery.md#nextanimation)
* [offset](__classes_lib_scenes_actors_scenery_.scenery.md#offset)
* [opacity](__classes_lib_scenes_actors_scenery_.scenery.md#opacity)
* [order](__classes_lib_scenes_actors_scenery_.scenery.md#order)
* [parallax](__classes_lib_scenes_actors_scenery_.scenery.md#parallax)
* [position](__classes_lib_scenes_actors_scenery_.scenery.md#position)
* [rotation](__classes_lib_scenes_actors_scenery_.scenery.md#rotation)
* [scale](__classes_lib_scenes_actors_scenery_.scenery.md#scale)
* [scene](__classes_lib_scenes_actors_scenery_.scenery.md#scene)
* [shape](__classes_lib_scenes_actors_scenery_.scenery.md#shape)
* [size](__classes_lib_scenes_actors_scenery_.scenery.md#size)
* [sprite](__classes_lib_scenes_actors_scenery_.scenery.md#sprite)
* [type](__classes_lib_scenes_actors_scenery_.scenery.md#type)
* [velocity](__classes_lib_scenes_actors_scenery_.scenery.md#velocity)
* [visible](__classes_lib_scenes_actors_scenery_.scenery.md#visible)


### Accessors

* [bottom](__classes_lib_scenes_actors_scenery_.scenery.md#bottom)
* [circumference](__classes_lib_scenes_actors_scenery_.scenery.md#circumference)
* [left](__classes_lib_scenes_actors_scenery_.scenery.md#left)
* [radius](__classes_lib_scenes_actors_scenery_.scenery.md#radius)
* [right](__classes_lib_scenes_actors_scenery_.scenery.md#right)
* [top](__classes_lib_scenes_actors_scenery_.scenery.md#top)


### Methods

* [addAnimation](__classes_lib_scenes_actors_scenery_.scenery.md#addanimation)
* [click](__classes_lib_scenes_actors_scenery_.scenery.md#click)
* [overlapsWith](__classes_lib_scenes_actors_scenery_.scenery.md#overlapswith)
* [overlapsWithPoint](__classes_lib_scenes_actors_scenery_.scenery.md#overlapswithpoint)
* [playAnimation](__classes_lib_scenes_actors_scenery_.scenery.md#playanimation)
* [render](__classes_lib_scenes_actors_scenery_.scenery.md#render)
* [renderDebug](__classes_lib_scenes_actors_scenery_.scenery.md#renderdebug)
* [setAnchor](__classes_lib_scenes_actors_scenery_.scenery.md#setanchor)
* [snapToEdge](__classes_lib_scenes_actors_scenery_.scenery.md#snaptoedge)
* [stopAnimation](__classes_lib_scenes_actors_scenery_.scenery.md#stopanimation)
* [update](__classes_lib_scenes_actors_scenery_.scenery.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Scenery**(scene: *[Scene](__classes_lib_scenes_scene_.scene.md)*, obj: *`any`*): [Scenery](__classes_lib_scenes_actors_scenery_.scenery.md)





**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | [Scene](__classes_lib_scenes_scene_.scene.md)   |  - |
| obj | `any`   |  - |





**Returns:** [Scenery](__classes_lib_scenes_actors_scenery_.scenery.md)

---


## Properties
<a id="angularfriction"></a>

###  angularFriction

**●  angularFriction**:  *[Angle](__classes_lib_utils_angle_.angle.md)*  =  new Angle()






___

<a id="angularmomentum"></a>

###  angularMomentum

**●  angularMomentum**:  *`number`*  = 1






___

<a id="angularvelocity"></a>

###  angularVelocity

**●  angularVelocity**:  *[Angle](__classes_lib_utils_angle_.angle.md)*  =  new Angle()






___

<a id="animation"></a>

### «Optional» animation

**●  animation**:  *[Animation](../interfaces/__classes_lib_scenes_actors_actor_.animation.md)* 






___

<a id="animationframe"></a>

###  animationFrame

**●  animationFrame**:  *`number`*  = 0






___

<a id="animations"></a>

###  animations

**●  animations**:  *`object`* 



#### Type declaration


[index: `string`]: [Animation](../interfaces/__classes_lib_scenes_actors_actor_.animation.md)






___

<a id="frame"></a>

###  frame

**●  frame**:  *`number`*  =  -1






___

<a id="friction"></a>

###  friction

**●  friction**:  *`number`*  = 0






___

<a id="gravity"></a>

### «Optional» gravity

**●  gravity**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)* 






___

<a id="img"></a>

###  img

**●  img**:  *`HTMLImageElement`*  =  new Image()






___

<a id="momentum"></a>

###  momentum

**●  momentum**:  *`number`*  = 1






___

<a id="name"></a>

###  name

**●  name**:  *`string`*  = "_"






___

<a id="nextanimation"></a>

### «Optional» nextAnimation

**●  nextAnimation**:  *[Animation](../interfaces/__classes_lib_scenes_actors_actor_.animation.md)* 






___

<a id="offset"></a>

###  offset

**●  offset**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()






___

<a id="opacity"></a>

###  opacity

**●  opacity**:  *`number`*  = 1






___

<a id="order"></a>

###  order

**●  order**:  *`number`*  = 0






___

<a id="parallax"></a>

###  parallax

**●  parallax**:  *`number`*  = 1






___

<a id="position"></a>

###  position

**●  position**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()






___

<a id="rotation"></a>

###  rotation

**●  rotation**:  *[Angle](__classes_lib_utils_angle_.angle.md)*  =  new Angle()






___

<a id="scale"></a>

###  scale

**●  scale**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2(1)






___

<a id="scene"></a>

###  scene

**●  scene**:  *[Scene](__classes_lib_scenes_scene_.scene.md)* 






___

<a id="shape"></a>

###  shape

**●  shape**:  *`string`*  = "aabb"






___

<a id="size"></a>

###  size

**●  size**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2(32)






___

<a id="sprite"></a>

### «Optional» sprite

**●  sprite**:  *[Sprite](__classes_lib_scenes_actors_sprite_.sprite.md)* 






___

<a id="type"></a>

###  type

**●  type**:  *`string`*  = "Actor"






___

<a id="velocity"></a>

###  velocity

**●  velocity**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()






___

<a id="visible"></a>

###  visible

**●  visible**:  *`boolean`*  = true






___


## Accessors
<a id="bottom"></a>

###  bottom


getbottom(): `number`






**Returns:** `number`



___

<a id="circumference"></a>

###  circumference


getcircumference(): `number`






**Returns:** `number`



___

<a id="left"></a>

###  left


getleft(): `number`






**Returns:** `number`



___

<a id="radius"></a>

###  radius


getradius(): `number`






**Returns:** `number`



___

<a id="right"></a>

###  right


getright(): `number`






**Returns:** `number`



___

<a id="top"></a>

###  top


gettop(): `number`






**Returns:** `number`



___


## Methods
<a id="addanimation"></a>

###  addAnimation

► **addAnimation**(name: *`string`*, frames: *`number`[]*, speed?: *`number`*): `void`






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








**Returns:** `void`





___

<a id="overlapswith"></a>

###  overlapsWith

► **overlapsWith**(actor: *[Actor](__classes_lib_scenes_actors_actor_.actor.md)*): `boolean`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| actor | [Actor](__classes_lib_scenes_actors_actor_.actor.md)   |  - |





**Returns:** `boolean`





___

<a id="overlapswithpoint"></a>

###  overlapsWithPoint

► **overlapsWithPoint**(v: *[Vector2](__classes_lib_utils_vector2_.vector2.md)*): `boolean`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| v | [Vector2](__classes_lib_utils_vector2_.vector2.md)   |  - |





**Returns:** `boolean`





___

<a id="playanimation"></a>

###  playAnimation

► **playAnimation**(name: *`string`*, queue?: *`boolean`*): `void`






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








**Returns:** `void`





___

<a id="renderdebug"></a>

###  renderDebug

► **renderDebug**(): `void`








**Returns:** `void`





___

<a id="setanchor"></a>

###  setAnchor

► **setAnchor**(x: *`number`*, y?: *`number`*): `void`






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








**Returns:** `void`





___

<a id="update"></a>

###  update

► **update**(): `void`








**Returns:** `void`





___


