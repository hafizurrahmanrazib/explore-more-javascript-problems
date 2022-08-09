/*

Project Requirements:

Fixed: Per item wood requirements

1. chair --> 3 cft
2. tale --> 5 cft
3. bed --> 50 cft

Vary:quantity

*/
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 5;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(5, 2, 2);
console.log(totalWood);