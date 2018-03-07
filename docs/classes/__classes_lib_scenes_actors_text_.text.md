[cost_of_creation](../README.md) > ["_classes/lib/scenes/actors/Text"](../modules/__classes_lib_scenes_actors_text_.md) > [Text](../classes/__classes_lib_scenes_actors_text_.text.md)



# Class: Text


Text class
*__date__*: 07-mar-2018


## Hierarchy


 [Actor](__classes_lib_scenes_actors_actor_.actor.md)

**↳ Text**







## Index

### Constructors

* [constructor](__classes_lib_scenes_actors_text_.text.md#constructor)


### Properties

* [_textAlign](__classes_lib_scenes_actors_text_.text.md#_textalign)
* [angularFriction](__classes_lib_scenes_actors_text_.text.md#angularfriction)
* [angularMomentum](__classes_lib_scenes_actors_text_.text.md#angularmomentum)
* [angularVelocity](__classes_lib_scenes_actors_text_.text.md#angularvelocity)
* [animation](__classes_lib_scenes_actors_text_.text.md#animation)
* [animationFrame](__classes_lib_scenes_actors_text_.text.md#animationframe)
* [animations](__classes_lib_scenes_actors_text_.text.md#animations)
* [color](__classes_lib_scenes_actors_text_.text.md#color)
* [fontFamily](__classes_lib_scenes_actors_text_.text.md#fontfamily)
* [fontSize](__classes_lib_scenes_actors_text_.text.md#fontsize)
* [fontStyle](__classes_lib_scenes_actors_text_.text.md#fontstyle)
* [frame](__classes_lib_scenes_actors_text_.text.md#frame)
* [friction](__classes_lib_scenes_actors_text_.text.md#friction)
* [gravity](__classes_lib_scenes_actors_text_.text.md#gravity)
* [lineHeight](__classes_lib_scenes_actors_text_.text.md#lineheight)
* [lines](__classes_lib_scenes_actors_text_.text.md#lines)
* [momentum](__classes_lib_scenes_actors_text_.text.md#momentum)
* [name](__classes_lib_scenes_actors_text_.text.md#name)
* [nextAnimation](__classes_lib_scenes_actors_text_.text.md#nextanimation)
* [offset](__classes_lib_scenes_actors_text_.text.md#offset)
* [opacity](__classes_lib_scenes_actors_text_.text.md#opacity)
* [order](__classes_lib_scenes_actors_text_.text.md#order)
* [outline](__classes_lib_scenes_actors_text_.text.md#outline)
* [parallax](__classes_lib_scenes_actors_text_.text.md#parallax)
* [position](__classes_lib_scenes_actors_text_.text.md#position)
* [rotation](__classes_lib_scenes_actors_text_.text.md#rotation)
* [scale](__classes_lib_scenes_actors_text_.text.md#scale)
* [scene](__classes_lib_scenes_actors_text_.text.md#scene)
* [shape](__classes_lib_scenes_actors_text_.text.md#shape)
* [size](__classes_lib_scenes_actors_text_.text.md#size)
* [sprite](__classes_lib_scenes_actors_text_.text.md#sprite)
* [textBaseline](__classes_lib_scenes_actors_text_.text.md#textbaseline)
* [type](__classes_lib_scenes_actors_text_.text.md#type)
* [velocity](__classes_lib_scenes_actors_text_.text.md#velocity)
* [visible](__classes_lib_scenes_actors_text_.text.md#visible)


### Accessors

* [bottom](__classes_lib_scenes_actors_text_.text.md#bottom)
* [circumference](__classes_lib_scenes_actors_text_.text.md#circumference)
* [left](__classes_lib_scenes_actors_text_.text.md#left)
* [radius](__classes_lib_scenes_actors_text_.text.md#radius)
* [right](__classes_lib_scenes_actors_text_.text.md#right)
* [text](__classes_lib_scenes_actors_text_.text.md#text)
* [textAlign](__classes_lib_scenes_actors_text_.text.md#textalign)
* [top](__classes_lib_scenes_actors_text_.text.md#top)


### Methods

* [addAnimation](__classes_lib_scenes_actors_text_.text.md#addanimation)
* [click](__classes_lib_scenes_actors_text_.text.md#click)
* [overlapsWith](__classes_lib_scenes_actors_text_.text.md#overlapswith)
* [overlapsWithPoint](__classes_lib_scenes_actors_text_.text.md#overlapswithpoint)
* [playAnimation](__classes_lib_scenes_actors_text_.text.md#playanimation)
* [render](__classes_lib_scenes_actors_text_.text.md#render)
* [renderDebug](__classes_lib_scenes_actors_text_.text.md#renderdebug)
* [setAnchor](__classes_lib_scenes_actors_text_.text.md#setanchor)
* [snapToEdge](__classes_lib_scenes_actors_text_.text.md#snaptoedge)
* [stopAnimation](__classes_lib_scenes_actors_text_.text.md#stopanimation)
* [update](__classes_lib_scenes_actors_text_.text.md#update)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Text**(scene: *[Scene](__classes_lib_scenes_scene_.scene.md)*, obj?: *`any`*): [Text](__classes_lib_scenes_actors_text_.text.md)





**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| scene | [Scene](__classes_lib_scenes_scene_.scene.md)   |  - |
| obj | `any`   |  - |





**Returns:** [Text](__classes_lib_scenes_actors_text_.text.md)

---


## Properties
<a id="_textalign"></a>

###  _textAlign

**●  _textAlign**:  *`string`*  = "left"






___

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

<a id="color"></a>

###  color

**●  color**:  *`string`*  = ""






___

<a id="fontfamily"></a>

###  fontFamily

**●  fontFamily**:  *`string`*  = ""






___

<a id="fontsize"></a>

###  fontSize

**●  fontSize**:  *`number`*  = 20






___

<a id="fontstyle"></a>

###  fontStyle

**●  fontStyle**:  *`string`*  = ""






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

<a id="lineheight"></a>

###  lineHeight

**●  lineHeight**:  *`number`*  = 1






___

<a id="lines"></a>

###  lines

**●  lines**:  *`string`[]*  =  []






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

<a id="outline"></a>

###  outline

**●  outline**:  *`string`*  = ""






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

<a id="textbaseline"></a>

###  textBaseline

**●  textBaseline**:  *`string`*  = "top"






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

<a id="text"></a>

###  text


gettext(): `string`settext(txt: *`string`*): `void`






**Returns:** `string`




**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| txt | `string`   |  - |





**Returns:** `void`



___

<a id="textalign"></a>

###  textAlign


gettextAlign(): `string`settextAlign(val: *`string`*): `void`






**Returns:** `string`




**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| val | `string`   |  - |





**Returns:** `void`



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


