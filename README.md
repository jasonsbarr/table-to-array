# Convert Table to 2D Array

Quick function to take an HTML table, filter out rows that don't begin with a checked `input[type=checkbox]`, extract either the text contents of each cell or the value of an `input` element contained inside the cell, and create a 2D array from the results.

## Usage

Simply pass the `table` to the function:

```js
tableTo2dArray(document.querySelector('#input');
```

See [test.html](test file) for specific implementation.

