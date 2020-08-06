
function orders(){
let plarge=document.getElementById('plarge').value="pizza large";
let psmall=document.getElementById('psmall').value="pizzasmall";
let pmed=document.getElementById('pmed').value="pizzamedium";

let mushrooms=document.getElementById("mushrooms").value="Peperoni";
let mushrooms1=document.getElementById("mushrooms1").value="Sausage";
let mushrooms2=document.getElementById("mushrooms2").value="Onions";
let mushrooms3=document.getElementById("mushrooms3").value="Mushrooms";

// crusts
let cripsy=document.getElementById("cripsy").value="Cripsy";
let stuffed=document.getElementById("stuffed").value="Stuffed";
let thincrust=document.getElementById("thincrust").value="thincrust";
let glutten=document.getElementById("glutten").value="glutten";
// computation
    let c1=document.getElementById("c11");
    let c22=document.getElementById("c22");
    let c33=document.getElementById("c33");
    let c44=document.getElementById("c44");
    let c55=document.getElementById("c55");

    $("#plarge").click(function(){
        let price=1550;
        c1.innerHTML=plarge;
        c44.innerHTML=price;

        
    });
    $("#psmall").click(function(){
        c1.innerHTML=psmall;
        let price=775;
        c44.innerHTML=price;

        
    });
    $("#pmed").click(function(){
        c1.innerHTML=pmed;
        let price=1050;
        c44.innerHTML=price;


        
    });
    // toppings sample

    $("#mushrooms").click(function(){
        c22.innerHTML=mushrooms;
        
    });
    $("#mushrooms1").click(function(){
        c22.innerHTML=mushrooms1;
        
    });
    $("#mushrooms2").click(function(){
        c22.innerHTML=mushrooms2;
        
    });
    $("#mushrooms3").click(function(){
        c22.innerHTML=mushrooms3;
        
    });

    // crusts
    $("#cripsy").click(function(){
        c33.innerHTML=mushrooms;
        
    });
    $("#stuffed").click(function(){
        c33.innerHTML=mushrooms1;
        
    });
    $("#thincrust").click(function(){
        c33.innerHTML=mushrooms2;
        
    });
    $("#glutten").click(function(){
        c33.innerHTML=mushrooms3;
        
    });



}
// orders();
function ppalace(){
    let size=document.getElementById("c11");
    let topping=document.getElementById("c22");
    let crust=document.getElementById("c33");
    let price=document.getElementById("c44");
    let quantity=document.getElementById("c55").value;

    let size1=document.getElementById("c3");
    let topping1=document.getElementById("c4");
    let crust1=document.getElementById("c5");
    let price1=document.getElementById("c6");
    let quantity1=document.getElementById("c7");
    let total=document.getElementById("c8");

    $("#c66").click(function(){
        size1.innerHTML=size.innerText;
        topping1.innerHTML=topping.innerText;
        crust1.innerHTML=crust.innerText;
        price1.innerHTML=price.innerText;
        quantity1.innerHTML=quantity;
        let total_t=price1.innerHTML*quantity1.innerHTML;
        total.innerHTML=total_t;


    });



}


   
    

$(document).ready(function(){
    
    let size1=document.getElementById("c3");
    let topping1=document.getElementById("c4");
    let crust1=document.getElementById("c5");
    let price1=document.getElementById("c6");
    let quantity1=document.getElementById("c7");
    let total=document.getElementById("c8");
    $("#checkbox").change(function(){
        if($(this).prop('checked')){
            $("#sub").click(function(){
                let location=prompt("enter your delivery location");
               alert("Hello, Your"+size1.innerText+" Order for "+quantity1.innerText+"Pizzas, at Ksh"+price1.innerText+" Is being proccesed and will be dilivered to "+location);

               return;
                
            });
        }
    });
    $("#checkbox1").change(function(){
        if($(this).prop('checked')){
            $("#sub").click(function(){
                alert("Hello, Your "+size1.innerText+" Order for "+quantity1.innerText+"Pizzas at Ksh"+price1.innerText+" Is being proccesed");

                return;
                
            });
        }
    });
    
});

orders();
ppalace();