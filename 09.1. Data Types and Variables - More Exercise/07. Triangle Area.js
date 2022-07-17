//https://en.wikipedia.org/wiki/Heron%27s_formula
function triangleArea(a, b, c) {

    const semiPerimeter = (a + b + c) / 2
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
    console.log(area);
}

triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);