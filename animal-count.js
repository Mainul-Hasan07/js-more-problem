function animalCount(miles){
    const animalDensityFirst10Miles = 10;
    const animalDensitysecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if(miles <= 10){
        const count = miles * 10;
        return count;
    }
    else if (miles<=20){
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animalDensitysecond10Miles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else{
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const secondDenseAnimals = 10 * animalDensitysecond10Miles;
        const restMiles = miles - 20;
        const thirdDenseAnimals = restMiles * animalDensityRestMiles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + thirdDenseAnimals;
        return totalAnimals;
    }
}

const animals = animalCount(35);
// console.log(animals);

var student = {
    name:'yo mama', age: 17
}
delete student.age;
console.log(student);
