/***
 * * Bclass toolkit compressor v1.0.0
 * * Copyright 2023 ("https://github.com/EW-EndWall/bClass-compressor/blob/main/LICENSE")
 * * Licensed ("Bik Public License 2.0")
 * * License Update ("03/28/2024")
 */
const compressorAlgorithm = ({
  contentData = "",
  selectedDataType = "",
  dataContributorsClear = "",
}) => {
  let content = contentData;
  let originalSize = 0;
  let compressedSize = 0;
  let compressionRate = 0;
  let contentMin = "";

  if (selectedDataType == "CSS") {
    let cssContent = "";
    let cssContentMin = "";

    originalSize = content.length;

    // * css raw
    cssContent += content.trim() + "\n";

    // * css min
    if (dataContributorsClear) {
      ///-------------------------------------------
      // * Remove CSS comments
      content = content.replace(/\/\*.*?\*\//gs, "");
    } else {
      // * Remove CSS comments except the ones starting with "/* *"
      // content = content.replace(/\/\*(?!\s*\*)(.|\n)*?\*\//gs, "");
      // * Remove CSS comments except the ones starting with "/***"
      content = content.replace(/\/\*(?!\s*\*\*)(.|\n)*?\*\//gs, "");
    }

    // * Replace multiple whitespaces with a single space
    content = content.replace(/\s+/g, " ");

    // * Remove unnecessary whitespaces
    content = content.replace(/: |, |; | \{| \{|\} /g, (match) => {
      return match.trim();
    });

    content = content.replace(/([^\/])\/\*/g, "$1\n/*");
    content = content.replace(/\*\//g, "*/\n");
    // content = content.replace(/([^\/])\*\s*\*\s*/g, "$1\n * * "); // **
    content = content.replace(/([^\/])\*\s\*\s(?!\*)/g, "$1\n * * "); // ***

    cssContentMin += content.trim() + "\n";

    compressedSize = cssContentMin.length;

    contentMin = cssContentMin;
  } else if (selectedDataType == "JS") {
    let jsContent = "";
    let jsContentMin = "";

    originalSize = content.length;

    // * js raw
    jsContent += content.trim() + "\n";

    // * js min
    if (dataContributorsClear) {
      // * Remove JS comments
      content = content.replace(/(\/\*(.|[\r\n])*?\*\/|\/\/.*)/g, "");
    } else {
      // * Remove JavaScript comments except the ones starting with "/* *"
      // content = content.replace(
      //   /\/\*(?!\s*\*)(.|\n)*?\*\/|\/\/(?!.*?\/\* *).*$/gm,
      //   ""
      // );
      content = content.replace(
        /\/\*(?!\s*\*\*)(.|\n)*?\*\/|\/\/(?!.*?\/\* *).*$/gm,
        ""
      );
    }

    // * Replace horizontal whitespaces with a single space
    content = content.replace(/\s+/g, " ");

    // * Remove vertical whitespaces
    content = content.replace(/\n/g, "");

    // * Remove extra spaces around specific characters
    // content = content.replace(/(\s*([{}:;,()=<>+\-*\/])\s*)/g, "$2");
    // content = content.replace(
    //   /\/\*\s*\*\s*([\s\S]*?)\s*\*\s*\*\//g, // *
    //   (match, innerContent) => {
    //     return (
    //       "/* * " +
    //       innerContent.replace(/(\s*([{}:;,()=<>+\-*\/])\s*)/g, "$2") +
    //       " */"
    //     );
    //   }
    // );
    content = content.replace(
      // ***
      /\*\*\*.*?\*\/|\s*([{}:;,()=<>+\-*\/])\s*/gs,
      (match, p1) => {
        return p1 ? p1 : match;
      }
    );

    // * Remove spaces around quotes
    content = content.replace(/\s*(['"])\s*/g, "$1");

    content = content.replace(/([^\/])\/\*/g, "$1\n/*");
    content = content.replace(/\*\//g, "*/\n");
    // content = content.replace(/([^\/])\*\s*\*\s*/g, "$1\n * * "); // **
    content = content.replace(/([^\/])\*\s\*\s(?!\*)/g, "$1\n * * "); // ***

    jsContentMin += content.trim() + "\n";

    compressedSize = jsContentMin.length;

    contentMin = jsContentMin;
  }

  originalSize /= 1024; // * kb
  compressedSize /= 1024; // * kb
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
};

export default compressorAlgorithm;
