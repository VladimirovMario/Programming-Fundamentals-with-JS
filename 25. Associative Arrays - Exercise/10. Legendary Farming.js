function solve(input) { // This solution is not mine.
    let arr = input.split(' ');
    let materials = {};
    let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    let winner = '';
    for (let i = 0; i <= arr.length - 1; i += 2) {
        let quantity = Number(arr[i]);
        let material = arr[i + 1].toLowerCase();
        if (material === 'shards' || material === 'fragments' || material === 'motes') {
            keyMaterials[material] += quantity;
            if (keyMaterials[material] >= 250 && material === 'shards') {
                winner = 'Shadowmourne';
                keyMaterials[material] -= 250;
                break;
            } else if (keyMaterials[material] >= 250 && material === 'fragments') {
                winner = 'Valanyr';
                keyMaterials[material] -= 250;
                break;
            } else if (keyMaterials[material] >= 250 && material === 'motes') {
                winner = 'Dragonwrath';
                keyMaterials[material] -= 250;
                break;
            }
        } else {
            if (!materials.hasOwnProperty(material)) {
                materials[material] = 0;
            }
            materials[material] += quantity;
        }
    }
    console.log(`${winner} obtained!`);
 
    let sortedKeyMaterials = Object.entries(keyMaterials);
 
    sortedKeyMaterials.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
 
    let sortedMaterials = Object.entries(materials);
 
    sortedMaterials.sort((a, b) => a[0].localeCompare(b[0]));
 
    for (let [material, quantity] of sortedKeyMaterials) {
        console.log(`${material}: ${quantity}`);
    }
    for (let [material, quantity] of sortedMaterials) {
        console.log(`${material}: ${quantity}`);
    }
}
solve("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
console.log(`---`);
solve(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);
