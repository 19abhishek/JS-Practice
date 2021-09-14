//Task 4 && Task 3
const set = new Set();
const arr = [];

for(let i=0;i<10;i++){
    const crr = parseInt((Math.random()*50)+1);
    if(!set.has(crr)){
        arr.push(crr);
    }else{
        i--;
    }
}

console.log(arr);

const minMax = (a) => {
    a.sort((x,y) => {
        if(x>y){
            return 1;
        }else if(x==y){
            return 0;
        }else{
            return -1;
        }
    });
    //a.reverse();
    return [min, max] = [a[0], a[a.length-1]];
    //return ans;
}



const ans = minMax(arr);
console.log(ans);