[cost_of_creation](../README.md) > ["_classes/lib/utils/webJoypad"](../modules/__classes_lib_utils_webjoypad_.md) > [joypad](../modules/__classes_lib_utils_webjoypad_.joypad.md)



# Module: joypad

## Index

### Variables

* [UIparent](__classes_lib_utils_webjoypad_.joypad.md#uiparent)
* [_](__classes_lib_utils_webjoypad_.joypad.md#_)
* [_activatingGamepad](__classes_lib_utils_webjoypad_.joypad.md#_activatinggamepad)
* [_gamepadEnabled](__classes_lib_utils_webjoypad_.joypad.md#_gamepadenabled)
* [_goingBack](__classes_lib_utils_webjoypad_.joypad.md#_goingback)
* [_keyMap](__classes_lib_utils_webjoypad_.joypad.md#_keymap)
* [_keyboardEnabled](__classes_lib_utils_webjoypad_.joypad.md#_keyboardenabled)
* [_keysDown](__classes_lib_utils_webjoypad_.joypad.md#_keysdown)
* [_lastState](__classes_lib_utils_webjoypad_.joypad.md#_laststate)
* [_leftThumb](__classes_lib_utils_webjoypad_.joypad.md#_leftthumb)
* [_rightThumb](__classes_lib_utils_webjoypad_.joypad.md#_rightthumb)
* [_shiftKey](__classes_lib_utils_webjoypad_.joypad.md#_shiftkey)
* [_stickRadius](__classes_lib_utils_webjoypad_.joypad.md#_stickradius)
* [_suspended](__classes_lib_utils_webjoypad_.joypad.md#_suspended)
* [_touchEnabled](__classes_lib_utils_webjoypad_.joypad.md#_touchenabled)
* [_touchUI](__classes_lib_utils_webjoypad_.joypad.md#_touchui)
* [_updateTO](__classes_lib_utils_webjoypad_.joypad.md#_updateto)
* [device](__classes_lib_utils_webjoypad_.joypad.md#device)
* [dir](__classes_lib_utils_webjoypad_.joypad.md#dir)
* [enabled](__classes_lib_utils_webjoypad_.joypad.md#enabled)
* [fire](__classes_lib_utils_webjoypad_.joypad.md#fire)
* [mode](__classes_lib_utils_webjoypad_.joypad.md#mode)


### Functions

* [_createJoyTouch](__classes_lib_utils_webjoypad_.joypad.md#_createjoytouch)
* [_getKeyMap](__classes_lib_utils_webjoypad_.joypad.md#_getkeymap)
* [_hideUI](__classes_lib_utils_webjoypad_.joypad.md#_hideui)
* [_onKeyDown](__classes_lib_utils_webjoypad_.joypad.md#_onkeydown)
* [_onKeyUp](__classes_lib_utils_webjoypad_.joypad.md#_onkeyup)
* [_onTouchDown](__classes_lib_utils_webjoypad_.joypad.md#_ontouchdown)
* [_onTouchMove](__classes_lib_utils_webjoypad_.joypad.md#_ontouchmove)
* [_onTouchUp](__classes_lib_utils_webjoypad_.joypad.md#_ontouchup)
* [_scanGamepad](__classes_lib_utils_webjoypad_.joypad.md#_scangamepad)
* [_scanKeys](__classes_lib_utils_webjoypad_.joypad.md#_scankeys)
* [_scanTouches](__classes_lib_utils_webjoypad_.joypad.md#_scantouches)
* [_showUI](__classes_lib_utils_webjoypad_.joypad.md#_showui)
* [_updateUI](__classes_lib_utils_webjoypad_.joypad.md#_updateui)
* [autoUpdate](__classes_lib_utils_webjoypad_.joypad.md#autoupdate)
* [disable](__classes_lib_utils_webjoypad_.joypad.md#disable)
* [enable](__classes_lib_utils_webjoypad_.joypad.md#enable)
* [resume](__classes_lib_utils_webjoypad_.joypad.md#resume)
* [suspend](__classes_lib_utils_webjoypad_.joypad.md#suspend)
* [update](__classes_lib_utils_webjoypad_.joypad.md#update)


### Object literals

* [delta](__classes_lib_utils_webjoypad_.joypad.md#delta)



---
## Variables
<a id="uiparent"></a>

###  UIparent

**●  UIparent**:  *`HTMLElement`*  =  document.body

*Defined in [_classes/lib/utils/webJoypad.ts:25](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L25)*





___

<a id="_"></a>

###  _

**●  _**:  *`any`* 

*Defined in [_classes/lib/utils/webJoypad.ts:176](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L176)*
*Defined in [_classes/lib/utils/webJoypad.ts:251](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L251)*
*Defined in [_classes/lib/utils/webJoypad.ts:442](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L442)*
*Defined in [_classes/lib/utils/webJoypad.ts:498](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L498)*





___

<a id="_activatinggamepad"></a>

###  _activatingGamepad

**●  _activatingGamepad**:  *`boolean`* 

*Defined in [_classes/lib/utils/webJoypad.ts:440](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L440)*





___

<a id="_gamepadenabled"></a>

###  _gamepadEnabled

**●  _gamepadEnabled**:  *`boolean`* 

*Defined in [_classes/lib/utils/webJoypad.ts:439](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L439)*





___

<a id="_goingback"></a>

###  _goingBack

**●  _goingBack**:  *`number`*  = 0

*Defined in [_classes/lib/utils/webJoypad.ts:441](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L441)*





___

<a id="_keymap"></a>

###  _keyMap

**●  _keyMap**:  *`string`[]*  =  _getKeyMap()

*Defined in [_classes/lib/utils/webJoypad.ts:173](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L173)*





___

<a id="_keyboardenabled"></a>

###  _keyboardEnabled

**●  _keyboardEnabled**:  *`boolean`* 

*Defined in [_classes/lib/utils/webJoypad.ts:172](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L172)*





___

<a id="_keysdown"></a>

###  _keysDown

**●  _keysDown**:  *`object`* 

*Defined in [_classes/lib/utils/webJoypad.ts:174](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L174)*


#### Type declaration


[index: `string`]: `boolean`






___

<a id="_laststate"></a>

###  _lastState

**●  _lastState**:  *`any`* 

*Defined in [_classes/lib/utils/webJoypad.ts:496](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L496)*





___

<a id="_leftthumb"></a>

###  _leftThumb

**●  _leftThumb**:  *[JoyTouch](../interfaces/__classes_lib_utils_webjoypad_.joytouch.md)* 

*Defined in [_classes/lib/utils/webJoypad.ts:248](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L248)*





___

<a id="_rightthumb"></a>

###  _rightThumb

**●  _rightThumb**:  *[JoyTouch](../interfaces/__classes_lib_utils_webjoypad_.joytouch.md)* 

*Defined in [_classes/lib/utils/webJoypad.ts:249](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L249)*





___

<a id="_shiftkey"></a>

###  _shiftKey

**●  _shiftKey**:  *`boolean`* 

*Defined in [_classes/lib/utils/webJoypad.ts:175](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L175)*





___

<a id="_stickradius"></a>

###  _stickRadius

**●  _stickRadius**:  *`number`*  = 32

*Defined in [_classes/lib/utils/webJoypad.ts:250](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L250)*





___

<a id="_suspended"></a>

###  _suspended

**●  _suspended**:  *`string`[]⎮`null`* 

*Defined in [_classes/lib/utils/webJoypad.ts:497](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L497)*





___

<a id="_touchenabled"></a>

###  _touchEnabled

**●  _touchEnabled**:  *`boolean`* 

*Defined in [_classes/lib/utils/webJoypad.ts:246](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L246)*





___

<a id="_touchui"></a>

###  _touchUI

**●  _touchUI**:  *`HTMLElement`* 

*Defined in [_classes/lib/utils/webJoypad.ts:247](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L247)*





___

<a id="_updateto"></a>

###  _updateTO

**●  _updateTO**:  *`any`* 

*Defined in [_classes/lib/utils/webJoypad.ts:495](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L495)*





___

<a id="device"></a>

###  device

**●  device**:  *`string`*  =  ""+localStorage.getItem("joypad.device")

*Defined in [_classes/lib/utils/webJoypad.ts:23](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L23)*





___

<a id="dir"></a>

###  dir

**●  dir**:  *[Vector2](../classes/__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()

*Defined in [_classes/lib/utils/webJoypad.ts:27](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L27)*





___

<a id="enabled"></a>

###  enabled

**●  enabled**:  *`boolean`*  = false

*Defined in [_classes/lib/utils/webJoypad.ts:22](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L22)*





___

<a id="fire"></a>

###  fire

**●  fire**:  *`boolean`*  = false

*Defined in [_classes/lib/utils/webJoypad.ts:28](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L28)*





___

<a id="mode"></a>

###  mode

**●  mode**:  *`string`* 

*Defined in [_classes/lib/utils/webJoypad.ts:24](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L24)*





___


## Functions
<a id="_createjoytouch"></a>

###  _createJoyTouch

► **_createJoyTouch**(): [JoyTouch](../interfaces/__classes_lib_utils_webjoypad_.joytouch.md)



*Defined in [_classes/lib/utils/webJoypad.ts:426](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L426)*





**Returns:** [JoyTouch](../interfaces/__classes_lib_utils_webjoypad_.joytouch.md)





___

<a id="_getkeymap"></a>

###  _getKeyMap

► **_getKeyMap**(): `string`[]



*Defined in [_classes/lib/utils/webJoypad.ts:188](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L188)*





**Returns:** `string`[]





___

<a id="_hideui"></a>

###  _hideUI

► **_hideUI**(): `void`



*Defined in [_classes/lib/utils/webJoypad.ts:374](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L374)*





**Returns:** `void`





___

<a id="_onkeydown"></a>

###  _onKeyDown

► **_onKeyDown**(e: *`KeyboardEvent`*): `void`



*Defined in [_classes/lib/utils/webJoypad.ts:206](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L206)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | `KeyboardEvent`   |  - |





**Returns:** `void`





___

<a id="_onkeyup"></a>

###  _onKeyUp

► **_onKeyUp**(e: *`KeyboardEvent`*): `void`



*Defined in [_classes/lib/utils/webJoypad.ts:226](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L226)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | `KeyboardEvent`   |  - |





**Returns:** `void`





___

<a id="_ontouchdown"></a>

###  _onTouchDown

► **_onTouchDown**(e: *`TouchEvent`*): `void`



*Defined in [_classes/lib/utils/webJoypad.ts:275](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L275)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | `TouchEvent`   |  - |





**Returns:** `void`





___

<a id="_ontouchmove"></a>

###  _onTouchMove

► **_onTouchMove**(e: *`TouchEvent`*): `void`



*Defined in [_classes/lib/utils/webJoypad.ts:300](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L300)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | `TouchEvent`   |  - |





**Returns:** `void`





___

<a id="_ontouchup"></a>

###  _onTouchUp

► **_onTouchUp**(e: *`TouchEvent`*): `void`



*Defined in [_classes/lib/utils/webJoypad.ts:322](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L322)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | `TouchEvent`   |  - |





**Returns:** `void`





___

<a id="_scangamepad"></a>

###  _scanGamepad

► **_scanGamepad**(): `void`



*Defined in [_classes/lib/utils/webJoypad.ts:444](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L444)*





**Returns:** `void`





___

<a id="_scankeys"></a>

###  _scanKeys

► **_scanKeys**(): `void`



*Defined in [_classes/lib/utils/webJoypad.ts:178](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L178)*





**Returns:** `void`





___

<a id="_scantouches"></a>

###  _scanTouches

► **_scanTouches**(): `void`



*Defined in [_classes/lib/utils/webJoypad.ts:253](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L253)*





**Returns:** `void`





___

<a id="_showui"></a>

###  _showUI

► **_showUI**(): `void`



*Defined in [_classes/lib/utils/webJoypad.ts:338](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L338)*





**Returns:** `void`





___

<a id="_updateui"></a>

###  _updateUI

► **_updateUI**(): `void`



*Defined in [_classes/lib/utils/webJoypad.ts:384](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L384)*





**Returns:** `void`





___

<a id="autoupdate"></a>

###  autoUpdate

► **autoUpdate**(): `number`



*Defined in [_classes/lib/utils/webJoypad.ts:162](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L162)*





**Returns:** `number`





___

<a id="disable"></a>

###  disable

► **disable**(devices?: *`string`[]*): `void`



*Defined in [_classes/lib/utils/webJoypad.ts:71](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L71)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| devices | `string`[]  |  [&quot;keyboard&quot;, &quot;touch&quot;, &quot;gamepad&quot;] |   - |





**Returns:** `void`





___

<a id="enable"></a>

###  enable

► **enable**(devices?: *`string`[]*, autoUpdate?: *`boolean`*): `undefined`⎮`number`



*Defined in [_classes/lib/utils/webJoypad.ts:31](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L31)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| devices | `string`[]  |  [&quot;keyboard&quot;, &quot;touch&quot;, &quot;gamepad&quot;] |   - |
| autoUpdate | `boolean`  | false |   - |





**Returns:** `undefined`⎮`number`





___

<a id="resume"></a>

###  resume

► **resume**(): `void`



*Defined in [_classes/lib/utils/webJoypad.ts:126](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L126)*





**Returns:** `void`





___

<a id="suspend"></a>

###  suspend

► **suspend**(): `undefined`⎮`string`[]



*Defined in [_classes/lib/utils/webJoypad.ts:108](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L108)*





**Returns:** `undefined`⎮`string`[]





___

<a id="update"></a>

###  update

► **update**(): `void`



*Defined in [_classes/lib/utils/webJoypad.ts:135](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L135)*





**Returns:** `void`





___


<a id="delta"></a>

## Object literal: delta


<a id="delta.dir-1"></a>

###  dir

**●  dir**:  *`number`*  = 0

*Defined in [_classes/lib/utils/webJoypad.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L29)*





___
<a id="delta.fire-1"></a>

###  fire

**●  fire**:  *`number`*  = 0

*Defined in [_classes/lib/utils/webJoypad.ts:29](https://github.com/codeartisticninja/cost_of_creation/blob/5dc4a7e/src/script/_classes/lib/utils/webJoypad.ts#L29)*





___


