# bClass Toolkit Compressor

## Genel Bakış

bClass Toolkit Compressor, gereksiz boşlukları, yorumları ve biçimlendirmeleri kaldırarak CSS ve JavaScript kodlarını sıkıştırır. Farklı yorum işleme seçenekleriyle hem CSS hem de JavaScript dosyası sıkıştırma işlevselliği sağlar.

## Özellikler

- **CSS Sıkıştırma**: Yorumları (özel olanlar hariç) kaldırır, boşlukları normalleştirir ve biçimlendirmeyi optimize eder.
- **JavaScript Sıkıştırma**: Yorumları (özel olanlar hariç) kaldırır, boşlukları normalleştirir ve biçimlendirmeyi optimize eder.
- **Boyut Hesaplama**: Orijinal boyut, sıkıştırılmış boyut, sıkıştırma oranı ve kaydedilen alan sağlar.
- **Esnek Giriş**: İçerik verisi, seçilen veri türü ve katkıda bulunan temizleme seçeneklerini kabul eder.

## Fonksiyon Parametreleri

`compressorAlgorithm` fonksiyonu aşağıdaki özelliklere sahip bir nesne kabul eder:

- `contentData` (string): Sıkıştırılacak içerik.
- `selectedDataType` (string): Sıkıştırılacak veri türü ("CSS" veya "JS").
- `dataContributorsClear` (boolean): Yorum işleme davranışını belirleyen bayrak.

## Nasıl Çalışır

1. **Giriş İşleme**: İçerik ve işleme parametrelerini alır.
2. **Tür Tespiti**: İçeriğin CSS veya JavaScript olduğunu belirler.
3. **Sıkıştırma Mantığı**:
   - CSS için: Yorumları kaldırır, boşlukları normalleştirir, biçimlendirmeyi optimize eder.
   - JS için: Yorumları kaldırır, boşlukları normalleştirir, biçimlendirmeyi optimize eder.
4. **Boyut Hesaplama**: Orijinal boyut, sıkıştırılmış boyut, sıkıştırma oranı ve kaydedilen alanı hesaplar.
5. **Çıkış**: Sıkıştırma sonuçlarını içeren bir nesne döndürür.

## Kullanım Örneği

### JavaScript ile Kullanım

```javascript
import compressorAlgorithm from "./bClass-toolkit-compressor.js";

const cssContent = "body { margin: 0; padding: 0; }";
const result = await compressorAlgorithm({
  contentData: cssContent,
  selectedDataType: "CSS",
  dataContributorsClear: false,
});

console.log(result);
```

### HTML ile Kullanım

```html
<script src="./bClass-toolkit-compressor.js"></script>
```

### Giriş Verileri ve İşleme

```javascript
// * get input data
const dataInputValue = document.getElementById("data_input").value;

// * is contributors clear check
let dataContributorsClear = document.querySelector(
  'input[name="data_contributors_clear"]:checked',
);
dataContributorsClear = dataContributorsClear
  ? dataContributorsClear.checked
  : false;

// * get data type
let selectedDataType = document.querySelector(
  'input[name="data_type"]:checked',
);

selectedDataType = selectedDataType ? selectedDataType.value : null;
```

### İşleme Sonuçlarını Görüntüleme

```javascript
const result = await compressorAlgorithm({
  contentData: dataInputValue,
  selectedDataType: selectedDataType,
  dataContributorsClear: dataContributorsClear,
});

document.getElementById("data_output").value = result.content;
document.getElementById("data_status_in").textContent = result.original;
document.getElementById("data_status_out_compressed").textContent =
  result.compressed;
document.getElementById("data_status_out_rate").textContent = result.rate;
document.getElementById("data_status_out_save").textContent = result.save;
```

## Sıkıştırma Sonuçları

Fonksiyon aşağıdaki bilgileri içeren bir nesne döndürür:

- `original`: Orijinal dosya boyutu KB cinsinden.
- `compressed`: Sıkıştırılmış dosya boyutu KB cinsinden.
- `rate`: Sıkıştırma oranı yüzdesi.
- `save`: Kaydedilen alan KB cinsinden.
- `content`: Sıkıştırılmış içerik.

