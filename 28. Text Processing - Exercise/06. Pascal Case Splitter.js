function pascalCaseSplitter(sentence) {
  let firstChar = sentence[0];
  let result = [];
  result.push(firstChar);

  for (let i = 1; i < sentence.length; i++) {
    const element = sentence[i];
    if (element == element.toLowerCase()) {
      result.push(element);
    } else {
      result.push(`, `, element);
    }
  }

  console.log(result.join(``));
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
pascalCaseSplitter("HoldTheDoor");
pascalCaseSplitter("ThisIsSoAnnoyingToDo");
