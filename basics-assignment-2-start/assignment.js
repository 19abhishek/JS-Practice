const task3Element = document.getElementById('task-3');
const task4Element = document.getElementById('task-4');
let s1 = "hello";
let s2 = "kaise";
let s3 = "ho";

function f1(){
    alert("Hello");
}

function f2(name){
    alert(name);
}

function f4(){
    console.log("Hola");
}

//f1();
//f2();
const x = "jdnb";
task3Element.addEventListener('click', f1);

task4Element.addEventListener('click',f4);
task4Element.addEventListener('click', f2(x));

function f3(x, y, z){
    return x+y+z;
}

const ans = f3(s1, s2, s3);
console.log(typeof(ans));
alert(ans);