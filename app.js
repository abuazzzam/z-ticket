const allBtn = document.getElementsByClassName("btns");

let count = 20;

for(const btn of allBtn){
    btn.addEventListener("click", function(e){
        count = count -1;
        // document.getElementById("seatAvailable").innerText =count;

//         const seatName = btn.innerHTML
// console.log(seatName);
        const seatPrice = document.getElementById("price").innerText;
        // console.log(seatPrice);

        const seatCalculator = document.getElementById("seatCalculation");

        const li = document.createElement("li");
        
        // const p = document.createElement("p");
        // p.innerText = seatName;
        const p = document.createElement("p");
        p.innerText = 'Economy';
        const p3 = document.createElement("p");
        p.innerText = seatPrice;

        // li.appendChild(p);
        li.appendChild(p);
        li.appendChild(p3);
        seatCalculator.appendChild(li);
           



        setInnerText ("seatAvailable", count);
        
        
    });
}

function setInnerText (id, value){
    document.getElementById(id).innerText = value;

}
