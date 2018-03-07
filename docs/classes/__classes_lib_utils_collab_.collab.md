[cost_of_creation](../README.md) > ["_classes/lib/utils/Collab"](../modules/__classes_lib_utils_collab_.md) > [Collab](../classes/__classes_lib_utils_collab_.collab.md)



# Class: Collab


Collab class
*__date__*: 07-mar-2018


## Index

### Constructors

* [constructor](__classes_lib_utils_collab_.collab.md#constructor)


### Properties

* [listeners](__classes_lib_utils_collab_.collab.md#listeners)
* [peer](__classes_lib_utils_collab_.collab.md#peer)
* [peers](__classes_lib_utils_collab_.collab.md#peers)
* [state](__classes_lib_utils_collab_.collab.md#state)
* [url](__classes_lib_utils_collab_.collab.md#url)


### Methods

* [addPeer](__classes_lib_utils_collab_.collab.md#addpeer)
* [applyPatch](__classes_lib_utils_collab_.collab.md#applypatch)
* [checkIn](__classes_lib_utils_collab_.collab.md#checkin)
* [init](__classes_lib_utils_collab_.collab.md#init)
* [onPatch](__classes_lib_utils_collab_.collab.md#onpatch)
* [removePeer](__classes_lib_utils_collab_.collab.md#removepeer)
* [sendPatch](__classes_lib_utils_collab_.collab.md#sendpatch)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Collab**(url: *`string`*): [Collab](__classes_lib_utils_collab_.collab.md)





**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |





**Returns:** [Collab](__classes_lib_utils_collab_.collab.md)

---


## Properties
<a id="listeners"></a>

###  listeners

**●  listeners**:  *`Function`[]*  =  []






___

<a id="peer"></a>

###  peer

**●  peer**:  *`Peer`*  =  <PeerJs.Peer>{}






___

<a id="peers"></a>

###  peers

**●  peers**:  *`object`* 



#### Type declaration


[key: `string`]: `DataConnection`






___

<a id="state"></a>

###  state

**●  state**:  *`any`* 






___

<a id="url"></a>

###  url

**●  url**:  *`string`* 






___


## Methods
<a id="addpeer"></a>

###  addPeer

► **addPeer**(id: *`string`*, conn?: *`PeerJs.DataConnection`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |
| conn | `PeerJs.DataConnection`   |  - |





**Returns:** `void`





___

<a id="applypatch"></a>

###  applyPatch

► **applyPatch**(patch: *`any`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| patch | `any`   |  - |





**Returns:** `void`





___

<a id="checkin"></a>

###  checkIn

► **checkIn**(): `void`








**Returns:** `void`





___

<a id="init"></a>

###  init

► **init**(): `void`








**Returns:** `void`





___

<a id="onpatch"></a>

###  onPatch

► **onPatch**(cb: *`Function`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| cb | `Function`   |  - |





**Returns:** `void`





___

<a id="removepeer"></a>

###  removePeer

► **removePeer**(id: *`string`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  - |





**Returns:** `void`





___

<a id="sendpatch"></a>

###  sendPatch

► **sendPatch**(patch: *`any`*): `void`






**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| patch | `any`   |  - |





**Returns:** `void`





___


