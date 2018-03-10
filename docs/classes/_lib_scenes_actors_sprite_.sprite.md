[cost_of_creation](../README.md) > ["lib/scenes/actors/Sprite"](../modules/_lib_scenes_actors_sprite_.md) > [Sprite](../classes/_lib_scenes_actors_sprite_.sprite.md)



# Class: Sprite


Sprite class
*__date__*: 07-mar-2018


## Index

### Constructors

* [constructor](_lib_scenes_actors_sprite_.sprite.md#constructor)


### Properties

* [columns](_lib_scenes_actors_sprite_.sprite.md#columns)
* [ctx](_lib_scenes_actors_sprite_.sprite.md#ctx)
* [firstGid](_lib_scenes_actors_sprite_.sprite.md#firstgid)
* [frames](_lib_scenes_actors_sprite_.sprite.md#frames)
* [img](_lib_scenes_actors_sprite_.sprite.md#img)
* [margin](_lib_scenes_actors_sprite_.sprite.md#margin)
* [name](_lib_scenes_actors_sprite_.sprite.md#name)
* [size](_lib_scenes_actors_sprite_.sprite.md#size)
* [spacing](_lib_scenes_actors_sprite_.sprite.md#spacing)


### Methods

* [draw](_lib_scenes_actors_sprite_.sprite.md#draw)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Sprite**(obj?: *`any`*, mapFolder?: *`string`*): [Sprite](_lib_scenes_actors_sprite_.sprite.md)


*Defined in [lib/scenes/actors/Sprite.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Sprite.ts#L20)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| obj | `any`  | - |   - |
| mapFolder | `string`  | &quot;./&quot; |   - |





**Returns:** [Sprite](_lib_scenes_actors_sprite_.sprite.md)

---


## Properties
<a id="columns"></a>

###  columns

**●  columns**:  *`number`*  = 0

*Defined in [lib/scenes/actors/Sprite.ts:18](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Sprite.ts#L18)*





___

<a id="ctx"></a>

### «Optional» ctx

**●  ctx**:  *`CanvasRenderingContext2D`* 

*Defined in [lib/scenes/actors/Sprite.ts:12](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Sprite.ts#L12)*





___

<a id="firstgid"></a>

###  firstGid

**●  firstGid**:  *`number`*  =  -1

*Defined in [lib/scenes/actors/Sprite.ts:16](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Sprite.ts#L16)*





___

<a id="frames"></a>

###  frames

**●  frames**:  *`number`*  = 0

*Defined in [lib/scenes/actors/Sprite.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Sprite.ts#L17)*





___

<a id="img"></a>

###  img

**●  img**:  *`HTMLImageElement`* 

*Defined in [lib/scenes/actors/Sprite.ts:14](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Sprite.ts#L14)*





___

<a id="margin"></a>

###  margin

**●  margin**:  *`number`*  = 0

*Defined in [lib/scenes/actors/Sprite.ts:19](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Sprite.ts#L19)*





___

<a id="name"></a>

###  name

**●  name**:  *`string`*  = "_"

*Defined in [lib/scenes/actors/Sprite.ts:13](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Sprite.ts#L13)*





___

<a id="size"></a>

###  size

**●  size**:  *[Vector2](_lib_utils_vector2_.vector2.md)* 

*Defined in [lib/scenes/actors/Sprite.ts:15](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Sprite.ts#L15)*





___

<a id="spacing"></a>

###  spacing

**●  spacing**:  *`number`*  = 0

*Defined in [lib/scenes/actors/Sprite.ts:20](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Sprite.ts#L20)*





___


## Methods
<a id="draw"></a>

###  draw

► **draw**(col: *`number`*, row?: *`number`*, topLeft: *[Vector2](_lib_utils_vector2_.vector2.md)*, size?: *[Vector2](_lib_utils_vector2_.vector2.md)*): `void`



*Defined in [lib/scenes/actors/Sprite.ts:39](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/scenes/actors/Sprite.ts#L39)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| col | `number`  | - |   - |
| row | `number`  | 0 |   - |
| topLeft | [Vector2](_lib_utils_vector2_.vector2.md)  | - |   - |
| size | [Vector2](_lib_utils_vector2_.vector2.md)  |  this.size |   - |





**Returns:** `void`





___


