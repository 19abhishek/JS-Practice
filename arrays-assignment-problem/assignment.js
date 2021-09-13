//Task 4 && Task 3
const set = new Set();
const arr = [];

for(let i=0;i<10;i++){
    const crr = (Math.random()*50)+1;
    if(!set.has(crr)){
        arr.push(crr);
    }else{
        i--;
    }
}

const minMax = (arr) => {
    
}



function minMax(arr){
    arr.sort();
    
    return ans;
}