/* 
dhairWood = 3cft/chair
tableWood = 10dft/table
bedWood = 50cft/bed
*/



function woodCalculator (chairQuantity,tabelQuantity,bedQuantity){
    const perchairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    //wood calculation
    const chairWoodQuantity = chairQuantity * perchairWood;
    const tableWoodQuantity = tabelQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    //adding all wood
    const totalWood = chairWoodQuantity + tableWoodQuantity +bedWoodQuantity;
    return totalWood;
}

const furnitureWood = woodCalculator(10,4,3);
console.log(furnitureWood,' cubicft');