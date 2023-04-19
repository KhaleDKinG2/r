let num=document.getElementById("num");
let btn =document.getElementById("btn");
let btn2 =document.getElementById("btn2");
let container =document.getElementById("container");

numm = 1;



btn.onclick = function(){
    numm++
    num.innerHTML = numm;
    if(numm ==10|numm ==100|numm ==1000){
        container.style.backgroundImage= "url(https://wordsfn.com/wp-content/uploads/2022/10/png_20221017_160436_0000.png-e1666015537547.webp)";
        container.style.backgroundSize = "cover";
        
    }else{container.style.backgroundImage="";
    container.style.backgroundSize = "auto";
}

    
}

btn2.onclick = function(){
    numm = 0;
    num.innerHTML = numm;
}