## Örnek HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Compressor</title>
  </head>
  <body>
    <div>
      <div class="text-center">
        <div
          class="content-1 d-inline-flex justify-content-center flex-wrap mb-2 p-1 border-0.1"
        >
          <label>
            <input
              type="radio"
              class="input-radio-m-1"
              name="data_type"
              value="CSS"
              checked
            />
            <span class="text-uppercase">CSS</span>
          </label>
          <label>
            <input
              type="radio"
              class="input-radio-m-1"
              name="data_type"
              value="JS"
            />
            <span class="text-uppercase">JS</span>
          </label>

          <div class="w-100">
            <label class="content-2 input-checkbox-m-1 m-1">
              <input type="checkbox" name="data_contributors_clear" checked />
              <span class="text-capitalize ml-0.5 m-auto"
                >Contributors clear</span
              >
            </label>
          </div>

          <button
            id="btn_convert"
            class="btn w-100 mt-0.5 text-uppercase font-weight-700"
          >
            Convert
          </button>

          <div class="mt-0.5">
            <ul class="ul-li-y text-left">
              <li>
                <span class="text-capitalize">Original:</span>
                <span id="data_status_in">0.00</span> kb
              </li>
              <li>
                <span class="text-capitalize">Compressed:</span>
                <span id="data_status_out_compressed">0.00</span> kb
              </li>
              <li>
                <span class="text-capitalize">Rate:</span>
                <span id="data_status_out_rate">0.00</span> %
              </li>
              <li>
                <span class="text-capitalize">Save:</span>
                <span id="data_status_out_save">0.00</span> kb
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="content-1 content-list-col-2-tablet gap-1 p-1">
        <fieldset class="fieldset-m-2 dynamic:rounded-0.5 pr-1.5">
          <legend class="text-capitalize">Input:</legend>
          <textarea
            id="data_input"
            class="p-0.5 bg-transparent content-1-text border-0 resize-none w-100"
            rows="20"
            placeholder="Input code"
          ></textarea>
        </fieldset>
        <fieldset class="fieldset-m-2 dynamic:rounded-0.5 pr-1.5">
          <legend class="text-capitalize">Output:</legend>
          <textarea
            id="data_output"
            class="p-0.5 bg-transparent content-1-text border-0 resize-none w-100"
            rows="20"
            placeholder="Output code"
          ></textarea>
        </fieldset>
      </div>
    </div>

    <script type="module">
      import compressorAlgorithm from "./bClass-toolkit-compressor.js";

      document.addEventListener("DOMContentLoaded", () => {
        const inputEl = document.getElementById("data_input");
        const outputEl = document.getElementById("data_output");
        const btnConvert = document.getElementById("btn_convert");

        const dataTypeRadios = document.querySelectorAll(
          "input[name='data_type']",
        );
        dataTypeRadios.forEach((radio) => {
          radio.addEventListener("change", () => {
            inputEl.value = "";
            outputEl.value = "";
          });
        });

        btnConvert.addEventListener("click", async () => {
          // * Get input data
          const dataInputValue = inputEl.value;

          // * contributors clear checkbox control
          let dataContributorsClear = document.querySelector(
            'input[name="data_contributors_clear"]:checked',
          );
          dataContributorsClear = dataContributorsClear
            ? dataContributorsClear.checked
            : false;

          // * Get the selected data type value
          let selectedDataType = document.querySelector(
            'input[name="data_type"]:checked',
          );
          selectedDataType = selectedDataType ? selectedDataType.value : null;

          // * Run the compression algorithm.
          try {
            const result = await compressorAlgorithm({
              contentData: dataInputValue,
              selectedDataType: selectedDataType,
              dataContributorsClear: dataContributorsClear,
            });

            // * Print the results to the screen.
            outputEl.value = result.content;
            document.getElementById("data_status_in").textContent =
              result.original;
            document.getElementById("data_status_out_compressed").textContent =
              result.compressed;
            document.getElementById("data_status_out_rate").textContent =
              result.rate;
            document.getElementById("data_status_out_save").textContent =
              result.save;
          } catch (error) {
            console.error("Compression error:", error);
          }
        });
      });
    </script>
  </body>
