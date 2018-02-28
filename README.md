# set-variable-interval

## Install

```
npm i set-variable-interval
```

## Usage

```js
const clearFn = setVariableInterval(fn, intervalFn, ...params)
```

* **`fn`** `[function]` Code to execute
* **`intervalFn`** `[function]` Function to provide the next interval to be used

  ```js
  (last) => { return (/*next*/) }
  ```

  * **`last`** Last return value of this function

    **Must** return a value to be used as next interval

* **`params`** Params passed to **`fn`**

* `(returns)` **`clearFn`** `[function]` To clear the interval

### Example

```js
const setVariableInterval = require('set-variable-interval');

const clear = setVariableInterval(() => {
  console.log(new Date().split('T')[1]);
}, (i = 0) => i + 200);
```
```
00:00:00.000Z
00:00:00.200Z
00:00:00.600Z
00:00:01.200Z
00:00:02.000Z
00:00:03.000Z
00:00:04.200Z
00:00:05.600Z
...
```
