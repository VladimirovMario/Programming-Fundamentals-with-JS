function maxSequenceOfEqualElements(arr) {

    const length = arr.length;
    let finalArray = [];

    for (let index = 0; index < length; index++) {

        let newArr = [];

        for (let i = index; i < length; i++) {
            if (arr[index] === arr[i]) {
                newArr.push(arr[i]);
            } else {
                break;
            }
            if(newArr.length > finalArray.length){
                finalArray= newArr;
            }
        }

    }
    console.log(finalArray.join(` `));

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqualElements([ 1, 1, 1 , 2, 3, 1, 3, 3])
maxSequenceOfEqualElements([0, 1, 1 , 5, 2, 2, 6, 3, 3])