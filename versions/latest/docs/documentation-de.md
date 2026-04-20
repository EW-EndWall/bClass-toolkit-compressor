# bClass Toolkit Compressor

## Übersicht

bClass Toolkit Compressor entfernt unnötige Leerzeichen, Kommentare und Formatierungen aus CSS- und JavaScript-Code. Er bietet Funktionen zur Kompression sowohl für CSS als auch für JavaScript-Dateien mit verschiedenen Einstellungen für die Verarbeitung von Kommentaren.

## Funktionen

- **CSS-Kompression**: Kommentare (außer spezielle) entfernen, Leerzeichen normalisieren und Formatierung optimieren.
- **JavaScript-Kompression**: Kommentare (außer spezielle) entfernen, Leerzeichen normalisieren und Formatierung optimieren.
- **Größenberechnung**: Der ursprüngliche Größe, der komprimierte Größe, der Kompressionsrate und das gesparte Volumen werden bereitgestellt.
- **Flexibler Eingang**: Akzeptiert Content-Daten, den gewählten Datentyp und die Flaggen für die Bereinigung von Beiträgen.

## Funktionale Parameter

Die Funktion `compressorAlgorithm` akzeptiert ein Objekt mit folgenden Eigenschaften:

- `contentData` (string): Der Inhalt, der komprimiert werden soll.
- `selectedDataType` (string): Der Datentyp zur Kompression ("CSS" oder "JS").
- `dataContributorsClear` (boolean): Ein Flag, das das Verhalten bei der Verarbeitung von Kommentaren bestimmt.

## Wie es funktioniert

1.  **Eingabeverarbeitung**: Der Inhalt und die Verarbeitungsparameter werden abgerufen.
2.  **Typbestimmung**: Es wird ermittelt, ob der Inhalt CSS oder JavaScript ist.
3.  **Kompressionlogik**:
    - Für CSS: Kommentare entfernen, Leerzeichen normalisieren, Formatierung optimieren.
    - Für JS: Kommentare entfernen, Leerzeichen normalisieren, Formatierung optimieren.
4.  **Größenberechnung**: Der ursprüngliche Größe, der komprimierte Größe, die Kompressionsrate und das gesparte Volumen werden berechnet.
5.  **Ausgabe**: Ein Objekt mit den Ergebnissen der Kompression wird zurückgegeben.

## Beispiel für die Verwendung

### JavaScript zur Verwendung

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

### Verwendung über HTML

```html
<script src="./bClass-toolkit-compressor.js"></script>
```

### Eingabedaten und Verarbeitung

```javascript
// * Eingabedaten abrufen
const dataInputValue = document.getElementById("data_input").value;

// * Überprüfung des Flags für die Bereinigung von Beiträgen
let dataContributorsClear = document.querySelector(
  'input[name="data_contributors_clear"]:checked',
);
dataContributorsClear = dataContributorsClear
  ? dataContributorsClear.checked
  : false;

// * Datentyp abrufen
let selectedDataType = document.querySelector(
  'input[name="data_type"]:checked',
);

selectedDataType = selectedDataType ? selectedDataType.value : null;
```

### Anzeige der Verarbeitungsergebnisse

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

## Komprimierungsergebnisse

Die Funktion gibt ein Objekt mit folgenden Informationen zurück:

- `original`: Der ursprüngliche Dateigröße in KB.
- `compressed`: Die komprimierte Dateigröße in KB.
- `rate`: Die Kompressionsrate in Prozent.
- `save`: Das gesparte Volumen in KB.
- `content`: Das komprimierte Inhalt.

## Beispiel-HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kompressor</title>
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
                >Beiträge bereinigen</span
              >
            </label>
          </div>

          <button
            id="btn_convert"
            class="btn w-100 mt-0.5 text-uppercase font-weight-700"
          >
            Konvertieren
          </button>

          <div class="mt-0.5">
            <ul class="ul-li-y text-left">
              <li>
                <span class="text-capitalize">Originales:</span>
                <span id="data_status_in">0.00</span> kb
              </li>
              <li>
                <span class="text-capitalize">Komprimiertes:</span>
                <span id="data_status_out_compressed">0.00</span> kb
              </li>
              <li>
                <span class="text-capitalize">Verhältnis:</span>
                <span id="data_status_out_rate">0.00</span> %
              </li>
              <li>
                <span class="text-capitalize">Gespart:</span>
                <span id="data_status_out_save">0.00</span> kb
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="content-1 content-list-col-2-tablet gap-1 p-1">
        <fieldset class="fieldset-m-2 dynamic:rounded-0.5 pr-1.5">
          <legend class="text-capitalize">Eingabe:</legend>
          <textarea
            id="data_input"
            class="p-0.5 bg-transparent content-1-text border-0 resize-none w-100"
            rows="20"
            placeholder="Eingabecode"
          ></textarea>
        </fieldset>
        <fieldset class="fieldset-m-2 dynamic:rounded-0.5 pr-1.5">
          <legend class="text-capitalize">Ausgabe:</legend>
          <textarea
            id="data_output"
            class="p-0.5 bg-transparent content-1-text border-0 resize-none w-100"
            rows="20"
            placeholder="Ausgabecode"
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
          // * Eingabedaten abrufen
          const dataInputValue = inputEl.value;

          // * Überprüfung des Flags für die Bereinigung von Beiträgen
          let dataContributorsClear = document.querySelector(
            'input[name="data_contributors_clear"]:checked',
          );
          dataContributorsClear = dataContributorsClear
            ? dataContributorsClear.checked
            : false;

          // * Der gewählte Datentyp abrufen
          let selectedDataType = document.querySelector(
            'input[name="data_type"]:checked',
          );
          selectedDataType = selectedDataType ? selectedDataType.value : null;

          // * Der Kompressionsalgorithmus ausführen.
          try {
            const result = await compressorAlgorithm({
              contentData: dataInputValue,
              selectedDataType: selectedDataType,
              dataContributorsClear: dataContributorsClear,
            });

            // * Die Ergebnisse auf dem Bildschirm anzeigen.
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
            console.error("Kompressionsfehler:", error);
          }
        });
      });
    </script>
  </body>
</html>
```

## Beispiel-Component

```vue
<script>
import compressorAlgorithm from "./bClass-compressor.js";

export default {
  name: "compressor",
  mounted() {
    // * Änderung des Datentyps
    $("input[name='data_type']").change(function () {
      $("#data_input").val("");
      $("#data_output").val("");
    });
  },
  methods: {
    async convertClick() {
      // * Eingabedaten abrufen
      const dataInputValue = document.getElementById("data_input").value;

      // * Überprüfung des Flags für die Bereinigung von Beiträgen
      let dataContributorsClear = document.querySelector(
        'input[name="data_contributors_clear"]:checked',
      );
      dataContributorsClear = dataContributorsClear
        ? dataContributorsClear.checked
        : false;

      // * Der gewählte Datentyp abrufen
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
              >Beiträge bereinigen</span
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
