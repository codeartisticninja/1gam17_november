[cost_of_creation](../README.md) > ["_classes/scenes/actors/Puddle"](../modules/__classes_scenes_actors_puddle_.md) > [Puddle](../classes/__classes_scenes_actors_puddle_.puddle.md)



# Class: Puddle


Puddle class

## Hierarchy


 [Actor](__classes_lib_scenes_actors_actor_.actor.md)

**↳ Puddle**







## Index

### Constructors

* [constructor](__classes_scenes_actors_puddle_.puddle.md#constructor)


### Properties

* [angularFriction](__classes_scenes_actors_puddle_.puddle.md#angularfriction)
* [angularMomentum](__classes_scenes_actors_puddle_.puddle.md#angularmomentum)
* [angularVelocity](__classes_scenes_actors_puddle_.puddle.md#angularvelocity)
* [animation](__classes_scenes_actors_puddle_.puddle.md#animation)
* [animationFrame](__classes_scenes_actors_puddle_.puddle.md#animationframe)
* [animations](__classes_scenes_actors_puddle_.puddle.md#animations)
* [dna](__classes_scenes_actors_puddle_.puddle.md#dna)
* [frame](__classes_scenes_actors_puddle_.puddle.md#frame)
* [friction](__classes_scenes_actors_puddle_.puddle.md#friction)
* [gravity](__classes_scenes_actors_puddle_.puddle.md#gravity)
* [inkColor](__classes_scenes_actors_puddle_.puddle.md#inkcolor)
* [inkLeft](__classes_scenes_actors_puddle_.puddle.md#inkleft)
* [momentum](__classes_scenes_actors_puddle_.puddle.md#momentum)
* [name](__classes_scenes_actors_puddle_.puddle.md#name)
* [nextAnimation](__classes_scenes_actors_puddle_.puddle.md#nextanimation)
* [offset](__classes_scenes_actors_puddle_.puddle.md#offset)
* [opacity](__classes_scenes_actors_puddle_.puddle.md#opacity)
* [order](__classes_scenes_actors_puddle_.puddle.md#order)
* [parallax](__classes_scenes_actors_puddle_.puddle.md#parallax)
* [position](__classes_scenes_actors_puddle_.puddle.md#position)
* [rotation](__classes_scenes_actors_puddle_.puddle.md#rotation)
* [scale](__classes_scenes_actors_puddle_.puddle.md#scale)
* [scene](__classes_scenes_actors_puddle_.puddle.md#scene)
* [shape](__classes_scenes_actors_puddle_.puddle.md#shape)
* [size](__classes_scenes_actors_puddle_.puddle.md#size)
* [sprite](__classes_scenes_actors_puddle_.puddle.md#sprite)
* [timeToSync](__classes_scenes_actors_puddle_.puddle.md#timetosync)
* [type](__classes_scenes_actors_puddle_.puddle.md#type)
* [velocity](__classes_scenes_actors_puddle_.puddle.md#velocity)
* [visible](__classes_scenes_actors_puddle_.puddle.md#visible)


### Accessors

* [bottom](__classes_scenes_actors_puddle_.puddle.md#bottom)
* [circumference](__classes_scenes_actors_puddle_.puddle.md#circumference)
* [left](__classes_scenes_actors_puddle_.puddle.md#left)
* [radius](__classes_scenes_actors_puddle_.puddle.md#radius)
* [right](__classes_scenes_actors_puddle_.puddle.md#right)
* [top](__classes_scenes_actors_puddle_.puddle.md#top)


### Methods

* [addAnimation](__classes_scenes_actors_puddle_.puddle.md#addanimation)
* [click](__classes_scenes_actors_puddle_.puddle.md#click)
* [overlapsWith](__classes_scenes_actors_puddle_.puddle.md#overlapswith)
* [overlapsWithPoint](__classes_scenes_actors_puddle_.puddle.md#overlapswithpoint)
* [playAnimation](__classes_scenes_actors_puddle_.puddle.md#playanimation)
* [render](__classes_scenes_actors_puddle_.puddle.md#render)
* [renderDebug](__classes_scenes_actors_puddle_.puddle.md#renderdebug)
* [sendPatch](__classes_scenes_actors_puddle_.puddle.md#sendpatch)
* [setAnchor](__classes_scenes_actors_puddle_.puddle.md#setanchor)
* [snapToEdge](__classes_scenes_actors_puddle_.puddle.md#snaptoedge)
* [stopAnimation](__classes_scenes_actors_puddle_.puddle.md#stopanimation)
* [sync](__classes_scenes_actors_puddle_.puddle.md#sync)
* [toObj](__classes_scenes_actors_puddle_.puddle.md#toobj)
* [update](__classes_scenes_actors_puddle_.puddle.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Puddle**(scene: *[PaintingScene](__classes_scenes_paintingscene_.paintingscene.md)*, obj: *`any`*): [Puddle](__classes_scenes_actors_puddle_.puddle.md)





**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | [PaintingScene](__classes_scenes_paintingscene_.paintingscene.md)   |  - |
| obj | `any`   |  - |





**Returns:** [Puddle](__classes_scenes_actors_puddle_.puddle.md)

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

<a id="dna"></a>

###  dna

**●  dna**:  *`any`* 






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

<a id="inkcolor"></a>

###  inkColor

**●  inkColor**:  *[HSL](__classes_hsl_.hsl.md)*  =  new HSL()






___

<a id="inkleft"></a>

###  inkLeft

**●  inkLeft**:  *`number`*  = 0






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

**●  scene**:  *[PaintingScene](__classes_scenes_paintingscene_.paintingscene.md)* 






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

<a id="timetosync"></a>

###  timeToSync

**●  timeToSync**:  *`number`*  =  -1






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

<a id="sendpatch"></a>

###  sendPatch

► **sendPatch**(): `void`








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

<a id="sync"></a>

###  sync

► **sync**(): `void`








**Returns:** `void`





___

<a id="toobj"></a>

###  toObj

► **toObj**(): `any`








**Returns:** `any`





___

<a id="update"></a>

###  update

► **update**(): `void`








**Returns:** `void`





___


