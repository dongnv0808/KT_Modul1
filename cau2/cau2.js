let arr = [];
let index = [];
function nhapMang(){
    for(let i = 1; i < 10; i++){
        arr.push(i);
    }
    document.getElementById("mang").innerHTML = `arr[${arr}]`;
}
nhapMang();
function timViTri(a, b){
    for(let i = 0; i < arr.length; i++){
        if(a == arr[i]){
            index.push(i);
        }
        if(b == arr[i]){
            index.push(i);
        }
    }
    document.getElementById("viTri").innerHTML = `a = 2; b = 6 nằm trong vị trí [${index}]`
}
timViTri(2, 6);