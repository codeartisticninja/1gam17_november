[cost_of_creation](../README.md) > ["_classes/scenes/actors/Tile"](../modules/__classes_scenes_actors_tile_.md) > [Tile](../classes/__classes_scenes_actors_tile_.tile.md)



# Class: Tile


Tile class

## Hierarchy


 [Actor](__classes_lib_scenes_actors_actor_.actor.md)

**↳ Tile**







## Index

### Constructors

* [constructor](__classes_scenes_actors_tile_.tile.md#constructor)


### Properties

* [angularFriction](__classes_scenes_actors_tile_.tile.md#angularfriction)
* [angularMomentum](__classes_scenes_actors_tile_.tile.md#angularmomentum)
* [angularVelocity](__classes_scenes_actors_tile_.tile.md#angularvelocity)
* [animation](__classes_scenes_actors_tile_.tile.md#animation)
* [animationFrame](__classes_scenes_actors_tile_.tile.md#animationframe)
* [animations](__classes_scenes_actors_tile_.tile.md#animations)
* [col](__classes_scenes_actors_tile_.tile.md#col)
* [frame](__classes_scenes_actors_tile_.tile.md#frame)
* [friction](__classes_scenes_actors_tile_.tile.md#friction)
* [gravity](__classes_scenes_actors_tile_.tile.md#gravity)
* [img](__classes_scenes_actors_tile_.tile.md#img)
* [momentum](__classes_scenes_actors_tile_.tile.md#momentum)
* [name](__classes_scenes_actors_tile_.tile.md#name)
* [nextAnimation](__classes_scenes_actors_tile_.tile.md#nextanimation)
* [offset](__classes_scenes_actors_tile_.tile.md#offset)
* [opacity](__classes_scenes_actors_tile_.tile.md#opacity)
* [order](__classes_scenes_actors_tile_.tile.md#order)
* [parallax](__classes_scenes_actors_tile_.tile.md#parallax)
* [position](__classes_scenes_actors_tile_.tile.md#position)
* [rotation](__classes_scenes_actors_tile_.tile.md#rotation)
* [row](__classes_scenes_actors_tile_.tile.md#row)
* [scale](__classes_scenes_actors_tile_.tile.md#scale)
* [scene](__classes_scenes_actors_tile_.tile.md#scene)
* [shape](__classes_scenes_actors_tile_.tile.md#shape)
* [size](__classes_scenes_actors_tile_.tile.md#size)
* [sprite](__classes_scenes_actors_tile_.tile.md#sprite)
* [type](__classes_scenes_actors_tile_.tile.md#type)
* [velocity](__classes_scenes_actors_tile_.tile.md#velocity)
* [visible](__classes_scenes_actors_tile_.tile.md#visible)


### Accessors

* [bottom](__classes_scenes_actors_tile_.tile.md#bottom)
* [circumference](__classes_scenes_actors_tile_.tile.md#circumference)
* [left](__classes_scenes_actors_tile_.tile.md#left)
* [radius](__classes_scenes_actors_tile_.tile.md#radius)
* [right](__classes_scenes_actors_tile_.tile.md#right)
* [top](__classes_scenes_actors_tile_.tile.md#top)


### Methods

* [addAnimation](__classes_scenes_actors_tile_.tile.md#addanimation)
* [assign](__classes_scenes_actors_tile_.tile.md#assign)
* [click](__classes_scenes_actors_tile_.tile.md#click)
* [overlapsWith](__classes_scenes_actors_tile_.tile.md#overlapswith)
* [overlapsWithPoint](__classes_scenes_actors_tile_.tile.md#overlapswithpoint)
* [playAnimation](__classes_scenes_actors_tile_.tile.md#playanimation)
* [render](__classes_scenes_actors_tile_.tile.md#render)
* [renderDebug](__classes_scenes_actors_tile_.tile.md#renderdebug)
* [setAnchor](__classes_scenes_actors_tile_.tile.md#setanchor)
* [snapToEdge](__classes_scenes_actors_tile_.tile.md#snaptoedge)
* [stopAnimation](__classes_scenes_actors_tile_.tile.md#stopanimation)
* [update](__classes_scenes_actors_tile_.tile.md#update)
* [updateTile](__classes_scenes_actors_tile_.tile.md#updatetile)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Tile**(scene: *[Scene](__classes_lib_scenes_scene_.scene.md)*, obj: *`any`*): [Tile](__classes_scenes_actors_tile_.tile.md)





**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | [Scene](__classes_lib_scenes_scene_.scene.md)   |  - |
| obj | `any`   |  - |





**Returns:** [Tile](__classes_scenes_actors_tile_.tile.md)

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

<a id="col"></a>

###  col

**●  col**:  *`number`*  =  NaN






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

**●  img**:  *`HTMLImageElement`* 






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

<a id="row"></a>

###  row

**●  row**:  *`number`*  =  NaN






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

<a id="assign"></a>

###  assign

► **assign**(col?: *`number`*, row?: *`number`*): `void`






**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| col | `number`  |  this.col |   - |
| row | `number`  |  this.row |   - |





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

<a id="updatetile"></a>

### «Static» updateTile

► **updateTile**(col: *`number`*, row: *`number`*): `any`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| col | `number`   |  - |
| row | `number`   |  - |





**Returns:** `any`





___


