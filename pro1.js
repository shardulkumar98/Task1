let myArray = [10, 15, 20, 25, 30];

newArr = (a) =>{
    return a.map(n => n*2);
}

console.log(newArr(myArray));