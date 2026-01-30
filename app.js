let sets = document.querySelectorAll(".sets");

let Avalable_sets = document.querySelector(".Avalable_sets");
let reserve_sets = document.querySelector(".reserve_sets");
let pricingMain = document.querySelector(".pricing");
let toatal = document.querySelector(".toatal");
let price = 1000;
let mainPrice = 1000;
let regularPrice = 800;


for (let set of sets) {
    set.addEventListener("click", () => {
        set.classList.toggle("color");

        let asets = 0;
        sets.forEach(e => {
            if (!e.classList.contains("color")) {
                asets++;
            }
        });
        Avalable_sets.textContent = `Available sets: ${asets}`;


        
        let reserve = 0;
        let totalAmout = 0;
        sets.forEach(e => {
            if (e.classList.contains("color")) {
                reserve++;

                e.style.background = "rgba(192, 112, 112, 0.2)";
                e.style.transform =  "scale(1.1)";
                e.style.boxShadow = "1px 1px 8px 0px";
                if(e.classList.contains("main-set")){
                    totalAmout += mainPrice;
                }else{
                    totalAmout += regularPrice;
                }
              
            }
            
        });
        reserve_sets.textContent = `reserve sets: ${reserve}`;
        toatal.textContent = `Total amount : ${totalAmout}`;
    });




    


    set.addEventListener("mouseover", () => {
        
        
        
            if (set.classList.contains("main-set")) {
               
             pricingMain.textContent = `Pricing for main sets: ${price}`;

               
            }else{
                pricingMain.textContent = `Pricing for regular sets: ${price - 200}`;
            }
     });
}






