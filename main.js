let i = 0;
/* count btn */
document.getElementById("btn").addEventListener("click",function(){
    i=i+1;
    document.getElementById("result").innerHTML = i;
})
/* rest btn */
document.getElementById("reset").addEventListener("click",function(){
    i = 0;
    document.getElementById("result").innerHTML = i;
})