function sortNumbers(a, b, c) { 

    const points = [a,b,c];
    points.sort(function(a, b){return b-a});
    console.log(points.join(`\n`));
}
sortNumbers(2, 1, 3)
sortNumbers(-2, 1, 3)
sortNumbers(0, 0, 2)


