/*
 * * Bclass toolkit compressor v1.0.0
 * * Copyright 2023 ("https://github.com/EW-EndWall/bClass-compressor/blob/main/LICENSE")
 * * Licensed ("Bik Public License 2.0")
 * * License Update ("03/28/2024")
 */
export default function compressorAlgorithm(
  getcontent = "",
  selectedDataType = "",
  dataContributorsClear = ""
) {
  let data_type = selectedDataType;
  let data_contributors_clear = dataContributorsClear;
  let content = getcontent;
  let originalSize = 0;
  let compressedSize = 0;
  let compressionRate = 0;
  let contentMin = "";

  if (data_type == "CSS") {
    let cssContent = "";
    let cssContentMin = "";

    originalSize = content.length;

    // * css raw
    cssContent += content.trim() + "\n";

    // * css min
    if (data_contributors_clear) {
      ///-------------------------------------------
      // * Remove CSS comments
      content = content.replace(/\/\*.*?\*\//gs, "");
    } else {
      // * Remove CSS comments except the ones starting with "/* *"
      content = content.replace(/\/\*(?!\s*\*)(.|\n)*?\*\//gs, ""); //! bunu php de de yap
    }

    // * Replace multiple whitespaces with a single space
    content = content.replace(/\s+/g, " ");

    // * Remove unnecessary whitespaces
    content = content.replace(/: |, |; | \{| \{|\} /g, function (match) {
      return match.trim();
    });

    content = content.replace(/([^\/])\/\*/g, "$1\n/*"); //! -------------------------------------- yorumsatır atlama
    content = content.replace(/\*\//g, "*/\n"); //! -------------------------------------- satır atlama
    content = content.replace(/([^\/])\*\s*\*\s*/g, "$1\n * * "); //! ---------------------------- lisans satır atlama

    cssContentMin += content.trim() + "\n";

    compressedSize = cssContentMin.length;

    contentMin = cssContentMin;
  } else if (data_type == "JS") {
    let jsContent = "";
    let jsContentMin = "";

    originalSize = content.length;

    // * js raw
    jsContent += content.trim() + "\n";

    // * js min
    if (data_contributors_clear) {
      ///-------------------------------------------
      // * Remove JS comments
      content = content.replace(/(\/\*(.|[\r\n])*?\*\/|\/\/.*)/g, "");
    } else {
      // * Remove JavaScript comments except the ones starting with "/* *"
      content = content.replace(
        /\/\*(?!\s*\*)(.|\n)*?\*\/|\/\/(?!.*?\/\* *).*$/gm,
        ""
      ); //---------------------------------------------------- php ekle
    }

    // * Replace horizontal whitespaces with a single space
    content = content.replace(/\s+/g, " ");

    // * Remove vertical whitespaces
    content = content.replace(/\n/g, "");

    // * Remove extra spaces around specific characters
    // content = content.replace(/(\s*([{}:;,()=<>+\-*\/])\s*)/g, "$2");
    content = content.replace(
      /\/\*\s*\*\s*([\s\S]*?)\s*\*\s*\*\//g,
      (match, innerContent) => {
        return (
          "/* * " +
          innerContent.replace(/(\s*([{}:;,()=<>+\-*\/])\s*)/g, "$2") +
          " */"
        );
      }
    );

    // * Remove spaces around quotes
    content = content.replace(/\s*(['"])\s*/g, "$1");

    content = content.replace(/([^\/])\/\*/g, "$1\n/*"); //! -------------------------------------- yorum satır atlama
    content = content.replace(/\*\//g, "*/\n"); //! -------------------------------------- satır atlama
    content = content.replace(/([^\/])\*\s*\*\s*/g, "$1\n * * "); //! ---------------------------- lisans satır atlama

    jsContentMin += content.trim() + "\n";

    compressedSize = jsContentMin.length;

    contentMin = jsContentMin;
  }

  originalSize /= 1024; // kb
  compressedSize /= 1024; // kb
  compressionRate = ((originalSize - compressedSize) / originalSize) * 100;
  let spaceSaved = originalSize - compressedSize;
  if (compressionRate < 0) (compressionRate = 0.0), (spaceSaved = 0.0);

  return {
    original: originalSize.toFixed(2),
    compressed: compressedSize.toFixed(2),
    rate: compressionRate.toFixed(2),
    save: spaceSaved.toFixed(2),
    content: contentMin,
  };
}
