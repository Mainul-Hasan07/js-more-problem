const names = ['abul','babul','cabul','dabul','ebul','fabul','babul','ebul','babul','gabul','abul','habul','dabul'];

function removeDuplicate(names){
    const unique = [];
    /* for(let i = 0; i < names.length; i++){
        const element = names[i];
        console.log(element);
    }*/ 
    for (const element of names){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);



// Remove duplicate numbers
const numbers = [12,13,14,21,32,12,43,23,23,54,32,27,43,36,57,12,23,32,43];
function removeDuplicateNum(numbers){
    const uniqueNUm = [];
    const duplicate = [];
    for(const number of numbers){
        if(uniqueNUm.indexOf(number) == -1){
            uniqueNUm.push(number);
        }
        duplicate.push(number)
    }
    console.log('Duplicate : ',duplicate);
    return uniqueNUm;
}
const uniqueNumbers = removeDuplicateNum(numbers);
console.log('Pick this number : ', uniqueNumbers);