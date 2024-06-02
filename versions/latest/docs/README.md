# Quick Start

First we need to import the toolkit

```js
import compressorAlgorithm from "./bClass-compressor.js";
```

or

```html
<script src="./bClass-compressor.js"></script>
```

We must transfer the information we need to the variable

```js
// * get input data
const dataInputValue = document.getElementById("data_input").value;

// * is contributors clear check
let dataContributorsClear = document.querySelector(
  'input[name="data_contributors_clear"]:checked'
);
dataContributorsClear = dataContributorsClear
  ? dataContributorsClear.checked
  : false;

// * get data type
let selectedDataType = document.querySelector(
  'input[name="data_type"]:checked'
);

selectedDataType = selectedDataType ? selectedDataType.value : null;
```

We must enter the information into the function for the operation.

```js
const result = await compressorAlgorithm({
  contentData: dataInputValue,
  selectedDataType: selectedDataType,
  dataContributorsClear: dataContributorsClear,
});
```

To print the results of the processed data

```js
document.getElementById("data_output").value = result.content;
document.getElementById("data_status_in").textContent = result.original;
document.getElementById("data_status_out_compressed").textContent =
  result.compressed;
document.getElementById("data_status_out_rate").textContent = result.rate;
document.getElementById("data_status_out_save").textContent = result.save;
```

## example html

```html
<label>
  <input type="radio" name="data_type" value="CSS" checked="" />
  <span>css</span>
</label>
<label>
  <input type="radio" name="data_type" value="JS" />
  <span>js</span>
</label>

<label>
  <input type="checkbox" name="data_contributors_clear" checked />
  <span> contributors clear </span>
</label>

<button onclick="result">convert</button>

<ul>
  <li>
    <span> original : </span>
    <span id="data_status_in">0.00</span>
    kb
  </li>
  <li>
    <span> compressed : </span>
    <span id="data_status_out_compressed">0.00</span>
    kb
  </li>
  <li>
    <span> rate : </span>
    <span id="data_status_out_rate">0.00</span>
    %
  </li>
  <li>
    <span> save : </span>
    <span id="data_status_out_save">0.00</span>
    kb
  </li>
</ul>

<textarea id="data_input" rows="20" placeholder="input code"></textarea>
<textarea id="data_output" rows="20" placeholder="output code"></textarea>
```
