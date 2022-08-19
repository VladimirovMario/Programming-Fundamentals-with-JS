function towns(array) {
  for (let currTown of array) {    
    
    //Destructuring assignment
    let [town,latitude,longitude] = currTown.split(` | `);

    let townInfo = {
      town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };
    console.log(townInfo);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
