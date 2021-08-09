/* for(let i =1; i<=50 ; i++){
    if(i % 3 ==0 && i%5 == 0){
        console.log('foobar');
    }
    else if(i % 3 ==0){
        console.log('foo');
    }
    else if(i%5 == 0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
} */


function getSomething(number){
    let numberArray = [];
    for(let i =1; i<=number ; i++){
        if(i % 3 ==0 && i%5 == 0){
            numberArray.push('foobar');
        }
        else if(i % 3 ==0){
            numberArray.push('foo');
        }
        else if(i%5 == 0){
            numberArray.push('bar');
        }
        else{
            numberArray.push(i);
        }
    }
    return numberArray;
}
const numberOfResult = getSomething(50);
console.log(numberOfResult);
