let i = 0;
/* count btn */
document.getElementById("btn").addEventListener("click",function(){
    i=i+1;
    console.log(i);
    document.getElementById("result").innerHTML = i;
})
/* rest btn */
document.getElementById("reset").addEventListener("click",function(){
    i = 0;
    console.log(i);
    document.getElementById("result").innerHTML = i;
})