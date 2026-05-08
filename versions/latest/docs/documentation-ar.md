# bClass toolkit compressor

## نظرة عامة

أدوات بلاكاس توفير المكانة تقوم بإزالة المساحات الفارغة غير الضرورية والتعليقات وملف التعريف وتضييق الكود CSS والجافا سكربت. مع خيارات مختلفة لإدارة التعليقات، يوفر وظيفة تضييق ملفات CSS وJavaScript.

## المميزات

- **تضييق CSS**: إزالة التعليقات (باستثناء الخاصة) وإعادة تنظيم المساحات والتحسين في ملف التعريف.
- **تضييق جافا سكربت**: إزالة التعليقات (باستثناء الخاصة) وإعادة تنظيم المساحات والتحسين في ملف التعريف.
- **حساب الحجم**: توفير حجم الملف الأصلي، حجم الملف المضغوط، معدل التضييق وكمية المساحة المحذوفة.
- **دخول متعدد الاستخدامات**: تقبل بيانات المحتوى والنوع المراد تضيقه وتحديد خيارات تنظيف المساهمين.

## معلمات الوظيفة

تقبل دالة `compressorAlgorithm` كائن يحتوي على الخصائص التالية:

- `contentData` (string): البيانات التي سيتم تضييقها.
- `selectedDataType` (string): نوع البيانات المراد تضييقها ("CSS" أو "JS").
- `dataContributorsClear` (boolean): لافتة تحدد سلوك إدارة التعليقات.

## كيف يعمل

1.  **العملية الأولي**: يتم أخذ المحتوى و معلمات التشغيل.
2.  **تحديد النوع**: يتم تحديد ما إذا كان المحتوى هو CSS أم JavaScript.
3.  **منطق التضييق**:
    - للـ CSS: إزالة التعليقات، تنظيف المساحات، وتحسين ملف التعريف.
    - لـ JS: إزالة التعليقات، تنظيف المساحات، وتحسين ملف التعريف.
4.  **حساب الحجم**: يتم حساب حجم الملف الأصلي، حجم الملف المضغوط، معدل التضييق وكمية المساحة المحذوفة.
5.  **الإخراج**: يتم إرجاع كائن يحتوي على نتائج التضييق.

## مثال على الاستخدام

### استخدام باستخدام جافا سكربت

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

### استخدام باستخدام HTML

```html
<script src="./bClass-toolkit-compressor.js"></script>
```

### بيانات الدخول و التشغيل

```javascript
// * استلام قيمة البيانات المدخلة
const dataInputValue = document.getElementById("data_input").value;

// * فحص لفتة حذف المساهمين
let dataContributorsClear = document.querySelector(
  'input[name="data_contributors_clear"]:checked',
);
dataContributorsClear = dataContributorsClear
  ? dataContributorsClear.checked
  : false;

// * استلام نوع البيانات
let selectedDataType = document.querySelector(
  'input[name="data_type"]:checked',
);

selectedDataType = selectedDataType ? selectedDataType.value : null;
```

### عرض النتائج

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

## نتائج التضييق

تُرجع الدالة كائن يحتوي على المعلومات التالية:

- `original`: حجم الملف الأصلي في KB.
- `compressed`: حجم الملف المضغوط في KB.
- `rate`: معدل التضييق في النسبة المئوية.
- `save`: المساحة المحذوفة في KB.
- `content`: محتوى الملف المضغوط.

## مثال HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>المضييق</title>
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
              <span class="text-capitalize ml-0.5 m-auto"> حذف المساهمين </span>
            </label>
          </div>

          <button
            id="btn_convert"
            class="btn w-100 mt-0.5 text-uppercase font-weight-700"
          >
            تحويل
          </button>

          <div class="mt-0.5">
            <ul class="ul-li-y text-left">
              <li>
                <span class="text-capitalize">الأصلي:</span>
                <span id="data_status_in">0.00</span> kb
              </li>
              <li>
                <span class="text-capitalize">المضغوط:</span>
                <span id="data_status_out_compressed">0.00</span> kb
              </li>
              <li>
                <span class="text-capitalize">النسبة:</span>
                <span id="data_status_out_rate">0.00</span> %
              </li>
              <li>
                <span class="text-capitalize">المحذوف:</span>
                <span id="data_status_out_save">0.00</span> kb
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="content-1 content-list-col-2-tablet gap-1 p-1">
        <fieldset class="fieldset-m-2 dynamic:rounded-0.5 pr-1.5">
          <legend class="text-capitalize">المدخل:</legend>
          <textarea
            id="data_input"
            class="p-0.5 bg-transparent content-1-text border-0 resize-none w-100"
            rows="20"
            placeholder="كود المدخول"
          ></textarea>
        </fieldset>
        <fieldset class="fieldset-m-2 dynamic:rounded-0.5 pr-1.5">
          <legend class="text-capitalize">المخرج:</legend>
          <textarea
            id="data_output"
            class="p-0.5 bg-transparent content-1-text border-0 resize-none w-100"
            rows="20"
            placeholder="كود المخرج"
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
          // * استلام قيمة البيانات المدخلة
          const dataInputValue = inputEl.value;

          // * فحص لفتة حذف المساهمين
          let dataContributorsClear = document.querySelector(
            'input[name="data_contributors_clear"]:checked',
          );
          dataContributorsClear = dataContributorsClear
            ? dataContributorsClear.checked
            : false;

          // * استلام نوع البيانات المختارة
          let selectedDataType = document.querySelector(
            'input[name="data_type"]:checked',
          );
          selectedDataType = selectedDataType ? selectedDataType.value : null;

          // * تشغيل خوارزمية التضييق.
          try {
            const result = await compressorAlgorithm({
              contentData: dataInputValue,
              selectedDataType: selectedDataType,
              dataContributorsClear: dataContributorsClear,
            });

            // * عرض النتائج على الشاشة.
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
            console.error("خطأ في التضييق:", error);
          }
        });
      });
    </script>
  </body>
</html>
```

## مثال مكون فيو

```vue
<script>
import compressorAlgorithm from "./bClass-compressor.js";

export default {
  name: "compressor",
  mounted() {
    // * تغيير نوع البيانات
    $("input[name='data_type']").change(function () {
      $("#data_input").val("");
      $("#data_output").val("");
    });
  },
  methods: {
    async convertClick() {
      // * استلام قيمة البيانات المدخلة
      const dataInputValue = document.getElementById("data_input").value;

      // * فحص لفتة حذف المساهمين
      let dataContributorsClear = document.querySelector(
        'input[name="data_contributors_clear"]:checked',
      );
      dataContributorsClear = dataContributorsClear
        ? dataContributorsClear.checked
        : false;

      // * استلام نوع البيانات المختارة
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
            <span class="text-capitalize ml-0.5 m-auto">حذف المساهمين</span>
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

## الترخيص

> يتم التوزيع بموجب ترخيص Bik Public License 4.0. راجع ملف [LICENSE](./../../../LICENSE) لمزيد من المعلومات.
