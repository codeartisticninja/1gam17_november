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


*Overrides [Actor](__classes_lib_scenes_actors_actor_.actor.md).[constructor](__classes_lib_scenes_actors_actor_.actor.md#constructor)*

*Defined in [_classes/lib/scenes/actors/Text.ts:47](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Text.ts#L47)*



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

*Defined in [_classes/lib/scenes/actors/Text.ts:90](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Text.ts#L90)*





___

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

<a id="color"></a>

###  color

**●  color**:  *`string`*  = ""

*Defined in [_classes/lib/scenes/actors/Text.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Text.ts#L17)*





___

<a id="fontfamily"></a>

###  fontFamily

**●  fontFamily**:  *`string`*  = ""

*Defined in [_classes/lib/scenes/actors/Text.ts:15](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Text.ts#L15)*





___

<a id="fontsize"></a>

###  fontSize

**●  fontSize**:  *`number`*  = 20

*Defined in [_classes/lib/scenes/actors/Text.ts:12](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Text.ts#L12)*





___

<a id="fontstyle"></a>

###  fontStyle

**●  fontStyle**:  *`string`*  = ""

*Defined in [_classes/lib/scenes/actors/Text.ts:14](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Text.ts#L14)*





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

<a id="lineheight"></a>

###  lineHeight

**●  lineHeight**:  *`number`*  = 1

*Defined in [_classes/lib/scenes/actors/Text.ts:13](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Text.ts#L13)*





___

<a id="lines"></a>

###  lines

**●  lines**:  *`string`[]*  =  []

*Defined in [_classes/lib/scenes/actors/Text.ts:19](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Text.ts#L19)*





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

<a id="outline"></a>

###  outline

**●  outline**:  *`string`*  = ""

*Defined in [_classes/lib/scenes/actors/Text.ts:18](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Text.ts#L18)*





___

<a id="parallax"></a>

###  parallax

**●  parallax**:  *`number`*  = 1

*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[parallax](__classes_lib_scenes_actors_actor_.actor.md#parallax)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:32](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L32)*





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

<a id="textbaseline"></a>

###  textBaseline

**●  textBaseline**:  *`string`*  = "top"

*Defined in [_classes/lib/scenes/actors/Text.ts:16](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Text.ts#L16)*





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

<a id="text"></a>

###  text


gettext(): `string`settext(txt: *`string`*): `void`

*Defined in [_classes/lib/scenes/actors/Text.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Text.ts#L27)*





**Returns:** `string`

*Defined in [_classes/lib/scenes/actors/Text.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Text.ts#L21)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| txt | `string`   |  - |





**Returns:** `void`



___

<a id="textalign"></a>

###  textAlign


gettextAlign(): `string`settextAlign(val: *`string`*): `void`

*Defined in [_classes/lib/scenes/actors/Text.ts:45](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Text.ts#L45)*





**Returns:** `string`

*Defined in [_classes/lib/scenes/actors/Text.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Text.ts#L31)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| val | `string`   |  - |





**Returns:** `void`



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



*Overrides [Actor](__classes_lib_scenes_actors_actor_.actor.md).[render](__classes_lib_scenes_actors_actor_.actor.md#render)*

*Defined in [_classes/lib/scenes/actors/Text.ts:63](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Text.ts#L63)*





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



*Inherited from [Actor](__classes_lib_scenes_actors_actor_.actor.md).[update](__classes_lib_scenes_actors_actor_.actor.md#update)*

*Defined in [_classes/lib/scenes/actors/Actor.ts:91](https://github.com/codeartisticninja/cost_of_creation/blob/73a0be6/src/script/_classes/lib/scenes/actors/Actor.ts#L91)*





**Returns:** `void`





___


