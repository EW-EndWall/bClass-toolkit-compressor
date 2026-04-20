# bClass Toolkit Compressor

## Обзор

bClass Toolkit Compressor удаляет ненужные пробелы, комментарии и форматирование из CSS и JavaScript кода. Предоставляет функциональность сжатия как для CSS, так и для JavaScript файлов с различными настройками обработки комментариев.

## Особенности

- **Сжатие CSS**: Удаление комментариев (кроме специальных), нормализация пробелов и оптимизация форматирования.
- **Сжатие JavaScript**: Удаление комментариев (кроме специальных), нормализация пробелов и оптимизация форматирования.
- **Расчет размера**: Предоставление исходного размера, сжатого размера, коэффициента сжатия и сэкономленного пространства.
- **Гибкий ввод**: Принимает контент-данные, выбранный тип данных и флаги очистки вкладчиков.

## Параметры функции

Функция `compressorAlgorithm` принимает объект со следующими свойствами:

- `contentData` (string): Содержимое для сжатия.
- `selectedDataType` (string): Тип данных для сжатия ("CSS" или "JS").
- `dataContributorsClear` (boolean): Флаг, определяющий поведение обработки комментариев.

## Как это работает

1. **Входное Обработка**: Получает контент и параметры обработки.
2. **Тип Определения**: Определяет является ли контент CSS или JavaScript.
3. **Сжатие Логика**:
   - Для CSS: Удаление комментариев, нормализация пробелов, оптимизация форматирования.
   - Для JS: Удаление комментариев, нормализация пробелов, оптимизация форматирования.
4. **Размер Расчет**: Вычисляет исходный размер, сжатый размер, коэффициент сжатия и сэкономленное пространство.
5. **Выход**: Возвращает объект с результатами сжатия.

## Пример использования

### Использование через JavaScript

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

### Использование через HTML

```html
<script src="./bClass-toolkit-compressor.js"></script>
```

### Входные данные и обработка

```javascript
// * Получение входных данных
const dataInputValue = document.getElementById("data_input").value;

// * Проверка флага очистки вкладчиков
let dataContributorsClear = document.querySelector(
  'input[name="data_contributors_clear"]:checked',
);
dataContributorsClear = dataContributorsClear
  ? dataContributorsClear.checked
  : false;

// * Получение типа данных
let selectedDataType = document.querySelector(
  'input[name="data_type"]:checked',
);

selectedDataType = selectedDataType ? selectedDataType.value : null;
```

### Вывод результатов обработки

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

## Результаты сжатия

Функция возвращает объект с следующей информацией:

- `original`: Исходный размер файла, KB.
- `compressed`: Сжатый размер файла, KB.
- `rate`: Коэффициент сжатия, %.
- `save`: Заработанное пространство, KB.
- `content`: Сжатое содержимое.

## Пример HTML

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
                >Вкладчики очищены</span
              >
            </label>
          </div>

          <button
            id="btn_convert"
            class="btn w-100 mt-0.5 text-uppercase font-weight-700"
          >
            Преобразовать
          </button>

          <div class="mt-0.5">
            <ul class="ul-li-y text-left">
              <li>
                <span class="text-capitalize">Исходный:</span>
                <span id="data_status_in">0.00</span> kb
              </li>
              <li>
                <span class="text-capitalize">Сжатый:</span>
                <span id="data_status_out_compressed">0.00</span> kb
              </li>
              <li>
                <span class="text-capitalize">Коэффициент:</span>
                <span id="data_status_out_rate">0.00</span> %
              </li>
              <li>
                <span class="text-capitalize">Сохранено:</span>
                <span id="data_status_out_save">0.00</span> kb
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="content-1 content-list-col-2-tablet gap-1 p-1">
        <fieldset class="fieldset-m-2 dynamic:rounded-0.5 pr-1.5">
          <legend class="text-capitalize">Вход:</legend>
          <textarea
            id="data_input"
            class="p-0.5 bg-transparent content-1-text border-0 resize-none w-100"
            rows="20"
            placeholder="Ввод кода"
          ></textarea>
        </fieldset>
        <fieldset class="fieldset-m-2 dynamic:rounded-0.5 pr-1.5">
          <legend class="text-capitalize">Выход:</legend>
          <textarea
            id="data_output"
            class="p-0.5 bg-transparent content-1-text border-0 resize-none w-100"
            rows="20"
            placeholder="Вывод кода"
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
          // * Получение входных данных
          const dataInputValue = inputEl.value;

          // * Проверка флага очистки вкладчиков
          let dataContributorsClear = document.querySelector(
            'input[name="data_contributors_clear"]:checked',
          );
          dataContributorsClear = dataContributorsClear
            ? dataContributorsClear.checked
            : false;

          // * Получение выбранного типа данных
          let selectedDataType = document.querySelector(
            'input[name="data_type"]:checked',
          );
          selectedDataType = selectedDataType ? selectedDataType.value : null;

          // * Запуск алгоритма сжатия.
          try {
            const result = await compressorAlgorithm({
              contentData: dataInputValue,
              selectedDataType: selectedDataType,
              dataContributorsClear: dataContributorsClear,
            });

            // * Вывод результатов на экран.
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
            console.error("Ошибка сжатия:", error);
          }
        });
      });
    </script>
  </body>
</html>
```

## Пример компонента Vue

```vue
<script>
import compressorAlgorithm from "./bClass-compressor.js";

export default {
  name: "compressor",
  mounted() {
    // * Изменение типа данных
    $("input[name='data_type']").change(function () {
      $("#data_input").val("");
      $("#data_output").val("");
    });
  },
  methods: {
    async convertClick() {
      // * Получение входных данных
      const dataInputValue = document.getElementById("data_input").value;

      // * Проверка флага очистки вкладчиков
      let dataContributorsClear = document.querySelector(
        'input[name="data_contributors_clear"]:checked',
      );
      dataContributorsClear = dataContributorsClear
        ? dataContributorsClear.checked
        : false;

      // * Получение выбранного типа данных
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
            <span class="text-capitalize ml-0.5 m-auto">Вкладчики очищены</span>
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
