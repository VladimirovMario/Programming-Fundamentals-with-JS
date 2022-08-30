function extractFile(str) {
  let path = str.split("\\");

  for (const iterator of path) {
    if (iterator.includes(`.`)) {
      let searchedExtension = iterator.lastIndexOf(`.`);
      let fileName = iterator.substring(iterator, searchedExtension);
      let extension = iterator.substring(searchedExtension + 1);
      console.log(`File name: ${fileName}`);
      console.log(`File extension: ${extension}`);
    }
  }
}
extractFile("C:\\Internal\\training-internal\\Template.bak.pptx");
console.log(`---`);
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
