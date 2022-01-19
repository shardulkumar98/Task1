
newFun = (a,b)=>{
    for(i=0;i<=a.length;i++){
        if(a[i] == b){
            return console.log(i);   
        }  
    }
    return console.log(-1);
}

console.log(newFun([14,25,24,15,75,77], 43));