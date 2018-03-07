[cost_of_creation](../README.md) > ["_classes/scenes/actors/Aye"](../modules/__classes_scenes_actors_aye_.md) > [Aye](../classes/__classes_scenes_actors_aye_.aye.md)



# Class: Aye


Aye class

## Hierarchy


 [Actor](__classes_lib_scenes_actors_actor_.actor.md)

**↳ Aye**







## Index

### Constructors

* [constructor](__classes_scenes_actors_aye_.aye.md#constructor)


### Properties

* [angularFriction](__classes_scenes_actors_aye_.aye.md#angularfriction)
* [angularMomentum](__classes_scenes_actors_aye_.aye.md#angularmomentum)
* [angularVelocity](__classes_scenes_actors_aye_.aye.md#angularvelocity)
* [animation](__classes_scenes_actors_aye_.aye.md#animation)
* [animationFrame](__classes_scenes_actors_aye_.aye.md#animationframe)
* [animations](__classes_scenes_actors_aye_.aye.md#animations)
* [dna](__classes_scenes_actors_aye_.aye.md#dna)
* [frame](__classes_scenes_actors_aye_.aye.md#frame)
* [friction](__classes_scenes_actors_aye_.aye.md#friction)
* [gravity](__classes_scenes_actors_aye_.aye.md#gravity)
* [inPuddle](__classes_scenes_actors_aye_.aye.md#inpuddle)
* [inkColor](__classes_scenes_actors_aye_.aye.md#inkcolor)
* [inkLeft](__classes_scenes_actors_aye_.aye.md#inkleft)
* [momentum](__classes_scenes_actors_aye_.aye.md#momentum)
* [name](__classes_scenes_actors_aye_.aye.md#name)
* [nextAnimation](__classes_scenes_actors_aye_.aye.md#nextanimation)
* [offset](__classes_scenes_actors_aye_.aye.md#offset)
* [opacity](__classes_scenes_actors_aye_.aye.md#opacity)
* [order](__classes_scenes_actors_aye_.aye.md#order)
* [parallax](__classes_scenes_actors_aye_.aye.md#parallax)
* [position](__classes_scenes_actors_aye_.aye.md#position)
* [rotation](__classes_scenes_actors_aye_.aye.md#rotation)
* [scale](__classes_scenes_actors_aye_.aye.md#scale)
* [scene](__classes_scenes_actors_aye_.aye.md#scene)
* [shape](__classes_scenes_actors_aye_.aye.md#shape)
* [size](__classes_scenes_actors_aye_.aye.md#size)
* [sprite](__classes_scenes_actors_aye_.aye.md#sprite)
* [suck](__classes_scenes_actors_aye_.aye.md#suck)
* [target](__classes_scenes_actors_aye_.aye.md#target)
* [type](__classes_scenes_actors_aye_.aye.md#type)
* [velocity](__classes_scenes_actors_aye_.aye.md#velocity)
* [visible](__classes_scenes_actors_aye_.aye.md#visible)


### Accessors

* [bottom](__classes_scenes_actors_aye_.aye.md#bottom)
* [circumference](__classes_scenes_actors_aye_.aye.md#circumference)
* [left](__classes_scenes_actors_aye_.aye.md#left)
* [radius](__classes_scenes_actors_aye_.aye.md#radius)
* [right](__classes_scenes_actors_aye_.aye.md#right)
* [top](__classes_scenes_actors_aye_.aye.md#top)


### Methods

* [addAnimation](__classes_scenes_actors_aye_.aye.md#addanimation)
* [click](__classes_scenes_actors_aye_.aye.md#click)
* [die](__classes_scenes_actors_aye_.aye.md#die)
* [goTo](__classes_scenes_actors_aye_.aye.md#goto)
* [overlapsWith](__classes_scenes_actors_aye_.aye.md#overlapswith)
* [overlapsWithPoint](__classes_scenes_actors_aye_.aye.md#overlapswithpoint)
* [playAnimation](__classes_scenes_actors_aye_.aye.md#playanimation)
* [render](__classes_scenes_actors_aye_.aye.md#render)
* [renderDebug](__classes_scenes_actors_aye_.aye.md#renderdebug)
* [sendPatch](__classes_scenes_actors_aye_.aye.md#sendpatch)
* [setAnchor](__classes_scenes_actors_aye_.aye.md#setanchor)
* [snapToEdge](__classes_scenes_actors_aye_.aye.md#snaptoedge)
* [stop](__classes_scenes_actors_aye_.aye.md#stop)
* [stopAnimation](__classes_scenes_actors_aye_.aye.md#stopanimation)
* [toObj](__classes_scenes_actors_aye_.aye.md#toobj)
* [update](__classes_scenes_actors_aye_.aye.md#update)
* [wakeUp](__classes_scenes_actors_aye_.aye.md#wakeup)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Aye**(scene: *[PaintingScene](__classes_scenes_paintingscene_.paintingscene.md)*, obj: *`any`*): [Aye](__classes_scenes_actors_aye_.aye.md)





**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | [PaintingScene](__classes_scenes_paintingscene_.paintingscene.md)   |  - |
| obj | `any`   |  - |





**Returns:** [Aye](__classes_scenes_actors_aye_.aye.md)

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

<a id="inpuddle"></a>

###  inPuddle

**●  inPuddle**:  *`number`*  = 0






___

<a id="inkcolor"></a>

###  inkColor

**●  inkColor**:  *[HSL](__classes_hsl_.hsl.md)*  =  new HSL()






___

<a id="inkleft"></a>

###  inkLeft

**●  inkLeft**:  *`number`*  = 0.25






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

<a id="suck"></a>

###  suck

**●  suck**:  *`boolean`*  = true






___

<a id="target"></a>

### «Optional» target

**●  target**:  *[Vector2](__classes_lib_utils_vector2_.vector2.md)* 






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

<a id="die"></a>

###  die

► **die**(): `void`








**Returns:** `void`





___

<a id="goto"></a>

###  goTo

► **goTo**(pos: *[Vector2](__classes_lib_utils_vector2_.vector2.md)*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pos | [Vector2](__classes_lib_utils_vector2_.vector2.md)   |  - |





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

<a id="stop"></a>

###  stop

► **stop**(): `void`








**Returns:** `void`





___

<a id="stopanimation"></a>

###  stopAnimation

► **stopAnimation**(): `void`








**Returns:** `void`





___

<a id="toobj"></a>

###  toObj

► **toObj**(): `object`








**Returns:** `object`





___

<a id="update"></a>

###  update

► **update**(): `void`








**Returns:** `void`





___

<a id="wakeup"></a>

###  wakeUp

► **wakeUp**(): `void`








**Returns:** `void`





___


