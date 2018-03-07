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






___

<a id="_"></a>

###  _

**●  _**:  *`any`* 






___

<a id="_activatinggamepad"></a>

###  _activatingGamepad

**●  _activatingGamepad**:  *`boolean`* 






___

<a id="_gamepadenabled"></a>

###  _gamepadEnabled

**●  _gamepadEnabled**:  *`boolean`* 






___

<a id="_goingback"></a>

###  _goingBack

**●  _goingBack**:  *`number`*  = 0






___

<a id="_keymap"></a>

###  _keyMap

**●  _keyMap**:  *`string`[]*  =  _getKeyMap()






___

<a id="_keyboardenabled"></a>

###  _keyboardEnabled

**●  _keyboardEnabled**:  *`boolean`* 






___

<a id="_keysdown"></a>

###  _keysDown

**●  _keysDown**:  *`object`* 



#### Type declaration


[index: `string`]: `boolean`






___

<a id="_laststate"></a>

###  _lastState

**●  _lastState**:  *`any`* 






___

<a id="_leftthumb"></a>

###  _leftThumb

**●  _leftThumb**:  *[JoyTouch](../interfaces/__classes_lib_utils_webjoypad_.joytouch.md)* 






___

<a id="_rightthumb"></a>

###  _rightThumb

**●  _rightThumb**:  *[JoyTouch](../interfaces/__classes_lib_utils_webjoypad_.joytouch.md)* 






___

<a id="_shiftkey"></a>

###  _shiftKey

**●  _shiftKey**:  *`boolean`* 






___

<a id="_stickradius"></a>

###  _stickRadius

**●  _stickRadius**:  *`number`*  = 32






___

<a id="_suspended"></a>

###  _suspended

**●  _suspended**:  *`string`[]⎮`null`* 






___

<a id="_touchenabled"></a>

###  _touchEnabled

**●  _touchEnabled**:  *`boolean`* 






___

<a id="_touchui"></a>

###  _touchUI

**●  _touchUI**:  *`HTMLElement`* 






___

<a id="_updateto"></a>

###  _updateTO

**●  _updateTO**:  *`any`* 






___

<a id="device"></a>

###  device

**●  device**:  *`string`*  =  ""+localStorage.getItem("joypad.device")






___

<a id="dir"></a>

###  dir

**●  dir**:  *[Vector2](../classes/__classes_lib_utils_vector2_.vector2.md)*  =  new Vector2()






___

<a id="enabled"></a>

###  enabled

**●  enabled**:  *`boolean`*  = false






___

<a id="fire"></a>

###  fire

**●  fire**:  *`boolean`*  = false






___

<a id="mode"></a>

###  mode

**●  mode**:  *`string`* 






___


## Functions
<a id="_createjoytouch"></a>

###  _createJoyTouch

► **_createJoyTouch**(): [JoyTouch](../interfaces/__classes_lib_utils_webjoypad_.joytouch.md)








**Returns:** [JoyTouch](../interfaces/__classes_lib_utils_webjoypad_.joytouch.md)





___

<a id="_getkeymap"></a>

###  _getKeyMap

► **_getKeyMap**(): `string`[]








**Returns:** `string`[]





___

<a id="_hideui"></a>

###  _hideUI

► **_hideUI**(): `void`








**Returns:** `void`





___

<a id="_onkeydown"></a>

###  _onKeyDown

► **_onKeyDown**(e: *`KeyboardEvent`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | `KeyboardEvent`   |  - |





**Returns:** `void`





___

<a id="_onkeyup"></a>

###  _onKeyUp

► **_onKeyUp**(e: *`KeyboardEvent`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | `KeyboardEvent`   |  - |





**Returns:** `void`





___

<a id="_ontouchdown"></a>

###  _onTouchDown

► **_onTouchDown**(e: *`TouchEvent`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | `TouchEvent`   |  - |





**Returns:** `void`





___

<a id="_ontouchmove"></a>

###  _onTouchMove

► **_onTouchMove**(e: *`TouchEvent`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | `TouchEvent`   |  - |





**Returns:** `void`





___

<a id="_ontouchup"></a>

###  _onTouchUp

► **_onTouchUp**(e: *`TouchEvent`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| e | `TouchEvent`   |  - |





**Returns:** `void`





___

<a id="_scangamepad"></a>

###  _scanGamepad

► **_scanGamepad**(): `void`








**Returns:** `void`





___

<a id="_scankeys"></a>

###  _scanKeys

► **_scanKeys**(): `void`








**Returns:** `void`





___

<a id="_scantouches"></a>

###  _scanTouches

► **_scanTouches**(): `void`








**Returns:** `void`





___

<a id="_showui"></a>

###  _showUI

► **_showUI**(): `void`








**Returns:** `void`





___

<a id="_updateui"></a>

###  _updateUI

► **_updateUI**(): `void`








**Returns:** `void`





___

<a id="autoupdate"></a>

###  autoUpdate

► **autoUpdate**(): `number`








**Returns:** `number`





___

<a id="disable"></a>

###  disable

► **disable**(devices?: *`string`[]*): `void`






**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| devices | `string`[]  |  [&quot;keyboard&quot;, &quot;touch&quot;, &quot;gamepad&quot;] |   - |





**Returns:** `void`





___

<a id="enable"></a>

###  enable

► **enable**(devices?: *`string`[]*, autoUpdate?: *`boolean`*): `undefined`⎮`number`






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








**Returns:** `void`





___

<a id="suspend"></a>

###  suspend

► **suspend**(): `undefined`⎮`string`[]








**Returns:** `undefined`⎮`string`[]





___

<a id="update"></a>

###  update

► **update**(): `void`








**Returns:** `void`





___


<a id="delta"></a>

## Object literal: delta


<a id="delta.dir-1"></a>

###  dir

**●  dir**:  *`number`*  = 0






___
<a id="delta.fire-1"></a>

###  fire

**●  fire**:  *`number`*  = 0






___