</html>
```

## Örnek Vue Component

```vue
<script>
import compressorAlgorithm from "./bClass-compressor.js";

export default {
  name: "compressor",
  mounted() {
    // * data type changle
    $("input[name='data_type']").change(function () {
      $("#data_input").val("");
      $("#data_output").val("");
    });
  },
  methods: {
    async convertClick() {
      // * get input data
      const dataInputValue = document.getElementById("data_input").value;

      // * is contributors clear check
      let dataContributorsClear = document.querySelector(
        'input[name="data_contributors_clear"]:checked',
      );
      dataContributorsClear = dataContributorsClear
        ? dataContributorsClear.checked
        : false;

      // * get data type
      let selectedDataType = document.querySelector(
        'input[name="data_type"]:checked',
      );
      selectedDataType = selectedDataType ? selectedDataType.value : null;

      const result = await compressorAlgorithm({
        contentData: dataInputValue,
        selectedDataType: selectedDataType,
        dataContributorsClear: dataContributorsClear,
      });

      document.getElementById("data_output").value = result.content;
      document.getElementById("data_status_in").textContent = result.original;
      document.getElementById("data_status_out_compressed").textContent =
        result.compressed;
      document.getElementById("data_status_out_rate").textContent = result.rate;
      document.getElementById("data_status_out_save").textContent = result.save;
    },
  },
};
</script>

<template>
  <div>
    <div class="text-center">
      <div
        class="content-1 d-inline-flex justify-content-center flex-wrap mb-2 p-1 border-0.1"
      >
        <label>
          <input
            type="radio"
            class="input-radio-m-1"
            name="data_type"
            value="CSS"
            checked=""
          />
          <span class="text-uppercase">css</span>
        </label>
        <label>
          <input
            type="radio"
            class="input-radio-m-1"
            name="data_type"
            value="JS"
          />
          <span class="text-uppercase">js</span>
        </label>
        <div class="w-100">
          <label class="content-2 input-checkbox-m-1 m-1">
            <input type="checkbox" name="data_contributors_clear" checked />
            <span class="text-capitalize ml-0.5 m-auto"
              >contributors clear</span
            >
          </label>
        </div>
        <button
          @click="convertClick"
          class="btn w-100 mt-0.5 text-uppercase font-weight-700"
        >
          convert
        </button>
        <div class="mt-0.5">
          <ul class="ul-li-y text-left">
            <li>
              <span class="text-capitalize"> original: </span>
              <span id="data_status_in">0.00</span>
              kb
            </li>
            <li>
              <span class="text-capitalize"> compressed : </span>
              <span id="data_status_out_compressed">0.00</span>
              kb
            </li>
            <li>
              <span class="text-capitalize"> rate : </span>
              <span id="data_status_out_rate">0.00</span>
              %
            </li>
            <li>
              <span class="text-capitalize"> save : </span
              ><span id="data_status_out_save">0.00</span>
              kb
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--    -->

    <div class="content-1 content-list-col-2-tablet gap-1 p-1">
      <fieldset class="fieldset-m-2 dynamic:rounded-0.5 pr-1.5">
        <legend class="text-capitalize">input:</legend>
        <textarea
          id="data_input"
          class="p-0.5 bg-transparent content-1-text border-0 resize-none w-100"
          rows="20"
          :placeholder="input code"
        ></textarea>
      </fieldset>
      <fieldset class="fieldset-m-2 dynamic:rounded-0.5 pr-1.5">
        <legend class="text-capitalize">output:</legend>
        <textarea
          id="data_output"
          class="p-0.5 bg-transparent content-1-text border-0 resize-none w-100"
          rows="20"
          :placeholder="output code"
        ></textarea>
      </fieldset>
    </div>
  </div>
</template>
```
